<template>
  <div class="home bg-gray-50">
    <div class="inline-flex content-flow w-full">
      <sidebar class="w-1/5 2xl:w-2/12'" />
      <div class="w-4/5 2xl:w-10/12 px-6 py-6 h-full absolute right-0 top-0">
        <div class="h-full flex-grow inline-flex w-full">
          <div class="w-4/6 h-full bg-white rounded-xl mr-6 px-6 py-6 shadow-xl">
            <div class="bg-blue-600 text-white p-4 rounded-xl inline-flex">
              <div class="w-2/3">
                <div class="inline-flex">
                  <img class="h-6 2xl:h-16 mr-2 mt-1" :src="'public/assets/icons/alarm.png'" alt="" />
                  <h1 class="text-2xl 2xl:text-7xl font-bold">06:00 </h1>
                </div>
                <h1 class="text-2xl font-bold">Bonjour, Janice !</h1>
                <h6 class="text-sm mt-2">

                  Voici votre programme de la journée. Vous avez 01 cours en ligne et 03 cours en
                  présentiel. Voir ci-desous les détails de votre journée.
                </h6>
              </div>
              <div class="w-1/3">
                <img class="" :src="'public/assets/icons/welcome.svg'" alt="" />
              </div>
            </div>
            <div class="my-3 inline-flex w-full">
              <div class="w-1/2">
                <h2 class="text-lg font-bold">15 Mai 2022</h2>
              </div>
              <div class="w-2/3 space-x-2">
                <button title="Tout le programme d'aujourd'hui"
                  class="shadow-xl px-4 py-1 bg-white text-blue-600 rounded-full text-sm">Aujourd'hui</button>
                <button title="Tout le programme de la semaine"
                  class="px-4 py-1 hover:bg-gray-200 rounded-full text-sm">Semaine</button>
                <button title="Tout le programme du mois"
                  class="px-4 py-1 hover:bg-gray-200 rounded-full text-sm">Mois</button>
              </div>
            </div>
            <div>
                <div class="inline-flex w-full">
                    <div class="relative">
                       <span class="">08:00</span>
                    </div>
                    <div class="border-t ml-2 py-2 w-full mt-2.5">
                        <div id="todo" class="border-l-4 border-blue-600 w-full bg-blue-50 text-blue-600 rounded-xl p-2 inline-flex">
                          <img class="h-6 mr-2 -mt-1" :src="'public/assets/icons/four-leaf-clover.png'" alt="" />
                          <h6 class="text-sm font-semibold">Create wireframes</h6>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div class="w-2/6 h-full space-y-3">
            <div class="w-full bg-white my-1 p-4 rounded-md">
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
                        <h6 class="text-base leading-tight text-gray-400">Boulevard du 30 Aout, Station Energium à 50m des rails d'IPG , 07BP700</h6>
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
                    <a target="_blank" href="tel:22890318830"
                      class="ml-2 text-base text-gray-400">228 90 31 88 30</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-white pt-3 pb-6 px-3 rounded-md">
            <div class="text-neutral-500">Communiqués</div>
            <hr class="my-2">
            <div class="">
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
              <a href="#" title="Nouveau programe du semestre à l'attention des étudiants de l'ENSI"
                class="text-gray-400 hover:text-blue-600 mt-1 text-xs font-bold leading-tight line-clamp-1 underline">Nouveau programme du semestre à l'attention
                des
                étudiants de l'ENSI</a>
            </div>
            <hr class="my-3">
            <div>
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
              <a href="#" title="Nouveau programe du semestre à l'attention des étudiants de l'ENSI"
                class="text-gray-400 hover:text-blue-600 mt-1 text-xs font-bold leading-tight line-clamp-1 underline">Nouveau programme du semestre à l'attention
                des
                étudiants de l'ENSI</a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .content-flow {
    height: 100vh;
  }
</style>

<script>
  import Sidebar from '../components/home/Sidebar.vue'
  import IncomesOverview from '../components/statistics/IncomesOverview.vue'
  import Graph1 from '../components/statistics/Graph1.vue'
  import Graph2 from '../components/statistics/Graph2.vue'
  import Graph3 from '../components/statistics/Graph3.vue'
  import Graph4 from '../components/statistics/Graph4.vue'
  import Graph5 from '../components/statistics/Graph5.vue'

  export default {
    name: 'Homeview',
    components: {
      Sidebar,
      IncomesOverview,
      Graph1,
      Graph2,
      Graph3,
      Graph4,
      Graph5
    }
  }
</script>