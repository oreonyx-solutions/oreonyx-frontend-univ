<template>
  <router-view />
</template>

<script>
import store from "./store";
import firebaseApp from "./firebase";
import { DeviceUUID } from "device-uuid";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// import { onBackgroundMessage } from "firebase/messaging/sw";
import router from "./router";

export default {
  setup() {
       store.apiCallMethods.get("../infos-establishment").then(res => {
      console.log(res.data);
      store.state.establishment = res.data;
    });
    //  provide('store', store)
    //  provide('firebaseApp', firebaseApp)

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
    } else {
      // set Device Id
      const uuid = new DeviceUUID().get();
      store.methods.storeDeviceId(uuid);
      // console.log('device id', uid)

      //set Device plateform
      const device = new DeviceUUID().parse();
      const plateform = device.os + "/" + device.browser + "-" + device.version;
      store.methods.storeDevicePlatform(plateform);
      console.log('plateform', plateform)

      getToken(messaging, {
        vapidKey:
          "BKYbxVB9SnRf52SztTRbRFunn2NARAwKQTjoMsQI7UzKiqS52Hc430PuJFgZpLx0QcAdWwgk6o0sLJALOZGwr-I",
      })
        .then((token) => {
          if (token) {
            console.log('device token', token)
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
    }
};
</script>
