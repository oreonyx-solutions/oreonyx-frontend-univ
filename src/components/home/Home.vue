<template>

  <Work v-if="store.state.toggleWorkSpace" />
  <div v-if="!store.state.toggleWorkSpace" class="w-4/5 2xl:w-10/12 px-6 pb-6 h-full absolute right-0 top-0">
    <div class="h-full flex-grow inline-flex w-full">
      <div class="w-4/6 h-full bg-white mr-6 pr-6 py-6 border-r">
        <div class="bg-blue-600 text-white p-4 rounded-xl inline-flex shadow-xl ">
          <div class="w-3/6">
            <div class="inline-flex">
              <h1 class="text-2xl font-bold">06:00 </h1>
            </div>
            <h1 class="text-2xl font-bold">Bonjour, Jerome !</h1>
            <h6 class="text-sm mt-2">

              Voici votre programme de la journée. Vous avez 01 cours en ligne et 03 cours en
              présentiel. Voir ci-desous les détails de votre journée.
            </h6>
          </div>
          <div class="w-3/6">
            
        <div class="grid grid-cols-3 gap-3">
          <div class="rounded-xl flex flex-col">
            <div class="flex-grow">
              <div class="h-32 w-full rounded-xl bg-red-600">
                 <img class="shadow-xl rounded-xl h-full w-full object-cover" src="../../../public/assets/illustrations/summer-illustrations-3.jpg" alt="Photo de profil">
              </div>
            </div>
            <div class="mt-1">
              <h5 class="text-sm font-bold py-1 leading-none">University connect</h5>
            </div>
          </div>
           <div class="rounded-xl flex flex-col">
            <div class="flex-grow">
              <div class="h-32 w-full rounded-xl bg-red-600">
                 <img class="shadow-xl rounded-xl h-full w-full object-cover" src="../../../public/assets/illustrations/summer-illustrations-6.jpg" alt="Photo de profil">
              </div>
            </div>
            <div class="mt-1">
              <h5 class="text-sm font-bold py-1 leading-none">University connect</h5>
            </div>
          </div>
           <div class="rounded-xl flex flex-col">
            <div class="flex-grow">
              <div class="h-32 w-full rounded-xl bg-red-600">
                 <img class="shadow-xl rounded-xl h-full w-full object-cover" src="../../../public/assets/illustrations/summer-illustrations-7.jpg" alt="Photo de profil">
              </div>
            </div>
            <div class="mt-1">
              <h5 class="text-sm font-bold py-1 leading-none">Programme partenaires</h5>
            </div>
          </div>
        </div>
          </div>
          
        </div>
        <div class="mt-6 flex items-start justify-between my-3">
          <div class="justify-start">
            <h2 class="text-lg font-bold -mt-1.5">15 Decembre 2022</h2>
            <h5 class="text-gray-400 text-lg -mt-2">06 tâches à venir</h5>
          </div>
          <div class="items-center inline-flex space-x-2">
              <button title="Tout le programme de la semaine"
              class="border border-blue-600 px-4 pb-0.5 bg-blue-600 rounded-full text-xs text-white">Aujourd'hui</button>
            <button title="Tout le programme de la semaine"
              class="px-4 pb-0.5 hover:bg-gray-200 rounded-full text-xs">Semaine</button>
            <button title="Tout le programme du mois"
              class="px-4 pb-0.5 hover:bg-gray-200 rounded-full text-xs">Mois</button>
          </div>
        </div>
        <div>
          <todo />
        </div>
      </div>
      <div class="w-2/6 h-full space-y-3">
        <div class="w-full bg-white mb-1 pl-0 p-4 rounded-md">
          <div class="h-auto w-full relative">
            <img class="h-32 object-scale-down" src="../../../public/assets/default_establishment_pp.png"
              alt="Photo de profil">
          </div>
          <hr class="my-2">
          <button title="Compte Business"
            class="z-10 inline-flex border text-white border-green-600 bg-green-600 rounded-full px-2">
            <span style="font-size:18px; margin-top:0.2rem" class="material-symbols-rounded">
              verified
            </span>
            <div class="ml-1 font-bold">Standard</div>
          </button>
          <div class="relative mt-1">
            <h2 class="text-gray-700 font-bold text-base leading-tight">
              University One(UO)
            </h2>
          </div>
          <div class="mt-2">
            <h6 class="text-base leading-tight text-gray-400">Boulevard du 30 Aout, Station Energium à 50m des rails
              d'IPG , 07BP700</h6>
          </div>
          <div class="my-2">
            <div class="text-gray-400 inline-flex w-full">
              <span class="text-base font-base">Status:</span>
              <div class="inline-flex">
                <div class="mt-2 mx-1 h-2 w-2 bg-green-500 rounded-full"></div>
                <div class="text-green-500">systèmes opérationnels</div>
              </div>
            </div>
            <div class="text-gray-400 ">
              <div class=" text-md inline-flex">
                <span class="text-md font-base">Membres:</span>
                <div class="ml-2">0,003 personnes</div>
              </div>
            </div>
            <div title="Site web officiel" class="text-gray-400 inline-flex w-full">
              <div class="text-md inline-flex">
                <span class="text-md font-base">Url:</span>
                <a target="_blank" href="https://www.univ-lome.tg/universite/instituts/isica"
                  class="text-base text-gray-400 hover:underline line-clamp-1 ml-2"> www.wikipedia.com</a>
              </div>
            </div>
            <div title="Addresse e-mail officiel, écrivez-nous!" class="text-gray-400 inline-flex w-full">
              <div class="text-md inline-flex">
                <span class="text-md font-base">Email:</span>
                <a target="_blank" href="mailto:isica_ul@univ-lome.tg"
                  class="ml-2 text-base text-gray-400 hover:underline line-clamp-1">test1@oreonyx.com</a>
              </div>
            </div>
            <div title="Addresse e-mail officiel, écrivez-nous!" class="text-gray-400 inline-flex w-full">
              <div class="text-md inline-flex">
                <span class="text-md font-base">Pays:</span>
                <a target="_blank" href="mailto:isica_ul@univ-lome.tg"
                  class="ml-2 text-base text-gray-400 hover:underline line-clamp-1">Togo(fr)</a>
              </div>
            </div>
            <div title="Addresse e-mail officiel, écrivez-nous!" class="text-gray-400 inline-flex w-full">
              <div class="text-md inline-flex">
                <span class="text-md font-base">Fonder le:</span>
                <a target="_blank" href="mailto:isica_ul@univ-lome.tg"
                  class="ml-2 text-base text-gray-400 hover:underline line-clamp-1">15 Mai 21997 (25ans)</a>
              </div>
            </div>
            <div title="Addresse e-mail officiel, écrivez-nous!" class="text-gray-400 inline-flex w-full">
              <div class="text-md inline-flex">
                <span class="text-md font-base">Hotline:</span>
                <a target="_blank" href="tel:22890318830" class="ml-2 text-base text-gray-400">228 90 31 88 30</a>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full inline-flex space-x-1">
            <span class="text-yellow-500 material-symbols-rounded">
