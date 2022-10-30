<template>
  <div class="absolute right-5 z-10 top-1 text-xs">
    <span class="hidden" @click="showFacultyDetails = false">Fermer</span>
  </div>
  <div class="w-4/5 2xl:w-10/12 px-6 py-6 h-full absolute right-0 top-0 bg-gray-50 overflow-hidden">
    <div class="h-full flex-grow inline-flex w-full relative">
      <Transition>
        <div v-if="showFacultyDetails"
          class="overflow-hidden absolute bg-white border-t-0 border rounded-lg top-0 h-full w-full z-10">
          <div class="bg-indigo-600 h-6 w-full rounded-t-lg">
            <div class="flex items-start justify-between py-1 px-3 text-white text-xs">
              <div class="justify-start">
                <span>{{ state.currentFaculty.name }}</span>
                <span v-if="state.currentSpeciality && showSpecialityDetails == true">
                  > {{ state.currentSpeciality.name }}({{ state.currentSpeciality.acronym }})</span>
                <span v-if="state.currentMatter && showMatterDetails == true">
                  > {{ state.currentMatter.name }}</span>
                <span v-if="state.currentTeachingUnit && showTeachingUnitDetails == true">
                  > {{ state.currentTeachingUnit.code }}</span>
              </div>
              <div class="items-center inline-flex space-x-2">
                <span title="Retour à la liste des facultés" class="cursor-pointer hover:text-gray-50"
                  @click="showFacultyDetails = false">Fermer</span>
              </div>
            </div>
          </div>
          <div class="inline-flex w-full mt-1 p-2 h-full">
            <div class="w-4/12 2xl:w-3/12 border-r flex flex-col">
              <div class="flex-grow">
                <div class="w-full pl-1 pr-4 rounded-md">
                  <div class="h-20 w-full mb-3 rounded-md relative">
                    <img class="h-20 w-full object-cover rounded-t-md"
                      src="https://images.pexels.com/photos/12203460/pexels-photo-12203460.jpeg?cs=srgb&dl=pexels-ekaterina-12203460.jpg&fm=jpg"
                      alt="Image de la fac">
                    <div class="h-14 w-14 p-1 bg-white rounded-xl absolute -bottom-5 left-4">
                      <img class="h-auto object-scale-down" src="../../../public/assets/default_establishment_pp.png"
                        alt="Photo de profil">
                    </div>
                    <div class="-bottom-2 left-20 flex -space-x-1 overflow-hidden absolute">
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
                  </div>
                  <div class="px-4 pb-4">
                    <div class="relative mt-4">
                      <h2 class="text-gray-700 font-bold text-base leading-tight">
                        {{ state.currentFaculty.name }} ({{ state.currentFaculty.acronym }})
                      </h2>
                    </div>
                    <div class="mt-2">
                      <h6 class="text-sm leading-tight text-gray-400">{{ state.currentFaculty.description }}</h6>
                    </div>
                  </div>
                  <hr class="my-3">

                </div>
              </div>
            </div>

            <div class="w-8/12 2xl:w-9/12 relative">
              <Transition>
                <div v-if="showSpecialityDetails"
                  class="pt-2 pl-4 pr-3 h-full flex flex-col backdrop-blur-2xl bg-white/30  w-full absolute z-20">
                  <div class="flex items-start justify-between w-full mb-2">
                    <div class="flex justify-start w-1/2">
                      <button @click="showSpecialityDetails = false" title="Retour"
                        class="px-3 py-0.5 rounded-md inline-flex bg-white border text-sm justify-center mr-2">
                        <span class="material-symbols-outlined">keyboard_return</span>
                      </button>
                      <input placeholder="Rechercher une matière..." name="q-matter" v-model="qMatter" type="search"
                        class="block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs" />
                    </div>
                    <div class="items-center inline-flex relative">
                      <button class="px-3 py-1 rounded-md inline-flex bg-white text-sm justify-center">
                        <h6 title="Ce bouton ouvrira un modal qui affichera toutes les infos de l'entité"
                          class="mt-0.5 text-xs">En savoir plus</h6>
                      </button>
                      <button title="Style d'affichage"
                        class="px-3 py-1 rounded-md inline-flex bg-white border text-sm justify-center">
                        <span class="text-sm material-symbols-outlined mr-2">grid_view</span>
                        <h6 class="mt-0.5 text-xs">Grille</h6>
                        <span class="text-sm material-symbols-outlined ml-2">expand_more</span>
                      </button>
                    </div>
                  </div>
                  <hr />
                  <div class="flex items-start justify-between py-2 ">
                    <div class="flex justify-start pl-2">
                      <div>
                        <h6 class="text-xs" style="font-family: 'JetBrains Mono', monospace">Liste des matières
                          (<span v-if="true">0</span>{{ state.currentSpeciality.categories.length }})
                        </h6>
                      </div>
                    </div>
                    <div class="items-center inline-flex relative">
                      <Transition>
                        <div v-if="showMatterForm" style="width:400px;"
                          class="z-10 h-auto bg-white absolute right-0 top-10 shadow-md rounded-md border border-t-0">
                          <div class="rounded-t-md w-full h-8 py-1 bg-indigo-600 px-3 text-white">
                            <div class="flex items-start justify-between ">
                              <div class="flex justify-start">
                                <span class="material-symbols-outlined text-xl -mt-0.5 ">
                                  apps
                                </span>
                                <h6 class="text-sm ml-2 mt-0.5 font-medium">Ajouter une matière</h6>
                              </div>
                              <div class="items-center inline-flex relative">
                                <button title="Fermer" class="cursor-pointer" @click="showMatterForm = false">
                                  <span class="material-symbols-outlined">
                                    close
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="p-3 w-full h-full space-y-1.5">
                            <input type="hidden" v-model="matterFormData.facultyId" />
                            <input placeholder="Nom de la matière" name="name" v-model="matterFormData.name"
                              class="block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs" />
                            <textarea v-model="matterFormData.description" style="resize: none;" rows="6"
                              placeholder="Description" name="name"
                              class="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"></textarea>
                            <button title="Ajouter une nouvelle matière" @click="submitMatterForm('add')"
                              class="shadow-indigo-500/50 shadow-lg px-4 py-2 rounded-md inline-flex text-white bg-indigo-600 text-sm w-full justify-center"><span
                                class="mt-0.5">Ajouter une matière</span>
                            </button>
                          </div>
                        </div>
                      </Transition>

                      <div class="-mt-1 h-6 w-6 bg-white shadow rounded-full flex justify-center items-center">
                        <button title="Ajouter une matière" @click="showMatterForm = true"
                          class="rounded-full text-xs font-medium flex justify-center items-center">
                          <span class="text-lg material-symbols-rounded">
                            add_circle
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="flex-grow overflow-hidden overflow-y-auto relative">
                    <div class="grid grid-cols-3 2xl:grid-cols-4 gap-1">
                      <div v-for="matter in state.currentSpeciality.categories" :key="matter.id">
                        <div class="border border-indigo-50 h-52 rounded-md flex justify-center items-center relative">
                          <div @click="getMatter(matter.id)" title="Voir la matière"
                            class="cursor-pointer h-40 w-40 text-white rounded-xl hover:bg-indigo-300 bg-gradient-to-b from-indigo-300 to-indigo-600 absolute flex justify-center items-center">
                            <div
                              class="h-20 w-20 border border-indigo-300 rounded-full flex justify-center items-center">
                              <h5 class="text-sm">{{ matter.name }}</h5>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </Transition>

              <Transition>
                <div v-if="showMatterDetails"
                  class="pt-2 pl-4 pr-3 h-full flex flex-col backdrop-blur-2xl bg-white/30  w-full absolute z-30">
                  <div class="flex items-start justify-between w-full mb-2">
                    <div class="flex justify-start w-1/2">
                      <button @click="showMatterDetails = false" title="Retour à la liste des matières"
                        class="px-3 py-0.5 rounded-md inline-flex bg-white border text-sm justify-center mr-2">
                        <span class="material-symbols-outlined">keyboard_return</span>
                      </button>
                      <input placeholder="Rechercher une UE..." name="q-UE" v-model="qUE" type="search"
                        class="block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs" />
                    </div>
                    <div class="items-center inline-flex relative">
                      <button class="px-3 py-1 rounded-md inline-flex bg-white text-sm justify-center">
                        <h6 title="Ce bouton ouvrira un modal qui affichera toutes les infos de l'entité"
                          class="mt-0.5 text-xs">En savoir plus</h6>
                      </button>
                      <button title="Style d'affichage"
                        class="px-3 py-1 rounded-md inline-flex bg-white border text-sm justify-center">
                        <span class="text-sm material-symbols-outlined mr-2">grid_view</span>
                        <h6 class="mt-0.5 text-xs">Grille</h6>
                        <span class="text-sm material-symbols-outlined ml-2">expand_more</span>
                      </button>
                    </div>
                  </div>
                  <hr />
                  <div class="flex items-start justify-between py-2 ">
                    <div class="flex justify-start pl-2">
                      <div>
                        <h6 class="text-xs" style="font-family: 'JetBrains Mono', monospace">Liste des Unités
                          d'enseignements
                          (<span v-if="true">0</span>{{ state.currentMatter.teachingUnits.length }})
                        </h6>
                      </div>
                    </div>
                    <div class="items-center inline-flex relative">
                      <Transition>
                        <div v-if="showTeachingUnitForm" style="width:400px;"
                          class="z-10 h-auto bg-white absolute right-0 top-10 shadow-md rounded-md border border-t-0">
                          <div class="rounded-t-md w-full h-8 py-1 bg-indigo-600 px-3 text-white">
                            <div class="flex items-start justify-between ">
                              <div class="flex justify-start">
                                <span class="material-symbols-outlined text-xl -mt-0.5 ">
                                  apps
                                </span>
                                <h6 class="text-sm ml-2 mt-0.5 font-medium">Ajouter une Unité d'Enseignement</h6>
                              </div>
                              <div class="items-center inline-flex relative">
                                <button title="Fermer" class="cursor-pointer" @click="showTeachingUnitForm = false">
                                  <span class="material-symbols-outlined">
                                    close
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="p-3 w-full h-full space-y-1.5">
                            <input placeholder="Nom de l'UE'" name="name" v-model="teachingUnitFormData.name"
                              class="block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs" />
                            <input placeholder="Code de l'UE'" name="name" v-model="teachingUnitFormData.code"
                              class="block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs" />
                            <input placeholder="Nombre de credits" name="name"
                              v-model.number="teachingUnitFormData.credits"
                              class="block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs" />
                            <textarea v-model="teachingUnitFormData.description" style="resize: none;" rows="6"
                              placeholder="Description" name="name"
                              class="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"></textarea>
                            <button title="Ajouter une Unité d'Enseignement" @click="submitTeachingUnitForm('add')"
                              class="shadow-indigo-500/50 shadow-lg px-4 py-2 rounded-md inline-flex text-white bg-indigo-600 text-sm w-full justify-center"><span
                                class="mt-0.5">Ajouter une UE</span>
                            </button>
                          </div>
                        </div>
                      </Transition>

                      <div class="-mt-1 h-6 w-6 bg-white shadow rounded-full flex justify-center items-center">
                        <button title="Ajouter une Unité d'Enseignement" @click="showTeachingUnitForm = true"
                          class="rounded-full text-xs font-medium flex justify-center items-center">
                          <span class="text-lg material-symbols-rounded">
                            add_circle
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="flex-grow overflow-hidden overflow-y-auto relative">
                    <div class="grid grid-cols-3 2xl:grid-cols-4 gap-1">
                      <div v-for="eu in state.currentMatter.teachingUnits" :key="eu.id">
                        <div class="border border-indigo-50 h-52 rounded-md flex justify-center items-center relative">
                          <div @click="getTeachingUnitByCode(eu.code)"
                            class="cursor-pointer h-40 w-40 text-white rounded-xl hover:bg-indigo-300 bg-gradient-to-b from-indigo-300 to-indigo-600 absolute flex justify-center items-center">
                            <div class="p-3 rounded-full">
                              <span class="bg-white p-0.5 text-indigo-600 text-xs rounded-xl px-2">{{ eu.code }}</span>
                              <h5 class="text-sm line-clamp-2">{{ eu.name }}</h5>
                              <hr class="my-2 border border-t-indigo-500">
                              <h5 class="text-sm">Credits: {{ eu.credits }}</h5>
                              <h5 class="text-sm">Groupes: {{ eu._count.groups }}</h5>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </Transition>

              <Transition>
                <div v-if="showTeachingUnitDetails"
                  class="pt-2 pl-4 pr-3 h-full flex flex-col backdrop-blur-2xl bg-white/30  w-full absolute z-30">
                  <div class="flex items-start justify-between w-full mb-2">
                    <div class="flex justify-start w-1/2">
                      <button @click="showTeachingUnitDetails = false" title="Retour à la liste des matières"
                        class="px-3 py-0.5 rounded-md inline-flex bg-white border text-sm justify-center mr-2">
                        <span class="material-symbols-outlined">keyboard_return</span>
                      </button>
                      <input placeholder="Rechercher un groupe..." name="q-Group" v-model="qGroup" type="search"
                        class="block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs" />
                    </div>
                    <div class="items-center inline-flex relative">
                      <button title="Style d'affichage"
                        class="px-3 py-1 rounded-md inline-flex bg-white border text-sm justify-center">
                        <span class="text-sm material-symbols-outlined mr-2">grid_view</span>
                        <h6 class="mt-0.5 text-xs">Grille</h6>
                        <span class="text-sm material-symbols-outlined ml-2">expand_more</span>
                      </button>
                    </div>
                  </div>
                  <hr />
                  <div class="flex items-start justify-between py-2">
                    <div class="flex justify-start">
                      <div>
                        <h6 class="text-xs" style="font-family: 'JetBrains Mono', monospace">Liste des groupes
                          (<span v-if="true">0</span>{{ state.currentTeachingUnit.groups.length }})
                        </h6>
                      </div>
                    </div>
                    <div class="items-center inline-flex relative">
                      <Transition>
                        <div v-if="showTeachingUnitForm" style="width:400px;"
                          class="z-10 h-auto bg-white absolute right-0 top-10 shadow-md rounded-md border border-t-0">
                          <div class="rounded-t-md w-full h-8 py-1 bg-indigo-600 px-3 text-white">
                            <div class="flex items-start justify-between ">
                              <div class="flex justify-start">
                                <span class="material-symbols-outlined text-xl -mt-0.5 ">
                                  apps
                                </span>
                                <h6 class="text-sm ml-2 mt-0.5 font-medium">Ajouter un groupe</h6>
                              </div>
                              <div class="items-center inline-flex relative">
                                <button title="Fermer" class="cursor-pointer" @click="showTeachingUnitForm = false">
                                  <span class="material-symbols-outlined">
                                    close
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="p-3 w-full h-full space-y-1.5">
                            <input placeholder="Nom de l'UE'" name="name" v-model="teachingUnitFormData.name"
                              class="block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs" />
                            <input placeholder="Code de l'UE'" name="name" v-model="teachingUnitFormData.code"
                              class="block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs" />
                            <input placeholder="Nombre de credits" name="name"
                              v-model.number="teachingUnitFormData.credits"
                              class="block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs" />
                            <textarea v-model="teachingUnitFormData.description" style="resize: none;" rows="6"
                              placeholder="Description" name="name"
                              class="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"></textarea>
                            <button title="Ajouter une Unité d'Enseignement" @click="submitTeachingUnitForm('add')"
                              class="shadow-indigo-500/50 shadow-lg px-4 py-2 rounded-md inline-flex text-white bg-indigo-600 text-sm w-full justify-center"><span
                                class="mt-0.5">Ajouter une UE</span>
                            </button>
                          </div>
                        </div>
                      </Transition>

                      <div class="-mt-1 h-6 w-6 bg-white shadow rounded-full flex justify-center items-center">
                        <button title="Ajouter une Unité d'Enseignement" @click="showTeachingUnitForm = true"
                          class="rounded-full text-xs font-medium flex justify-center items-center">
                          <span class="text-lg material-symbols-rounded">
                            add_circle
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
<!-- @click="getGroup(group.id)"-->

                  <div class="flex-grow overflow-hidden overflow-y-auto relative">
                    <div class="grid grid-cols-3 2xl:grid-cols-4 gap-1">
                      <div v-for="group in state.currentTeachingUnit.groups" :key="group.id">
                        <div class="rounded-lg  border border-indigo-50 h-52 flex justify-center items-center relative">
                          <router-link :to="{ name: 'group', params: { id: group.id }}">
                            <div
                              class="rounded-lg cursor-pointer h-40 w-40 text-white hover:bg-indigo-300 bg-gradient-to-b from-indigo-300 to-indigo-600 absolute flex justify-center items-center">
                              <div class="p-3 rounded-full">
                                <span class="bg-white p-0.5 text-indigo-600 text-xs rounded-xl px-2">Groupe 1</span>
                                <hr class="my-2 border border-t-indigo-500">
                                <div title="Membres" class="w-full flex justify-center">
                                  <div class="inline-flex">
                                    <span class="material-symbols-outlined mr-1">group</span>
                                    <h5 class="text-lg font-bold">150</h5>
                                  </div>
                                </div>
                                <hr class="my-2 border border-t-indigo-500">
                                <div title="Superviseurs" class="w-full flex justify-center">
                                  <div class="inline-flex">
                                    <span class="material-symbols-outlined mr-1">supervisor_account</span>
                                    <h5 class="text-lg font-bold">02</h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                         </router-link>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </Transition>

              <Transition>
                <div v-if="showGroupDetails"
                  class="pt-2 pl-4 pr-3 h-full flex flex-col backdrop-blur-2xl bg-white/30  w-full absolute z-30">
                  <div class="flex items-start justify-between w-full mb-2">
                    <div class="flex justify-start w-1/2">
                      <button @click="showGroupDetails = false" title="Retour à la liste des matières"
                        class="px-3 py-0.5 rounded-md inline-flex bg-white border text-sm justify-center mr-2">
                        <span class="material-symbols-outlined">keyboard_return</span>
                      </button>
                      <input placeholder="Rechercher un participant ..." name="q-Group" v-model="qGroup" type="search"
                        class="block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs" />
                    </div>
                    <div class="items-center inline-flex relative">
                      <button title="Style d'affichage"
                        class="px-3 py-1 rounded-md inline-flex bg-white border text-sm justify-center">
                        <span class="text-sm material-symbols-outlined mr-2">grid_view</span>
                        <h6 class="mt-0.5 text-xs">Grille</h6>
                        <span class="text-sm material-symbols-outlined ml-2">expand_more</span>
                      </button>
                    </div>
                  </div>
                  <hr />
                  <div class="flex items-start justify-between py-2">
                    <div class="flex justify-start">
                      <div>
                        <h6 class="text-xs" style="font-family: 'JetBrains Mono', monospace">Groupe {{ state.group.name }}</h6>
                      </div>
                    </div>
                    <div class="items-center inline-flex relative">
                      <Transition>
                        <div v-if="showAddProfessorToGroupForm" style="width:400px;"
                          class="z-10 h-auto bg-white absolute right-0 top-10 shadow-md rounded-md border border-t-0">
                          <div class="rounded-t-md w-full h-8 py-1 bg-indigo-600 px-3 text-white">
                            <div class="flex items-start justify-between ">
                              <div class="flex justify-start">
                                <span class="material-symbols-outlined text-xl -mt-0.5 ">
                                  apps
                                </span>
                                <h6 class="text-sm ml-2 mt-0.5 font-medium">Assigner un professeur</h6>
                              </div>
                              <div class="items-center inline-flex relative">
                                <button title="Fermer" class="cursor-pointer"
                                  @click="showAddProfessorToGroupForm = false">
                                  <span class="material-symbols-outlined">
                                    close
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="p-3 w-full h-full space-y-1.5">
                            <input placeholder="Nom de l'UE'" name="name" v-model="groupFormData.professor"
                              class="block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs" />
                            <button title="Ajouter une Unité d'Enseignement"
                              @click="submitAddProfessorToGroupForm('add')"
                              class="shadow-indigo-500/50 shadow-lg px-4 py-2 rounded-md inline-flex text-white bg-indigo-600 text-sm w-full justify-center"><span
                                class="mt-0.5">Assigner se professeur</span>
                            </button>
                          </div>
                        </div>
                      </Transition>

                      <div class="-mt-1 h-6 w-6 bg-white shadow rounded-full flex justify-center items-center">
                        <button title="Ajouter une Unité d'Enseignement" @click="showTeachingUnitForm = true"
                          class="rounded-full text-xs font-medium flex justify-center items-center">
                          <span class="text-lg material-symbols-rounded">
                            add_circle
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>

                  
                </div>
              </Transition>

              <div class="pl-4 pr-3 bg-white h-full flex flex-col">
                <div class="w-full">
                  <div class="flex items-start justify-between w-full mb-2">
                    <div class="flex justify-start w-1/2">
                      <input placeholder="Rechercher une spécialité ..." name="q-speciality" v-model="qSpeciality"
                        type="search"
                        class="block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs" />
                    </div>
                    <div class="items-center inline-flex relative">
                      <button title="Style d'affichage"
                        class="px-3 py-0.5 rounded-md inline-flex bg-white border text-sm justify-center">
                        <span class="text-sm material-symbols-outlined mr-2">grid_view</span>
                        <h6 class="mt-0.5 text-xs">Grille</h6>
                        <span class="text-sm material-symbols-outlined ml-2">expand_more</span>
                      </button>
                    </div>
                  </div>
                  <hr />
                </div>
                <div>
                  <div class="mb-2 mt-2">
                    <div class="flex items-start justify-between py-2 ">
                      <div class="flex justify-start pl-2">
                        <div>
                          <h6 class="text-xs" style="font-family: 'JetBrains Mono', monospace">Liste des spécialités
                            (<span
                              v-if="state.currentFaculty.specialities.length <= 9">0</span>{{ state.currentFaculty.specialities.length }})
                          </h6>
                        </div>
                      </div>
                      <div class="items-center inline-flex relative">
                        <Transition>
                          <div v-if="showSpecialityForm" style="width:400px;"
                            class="z-10 h-auto bg-white absolute right-0 top-10 shadow-md rounded-md border border-t-0">
                            <div class="rounded-t-md w-full h-8 py-1 bg-indigo-600 px-3 text-white">
                              <div class="flex items-start justify-between ">
                                <div class="flex justify-start">
                                  <span class="material-symbols-outlined text-xl -mt-0.5 ">
                                    apps
                                  </span>
                                  <h6 class="text-sm ml-2 mt-0.5 font-medium">Ajouter une spécialité</h6>
                                </div>
                                <div class="items-center inline-flex relative">
                                  <button title="Fermer" class="cursor-pointer" @click="showSpecialityForm = false">
                                    <span class="material-symbols-outlined">
                                      close
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div class="p-3 w-full h-full space-y-1.5">
                              <input type="hidden" v-model="specialityFormData.facultyId" />
                              <input placeholder="Nom de la spé" name="name" v-model="specialityFormData.name"
                                class="block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs" />
                              <input placeholder="Acronyme..." name="name" v-model="specialityFormData.acronym"
                                class="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs" />
                              <textarea v-model="specialityFormData.description" style="resize: none;" rows="6"
                                placeholder="Description" name="name"
                                class="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"></textarea>
                              <button title="Ajouter un nouveau membre" @click="submitSpecialityForm('add')"
                                class="shadow-indigo-500/50 shadow-lg px-4 py-2 rounded-md inline-flex text-white bg-indigo-600 text-sm w-full justify-center"><span
                                  class="mt-0.5">Ajouter une spécialité</span>
                              </button>
                            </div>
                          </div>
                        </Transition>

                        <div class="-mt-1 h-6 w-6 bg-white shadow rounded-full flex justify-center items-center">
                          <button title="Ajouter une spécialité" @click="showSpecialityForm = true"
                            class="rounded-full text-xs font-medium flex justify-center items-center">
                            <span class="text-lg material-symbols-rounded">
                              add_circle
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div
                    class="flex-grow grid grid-cols-3 2xl:grid-cols-4 gap-3 rounded-xl w-full h-full overflow-hidden overflow-y-auto">
                    <div v-for="speciality in state.currentFaculty.specialities" :key="speciality.id">
                      <div class="bg-indigo-50 h-52 rounded-md flex justify-center items-center relative">
                        <!---<div class="h-full w-full absolute">
                          <img class="rounded-xl z-10 w-full h-full object-cover transform"
                            src="../../../public/assets/illustrations/v904-nunny-012-a.jpg" alt="">
                        </div>-->
                        <div @click="getSpeciality(speciality.id)"
                          class="cursor-pointer h-40 w-40 text-white rounded-full hover:bg-indigo-300 bg-gradient-to-b from-indigo-300 to-indigo-600 absolute flex justify-center items-center">
                          <div class="h-20 w-20 border border-indigo-300 rounded-xl flex justify-center items-center">
                            <h5 class="text-xl">{{ speciality.acronym }}</h5>
                          </div>
                        </div>
                      </div>
                      <div class="mt-2">
                        <h5 title="" class="line-clamp-1 font-bold ">{{ speciality.name }} ({{ speciality.acronym }})
                        </h5>
                        <h5 title="" class="text-xs line-clamp-2 text-gray-400">{{ speciality.description }}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
      <div class="w-full h-full mr-6">
        <div class="flex items-start justify-between px-3 py-1 rounded-md">
          <div class="flex justify-start">
            <div class="inline-flex">
              <img class="h-6 mr-2 mt-1" :src="'public/assets/icons/tent.png'" alt="" />
              <h1 class="text-2xl font-bold mb-2">Facultés</h1>
              {{ facultyFormData.perfom }}
            </div>
          </div>
          <div class="items-center inline-flex relative">
            <Transition>
              <div v-if="showFacultyForm" style="width:400px;"
                class="z-10 h-auto bg-white absolute right-0 top-10 shadow-md rounded-md border border-t-0">
                <div class="rounded-t-md w-full h-8 py-1 bg-indigo-600 px-3 text-white">
                  <div class="flex items-start justify-between ">
                    <div class="flex justify-start">
                      <span class="material-symbols-outlined text-xl -mt-0.5 ">
                        apps
                      </span>
                      <h6 v-if="facultyFormData.perform != 'edit'" class="text-sm ml-2 mt-0.5 font-medium">Ajouter une
                        faculté</h6>
                      <h6 v-if="facultyFormData.perform === 'edit'" class="text-sm ml-2 mt-0.5 font-medium">Editer une
                        faculté</h6>
                    </div>
                    <div class="items-center inline-flex relative">
                      <button class="Fermer" @click="showFacultyForm = false">
                        <span class="material-symbols-outlined">
                          close
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="p-3 w-full h-full space-y-1.5">
                  <input type="hidden" v-model="specialityFormData.facultyId" />
                  <input placeholder="Nom de la fac" name="name" v-model="facultyFormData.name"
                    class="block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs" />
                  <input placeholder="Acronyme..." name="name" v-model="facultyFormData.acronym"
                    class="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs" />
                  <textarea v-model="facultyFormData.description" style="resize: none;" rows="6"
                    placeholder="Description" name="name"
                    class="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"></textarea>
                  <button v-if="facultyFormData.perform != 'edit'" title="Ajouter un nouveau membre"
                    @click="submitFacultyForm('add')"
                    class="shadow-indigo-500/50 shadow-lg px-4 py-2 rounded-md inline-flex text-white bg-indigo-600 text-sm w-full justify-center"><span
                      class="mt-0.5">Ajouter une faculté</span>
                  </button>
                  <button v-if="facultyFormData.perform === 'edit'" title="Ajouter un nouveau membre"
                    @click="submitFacultyForm('edit')"
                    class="shadow-indigo-500/50 shadow-lg px-4 py-2 rounded-md inline-flex text-white bg-indigo-600 text-sm w-full justify-center"><span
                      class="mt-0.5">Editer cette faculté</span>
                  </button>
                </div>
              </div>
            </Transition>
            <div class="h-7 w-7 bg-white shadow rounded-full flex justify-center items-center">
              <button title="Ajouter une faculté" @click="addNewFaculty()"
                class="rounded-full text-xs text-indigo-600 font-medium flex justify-center items-center">
                <span class="text-xl material-symbols-rounded">
                  add_circle
                </span>
              </button>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-3 2xl:grid-cols-4 gap-2">
          <div class="w-full bg-white my-1 rounded-md shadow-md" v-for="faculty in state.faculties" :key="faculty.id">
            <div class="h-20 w-full mb-3 rounded-md relative">
              <img class="h-20 w-full object-cover rounded-t-md"
                src="https://images.pexels.com/photos/12203460/pexels-photo-12203460.jpeg?cs=srgb&dl=pexels-ekaterina-12203460.jpg&fm=jpg"
                alt="Image de la fac">
              <div class="h-14 w-14 p-1 bg-white rounded-xl absolute -bottom-5 left-4">
                <img class="h-auto object-scale-down" src="../../../public/assets/default_establishment_pp.png"
                  alt="Photo de profil">
              </div>
              <div class="-bottom-2 left-20 flex -space-x-1 overflow-hidden absolute">
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
            </div>
            <div class="px-4 pb-3">
              <div class="relative mt-4">
                <h2 class="text-gray-700 font-bold text-base leading-tight line-clamp-1">
                  {{ faculty.name }} ({{ faculty.acronym }})
                </h2>
              </div>
              <div class="mt-2 h-24">
                <h6 class="text-sm leading-tight text-gray-400 line-clamp-5">{{ faculty.description }}</h6>
              </div>
              <hr class="mb-2">
              <div class="mt-2 flex items-start justify-between">
                <div class="flex justify-start space-x-2">
                  <button @click="handleFacultyDetails(faculty.id, 'getData')"
                    title="Afficher les détails de cette faculté"
                    class="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-1 text-xs rounded-md">En savoir
                    plus</button>
                  <button @click="getFaculty(faculty.id, 'edit')" title="Editer cette faculté"
                    class="hidden group text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1 text-xs rounded-md">
                    <span class="text-xs material-icons-outlined">edit</span>
                    Editer</button>
                  <button title="Supprimer cette faculté" @click="deleteFaculty(faculty)"
                    class="hidden group h-6 w-6 text-gray-400 hover:text-indigo-600 rounded-md hover:bg-indigo-100 flex justify-center items-center">
                    <span class="text-sm material-icons-outlined">delete</span>
                  </button>
                  <button title="Options supplémentaires"
                    class="h-8 w-8 text-indigo-300 hover:text-indigo-600 rounded-md hover:bg-indigo-100 bg-indigo-100 flex justify-center items-center">
                    <span class="text-2xl material-icons-outlined">tune</span>
                  </button>
                </div>
                <div class="items-center inline-flex">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  /* we will explain what these classes do next! */
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
<script>
  import {
    ref,
    onMounted,
    computed,
  } from 'vue'
  import store from '../../store'

  export default {
    name: "Faculties",

    setup() {
      //matter mean "matière" in french
      // showing/hidding elements

      const showFacultyDetails = ref(false)
      const showSpecialityDetails = ref(false)
      const showMatterDetails = ref(false)
      const showTeachingUnitDetails = ref(false)
      const showFacultyForm = ref(false)
      const showSpecialityForm = ref(false)
      const showMatterForm = ref(false)
      const showTeachingUnitForm = ref(false)
      const showGroupDetails = ref(false)
      const showAddProfessorToGroupForm = ref(false)

      //state to store workflow data

      const state = ref({
        currentFaculty: {},
        faculties: [],
        specialities: [],
        currentSpeciality: {},
        matters: [],
        currentMatter: {},
        teachingUnits: [],
        currentTeachingUnit: {},
      })

      //FormData to store each form data before processing

      const facultyFormData = ref({
        id: "",
        name: "",
        acronym: "",
        description: ""
      })

      const specialityFormData = ref({
        facultyId: computed(() => state.value.currentFaculty.id),
        acronym: "",
        description: ""
      })

      const matterFormData = ref({
        specialityId: computed(() => state.value.currentSpeciality.id),
        name: "",
        description: ""
      })

      const teachingUnitFormData = ref({
        categoryId: computed(() => state.value.currentMatter.id),
        name: "",
        code: "",
        description: "",
        credits: ""
      })

      const groupFormData = ref({
        professor: "",
      })


      //Data (Creation, edition and Delete) request submitting functions

      const submitFacultyForm = (param) => {
        if (param == 'add') {
          store.apiCallMethods.post('faculty', facultyFormData.value).then(
            (res) => {
              if (res) {
                showFacultyForm.value = false
                getFaculties()
              }
            })
        } else if (param == 'edit') {
          store.apiCallMethods.patch('faculty', facultyFormData.value).then(
            (res) => {
              if (res) {
                showFacultyForm.value = false
                getFaculties()
              }
            })
        } else {
          //if is not edit, is delete
          store.apiCallMethods.delete('faculty', facultyFormData.value).then(
            (res) => {
              if (res) {
                showFacultyForm.value = false
                getFaculties()
              }
            }
          )
        }
      }

      const submitSpecialityForm = (param) => {
        if (param == 'add') {
          store.apiCallMethods.post('speciality', specialityFormData.value).then(
            (res) => {
              if (res) {
                showSpecialityForm.value = false
                getFaculty(state.value.currentFaculty.id)
              }
            })
        } else {
          //if is not add, is edit
          store.apiCallMethods.patch('speciality', specialityFormData.value).then(
            (res) => {
              if (res) {
                console.log('response', res.data)
              }
            })
        }
      }

      const submitMatterForm = (param) => {
        if (param == 'add') {
          store.apiCallMethods.post('category', matterFormData.value).then(
            (res) => {
              if (res) {
                showMatterForm.value = false
                getSpeciality(state.value.currentSpeciality.id)
              }
            })
        } else {
          //if is not add, is edit
          store.apiCallMethods.patch('matter', matterFormData).then(
            (res) => {
              if (res) {
                console.log('response', res.data)
              }
            })
        }
      }

      const submitTeachingUnitForm = (param) => {
        if (param == 'add') {
          store.apiCallMethods.post('teaching-unit', teachingUnitFormData.value).then(
            (res) => {
              if (res) {
                showTeachingUnitForm.value = false
                getMatter(state.value.currentMatter.id)
              }
            })
        } else {
          //if is not add, is edit
          store.apiCallMethods.patch('teaching-unit', teachingUnitFormData.value).then(
            (res) => {
              if (res) {
                console.log('response', res.data)
              }
            })
        }
      }

      const submitAddProfessorToGroupForm = (param) => {
        console.log(param);
        return false;
        if (param == 'add') {
          store.apiCallMethods.post('teaching-unit', teachingUnitFormData.value).then(
            (res) => {
              if (res) {
                showTeachingUnitForm.value = false
                getMatter(state.value.currentMatter.id)
              }
            })
        } else {
          //if is not add, is edit
          store.apiCallMethods.patch('teaching-unit', teachingUnitFormData.value).then(
            (res) => {
              if (res) {
                console.log('response', res.data)
              }
            })
        }
      }


      // Getting data functions

      const getFaculty = (facultyId, reason) => {
        store.apiCallMethods.get('faculty/' + facultyId).then(
          (res) => {
            if (res) {
              if (reason && reason == "edit") {
                facultyFormData.value = res.data
                facultyFormData.value.id = facultyId
                facultyFormData.value.perform = "edit"
                showFacultyForm.value = true
              } else {
                state.value.currentFaculty = res.data
              }
            }
          })
      }

      const getSpeciality = (specialityId) => {
        store.apiCallMethods.get('speciality/' + specialityId + '').then(
          (res) => {
            if (res) { //todo
              state.value.currentSpeciality = res.data
              showSpecialityDetails.value = true
            }
          })
      }

      const getMatter = (matterId) => {
        store.apiCallMethods.get('category/' + matterId + '').then(
          (res) => {
            if (res) {
              state.value.currentMatter = res.data
              showMatterDetails.value = true
            }
          })
      }

      const getTeachingUnitByCode = (teachingUnitCode) => {
        store.apiCallMethods.get('teaching-unit/' + teachingUnitCode + '').then(
          (res) => {
            if (res) {
              console.log('response is', res.data)
              state.value.currentTeachingUnit = res.data
              showTeachingUnitDetails.value = true
            }
          })
      }

      const getFaculties = () => {
        store.apiCallMethods.get('faculty').then(
          (res) => {
            if (res) {
              state.value.faculties = res.data
            }
          })
      }

      const getSpecialitiesByFacultyId = (facultyId) => {
        store.apiCallMethods.get('speciality/' + facultyId + '').then(
          (res) => {
            if (res) {
              state.value.faculties = res.data
            }
          })
      }

      const getMattersBySpecialityId = () => {
        /* todo
        store.apiCallMethods.get('faculty').then(
          (res) => {
            if (res) {
              console.log('response', res.data)
              state.value.faculties = res.data
            }
          })*/
      }

      const getTeachingUnitsByMatterId = () => {
        /* todo
        store.apiCallMethods.get('faculty').then(
          (res) => {
            if (res) {
              console.log('response', res.data)
              state.value.faculties = res.data
            }
          })*/
      }

      

      // Useful Methods

      const addNewFaculty = () => {
        facultyFormData.value.name = null
        facultyFormData.value.acronym = null
        facultyFormData.value.description = null
        showFacultyForm.value = true
      }

      // Deleting data functions

      const deleteFaculty = (param) => {
        let isDeletedFaculty = confirm('Voulez-vous vraiment supprimer la faculté (' + param.name + ') ?')
        if (isDeletedFaculty) {
          deletedFacultyFormData.value.id = param.id
          store.apiCallMethods.delete('faculty', deletedFacultyFormData.value).then(
            (res) => {
              if (res) {
                getFaculties()
              } else {
                console.log('error')
              }
            });
        }
      }

      const deleteSpeciality = (param) => {
        let isDeletedSpeciality = confirm('Voulez-vous vraiment supprimer la specialité (' + param.name + ') ?')
        if (isDeletedFaculty) {
          deletedSpecialityFormData.value.id = param.id
          store.apiCallMethods.delete('Speciality', deletedSpecialityFormData).then(
            (res) => {
              if (!res) {
                console.log('error')
              }
            });
        }
      }

      const deleteMatter = (param) => {
        let isDeletedMatter = confirm('Voulez-vous vraiment supprimer la matière (' + param.name + ') ?')
        if (isDeletedMatter) {
          deletedMatterFormData.value.id = param.id
          store.apiCallMethods.delete('matter', deletedMatterFormData).then(
            (res) => {
              if (!res) {
                console.log('error...')
              }
            });
        }
      }

      const deleteTeachingUnit = (param) => {
        let isDeletedTeachingUnit = confirm('Voulez-vous vraiment supprimer l\'UE (' + param.name + ') ?')
        if (isDeletedTeachingUnit) {
          deletedTeachingUnitFormData.value.id = param.id
          store.apiCallMethods.delete('teachingUnit', deletedTeachingUnitFormData).then(
            (res) => {
              if (!res) {
                console.log('error')
              }
            });
        }
      }


      // Handling Data functions

      const handleFacultyDetails = (facultyId, reason) => {
        if (reason === 'getData') {
          getFaculty(facultyId)
        }
        showFacultyDetails.value = !showFacultyDetails.value
      }

     
      onMounted(() => {
        getFaculties()
      })

      return {
        state,
        facultyFormData,
        matterFormData,
        specialityFormData,
        teachingUnitFormData,
        groupFormData,
        handleFacultyDetails,
        showFacultyDetails,
        showSpecialityDetails,
        showMatterDetails,
        showTeachingUnitDetails,
        showGroupDetails,
        showFacultyForm,
        showSpecialityForm,
        showMatterForm,
        showTeachingUnitForm,
        showAddProfessorToGroupForm,
        addNewFaculty,
        submitFacultyForm,
        submitSpecialityForm,
        submitMatterForm,
        submitTeachingUnitForm,
        submitAddProfessorToGroupForm,
        deleteFaculty,
        deleteSpeciality,
        deleteMatter,
        deleteTeachingUnit,
        getFaculty,
        getSpeciality,
        getMatter,
        getTeachingUnitByCode,
        getFaculties,
        getSpecialitiesByFacultyId,
        getMattersBySpecialityId,
        getTeachingUnitsByMatterId,
      };
    },
  };
</script>