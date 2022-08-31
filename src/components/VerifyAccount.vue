<template>
  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
    <img  class="w-full absolute -top-96 transform rotate-90"
  src="../../../public/assets/illustrations/background.6c3571e062.jpg" alt="cover_picture">
    <div class="max-w-md w-full space-y-8 absolute top-16">
      <Transition>
          <div v-if="showConfirmMail" class="w-full absolute left-0 top-0 ">
            <div class="border rounded-lg">
              <div class="px-4 py-6 relative h-40">
                <img src="../../../public/assets/illustrations/futur-mindset.png" alt=""
                  class="rounded-lg rounded-b-none absolute top-0 left-0 h-full w-full">
                <div class="z-50 absolute top-6 left-4">
                  <h4 class="text-lg text-white">Bonjour {{ state.student.lastName }},</h4>
                  <h2 class="text-3xl font-bold text-white mt-3">Merci d'avoir soumis vos informations.</h2>
                </div>
              </div>
              <div class="bg-white w-full py-6 px-4 text-gray-400">
                <div class="flex mb-3">
                  <span class="material-symbols-outlined mr-2 -mt-1">
                    batch_prediction
                  </span>
                  <h6 class="font-bold">Ce qu'il faut savoir</h6>
                </div>
                <h5 class="text-sm">
                  Vous avez été ajouter à la liste d'attente de votre établissement.
                  Veuillez cliquez sur le lien que nous vous avons envoyé par mail ({{ state.student.email }})
                  pour terminer votre inscription et accéder à votre compte.
                  Profiter de tous les avantages que vous offre votre établissement via Oreonyx.
                </h5>
                <h5 class="text-sm mt-3 italic">
                  Bonne année scolaire !
                </h5>
                <hr class="my-5">
                <div class="flex items-start justify-between">
                  <div class="justify-start">
                    <h5 class="text-sm">
                      Segbaya Benoit
                    </h5>
                    <h5 class="font-bold text-sm">
                      CEO, Oreonyx
                    </h5>
                  </div>
                  <div class="items-center inline-flex space-x-2">
                    <a title="Ouvrir Gmail pour confirmer mon compte" href="https://mail.google.com/mail" class="bg-blue-600 text-white rounded-md px-4 py-2 shadow-2xl">
                      <div class="inline-flex">
                        <img src="../../../public/assets/logo/gmail-logo.png" alt="" class="h-4 mr-3 mt-0.5">
                        Ouvrir Gmail
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="inline-flex w-full space-x-3 mt-6">
                <a href="https://oreonyx.com" class="text-xs">oreonyx.com</a>
                <a href="#" class="text-xs text-gray-400">Conditions d'utilisateurs</a>
                <a href="#" class="text-xs text-gray-400">Politique privée</a>
                 
            </div>
          </div>
        </Transition>
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
    onMounted
  } from 'vue'
  import router from '../router'
  import store from '../store'

  export default {
    name: 'VerifyAccount',
    setup() {

      const showConfirmMail = ref(false)

      const state = ref({
        establishment: {
          acronym: 'chargement...'
        },
        student: null
      })

      onMounted(() => {
        state.value.student = store.state.user
        showConfirmMail.value = true
        setTimeout(() => {
          state.value.establishment = store.state.establishment
        }, 1200)
      })

      return {
        store,
        state,
        showConfirmMail
      }
    },

  }
</script>

<style>

</style>