<template>

  <div class="w-4/5 2xl:w-10/12 px-6 pb-6 h-full absolute right-0 top-0 pt-5">
    <div v-if="showEditor" class="z-30 rounded-md pb-2  right-0 h-100 bg-white w-full">
      <div class="">
        <div class="flex items-start justify-between">
          <div class="flex justify-start w-full">
            <div class="inline-flex w-2/3">
              <input placeholder="Titre de l'article..." class="w-full p-0 border-0 font-bold text-blue text-xl" type="text">
            </div>
          </div>
          <div class="items-center inline-flex">
             <button title="Voir un aperçu" class="mr-3 text-sm hover:bg-blue-600 hover:text-white text-blue-600 bg-white rounded-full border border-blue-600 px-3 py-0 inline-flex">
                <span class="material-symbols-outlined text-base mr-2">visibility</span>
                <span class="mt-0.5">Aperçu</span>
              </button>
            <button title="Annuler" @click="showEditor = false"
              class="rounded-full text-xs text-gray-600 font-medium flex justify-center items-center">
              <span class="material-symbols-rounded">
                close
              </span>
            </button>
          </div>
        </div>
      </div>
      <label for="articleCover" class="cursor-pointer" title="Cliquez pour modifier l'image de couverture">
      <div class="h-64 bg-gray-50 w-full my-6 rounded-md">
        <img class="object-cover h-full w-full rounded-md" src="https://images.pexels.com/photos/2171277/pexels-photo-2171277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      </div>
      </label>
      <input hidden id="articleCover" type="file">
      <QuillEditor ref="quill" theme="snow" toolbar="#custom-toolbar">
        <template class="bg-blue-600 text-white" #toolbar>
          <div id="custom-toolbar">
            <select class="ql-size">
              <option value="small"></option>
              <option selected></option>
              <option value="large"></option>
              <option value="huge"></option>
            </select>
            <select class="ql-header">
              <option value="1"></option>
              <option value="2"></option>
              <option value="3"></option>
              <option value="4"></option>
              <option value="5"></option>
              <option value="6"></option>
              <option selected></option>
            </select>
            <button class="ql-bold"></button>
            <button class="ql-italic"></button>
            <button class="ql-underline"></button>
            <button class="ql-strike"></button>
            <button class="ql-script" value="sub"></button>
            <button class="ql-script" value="super"></button>
            <select class="ql-align">
              <option selected></option>
              <option value="center"></option>
              <option value="right"></option>
              <option value="justify"></option>
            </select>
            <button class="ql-list" value="ordered"></button>
            <button class="ql-list" value="bullet"></button>
            <button class="ql-blockquote"></button>
            <button class="ql-code-block"></button>
            <button class="ql-link"></button>
            <button class="ql-image"></button>
          </div>
        </template>
      </QuillEditor>
    </div>
    <div v-if="!showEditor" class="">
      <div class="inline-flex w-full">
        <Search />
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
            <div class="items-center inline-flex">
              <button title="Créer un article"  @click="showEditor = true"
                    class="z-10 text-white rounded-full h-10 w-10 hover:bg-blue-300 bg-gradient-to-b from-blue-300 to-blue-600 bottom-5 right-5 flex justify-center items-center">
                    <span class="text-sm material-symbols-outlined">
                        edit
                    </span>
                </button>
            </div>
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
            <!-- write communication  zaza -->
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
              </div>
            </div>
            <div class="grid grid-cols-3 gap-3">
              <div class="rounded-xl pt-3 pb-3 cursor-pointer hover:shadow-md w-full border bg-white px-2">
                <div class="h-auto w-full relative mb-3">
                  <div class="absolute rounded-full bg-red-600 text-white text-xs top-2 pb-0.5 right-2 px-3">
                    Nouveau
                  </div>
                  <div class="w-full">
                    <div class="inline-flex w-full space-x-2">
                      <img class="h-32 w-full object-cover rounded-xl"
                        src="https://images.pexels.com/photos/12203460/pexels-photo-12203460.jpeg?cs=srgb&dl=pexels-ekaterina-12203460.jpg&fm=jpg"
                        alt="Image de la fac">
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
                <hr class="my-2">
                <div class="mt-2 flex items-start justify-between">
                  <div class="flex justify-start space-x-1">
                    <button @click="showArticle(article)" title="Afficher les détails de cette faculté"
                      class="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 text-xs rounded-md">Lire
                      l'article</button>
                    <button @click="getArticle(article)" title="Editer cet article"
                      class="group h-6 w-6 text-gray-400 hover:text-blue-600 rounded-md hover:bg-blue-100 flex justify-center items-center">
                      <span class="text-sm material-icons-outlined">edit</span>
                    </button>
                    <button title="Supprimer cet article" @click="deleteArticle(article)"
                      class="group h-6 w-6 text-gray-400 hover:text-blue-600 rounded-md hover:bg-blue-100 flex justify-center items-center">
                      <span class="text-sm material-icons-outlined">delete</span>
                    </button>
                  </div>
                  <div class="items-center inline-flex">
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
  </div>
</template>

<script>
  import {
    ref
  } from 'vue'

  //import search component
  import Search from '@/components/utils/Search.vue'
  import {
    QuillEditor
  } from '@vueup/vue-quill'
  import '@vueup/vue-quill/dist/vue-quill.snow.css'

  export default {
    name: "Blog",
    components: {
      QuillEditor,
      Search
    },
    setup() {

      const showEditor = ref(false)


      const submitArticle = () => {
        store.apiCallMethods.post('/link', data).then(
          (res) => {
            if (res) {
              console.log('response', res)
              //showEditor.value = false
            }
          })
      }

      const deleteArticle = (statementId) => {
        store.apiCallMethods.delete('/link').then(
          (res) => {
            if (res) {
              console.log('response', res)
            }
          })
      }

      const getArticle = () => {
        store.apiCallMethods.get('/link').then(
          (res) => {
            if (res) {
              console.log('response', res)
              // treatement
            }
          })
      }

      const getArticles = () => {
        store.apiCallMethods.get('/link').then(
          (res) => {
            if (res) {
              console.log('response', res)
              communications.list.value = res.data
              //all type of statements are in this data object (important, ...etc)
            }
          })
      }

      return {
        showEditor,
        submitArticle
      };
    },
  };
</script>