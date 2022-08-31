<template>
  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
    <img  class="w-full absolute -top-96 transform rotate-90"
  src="../../../public/assets/illustrations/background.6c3571e062.jpg" alt="cover_picture">
    <div class="max-w-md w-full space-y-8 absolute top-16">
      <form @submit.prevent="submitForm" class="p-8 pt-0 mt-8" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="inline-flex">
          <img class="h-16" :src="'public/assets/logo.png'" alt="Oreonyx">
          <div class="mt-6 inline-flex">
            <span class="ml-3 text-gray-400">X</span>
            <h6 class="text-center text-sm ml-3 text-gray-400 mt-0.5">{{  state.establishment.acronym }}</h6>
          </div>
        </div>
        <h1 class="my-6 font-black text-4xl text-gray-800">Réenitialisation</h1>
        <div>
          <div class="mt-2 relative rounded-md shadow-sm">
            <input type="text" name="email" id="email" v-model="email"
              class="border border-gray-300 block w-full py-2 pl-4 pr-3 sm:text-md rounded-md @error('email') ring-red-500 @enderror"
              placeholder="Email" autofocus>
          </div>
        </div>
        <div class="mt-5">
          <button type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-md font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <span class=" text-indigo-500 group-hover:text-indigo-400 material-symbols-outlined">
                airplane_ticket
              </span>
            </span>
            Envoyer le mail de Réenitialisation
          </button>
        </div>
        <div class="mt-5 group relative w-full">
               <router-link :to="{ name: 'login' }">
                      <h6 class="text-md hover:underline">Je me rappelle du mot de passe</h6>
                  </router-link>
        </div>
      </form>
    </div>
  </div>
</template>


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
    name: 'Réenitialisation',
    setup() {

      const state = ref({
        establishment: {
          acronym: 'chargement...'
        }
      })
      onMounted(() => {
        window.setTimeout(() => state.value.establishment = store.state.establishment, 1000)
      })

      // const store = inject('store')

      const formData = reactive({
        email: '',
        device:null
      })

      const submitForm = () => {
        
      }

      return {
        ...toRefs(formData),
        submitForm,
        store,
        state
      }
    },

  }
</script>

<style>

</style>