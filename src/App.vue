<template>
  <Work v-if="state.displayWorkspace" />
  <router-view v-else />
  <!-- <router-view/> -->

</template>

<script>
import Work from "@/components/home/Work.vue";
import store from "./store";
import firebaseApp from "./firebase";
import { DeviceUUID } from "device-uuid";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// import { onBackgroundMessage } from "firebase/messaging/sw";
import router from "./router";
import { onMounted, ref } from "@vue/runtime-core";

export default {
  components: {
    Work,
  },
  setup() {
    store.apiCallMethods.get("../infos-establishment").then((res) => {
      console.log(res.data);
      store.state.establishment = res.data;
    });

    const state = ref({
      displayWorkspace: store.state.workspace.display,
    });

    onMounted(() => {
      // state.value.displayWorkspace = store.state.workspace.display;

      //connect to firebase
      const app = firebaseApp();
      // set FCM Token
      const messaging = getMessaging(app);
      // Session Login (avoid logout on refresh)
      const { token, user } = store.authMethods.getSessionCredentials();
      if (token) {
        store.authMethods.setRequestHeaders(token);
        store.state.user = user;
        store.state.isAuth = true;
        router.push("home");
        console.log(user);
        // store.groupMethods.getGroups();
        const formDataEvents = (groups) => {
          const colors = ["red", "blue", "green", "yellow"];
          groups.forEach((item, i) => {
            const roleName = item.roleName;
            const group = item.group;
            // item.group.days.forEach((day) => {
            //   events.push({
            //     title: group.teachingUnit.code,
            //     date: day.date,
            //   });
            // });
            // console.log(group);
            const program = group.programs[0];
            const days = program.days;
            const color = colors[i];
            days.forEach((day) => {
              // console.log(day),
              store.state.events.push({
                daysOfWeek: [day.dayIndex],
                startTime: day.endTime,
                endTime: day.time,
                startRecur: program.startDate,
                endRecur: program.endDate,
                groupId: group.teachingUnit.code,
                title: group.teachingUnit.code,
                color,
              });
            });
          });
        };
        store.apiCallMethods.get("auth/group").then((res) => {
          console.log(res);
          formDataEvents(res.data);
        });
      } else {
        // set Device Id
        const uuid = new DeviceUUID().get();
        store.methods.storeDeviceId(uuid);
        // console.log('device id', uid)

        //set Device plateform
        const device = new DeviceUUID().parse();
        const plateform =
          device.os + "/" + device.browser + "-" + device.version;
        store.methods.storeDevicePlatform(plateform);
        console.log("plateform", plateform);

        getToken(messaging, {
          vapidKey:
            "BGDpm6AQIMwGRnEIMQn8sRxHb4TJdsexMwDOJI3bpweaVzRdEDqo08GhmF93riWNw4nwPmzSWLMUSY-JYD2h_us",
        })
          .then((token) => {
            if (token) {
              console.log("device token", token);
              // Send the token to your server and update the UI if necessary
              store.methods.storeDeviceToken(token);
              // console.log('Device token', token)

              // ...
            } else {
              // Show permission request UI
              console.log(
                "No registration token available. Request permission to generate one."
              );
              // ...
            }
          })
          .catch((err) => {
            console.log("An error occurred while retrieving token. ", err);
            // ...
          });
      }

      onMessage((payload) => {
        console.log("Message received. ", payload);
        // ...
      });
    });
    //  provide('store', store)
    //  provide('firebaseApp', firebaseApp)

    // onBackgroundMessage(messaging, (payload) => {
    //   console.log(
    //     "[firebase-messaging-sw.js] Received background message ",
    //     payload
    //   );
    //   // Customize notification here
    //   const notificationTitle = "Background Message Title";
    //   const notificationOptions = {
    //     body: "Background Message body.",
    //     icon: "/firebase-logo.png",
    //   };

    //   self.registration.showNotification(
    //     notificationTitle,
    //     notificationOptions
    //   );
    // });

    return {
      state,
    };
  },
};
</script>