star
</span>
<span class="text-yellow-500 material-symbols-rounded">
star
</span>
<span class="text-yellow-500 material-symbols-rounded">
star
</span>
<span class="text-yellow-500 material-symbols-rounded">
star
</span>
<span class="text-yellow-500 material-symbols-outlined">
star_half
</span>
        </div>
        <div class="bg-white pb-6 rounded-md">
          <div class="inline-flex pb-1">
            <div class="text-neutral-500">Communiqués</div>
            <div class="text-white px-1.5 bg-blue-600 ml-2 rounded-full flex justify-center items-center">
              <h6 style="font-size:12px">10</h6>
            </div>
          </div>

          <div class="relative flex justify-center pt-2">
            <div class="z-10 absolute w-full bg-white shadow rounded-md px-4 py-3">
              <div class="inline-flex w-full">
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
                Hey you! Would you be able to help me with the designs for the home screen? I'm swamped ATM.
              </h5>
            </div>
            <div style="width:75%" class="mt-11 bg-white h-20 absolute shadow rounded-md px-4 py-3"></div>
            <div style="width:80%" class="mt-9 bg-white h-20 absolute shadow rounded-md px-4 py-3"></div>
            <div style="width:85%" class="mt-7 bg-white h-20 absolute shadow rounded-md px-4 py-3"></div>
            <div style="width:95%" class="mt-5 bg-white h-20 absolute shadow rounded-md px-4 py-3"></div>
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

  import Todo from '@/components/home/Todo.vue'
  import Work from '@/components/home/Work.vue'
  import store from "../../store";

  export default {
    name: "Blog",
    components: {
      Todo,
      Work
    },
    setup() {

      return {
        store
      }
    },
  };
</script>