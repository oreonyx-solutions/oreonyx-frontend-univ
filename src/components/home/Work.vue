<template>
    <div style="width:calc(100% - 256px);" class="fixed bg-gray-100 h-full right-0 top-0 z-10 inline-flex p-5">
        <div class="absolute bottom-20 -left-7">
            <div class="">
                <button title="Cacher" @click="hideWorkSpace"
                    class="h-10 w-10 flex justify-center items-center bg-white hover:border rounded-full">
                    <span class="text-xl material-symbols-outlined">close</span>
                </button>
            </div>
        </div>
        <div class="mr-3 w-7/12 relative">
            <div v-if="showMembersList" >
                <div class="bg-white opacity-95  h-full w-10/12 absolute z-10"></div>
                <div class="h-full w-10/12 absolute z-20">
                    <div class="pl-6 pr-3 py-2 w-full">
                        <div class="flex items-start justify-between ">
                            <div class="flex justify-start">
                                <h6 class="font-bold mb-3">Membres (500)</h6>
                            </div>
                            <div class="items-center inline-flex">
                                <button title="Fermer" @click="showMembersList = false"
                                    class="rounded-full hover:bg-gray-200 h-8 w-8 flex justify-center items-center">
                                    <span class="text-lg material-symbols-outlined">
                                        close
                                    </span>
                                </button>
                            </div>
                        </div>

                    </div>
                    <div class="px-6 py-2 overflow-hidden overflow-y-auto">
                        <!-- member -->
                        <div class="
                        text-sm
                        font-medium
                        inline-flex
                        w-full
                        ">
                            <div class="p-0.5 rounded-md">
                                <div class="w-full rounded-xl relative">
                                    <div class="h-10 w-10">
                                        <img class="h-10 w-10 object-cover rounded-full"
                                            src="https://images.pexels.com/photos/11438396/pexels-photo-11438396.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                            alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="ml-2 relative w-full">
                                <h5 class="text-base">John Doe</h5>
                                <div class="inline-flex text-gray-400 absolute w-full">
                                    <span class="text-xs material-symbols-rounded mr-1 -mt-0.5">circle</span>
                                    <span class="font-base text-xs -mt-0.5">
                                        Hors ligne
                                    </span>
                                </div>
                            </div>

                        </div>
                        <!-- member -->
                        <!-- member -->
                        <div class="
                        rounded-md
                        text-sm
                        font-medium
                        inline-flex
                        w-full
                        ">
                            <div class="p-0.5 rounded-md">
                                <div class="w-full rounded-xl relative">
                                    <div class="h-10 w-10">
                                        <img class="h-10 w-10 object-cover rounded-full"
                                            src="https://images.pexels.com/photos/11438396/pexels-photo-11438396.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                            alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="ml-2 relative min-w-full">
                                <h5 class="text-base">John Doe</h5>
                                <div class="inline-flex text-green-700 absolute w-full">
                                    <span class="text-xs material-symbols-rounded mr-1 -mt-0.5">circle</span>
                                    <span class="font-base text-xs -mt-0.5">
                                        Connecté
                                    </span>
                                </div>
                            </div>

                        </div>
                        <!-- member -->
                    </div>
                </div>
            </div>
            <div class="top-0 h-full flex flex-col md:h-full">
                <div class="bg-white rounded-t-xl">
                    <div class="grid grid-cols-3 border-b px-6 py-2 relative">
                        <div @click="showMembersList = true" title="Afficher tous les membres du groupe" class="cursor-pointer relative flex items-center">
                            <div class="flex -space-x-1 overflow-hidden">
                                <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="">
                                <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="">
                                <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                    alt="">
                                <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="">
                            </div>
                            <div
                                class="text-white pb-0.5 bg-gray-600 py-0 px-1.5 rounded-full flex justify-center items-center">
                                <h6 style="font-size:12px">100+</h6>
                            </div>
                        </div>
                        <div class="flex justify-center items-center">
                            <div>
                                <div v-if="showUnitList" class="absolute bg-white rounded-md shadow pt-2 pb-3">
                                   <div @click="getSelectedTeachingUnit()" class="px-4 font-base text-sm hover:bg-gray-100 hover:text-gray-400 cursor-pointer">Math 100</div>
                                   <div @click="getSelectedTeachingUnit()" class="px-4 font-base text-sm  hover:bg-gray-100 hover:text-gray-400 cursor-pointer">Math 150</div>
                                   <div @click="getSelectedTeachingUnit()" class="px-4 font-base text-sm  hover:bg-gray-100 hover:text-gray-400 cursor-pointer">Math 200</div>
                                    <div @click="getSelectedTeachingUnit()" class="px-4 font-base text-sm  hover:bg-gray-100 hover:text-gray-400 cursor-pointer">Math 100</div>
                                   <div @click="getSelectedTeachingUnit()" class="px-4 font-base text-sm  hover:bg-gray-100 hover:text-gray-400 cursor-pointer">Math 150</div>
                                   <div @click="getSelectedTeachingUnit()" class="px-4 font-base text-sm  hover:bg-gray-100 hover:text-gray-400 cursor-pointer">Math 200</div>
                                </div>
                                <button title="Changer d'Unités d'enseignement" @click="showUnitList = true"
                                    class="text-gray-400 hover:text-gray-600 pl-3 hover:shadow pr-2 bg-white rounded-md inline-flex">
                                    <span class="font-base text-sm text-center mt-0.5">Math 100</span>
                                    <span class="material-symbols-outlined ml-1 -mt-0.5 text-lg">expand_more</span>
                                </button>
                                <div
                                    class="absolute px-3 text-xs text-white bg-teal-800 -bottom-8 left-3 py-0.5 rounded-md uppercase inline-flex">
                                    <span class="relative flex h-2 w-2 mr-1 mt-1">
                                        <span
                                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                        <span class="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                                    </span>
                                    <div>Enregistrement en cours</div>
                                </div>
                            </div>
                        </div>
                        <div class="relative flex items-center text-gray-500">
                            <div class="absolute inline-flex right-0">
                                <button title="Rechercher dans cet groupe"
                                    class="rounded-full hover:bg-gray-100 h-8 w-8 flex justify-center items-center">
                                    <span class="text-lg material-symbols-outlined">
                                        search
                                    </span>
                                </button>
                                <button title="Lancer une visioconférence"
                                    class="h-8 w-8 rounded-full hover:bg-gray-100 flex justify-center items-center">
                                    <span class="text-lg material-symbols-outlined">
                                        voice_chat
                                    </span>
                                </button>
                                <button title="Plus d'actions"
                                    class="h-8 w-8 rounded-full hover:bg-gray-100 flex justify-center items-center">
                                    <span class="text-base material-symbols-outlined">
                                        more_horiz
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class=" w-full bg-gray-600">
                        <video controls>
                            <source :src="'public/assets/videos/LDC.mp4'" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div class="bg-white flex-grow rounded-b-xl mb-3 overflow-hidden">
                    <div class="px-6 space-y-3 pt-6 pb-3 overflow-y-auto h-full bg-gradient-to-br from-yellow-100 via-green-300 to-yellow-100">
                         
                        <!-- start message-->
                        <div class="w-full inline-flex">
                            <div class="hidden w-6/12"></div>
                            <span class="inline-flex w-6/12">
                                <div class="w-36 h-8">
                                    <img class="h-full w-full rounded-full object-cover"
                                        :src="'https://images.pexels.com/photos/12082493/pexels-photo-12082493.jpeg?cs=srgb&dl=pexels-elena-rubtsova-12082493.jpg&fm=jpg'"
                                        alt="Photo de profil" />
                                </div>
                                <div class="text-sm ml-3 bg-white px-3 py-2 rounded-md">
                                    <div class="mt-0.5 relative">
                                        <div class="h-3.5 w-3.5 transform rotate-45 bg-white absolute -left-4 -top-1.5">
                                        </div>
                                        <div class="inline-flex">
                                            <h5 class="text-sm line-clamp-1 mt-0.5 font-bold text-teal-600">Da'Silvera
                                                Jeremie</h5>
                                        </div>
                                        <h6 class="leading-tight">That We are currently develop our sales litterrature
                                            et our website are
                                            interessing to translate these
                                            into five languages. zoo </h6>
                                    </div>
                                </div>
                            </span>
                        </div>
                        <!-- end message-->
                        <!-- start message-->
                        <div class="w-full inline-flex">
                            <div class="w-6/12"></div>
                            <span class="inline-flex w-6/12">
                                <div class="w-36 h-8">
                                    <img class="h-full w-full rounded-full object-cover"
                                        :src="'https://images.pexels.com/photos/12082493/pexels-photo-12082493.jpeg?cs=srgb&dl=pexels-elena-rubtsova-12082493.jpg&fm=jpg'"
                                        alt="Photo de profil" />
                                </div>
                                <div class="text-sm ml-3 bg-white px-3 py-2 rounded-md">
                                    <div class="mt-0.5 relative">
                                        <div class="h-3.5 w-3.5 transform rotate-45 bg-white absolute -left-4 -top-1.5">
                                        </div>
                                        <div class="inline-flex">
                                            <h5 class="text-sm line-clamp-1 mt-0.5 font-bold text-teal-600">Da'Silvera
                                                Jeremie</h5>
                                        </div>
                                        <h6 class="leading-tight">We are currently develop our sales litterrature et our
                                            website are
                                            interessing to translate these
                                            into five languages. zoo </h6>
                                    </div>
                                </div>
                            </span>
                        </div>
                        <!-- end message-->
                    </div>
                </div>
                <div class="rounded-xl inline-flex px-2 bg-white shadow">
                    <div class="relative flex items-center text-gray-500 w-1/12 ">
                        <div class="flex -space-x-1 overflow-hidden absolute space-x-0.5">
                            <button title="Envoyer un emoji"
                                class="rounded-full h-8 w-8 flex justify-center items-center">
                                <img class="h-6" :src="'public/assets/icons/grinning-face_1f600.png'" alt="" />
                            </button>
                            <button title="Envoyer un fichier"
                                class="h-8 w-8 rounded-full hover:bg-gray-200 flex justify-center items-center">
                                <span class="text-lg material-symbols-outlined">
                                    attach_file
                                </span>
                            </button>
                        </div>
                    </div>

                    <div class="w-10/12">
                        <input autofocus placeholder="Message" type="text"
                            class="border-transparent focus:border-transparent focus:ring-0 w-full rounded-md">
                    </div>
                    <div class="w-1/12 relative flex items-center text-gray-500">
                        <div class="absolute inline-flex right-0 space-x-1">
                            <button title="Envoyer un message audio"
                                class="rounded-full hover:bg-gray-200 h-8 w-8 flex justify-center items-center">
                                <span class="text-lg material-symbols-outlined">
                                    mic
                                </span>
                            </button>
                            <button title="Envoyer"
                                class="h-8 w-8 text-white rounded-lg hover:bg-sky-300 bg-gradient-to-b from-sky-300 to-sky-600 flex justify-center items-center">
                                <span class="text-base material-symbols-outlined">
                                    send </span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="w-5/12 bg-white p-4 rounded-xl flex flex-col md:h-full relative">
            <div class="h-64 relative">
                <button title="Editer l'Unité d'enseignement"
                    class="z-10 text-white rounded-full absolute h-14 w-14 hover:bg-sky-300 bg-gradient-to-b from-sky-300 to-sky-600 bottom-5 right-5 flex justify-center items-center">
                    <span class="material-symbols-outlined">
                        edit
                    </span>
                </button>
                <img class="h-full w-full object-cover rounded-xl"
                    src="https://images.pexels.com/photos/11438396/pexels-photo-11438396.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="">
            </div>

            <div class="mt-2 bg-gray-50 w-full h-10 grid grid-cols-3 p-1 gap-2 pb-1">
                <button @click="swithBetweenTabs('general')"
                    :class="{'bg-white shadow text-black' : currentTab == 'general'}"
                    class="text-gray-500 hover:text-black hover:bg-white px-3 py-1 text-sm rounded-md">Générale</button>
                <button @click="swithBetweenTabs('files')"
                    :class="{'bg-white shadow text-black' : currentTab == 'files'}"
                    class="text-gray-500 hover:text-black hover:bg-white px-3 py-1 text-sm rounded-md">Fichiers</button>
                <button @click="swithBetweenTabs('links')"
                    :class="{'bg-white shadow text-black' : currentTab == 'links'}"
                    class="text-gray-500 hover:text-black hover:bg-white px-3 py-1 text-sm rounded-md">Liens</button>
            </div>
            <div class="flex-grow relative h-full overflow-hidden overflow-y-auto">
                <div class="tabs">
                    <div v-if="tabs.general" class="p-3 hover:bg-gray-50 text-gray-400 rounded-lg ">
                        <div class="inline-flex">
                            <span class="material-symbols-outlined mr-2">
                                info
                            </span>
                            <h6 class="text-xs uppercase mt-1">Informations</h6>
                        </div>
                        <div class="">
                            <h5 class="leading-tight text-gray-600">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum blanditiis voluptates
                                repellendus dolorum
                                magnam temporibus, adipisci a dolore rerum reprehenderit.
                            </h5>
                            <hr class="my-3">
                            <h5 class="leading-tight text-gray-600 text-sm inline-flex w-full">
                                <span class="text-lg material-symbols-outlined mr-1 -mt-1.5">stars</span>
                                <span class="font-bold">UE</span>: Math 100
                            </h5>
                            <h5 class="leading-tight text-gray-600 text-sm inline-flex w-full">
                                <span class="text-lg material-symbols-outlined mr-1 -mt-1.5">home_max_dots</span>
                                <span class="font-bold">Credits</span>: 4
                            </h5>
                            <h5 class="leading-tight text-gray-600 text-sm inline-flex w-full">
                                <span class="text-lg material-symbols-outlined mr-1 -mt-1.5">people</span>
                                <span class="font-bold">Concernés</span>: 1500
                            </h5>
                            <h5 class="leading-tight text-gray-600 text-sm inline-flex w-full">
                                <span class="text-lg material-symbols-outlined mr-1 -mt-1.5">location_home</span>
                                <span class="font-bold">Faculté de</span>: Mathématiques
                            </h5>
                            <h5 class="leading-tight text-gray-600 text-sm inline-flex w-full">
                                <span class="text-lg material-symbols-outlined mr-1 -mt-1.5">person</span>
                                <span class="font-bold">Professeur titulaire</span>: AKAPKO komi
                            </h5>
                            <h5 class="leading-tight text-gray-600 text-sm inline-flex w-full">
                                <span class="text-lg material-symbols-outlined mr-1 -mt-1.5">school</span>
                                <span class="font-bold">Année académique</span>: 2022 - 2023
                            </h5>
                        </div>
                        <todo />
                    </div>
                    <div v-if="tabs.files" class="pt-3 px-3 space-y-2">
                        <!-- file -->
                        <div class="inline-flex text-red-600 cursor-pointer">
                            <div class="bg-red-100 rounded-xl h-10 w-10 flex justify-center items-center"> 
                                <span class=" material-symbols-outlined">description</span>
                            </div>
                            <div class="ml-2 relative">
                                <h5 class="text-base line-clamp-1">Fascicule de mnemotechnique</h5>
                                <h6 class="text-xs inline-flex -mt-1 absolute opacity-70">
                                    <span>pdf</span>
                                    <span style="font-size:10px" class="material-symbols-rounded mx-2 mt-1">circle</span>
                                    <span>13-02-2022</span>
                                </h6>
                            </div>
                        </div>
                        <!-- file -->
                        <!-- file -->
                        <div class="inline-flex text-blue-600 cursor-pointer">
                            <div class="bg-blue-100 rounded-xl h-10 w-10 flex justify-center items-center"> 
                                <span class=" material-symbols-outlined">description</span>
                            </div>
                            <div class="ml-2 relative">
                                <h5 class="text-base line-clamp-1">Fascicule de mnemotechnique</h5>
                                <h6 class="text-xs inline-flex -mt-1 absolute opacity-70">
                                    <span>MS Word</span>
                                    <span style="font-size:10px" class="material-symbols-rounded mx-2 mt-1">circle</span>
                                    <span>13-02-2022</span>
                                </h6>
                            </div>
                        </div>
                        <!-- file -->
                    </div>
                    <div v-if="tabs.links" class="pt-3 px-3 space-y-2">
                        <!-- links -->
                        <a target="_blank" href="https://google.com">
                         <div class="inline-flex text-green-600 cursor-pointer">
                             <div class="bg-green-100 rounded-xl h-10 w-10 flex justify-center items-center"> 
                                <span class=" material-symbols-outlined">link</span>
                             </div>

                            <div class="ml-2 relative">
                                <h5 class="text-base mt-2">https://google.com</h5>
                            </div>
                        </div>
                        </a>
                        <!-- links -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Todo from '@/components/home/Todo.vue'
    import store from "../../store";

    import {
        ref,
        onMounted
    } from 'vue'

    export default {
        name: "Work",
        components: {
            Todo
        },
        setup() {

            const showMembersList = ref(false)
            const showUnitList = ref(false)

            const tabs = ref({
                general: true,
                files: false,
                links: false,
            })

            const state = ref({
                workSpaces: [],
                currentWorkSpace: [],
                currentTeachingUnit:{}
            })

            let currentTab = ref(null)

            const swithTabFromTrueToFalse = (element) => {
                switch (element) {
                    case 'general':
                        tabs.value.general = true
                        tabs.value.files = false
                        tabs.value.links = false
                        break;
                    case 'files':
                        tabs.value.general = false
                        tabs.value.files = true
                        tabs.value.links = false
                        break;
                    default:
                        tabs.value.general = false
                        tabs.value.files = false
                        tabs.value.links = true
                        break;
                }
                currentTab.value = element
            }

            const swithBetweenTabs = (tabName) => {
                swithTabFromTrueToFalse(tabName)
            }

            const hideWorkSpace = () => {
                store.state.toggleWorkSpace = false
            }

            const getSelectedTeachingUnit = (TUId) => {
                //request to get getUnitList
                //if res then update currentTeachingUnit
                showUnitList.value = false
            }
                
  

            return {
                swithTabFromTrueToFalse,
                swithBetweenTabs,
                currentTab,
                showMembersList,
                tabs,
                hideWorkSpace,
                state,
                showUnitList,
                getSelectedTeachingUnit
            }
        }
    }
</script>

<style>

</style>