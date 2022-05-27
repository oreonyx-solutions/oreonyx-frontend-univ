<template>
  <div class="w-4/5 2xl:w-10/12 px-6 pb-6 h-full absolute right-0 top-0 mt-5">
       <div class="h-full flex-grow inline-flex w-full">
          <div class="w-4/6 h-full bg-white rounded-xl mr-6 px-6 py-6 ">
            <div class="bg-blue-600 text-white p-4 rounded-xl inline-flex">
              <div class="w-2/3">
                <div class="inline-flex">
                  <img class="h-6 mr-2 mt-1" :src="'public/assets/icons/alarm.png'" alt="" />
                  <h1 class="text-2xl font-bold">06:00 </h1>
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
            <div class="flex items-start justify-between my-3">
              <div class="justify-start">
                <h2 class="text-lg font-bold">15 Decembre 2022</h2>
                <span class="text-gray-400 text-lg">06 tâches à venir</span>
              </div>
              <div class="items-center inline-flex space-x-2">
                <button title="Tout le programme d'aujourd'hui"
                  class="border border-blue-600 px-4 py-1 bg-white text-blue-600 rounded-full text-sm">Aujourd'hui</button>
                <button title="Tout le programme de la semaine"
                  class="px-4 py-1 hover:bg-gray-200 rounded-full text-sm">Semaine</button>
                <button title="Tout le programme du mois"
                  class="px-4 py-1 hover:bg-gray-200 rounded-full text-sm">Mois</button>
              </div>
            </div>
            <div>
              <div class="w-full">
                <div class="relative w-full inline-flex single-timeline ">
                  <span class="text-gray-400 text-sm">08:00</span>
                  <div class="w-full ml-4">
                    <div class="w-full flex justify-center items-center">
                      <div class="border-t w-full my-2"></div>
                    </div>
                    <div class="todos space-y-2 ">
                      <div id="todo"
                        class="border-l-4 cursor-pointer border-blue-600 w-full bg-blue-50 hover:bg-blue-100 rounded-md p-2">
                        <div class="inline-flex">
                          <img class="h-6 mr-2" :src="'public/assets/icons/four-leaf-clover.png'" alt="" />
                          <h6 class="text-sm font-semibold text-blue-600">Create wireframes</h6>
                        </div>
                      </div>
                      <div id="todo"
                        class="border-l-4 cursor-pointer border-red-600 w-full bg-red-50 hover:bg-red-100 rounded-md p-2">
                        <div class="inline-flex">
                          <img class="h-6 mr-2" :src="'public/assets/icons/four-leaf-clover.png'" alt="" />
                          <h6 class="text-sm font-semibold text-red-600 line-clamp-1">Update research document</h6>
                        </div>
                        <div class="pl-8 -mt-1">
                          <h6 class="text-sm line-clamp-2 text-gray-400 leading-tight">Lorem ipsum dolor sit, amet
                            consectetur adipisicing elit. Libero ea laborum veritatis earum numquam fuga modi, dicta
                            laboriosam fugiat aliquid molestias natus soluta, consequuntur quibusdam minus hic expedita
                            voluptate necessitatibus!</h6>
                          <h6 class="text-xs font-semibold text-red-600 line-clamp-2 text-gray-400 mt-1">08:30 AM -
                            09:00 AM</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative w-full inline-flex single-timeline ">
                  <span class="text-gray-400 text-sm">09:00</span>
                  <div class="w-full ml-4">
                    <div class="w-full flex justify-center items-center">
                      <div class="border-t w-full my-2"></div>
                    </div>
                    <div class="todos space-y-2 ">
                      <div id="todo"
                        class="border-l-4 cursor-pointer border-indigo-600 w-full bg-indigo-50 hover:bg-indigo-100 rounded-md p-2">
                        <div class="inline-flex">
                          <img class="h-6 mr-2" :src="'public/assets/icons/four-leaf-clover.png'" alt="" />
                          <div>
                             <h6 class="text-xs text-indigo-600 line-clamp-2 text-gray-400">08:30 AM - 09:00 AM</h6>
                             <h6 class="text-sm font-semibold text-indigo-600 line-clamp-1">Discussion avec les developpeurs</h6>
                          </div>
                        </div>
                        <div class="pl-8">
                          <h6 class="text-sm line-clamp-2 text-gray-400 leading-tight">
                            Lorem ipsum dolor sit, amet
                            consectetur adipisicing elit. Libero ea laborum veritatis earum numquam fuga modi, dicta
                            laboriosam fugiat aliquid molestias natus soluta, consequuntur quibusdam minus hic expedita
                            voluptate necessitatibus!
                          </h6>
                          <div class="flex items-start justify-between my-3 mt-2">
                            <div class="justify-start">
                                <button class="px-4 py-1 rounded-md inline-flex text-white bg-indigo-600 text-sm">
                            <span class="material-symbols-outlined mr-2">voice_chat</span>
                            Oreonyx live
                          </button>
                            </div>
                            <div class="items-center inline-flex space-x-2 pt-1">
                             <div class="flex -space-x-1 overflow-hidden">
                              <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                              <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                              <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="">
                              <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                            </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
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
                  class="text-gray-400 hover:text-blue-600 mt-1 text-xs font-bold leading-tight line-clamp-1 underline">Nouveau
                  programme du semestre à l'attention
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
                  class="text-gray-400 hover:text-blue-600 mt-1 text-xs font-bold leading-tight line-clamp-1 underline">Nouveau
                  programme du semestre à l'attention
                  des
                  étudiants de l'ENSI</a>
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
    name: "Blog",
    components: {
      
    },
    setup() {

    
    },
  };
</script>