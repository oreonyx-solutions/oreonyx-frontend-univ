<template>
  <div class="
      min-h-full
      flex
      items-center
      justify-center
      py-12
      px-4
      sm:px-6
      lg:px-8
    ">
    <div class="max-w-md w-full space-y-8">
      <form @submit.prevent="submitForm" class="bg-white p-8 pt-0 mt-8" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="inline-flex">
          <img class="h-16" :src="'public/assets/logo.png'" alt="Oreonyx" />
          <div class="mt-6 inline-flex">
            <span class="ml-3 text-gray-400">X</span>
            <h6 class="text-center text-sm ml-3 text-gray-400 mt-0.5">
              {{ state.establishment.acronym }}
            </h6>
          </div>
        </div>
        <h1 class="my-6 font-black text-4xl text-gray-800">Se connecter</h1>
        <div>
          <div class="mt-2 relative rounded-md shadow-sm">
            <input type="text" name="email" id="email" v-model="email" class="
                border border-gray-300
                block
                w-full
                py-2
                pl-4
                pr-3
                sm:text-md
                rounded-md
                @error('email')
                ring-red-500
                @enderror
              " placeholder="Email" autofocus />
          </div>
        </div>
        <div>
          <div class="mt-2 relative rounded-md shadow-sm">
            <input type="password" name="password" id="password" v-model="password" class="
                border border-gray-300
                block
                w-full
                py-2
                pl-4
                pr-3
                sm:text-md
                rounded-md
                @error('email')
                ring-red-500
                @enderror
              " placeholder="● ● ● ● ● ● ● ●" />
          </div>
        </div>
        <div class="mt-5">
          <button type="submit" class="
              group
              relative
              w-full
              flex
              justify-center
              py-2
              px-4
              border border-transparent
              text-md
              font-medium
              rounded-md
              text-white
              bg-indigo-600
              hover:bg-indigo-700
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-indigo-500
            ">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <span class="
                  text-indigo-500
                  group-hover:text-indigo-400
                  material-symbols-outlined
                ">
                lock
              </span>
            </span>
            Se connecter avec un e-mail
          </button>
        </div>
        <div class="mt-5 group relative w-full">
          <div class="">
            <a href="#"></a>
          </div>
          <router-link :to="{ name: 'reset-password' }">
            <h6 class="
                font-medium
                text-md text-indigo-600
                hover:text-indigo-500 hover:underline
              ">
              Mot de passe oublié?
            </h6>
          </router-link>
          <router-link :to="{ name: 'register' }">
            <h6 class="text-md hover:underline">Je n'ai pas de compte</h6>
          </router-link>
        </div>
      </form>

    </div>
  </div>
</template>
<style scoped>
  /* transition styles */
  .v-enter-active,
  .v-leave-active {
    transition: transform 1s ease, opacity 1s ease;
  }

  .v-enter-from,
  .v-leave-to {
    transform: translateX(-100px);
    opacity: 0;
  }
</style>
<script>
  import {
    ref,
    reactive,
    toRefs,
    inject,
    onMounted
  } from "vue";
  import router from "../router";
  import store from "../store";

  export default {
    name: "Login",
    setup() {
      const state = ref({
        establishment: {
          acronym: "loading...",
        },
      });

      onMounted(() => {
        window.setTimeout(
          () => (state.value.establishment = store.state.establishment),
          1000
        );
      });

      // const store = inject('store')

      const formData = reactive({
        email: "",
        password: "",
        device: null,
      });

      const submitForm = () => {

        const device = store.state.device;
        formData.device = device;

        store.apiCallMethods.post("auth/login", formData).then((res) => {
          if (res) {
            const user = res.data;

            store.methods.storeUser(user);

            // set request header token temporally
            store.authMethods.setRequestHeaders(res.token);
            store.authMethods.saveSessionCredentials({
              token: res.token,
              user: store.state.user,
            });

            store.state.isAuth = true;
            console.log(store.state.user.roleName);

            //resquest from api to get schoolYear
            getSchoolYear()
          };
        });
      }

      const getSchoolYear = () => {
        store.apiCallMethods.get("school-year").then((res) => {
          if (store.state.user.roleName === "admin") {
            if (!res) {
              return router.push({
                name: "schoolYear",
              });
            }

            return router.push({
              name: "home",
            });
          }

          const activeSub = store.state.user.subscriptions.find(sub => sub.active)
          console.log(activeSub);

          if (!activeSub) {
            //verify is student is verified
            if (store.state.user.verifiedAt) {
              //verify if student got speciality
              return verifyStudentSpecialities()
            }

            showBasicInformations.value = false

            setTimeout(() => {
              router.push({
                name: 'verify-account',
              })
            }, 1200)

            return
          }

          router.push({
            name: 'home',
          })
        });
      }

      const verifyStudentSpecialities = () => {
        if (!store.state.user.specialities.length === 0) {
          return verifyStudentOffer()
        }

        setTimeout(() => {
          router.push({
            name: 'choose-specialities',
          })
        }, 1200)

        return
      }

      const verifyStudentOffer = () => {
        if (!store.state.user.groups.length === 0) {
          return showBasicInformations.value = false;
        }

        setTimeout(() => {
          router.push({
            name: 'choose-offer',
          })
        }, 1200)

        return
      }

      return {
        ...toRefs(formData),
        submitForm,
        verifyStudentSpecialities,
        verifyStudentOffer,
        store,
        state,
      };
    }
  };
</script>

<style>
</style>