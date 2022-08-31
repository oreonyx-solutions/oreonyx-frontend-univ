<template>
  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
    <img class="w-full absolute -top-96 transform rotate-90"
      src="../../../public/assets/illustrations/background.6c3571e062.jpg" alt="cover_picture">
    <div class="absolute top-16 z-10 max-w-md w-full space-y-8 relative">
      <form @submit.prevent="submitForm" class="p-8 pt-0 mt-8" action="#" method="POST">
        <Transition>
          <div v-if="showBasicInformations">
            <input type="hidden" name="remember" value="true" />
            <div class="inline-flex">
              <img class="h-16" :src="'public/assets/logo.png'" alt="Oreonyx">
              <div class="mt-6 inline-flex">
                <span class="ml-3 text-gray-400">X</span>
                <h6 class="text-center text-sm ml-3 text-gray-400 mt-0.5">{{ state.establishment.acronym }}</h6>
              </div>
            </div>
            <div style="font-family: 'JetBrains Mono', monospace"
              class="text-yellow-600 my-6 bg-yellow-50 rounded-md p-3 border border-yellow-500">
              <div class="flex">
                <span class="material-symbols-outlined mr-2 -mt-1">
                  batch_prediction
                </span>
                <h6 class="font-bold">Important</h6>
              </div>
              <hr class="my-2 border-t-yellow-500">
              <h6 class="text-sm leading-tight ">Ce formulaire d'inscription est uniquement réservé <strong>aux
                  étudiants</strong> de <strong>{{ state.establishment.name }}</strong>, <strong>Les membres de
                  l'administration et leur collaborateurs</strong>, sont prier de contacter ladite administration afin
                obtenir leur accès.</h6>
            </div>
            <h1 class="my-6 font-black text-4xl text-gray-800">Créer un compte</h1>
            <div>
              <div class="mt-2 relative rounded-md shadow-sm">
                <input type="text" name="lastName" id="lastName" v-model="formData.lastName"
                  class="border border-gray-300 block w-full py-2 pl-4 pr-3 sm:text-md rounded-md"
                  placeholder="Votre nom" autofocus>
              </div>
            </div>
            <div class="w-full flex space-x-1">
              <div class="w-4/6">
                <div class="mt-2 relative rounded-md shadow-sm">
                  <input type="text" name="firstName" id="firstName" v-model="formData.firstName"
                    class="border border-gray-300 block w-full py-2 pl-4 pr-3 sm:text-md rounded-md"
                    placeholder="Vos prénoms">
                </div>
              </div>
              <div class="3/6">
                <div class="mt-2 relative rounded-md shadow-sm">
                  <input type="date" name="birthDate" id="birthDate" v-model="formData.birthDate"
                    class="border border-gray-300 block w-full py-2 pl-4 pr-3 sm:text-md rounded-md">
                </div>
              </div>
            </div>
            <div>
              <div class="mt-2 relative rounded-md shadow-sm">
                <input type="text" name="email" id="email" v-model="formData.email"
                  class="border border-gray-300 block w-full py-2 pl-4 pr-3 sm:text-md rounded-md"
                  placeholder="Votre e-mail" autofocus>
              </div>
            </div>
            <div class="w-full flex space-x-1">
              <div class="w-3/6">
                <div class="mt-2 relative rounded-md shadow-sm">
                  <input type="tel" name="phoneNumber" id="phoneNumber" v-model="formData.phoneNumber"
                    class="border border-gray-300 block w-full py-2 pl-4 pr-3 sm:text-md rounded-md"
                    placeholder="Votre numero">
                </div>
              </div>
              <div class="w-3/6">
                <div class="mt-2 relative rounded-md shadow-sm">
                  <input type="password" name="password" id="password" v-model="formData.password"
                    class="border border-gray-300 block w-full py-2 pl-4 pr-3 sm:text-md rounded-md "
                    placeholder="Mot de passe">
                </div>
              </div>
            </div>
            <div class="mt-5">
              <button type="submit"
                class="cursor-pointer group relative w-full flex justify-center py-2 px-4 border border-transparent text-md font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Je m'inscris
                <span class="text-base ml-2 material-symbols-outlined">
                  arrow_circle_right
                </span>
              </button>
            </div>
            <div class="mt-6 group relative w-full">
              <div class="">
                <a title="Envoyé un mail"
                  class="font-medium text-md text-indigo-600 hover:text-indigo-500 hover:underline"
                  :href="`mailto:${ state.establishment.email }`">Envoyé un mail à l'administration
                  ({{ state.establishment.acronym }})</a>
              </div>
              <router-link title="Formulaire de connexion" :to="{ name: 'login' }">
                <h6 class="text-md hover:underline">J'ai déja un compte</h6>
              </router-link>
            </div>
          </div>
        </Transition>
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
  } from 'vue'
  import router from '../router'
  import store from '../store'

  export default {
    name: 'Register',
    setup() {

      const showBasicInformations = ref(true)
  
      const state = ref({
        establishment: {
          acronym: 'chargement...'
        },
        faculties: []
      })
      onMounted(() => {
        window.setTimeout(() => state.value.establishment = store.state.establishment, 1000)
      })


      // const store = inject('store')
      //faculties: [{ "id": 1}],
      const formData = reactive({
        lastName: "",
        firstName: "",
        email: "",
        password: "",
        phoneNumber: "",
        birthDate: ""
      })

      const submitForm = () => {
        store.apiCallMethods.post('auth/register', formData).then(
          (res) => {
            if (res) {
              store.state.user = formData
              showBasicInformations.value = false
              router.push({
                  name: 'verify-account',
                  query: {
                    redirect: '/verify-account'
                  }
              })
            }
          })
      }

      const getFaculties = () => {
        store.apiCallMethods.get('faculty').then(
          (res) => {
            if (res) {
              state.value.faculties = res.data
            }
          })
      }

      return {
        ...toRefs(formData),
        showBasicInformations,
        formData,
        submitForm,
        store,
        state,
      }
    },

  }
</script>

<style>

</style>