<template>
  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <form @submit.prevent="submitForm" class="bg-white  p-8 pt-0 mt-8" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="inline-flex">
          <img class="h-16" :src="'public/assets/logo.png'" alt="Oreonyx">
          <div class="mt-6 inline-flex">
            <span class="ml-3 text-gray-400">X</span>
            <h6 class="text-center text-sm ml-3 text-gray-400 mt-0.5">{{  state.establishment.acronym }}</h6>
          </div>
        </div>
        <div style="font-family: 'JetBrains Mono', monospace"
                class="text-indigo-600 my-6 bg-indigo-50 rounded-md p-3 border border-indigo-500">
                <div class="flex">
                  <span class="material-symbols-outlined mr-2 -mt-1">
                    batch_prediction
                  </span>
                  <h6 class="font-bold">Important</h6>
                </div>
                <hr class="my-2 border-t-indigo-500">
                <h6 class="text-sm leading-tight ">Ce formulaire d 'inscription est uniquement réservé <strong>aux étudiants</strong> de <strong>{{  state.establishment.name }}</strong>, <strong>Les membres de l'administration et leur collaborateurs</strong>, sont prier de contacter ladite administration afin obtenir leur accès.</h6>
              </div>

        <h1 class="my-6 font-black text-4xl text-gray-800">S'inscrire</h1>
        <div>
          <div class="mt-2 relative rounded-md shadow-sm">
            <input type="text" name="email" id="email" v-model="email"
              class="border border-gray-300 block w-full py-2 pl-4 pr-3 sm:text-md rounded-md"
              placeholder="Email" autofocus>
          </div>
        </div>
        <div>
          <div class="mt-2 relative rounded-md shadow-sm">
            <input type="password" name="password" id="password" v-model="password"
              class="border border-gray-300 block w-full py-2 pl-4 pr-3 sm:text-md rounded-md "
              placeholder="● ● ● ● ● ● ● ●">
          </div>
        </div>
        <div class="mt-5">
          <button type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-md font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <span class=" text-indigo-500 group-hover:text-indigo-400 material-symbols-outlined">
                browse_activity
              </span>
            </span>
            S'inscrire avec un e-mail
          </button>
        </div>
        <div class="mt-6 group relative w-full">
            <div class="">
                  <a title="Envoyé un mail" class="font-medium text-md text-indigo-600 hover:text-indigo-500 hover:underline" :href="`mailto:${ state.establishment.email }`">Envoyé un mail à l'administration</a>
              </div>
               <router-link title="Formulaire de connexion" :to="{ name: 'login' }">
                      <h6 class="text-md hover:underline">J'ai déja un compte</h6>
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
    name: 'Register',
    setup() {

      const state = ref({
        establishment: {
          acronym: 'loading...'
        }
      })
      onMounted(() => {
        window.setTimeout(() => state.value.establishment = store.state.establishment, 1000)
      })


      // const store = inject('store')

      const formData = reactive({
        email: '',
        password: '',
        device: null
      })

      const submitForm = () => {
       
      }

      return {
        ...toRefs(formData),
        submitForm,
        getSchoolYear,
        store,
        state
      }
    },

  }
</script>

<style>

</style>