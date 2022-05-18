<template>
  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div class="flex justify-center">
        <div class="inline-flex">
          <img class="mx-auto h-6 w-auto" :src="'public/assets/logo.png'" alt="Workflow" />
          <span class="ml-3 text-gray-400">|</span>
          <h6 class="text-center text-sm ml-3 text-gray-400 mt-1">{{  state.establishment.acronym }}</h6>
        </div>
      </div>
      <hr class="mt-3">
      <form @submit.prevent="submitForm" class="bg-white  p-8 pt-0 mt-8" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="mb-2 flex justify-center">
          <span style="font-size:40px" class="material-symbols-outlined">
            account_circle_full
          </span>
        </div>

        <h6 class="text-center text-sm">Connexion</h6>
        <div class="rounded-md shadow-sm mt-3">
          <div>
            <input v-model="email" id="email-address" name="email" type="email" autocomplete="email" required=""
              class="mt-2 appearance-none rounded-md rounded-b-none relative block w-full px-3 border border-b-0 border-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-base"
              placeholder="youremail@oreonyx.com" />
          </div>
          <div class="">
            <input v-model="password" id="password" name="password" type="password" autocomplete="current-password"
              required=""
              class="appearance-none rounded-md rounded-t-none  relative block w-full px-3 border border-gray-200 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-base"
              placeholder="● ● ● ● ● ● ● ● " />
          </div>
        </div>

        <div>
          <button type="submit"
            class="mt-2 group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Se connecter
          </button>
        </div>

        <div class="py-6">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox"
                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border border-gray-300 rounded" />
              <label for="remember-me" class="ml-2 block text-xs text-gray-400"> Se souvenir de moi</label>
            </div>
            <div class="text-xs">
              <a href="#" class=" text-gray-400 underline"> Mot de passe oublié ? </a>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 p-3">
          <h6 class="text-xs text-gray-400">En cliquant sur "Se connecter" vous acceptez <a class="underline"
              href="#">les Conditions d'utilisation</a> de Oreonyx Technologies.</h6>
          <h6 class="text-xs mt-2 text-gray-400">Le mot de passe de votre compte est précieux, gardez le en sureté. En
            cas d'oubli ou de soucis autres, veuilez contactez votre supérieur hiérarchique direct.</h6>
          <div class="">
            <h6 class="text-xs mt-2 text-gray-400">Copyright © 2022 Oreonyx Technologies, Tous droits reservés</h6>
            <div class="space-x-3 inline-flex">
              <a href="https://oreonyx.com" class="text-gray-400 hover:underline  text-xs">oreonyx.com</a>
              <a href="#" class="text-gray-400 hover:underline  text-xs">Mentions légales</a>
              <a href="#" class="text-gray-400 hover:underline text-xs">Conditions d'utilisation</a>
            </div>
          </div>
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
    name: 'Login',
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
        //get User | Auth: bonsoa.yen@gmail.com / 2f5a3de67527d270 | store.state.user
         const device = store.state.device;
          formData.device = device
        store.apiCallMethods.post('auth/login', formData).then(
          (res) => {
            if (res) {
              const user = res.data
              store.methods.storeUser(user)
              // set request header token temporally
            store.authMethods.setRequestHeaders(res.token)
              store.authMethods.saveSessionCredentials({
                token: res.token,
                user: store.state.user
              })
              console.log('stored', store.state.user)
              store.state.isAuth = true
              router.push({
                name: 'home',
                query: {
                  redirect: '/home'
                }
              })
            }
          })


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