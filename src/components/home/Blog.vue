<template>
  <div class="w-4/5 2xl:w-10/12 px-6 pb-6 h-full absolute right-0 top-0 mt-5">
    <div class="inline-flex w-full">
      <div class="flex rounded-md shadow-sm w-full">
        <span
          class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-white text-gray-500 text-sm">
          <span class="material-symbols-outlined">search</span>
        </span>
        <input type="text" name="company-website" id="company-website"
          class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
          placeholder="Rechercher des articles...">
      </div>
      <button type="submit"
        class="ml-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Rechercher</button>
    </div>
    <div class="h-full flex-grow inline-flex w-full mt-6 relative">
      <div class="w-full h-full">
        <div class="flex items-start justify-between ">
          <div class="flex justify-start">
            <div class="mb-3">
              <h1 class="text-2xl font-bold">Actualités</h1>
              <h6 class="text-gray-400 text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, suscipit eo !
              </h6>
            </div>
          </div>
          <div class="items-center inline-flex"></div>
        </div>
        <div class="">
          <div class="inline-flex w-full">
            <div class="w-2/3">
              <div class="w-full">
                <div class="inline-flex w-full space-x-3 mb-3">
                  <div class="w-1/3 relative">
                    <div>
                      <div class="absolute rounded-xl h-full w-full bg-gradient-to-b from-transparent to-black"></div>
                      <div class="absolute top-5 left-5">
                        <div class="w-2/3">
                          <h6 class="text-white font-bold text-lg leading-tight">
                            Tips & Tricks from famous photographers
                          </h6>
                          <h6 class="mt-2 text-xs text-white">Il y'a 15 min, lecture en 5 min</h6>
                        </div>
                      </div>
                      <div class="absolute bottom-3 left-5 text-white">
                        <div class="my-3 inline-flex w-full">
                          <div class="mr-2 h-6 w-6 bg-gray-100 rounded-full ring ring-white">
                            <img class="h-full w-full rounded-full object-cover"
                              :src="'https://images.pexels.com/photos/12082493/pexels-photo-12082493.jpeg?cs=srgb&dl=pexels-elena-rubtsova-12082493.jpg&fm=jpg'"
                              alt="Photo de profil" />
                          </div>
                          <h5 class="text-sm line-clamp-1 mt-0.5">Da'Silvera Jeremie</h5>
                          <span class="text-sm text-white ml-1 mt-0.5 material-symbols-rounded">verified</span>
                        </div>
                      </div>
                    </div>
                    <img class="h-52 w-full object-cover rounded-xl"
                      src="https://images.pexels.com/photos/12003586/pexels-photo-12003586.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      alt="Image de la fac">
                  </div>
                  <div class="w-2/3 relative">
                    <div>
                      <div class="absolute rounded-xl h-full w-full bg-gradient-to-b from-transparent to-black"></div>
                      <div class="absolute top-5 left-5">
                        <div class="w-2/3">
                          <h6 class="text-white font-bold text-lg leading-tight">
                            Tips & Tricks from famous photographers
                          </h6>
                          <h6 class="mt-2 text-xs text-white">Il y'a 15 min, lecture en 5 min</h6>
                        </div>
                      </div>
                      <div class="absolute bottom-3 left-5 text-white">
                        <div class="my-3 inline-flex w-full">
                          <div class="mr-2 h-6 w-6 bg-gray-100 rounded-full ring ring-white">
                            <img class="h-full w-full rounded-full object-cover"
                              :src="'https://images.pexels.com/photos/12082493/pexels-photo-12082493.jpeg?cs=srgb&dl=pexels-elena-rubtsova-12082493.jpg&fm=jpg'"
                              alt="Photo de profil" />
                          </div>
                          <h5 class="text-sm line-clamp-1 mt-0.5">Da'Silvera Jeremie</h5>
                          <span class="text-sm text-white ml-1 mt-0.5 material-symbols-rounded">verified</span>
                        </div>
                      </div>
                    </div>
                    <img class="h-52 w-full object-cover rounded-xl"
                      src="https://images.pexels.com/photos/37539/colored-pencils-colour-pencils-mirroring-color-37539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Image de la fac">
                  </div>
                </div>
                <div class="inline-flex w-full space-x-3">
                  <div class="w-1/2 relative">
                    <div>
                      <div class="absolute rounded-xl h-full w-full bg-gradient-to-b from-transparent to-black"></div>
                      <div class="absolute top-5 left-5">
                        <div class="w-2/3">
                          <h6 class="text-white font-bold text-lg leading-tight">
                            Tips & Tricks from famous photographers
                          </h6>
                          <h6 class="mt-2 text-xs text-white">Il y'a 15 min, lecture en 5 min</h6>
                        </div>
                      </div>
                      <div class="absolute bottom-3 left-5 text-white">
                        <div class="my-3 inline-flex w-full">
                          <div class="mr-2 h-6 w-6 bg-gray-100 rounded-full ring ring-white">
                            <img class="h-full w-full rounded-full object-cover"
                              :src="'https://images.pexels.com/photos/12082493/pexels-photo-12082493.jpeg?cs=srgb&dl=pexels-elena-rubtsova-12082493.jpg&fm=jpg'"
                              alt="Photo de profil" />
                          </div>
                          <h5 class="text-sm line-clamp-1 mt-0.5">Da'Silvera Jeremie</h5>
                          <span class="text-sm text-white ml-1 mt-0.5 material-symbols-rounded">verified</span>
                        </div>
                      </div>
                    </div>
                    <img class="h-52 w-full object-cover rounded-xl"
                      src="https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Image de la fac">
                  </div>
                  <div class="w-1/2 relative">
                    <div>
                      <div class="absolute rounded-xl h-full w-full bg-gradient-to-b from-transparent to-black"></div>
                      <div class="absolute top-5 left-5">
                        <div class="w-2/3">
                          <h6 class="text-white font-bold text-lg leading-tight">
                            Tips & Tricks from famous photographers
                          </h6>
                          <h6 class="mt-2 text-xs text-white">Il y'a 15 min, lecture en 5 min</h6>
                        </div>
                      </div>
                      <div class="absolute bottom-3 left-5 text-white">
                        <div class="my-3 inline-flex w-full">
                          <div class="mr-2 h-6 w-6 bg-gray-100 rounded-full ring ring-white">
                            <img class="h-full w-full rounded-full object-cover"
                              :src="'https://images.pexels.com/photos/12082493/pexels-photo-12082493.jpeg?cs=srgb&dl=pexels-elena-rubtsova-12082493.jpg&fm=jpg'"
                              alt="Photo de profil" />
                          </div>
                          <h5 class="text-sm line-clamp-1 mt-0.5">Da'Silvera Jeremie</h5>
                          <span class="text-sm text-white ml-1 mt-0.5 material-symbols-rounded">verified</span>
                        </div>
                      </div>
                    </div>
                    <img class="h-52 w-full object-cover rounded-xl"
                      src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Image de la fac">
                  </div>
                </div>
              </div>
            </div>
            <div class="w-1/3 pl-3 pb-2">
              <div class="w-full h-full relative">
                <div>
                  <div class="absolute rounded-xl h-full w-full bg-gradient-to-b from-transparent to-black"></div>
                  <div class="absolute top-5 left-5">
                    <div class="w-2/3">
                      <h6 class="text-white font-bold text-lg leading-tight">
                        Tips & Tricks from famous photographers
                      </h6>
                      <h6 class="mt-2 text-xs text-white">Il y'a 15 min, lecture en 5 min</h6>
                    </div>
                  </div>
                  <div class="absolute bottom-3 left-5 text-white">
                    <div class="my-3 inline-flex w-full">
                      <div class="mr-2 h-6 w-6 bg-gray-100 rounded-full ring ring-white">
                        <img class="h-full w-full rounded-full object-cover"
                          :src="'https://images.pexels.com/photos/12082493/pexels-photo-12082493.jpeg?cs=srgb&dl=pexels-elena-rubtsova-12082493.jpg&fm=jpg'"
                          alt="Photo de profil" />
                      </div>
                      <h5 class="text-sm line-clamp-1 mt-0.5">Da'Silvera Jeremie</h5>
                      <span class="text-sm text-white ml-1 mt-0.5 material-symbols-rounded">verified</span>
                    </div>
                  </div>
                </div>
                <img class="h-full w-full object-cover rounded-xl"
                  src="https://images.pexels.com/photos/6457546/pexels-photo-6457546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Image de la fac">

              </div>
            </div>
          </div>
        </div>
        <div class="mt-6 mb-5">
           <!-- write communication-->
          <div v-if="showEditor"
            class="border space-y-3 rounded-md pb-2 absolute -top-16 right-0 z-10 bg-white w-full">
            <div class="bg-blue-600 text-white px-4 py-2 rounded-t-md">
              <div class="flex items-start justify-between ">
                <div class="flex justify-start">
                  <div class="inline-flex">
                    <span style="font-size:20px;" class="mr-2 material-symbols-outlined text-white">cell_tower</span>
                    <h6 class="font-bold text-sm">Créer un communiqué</h6>
                  </div>
                </div>
                <div class="items-center inline-flex">
                  <button title="Annuler" @click="showEditor = false"
                    class="rounded-full text-xs text-white font-medium flex justify-center items-center">
                    <span class="material-symbols-rounded">
                      cancel
                    </span>
                  </button>
                </div>
              </div>
            </div>
           <editor />
          </div>
          <div class="flex items-start justify-between">
            <div class="flex justify-start">
              <div class="mb-3">
                <h1 class="text-2xl font-bold">Articles de blog</h1>
                <h6 class="text-gray-400 text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, suscipit eo !
                </h6>
              </div>
            </div>
            <div class="items-center inline-flex">
              <button title="Créer un communiquer" @click="showEditor = true"
                class="mt-1 rounded-full text-xs text-blue-600 font-medium flex justify-center items-center">
                <span class="material-symbols-rounded">
                  add_circle
                </span>
              </button>
            </div>
          </div>
          <div class="grid grid-cols-3 gap-3">
            <div
              class="rounded-xl pt-3 pb-6 cursor-pointer hover:shadow-md w-full border border-yellow-200 bg-yellow-50 px-2">
              <div class="h-auto w-full relative mb-3">
                <div class="absolute rounded-full bg-red-600 text-white text-xs top-2 pb-0.5 right-2 px-3">
                  Nouveau
                </div>
                <div class="w-full">
                  <div class="inline-flex w-full space-x-2">
                    <div class="w-1/3">
                      <img class="h-16 w-full object-cover rounded-xl"
                        src="https://images.pexels.com/photos/12203460/pexels-photo-12203460.jpeg?cs=srgb&dl=pexels-ekaterina-12203460.jpg&fm=jpg"
                        alt="Image de la fac">
                    </div>
                    <div class="w-2/3">
                      <img class="h-16 w-full object-cover rounded-xl"
                        src="https://images.pexels.com/photos/12203460/pexels-photo-12203460.jpeg?cs=srgb&dl=pexels-ekaterina-12203460.jpg&fm=jpg"
                        alt="Image de la fac">
                    </div>
                  </div>
                  <div class="inline-flex w-full space-x-2">
                    <div class="w-2/3">
                      <img class="h-16 w-full object-cover rounded-xl"
                        src="https://images.pexels.com/photos/12203460/pexels-photo-12203460.jpeg?cs=srgb&dl=pexels-ekaterina-12203460.jpg&fm=jpg"
                        alt="Image de la fac">
                    </div>
                    <div class="w-1/3">
                      <img class="h-16 w-full object-cover rounded-xl"
                        src="https://images.pexels.com/photos/12203460/pexels-photo-12203460.jpeg?cs=srgb&dl=pexels-ekaterina-12203460.jpg&fm=jpg"
                        alt="Image de la fac">
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-3">
                <div class="relative mt-1">
                  <h2 class="text-gray-700 font-bold text-sm leading-tight">
                    Comment s'inscrire au CERSA ?
                  </h2>
                </div>
                <div class="mt-2">
                  <h6 class="text-sm leading-tight text-gray-400 line-clamp-3">Lorem ipsum dolor sit amet consectetur
                    adipisicing elit.
                    Fugiat pariatur quis sequi eligendi quasi cum! Rem.</h6>
                </div>
                <div class="mt-1 text-gray-500">
                  <h6 class="text-xs "><span>15
                      Nov.2021</span> -
                    lecture <span>5min</span></h6>
                </div>
              </div>
            </div>
            <div
              class="rounded-xl pt-3 pb-6 cursor-pointer hover:shadow-md w-full border border-green-200  bg-green-50 px-2">
              <div class="h-auto w-full relative mb-3">
                <div class="absolute rounded-full bg-red-600 text-white text-xs top-2 pb-0.5 right-2 px-3">
                  Nouveau
                </div>
                <div class="w-full">
                  <div class="inline-flex w-full space-x-2">
                    <div class="w-1/3">
                      <img class="h-16 w-full object-cover rounded-xl"
                        src="https://images.pexels.com/photos/12203460/pexels-photo-12203460.jpeg?cs=srgb&dl=pexels-ekaterina-12203460.jpg&fm=jpg"
                        alt="Image de la fac">
                    </div>
                    <div class="w-2/3">
                      <img class="h-16 w-full object-cover rounded-xl"
                        src="https://images.pexels.com/photos/12203460/pexels-photo-12203460.jpeg?cs=srgb&dl=pexels-ekaterina-12203460.jpg&fm=jpg"
                        alt="Image de la fac">
                    </div>
                  </div>
                  <div class="inline-flex w-full space-x-2">
                    <div class="w-2/3">
                      <img class="h-16 w-full object-cover rounded-xl"
                        src="https://images.pexels.com/photos/12203460/pexels-photo-12203460.jpeg?cs=srgb&dl=pexels-ekaterina-12203460.jpg&fm=jpg"
                        alt="Image de la fac">
                    </div>
                    <div class="w-1/3">
                      <img class="h-16 w-full object-cover rounded-xl"
                        src="https://images.pexels.com/photos/12203460/pexels-photo-12203460.jpeg?cs=srgb&dl=pexels-ekaterina-12203460.jpg&fm=jpg"
                        alt="Image de la fac">
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-3">
                <div class="relative mt-1">
                  <h2 class="text-gray-700 font-bold text-sm leading-tight">
                    Comment s'inscrire au CERSA ?
                  </h2>
                </div>
                <div class="mt-2">
                  <h6 class="text-sm leading-tight text-gray-400 line-clamp-3">Lorem ipsum dolor sit amet consectetur
                    adipisicing elit.
                    Fugiat pariatur quis sequi eligendi quasi cum! Rem.</h6>
                </div>
                <div class="mt-1 text-gray-500">
                  <h6 class="text-xs "><span>15
                      Nov.2021</span> -
                    lecture <span>5min</span></h6>
                </div>
              </div>
            </div>
            <div
              class="rounded-xl pt-3 pb-6 cursor-pointer hover:shadow-md w-full border border-blue-200  bg-blue-50 px-2">
              <div class="h-auto w-full relative mb-3">
                <div class="absolute rounded-full bg-red-600 text-white text-xs top-2 pb-0.5 right-2 px-3">
                  Nouveau
                </div>
                <div class="w-full">
                  <div class="inline-flex w-full space-x-2">
                    <div class="w-1/3">
                      <img class="h-16 w-full object-cover rounded-xl"
                        src="https://images.pexels.com/photos/12203460/pexels-photo-12203460.jpeg?cs=srgb&dl=pexels-ekaterina-12203460.jpg&fm=jpg"
                        alt="Image de la fac">
                    </div>
                    <div class="w-2/3">
                      <img class="h-16 w-full object-cover rounded-xl"
                        src="https://images.pexels.com/photos/12203460/pexels-photo-12203460.jpeg?cs=srgb&dl=pexels-ekaterina-12203460.jpg&fm=jpg"
                        alt="Image de la fac">
                    </div>
                  </div>
                  <div class="inline-flex w-full space-x-2">
                    <div class="w-2/3">
                      <img class="h-16 w-full object-cover rounded-xl"
                        src="https://images.pexels.com/photos/12203460/pexels-photo-12203460.jpeg?cs=srgb&dl=pexels-ekaterina-12203460.jpg&fm=jpg"
                        alt="Image de la fac">
                    </div>
                    <div class="w-1/3">
                      <img class="h-16 w-full object-cover rounded-xl"
                        src="https://images.pexels.com/photos/12203460/pexels-photo-12203460.jpeg?cs=srgb&dl=pexels-ekaterina-12203460.jpg&fm=jpg"
                        alt="Image de la fac">
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-3">
                <div class="relative mt-1">
                  <h2 class="text-gray-700 font-bold text-sm leading-tight">
                    Comment s'inscrire au CERSA ?
                  </h2>
                </div>
                <div class="mt-2">
                  <h6 class="text-sm leading-tight text-gray-400 line-clamp-3">Lorem ipsum dolor sit amet consectetur
                    adipisicing elit.
                    Fugiat pariatur quis sequi eligendi quasi cum! Rem.</h6>
                </div>
                <div class="mt-1 text-gray-500">
                  <h6 class="text-xs "><span>15
                      Nov.2021</span> -
                    lecture <span>5min</span></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden w-4/6 h-full bg-white rounded-xl ml-6 shadow-xl">
        <!-- new article editor -->
        <div>
          <div class="inline-flex w-full">
            <div class="md:w-full">
              <div id="page_count_ctn" class="inline-flex hidden mb-3 text-gray-500 w-full">
                <div class="flex items-start justify-between w-full">
                  <div class="flex justify-start">
                    <span class="inline-flex ml-1 mt-1">
                      <span style="font-size:15px;" class="mt-0.5 material-icons-outlined">
                        info
                      </span>
                      <p class="text-sm ml-1">Support optimal de documents au format
                        de
                        fichier A4
                      </p>
                    </span>
                  </div>
                  <div class="flex items-center inline-flex">
                    <p class="text-sm mt-1"><span id="page_count"></span> Page(s)</p>
                  </div>
                </div>
              </div>
              <div class="md:w-full bg-white rounded-lg">
                <div>
                  <!-- start hidden form -->
                  <form id="pressRelease_form" method="POST" enctype="multipart/form-data"
                    action="https://oreonyx.com/pressRelease" hidden="">
                    <input type="hidden" name="_token" value="zYwb0baxXmctu5DYNdKCD595bSFH7QIXz3m3eMfL"> <input
                      type="text" id="pressRelease_title" name="title">
                    <input type="text" id="pressRelease_type" name="type">
                    <input type="text" name="writer_id" value="3">
                    <input type="text" name="establishment_id" value="1">

                    <input accept="application/pdf" name="pressRelease" type="file" id="pressRelease_article">
                    <input
                      onchange="document.getElementById('articleCover').src = window.URL.createObjectURL(this.files[0]); document.getElementById('articleCover').classList.remove('hidden'); document.getElementById('articleCoverCtn').classList.remove('border-2');"
                      accept="image/*" name="pressRelease_cover_picture" type="file" id="article_cover_picture">
                  </form>
                  <!-- end hidden form -->
                </div>
                <div class="rounded-xl rounded-b-none p-3 text-white bg-blue-600 md:w-full">
                  <input x-model="publication_title" id="defaultTitle" type="text"
                    placeholder="Cliquez pour ajouter un titre"
                    class="bg-transparent text-xl font-bold p-0 border-0 focus:outline-none w-full placeholder-gray-300">
                  <div class="inline-flex text-white text-sm">
                    <p class=""><span class="cursor-pointer" title="Rédacteur">
                        John Doe </span>✶
                      Dernière modification - 14 Mai</p>
                    <span class="ml-2 cursor-pointer" title="l'Auto sauvegarde dans le cloud est activé">
                      <span style="font-size:18px;" class="material-symbols-outlined">
                        cloud_done
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="viewer" style="min-height:calc(100vh - 140px);"></div>
        </div>
        <!-- editing editor -->

      </div>
    </div>
  </div>
</template>

<script>
  import {
    ref
  } from 'vue'
  import Editor from '@/components/vendors/Editor.vue'

  export default {
    name: "Blog",
    components: {
      Editor
    },
    setup() {

      const showEditor = ref(false)

      const submitEditorForm = () => {
        showEditor.value = false
      }

      return {
        showEditor,
        submitEditorForm
      };
    },
  };
</script>