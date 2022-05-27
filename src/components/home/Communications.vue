<template>
  <div class="w-4/5 2xl:w-10/12 px-6 py-6 h-full absolute right-0 top-0 ">
    <div class="inline-flex w-full">
      <div class="flex rounded-md shadow-sm w-full">
        <span
          class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-white text-gray-500 text-sm">
          <span class="material-symbols-outlined">search</span>
        </span>
        <input type="text" name="company-website" id="company-website"
          class="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
          placeholder="Rechercher des communiqués...">
      </div>
      <button type="submit"
        class="ml-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Rechercher</button>
    </div>
     <div class="mt-6 mb-5 relative">
    <div class="h-full flex-grow inline-flex w-full">
      <div class="w-full h-full">
        <div class="flex items-start justify-between ">
          <div class="flex justify-start">
            <div class="mb-3">
              <h1 class="text-2xl font-bold">Très important</h1>
              <h6 class="text-gray-400">
                Veuillez prendre connaissance de tous les communiqués ci-dessous épinglés
              </h6>
            </div>
          </div>
          <div class="items-center inline-flex">
          </div>
        </div>
        <div class="">
          <div class="grid grid-cols-6 gap-4">
            <div class="cursor-pointer transform hover:-translate-y-1 relative">
              <button
                class="flex justify-center items-center hover:bg-teal-100 h-8 w-8 rounded-md absolute top-2 right-2 transition-all"
                title="Epinglé par l'administrateur principal">
                <span class="text-teal-600 material-symbols-rounded">
                  stars
                </span>
              </button>
              <div class="bg-white rounded-lg h-52 w-full shadow">
                <img class="object-cover h-full w-full rounded-lg" :src="'public/assets/816274862.jpg'"
                  alt="Image de article récent">
              </div>
              <div class="mt-2">
                <h6 class="line-clamp-1">Thinkers Notes</h6>
                <h6 class="-mt-1 text-sm text-gray-400">Ouvert, Il y'a 15 min</h6>
              </div>
            </div>
            <div class="cursor-pointer transform hover:-translate-y-1">
              <div class="bg-white rounded-lg h-52 w-full shadow">
                <img class="object-cover h-full w-full rounded-lg" :src="'public/assets/816274862.jpg'"
                  alt="Image de article récent">
              </div>
              <div class="mt-2">
                <h6 class="line-clamp-1">Thinkers Notes</h6>
                <h6 class="-mt-1 text-sm text-gray-400">Ouvert, Il y'a 15 min</h6>
              </div>
            </div>
            <div class="cursor-pointer transform hover:-translate-y-1">
              <div class="bg-white rounded-lg h-52 w-full shadow">
                <img class="object-cover h-full w-full rounded-lg" :src="'public/assets/816274862.jpg'"
                  alt="Image de article récent">
              </div>
              <div class="mt-2">
                <h6 class="line-clamp-1">Thinkers Notes</h6>
                <h6 class="-mt-1 text-sm text-gray-400">Ouvert, Il y'a 15 min</h6>
              </div>
            </div>
            <div class="cursor-pointer transform hover:-translate-y-1">
              <div class="bg-white rounded-lg h-52 w-full shadow">
                <img class="object-cover h-full w-full rounded-lg" :src="'public/assets/816274862.jpg'"
                  alt="Image de article récent">
              </div>
              <div class="mt-2">
                <h6 class="line-clamp-1">Thinkers Notes</h6>
                <h6 class="-mt-1 text-sm text-gray-400">Ouvert, Il y'a 15 min</h6>
              </div>
            </div>
            <div class="cursor-pointer transform hover:-translate-y-1">
              <div class="bg-white rounded-lg h-52 w-full shadow">
                <img class="object-cover h-full w-full rounded-lg" :src="'public/assets/816274862.jpg'"
                  alt="Image de article récent">
              </div>
              <div class="mt-2">
                <h6 class="line-clamp-1">Thinkers Notes</h6>
                <h6 class="-mt-1 text-sm text-gray-400">Ouvert, Il y'a 15 min</h6>
              </div>
            </div>
            <div class="cursor-pointer transform hover:-translate-y-1">
              <div class="bg-white rounded-lg h-52 w-full shadow">
                <img class="object-cover h-full w-full rounded-lg" :src="'public/assets/816274862.jpg'"
                  alt="Image de article récent">
              </div>
              <div class="mt-2">
                <h6 class="line-clamp-1">Thinkers Notes</h6>
                <h6 class="-mt-1 text-sm text-gray-400">Ouvert, Il y'a 15 min</h6>
              </div>
            </div>
          </div>
        </div>
      
        <div class="mt-6 mb-5">
        <div class="flex items-start justify-between ">
          <div class="flex justify-start">
            <div class="mb-3">
              <h1 class="text-2xl font-bold">Communiqués</h1>
              <h6 class="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, suscipit eo !
              </h6>
            </div>
          </div>
          <div class="items-center inline-flex">
            <button title="Créer un communiquer" @click="showCommunicationForm = true"
              class="mt-1 rounded-full text-xs text-blue-600 font-medium flex justify-center items-center">
              <span class="material-symbols-rounded">
                add_circle
              </span>
            </button>
          </div>
        </div>

        <div class="bg-white rounded-xl py-3 space-y-3">
          <!-- write communication-->
          <div v-if="showCommunicationForm"
            class="border space-y-3 rounded-md pb-2 absolute -top-16 right-0 z-10 bg-white w-full">
            <div class="bg-blue-600 text-white px-4 py-2 rounded-t-md">
              <div class="flex items-start justify-between">
                <div class="flex justify-start">
                  <div class="inline-flex">
                    <span style="font-size:20px;" class="mr-2 material-symbols-outlined text-white">cell_tower</span>
                    <h6 class="font-bold text-sm">Créer un communiqué</h6>
                  </div>
                </div>
                <div class="items-center inline-flex">
                  <button title="Annuler" @click="showCommunicationForm = false"
                    class="rounded-full text-xs text-white font-medium flex justify-center items-center">
                    <span class="material-symbols-rounded">
                      cancel
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div class="px-4 space-y-3">
              <div class="col-span-3 sm:col-span-2">
                <label for="company-website" class="block text-sm font-medium text-gray-700"> Titre
                  (Soyez
                  explicite)</label>
                <div class="mt-1 flex rounded-md shadow-sm">
                  <input type="text" name="company-website" id="company-website"
                    class="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                    placeholder="Ex: Nouveau programme du semestre à l'attention des étudiants de l'ENSI">
                </div>
              </div>
              <div class="">
                <label for="receiver" class="block text-sm font-medium text-gray-700">Destinataires</label>
                <select id="receiver" name="receiver"
                  class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                  <option selected disabled value="null" class="">Par défaut (les communiqués sont
                    notifier à tout les
                    membres)</option>
                  <option>Choix 1</option>
                  <option>Choix 2</option>
                  <option>Choix 3</option>
                </select>
              </div>
              <div>
                <label for="about" class="block text-sm font-medium text-gray-700"> message </label>
                <div class="mt-1">
                  <textarea style="resize: none;" id="about" name="about" rows="22"
                    class="shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    placeholder="you@example.com"></textarea>
                </div>
                <button class="inline-flex text-gray-500">
                  <p title="Ajouter des fichiers, filtrer par membres, différer l'envoi du comuniqué ... etc"
                    class="mt-2 text-xs">Options supplémentaires ...</p>
                  <span class="ml-2 mt-2 text-sm material-symbols-outlined">
                    expand_more
                  </span>
                </button>
                <hr class="my-2">
                <div class="flex items-start justify-between py-2">
                  <div class="flex justify-start"></div>
                  <div class="items-center inline-flex">
                    <button title="Annuler"
                      class="rounded-full text-xs text-white font-medium flex justify-center items-center">
                      <span class="sm:ml-3">
                        <button type="button" @click="submitCommunicationForm()"
                          class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          <!-- Heroicon name: solid/check -->
                          <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd" />
                          </svg>
                          Envoyer
                        </button>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- read communication -->
          <div v-if="showCommunicationOverview" style="height:calc(100vh - 50px)"
            class="absolute -top-10 right-0 z-10 w-full bg-white rounded-xl ml-6 px-6 py-6 border">
            <div class="inline-flex">
              <div class="w-1/12">
                <button title="retour" @click="goBackFromCommunicationOverview"
                  class="bg-gray-100 flex justify-center items-center rounded-full h-12 w-12">
                  <span class="material-symbols-outlined">arrow_back</span>
                </button>
              </div>
              <div class="w-11/12">
                <div class="">
                  <h4 title="Nouveau programe du semestre à l'attention des étudiants de l'ENSI"
                    class="text-xl font-bold leading-tight">Nouveau programme du semestre à l'attention des
                    étudiants de l'ENSI</h4>
                  <div class="my-3 inline-flex w-full">
                    <div class="mr-2 h-6 w-6 bg-gray-100 rounded-full">
                      <img class="h-full w-full rounded-full object-cover"
                        :src="'https://images.pexels.com/photos/12082493/pexels-photo-12082493.jpeg?cs=srgb&dl=pexels-elena-rubtsova-12082493.jpg&fm=jpg'"
                        alt="Photo de profil" />
                    </div>
                    <h5 class="text-sm line-clamp-1 mt-0.5">Da'Silvera Jeremie</h5>
                    <span class="text-sm text-blue-600 ml-1 mt-0.5 material-symbols-rounded">verified</span>
                    <span class="text-sm ml-2 mt-0.5">- Il y'a 3h</span>
                  </div>
                  <h5 class="text-gray-500 text-base space-y-3">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate debitis voluptatem, eveniet
                      saepe
                      assumenda dicta corporis voluptatum a harum rem dolorem illo alias aperiam libero fugit, inventore
                      odio
                      distinctio error!
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nam ex. Fuga voluptates, quia sequi
                      beatae
                      reprehenderit tempora modi soluta tempore assumenda, maxime distinctio. Unde perspiciatis deleniti
                      doloremque ratione pariatur.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate debitis voluptatem, eveniet
                      saepe
                      assumenda dicta corporis voluptatum a harum rem dolorem illo alias aperiam libero fugit, inventore
                      odio
                      distinctio error!
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nam ex. Fuga voluptates, quia sequi
                      beatae
                      reprehenderit tempora modi soluta tempore assumenda, maxime distinctio. Unde perspiciatis deleniti
                      doloremque ratione pariatur.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate debitis voluptatem, eveniet
                      saepe
                      assumenda dicta corporis voluptatum a harum rem dolorem illo alias aperiam libero fugit, inventore
                      odio
                      distinctio error!
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nam ex. Fuga voluptates, quia sequi
                      beatae
                      reprehenderit tempora modi soluta tempore assumenda, maxime distinctio. Unde perspiciatis deleniti
                      doloremque ratione pariatur.
                    </p>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div class="inline-flex">
             <div class="flex items-center h-5 mr-2">
                    <input id="comments" name="comments" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                  </div>
          <div @click="proceedShowCommunicationOverview" class="cursor-pointer border-b pb-3">
            <div class="inline-flex w-full relative">
              <div class="absolute rounded-full bg-red-600 text-white text-xs pb-0.5 right-0 px-3">
                Nouveau
              </div>
              
              <div class="mr-2 h-6 w-6 bg-gray-100 rounded-full">
                <img class="h-full w-full rounded-full object-cover"
                  :src="'https://images.pexels.com/photos/12082493/pexels-photo-12082493.jpeg?cs=srgb&dl=pexels-elena-rubtsova-12082493.jpg&fm=jpg'"
                  alt="Photo de profil" />
              </div>
              <h5 class="text-sm line-clamp-1 mt-0.5">Da'Silvera Jeremie</h5>
              <span class="text-sm text-blue-600 ml-1 mt-0.5 material-symbols-rounded">verified</span>
              <span class="text-sm ml-2 mt-0.5">- Il y'a 3h</span>
            </div>
            <h5 class="text-gray-500 text-sm line-clamp-2 -mt-1 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptates deleniti molestias
              similique pariatur cumque corporis maxime error aperiam totam! Libero blanditiis dolorum
              iste repudiandae accusantium totam ea aliquid obcaecati!.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio modi neque, iusto
              libero quidem pariatur iure fugit nulla, nisi velit odit maxime veritatis rem, error saepe.
              Aspernatur modi tenetur quia?
            </h5>
          </div>
          </div>
          </div>
        </div>
      </div>
     </div>
    </div>
  </div>
</template>

<script>
  import {
    ref
  } from 'vue'

  export default {
    name: "Agenda",

    setup() {
      const showCommunicationForm = ref(false)
      const showCommunicationOverview = ref(false)

      const submitCommunicationForm = () => {
        showCommunicationForm.value = false
      }

      const goBackFromCommunicationOverview = () => {
        showCommunicationOverview.value = false
      }

      const proceedShowCommunicationOverview = () => {
        showCommunicationOverview.value = true
      }

      return {
        showCommunicationForm,
        submitCommunicationForm,
        showCommunicationOverview,
        proceedShowCommunicationOverview,
        goBackFromCommunicationOverview
      };
    },
  };
</script>