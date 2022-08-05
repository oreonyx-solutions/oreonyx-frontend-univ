<template>
<div class="absolute right-5 z-10 top-1 text-xs">
<span class="hidden" @click="showFacultyDetails = false">Fermer</span>
</div>
  <div class="w-4/5 2xl:w-10/12 px-6 py-8 h-full absolute right-0 top-0 bg-gray-50">
    <div class="h-full flex-grow inline-flex w-full relative">
      <Transition>
      <div v-if="showFacultyDetails"
        class="absolute bg-white border-t-0 border rounded-lg top-0 h-full w-full z-10">
        <div class="bg-blue-600 h-6 w-full rounded-t-lg">
            <div class="flex items-start justify-between py-1 px-3 text-white text-xs">
          <div class="justify-start">
            <span>Details {{ state.currentFaculty.name }}</span>
          </div>
          <div class="items-center inline-flex space-x-2">
              <span title="Retour à la liste des facultés" class="cursor-pointer hover:text-gray-50" @click="showFacultyDetails = false">Retour</span>  
          </div>
        </div>
        </div>
        <div class="inline-flex w-full mt-1 p-2 h-full">
          <div class="w-4/12 xl:w-3/12 border-r flex flex-col">
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

                <div class="my-3">
                  <div class="flex items-start justify-between bg-gray-50 py-2 px-2">
                    <div class="flex justify-start">
                      <h6 class="font-bold text-blue-600 ">Spécialités</h6>
                    </div>
                    <div class="items-center inline-flex relative">
                      <div v-if="showSpecialityForm" class="absolute w-64 bg-white px-3 py-2 rounded-md shadow-md -left-64 top-10">
                        <div class="inline-flex">
                          <img class="h-4 mr-2" :src="'public/assets/icons/four-leaf-clover.png'" alt="" />
                          <h1 class="text-sm font-medium">Ajouter une spécialité</h1>
                        </div>
                        <hr class="my-2">
                        <input type="hidden" v-model="specialityFormData.facultyId">
                        <input placeholder="Nom de la spé" name="name" v-model="specialityFormData.name"
                          class="block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs">
                        <input placeholder="Acronyme..." name="name" v-model="specialityFormData.acronym"
                          class="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs">
                        <textarea v-model="specialityFormData.description" style="resize: none;" row="5" placeholder="Description"
                          name="name"
                          class="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"></textarea>
                        <div class="mt-2 flex items-start justify-between">
                          <div class="flex justify-start"></div>
                          <div class="items-center inline-flex space-x-2">
                            <button @click="showSpecialityForm = false"
                              class="text-gray-500 hover:bg-gray-100 px-3 py-1 text-xs rounded-md">Annuler</button>
                            <button @click="submitSpecialityForm('add')"
                              class="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 text-xs rounded-md">Nouvelle
                              spécialité</button>
                          </div>
                        </div>
                      </div>
                      <div class="-mt-1 h-7 w-7 bg-white shadow rounded-full flex justify-center items-center">
                        <button title="Ajouter une spécialité" @click="showSpecialityForm = true"
                          class="rounded-full text-xs text-blue-600 font-medium flex justify-center items-center">
                          <span class="text-xl material-symbols-rounded">
                            add_circle
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <ul class="space-y-2 mt-3">
                    <li title="La Geosciences" class="cursor-pointer inline-flex">
                      <span class="material-symbols-outlined mr-2 text-blue-600 text-lg -mt-0.5">radio_button_checked</span>
                      <div>
                        <span class="hover:text-blue-500 font-bold">Geosciences</span>
                      <div class="text-xs leading-tight line-clamp-3 text-gray-500">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste eos non corporis reprehenderit nostrum eius, porro labore ratione.
                      </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div class="ml-3 w-8/12 xl:w-9/12 ">
            <div class="bg-white rounded-md px-">
              <div class="flex items-start justify-between ">
                <div class="flex justify-start">
                  <div class="">
                    <h2 class="text-xl font-bold">Geosciences</h2>
                    <h6 class="-mt-1 text-sm text-gray-400">Liste des matières</h6>
                  </div>
                </div>
                <div class="items-center inline-flex pr-3 relative">
                  <div v-if="showMatterForm" class="absolute w-64 bg-white px-3 py-2 rounded-md shadow-md -left-64 top-10">
                        <div class="inline-flex">
                          <img class="h-4 mr-2" :src="'public/assets/icons/sparkles_2728.png'" alt="" />
                          <h1 class="text-sm font-medium">Ajouter une matière</h1>
                        </div>
                        <hr class="my-2">
                        <input type="hidden" v-model="matterFormData.specialityId">
                        <input placeholder="Nom de la matière" name="name" v-model="matterFormData.name"
                          class="block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs">
                        <textarea v-model="matterFormData.description" style="resize: none;" row="5" placeholder="Description"
                          name="name"
                          class="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"></textarea>
                        <div class="mt-2 flex items-start justify-between">
                          <div class="flex justify-start"></div>
                          <div class="items-center inline-flex space-x-2">
                            <button @click="showMatterForm = false"
                              class="text-gray-500 hover:bg-gray-100 px-3 py-1 text-xs rounded-md">Annuler</button>
                            <button @click="submitMatterForm('add')"
                              class="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 text-xs rounded-md">Nouvelle
                              matière</button>
                          </div>
                        </div>
                      </div>
                  <div class="-mt-1 h-7 w-7 bg-white shadow rounded-full flex justify-center items-center">
                    <button title="Ajouter une matière" @click="showMatterForm = true"
                      class="rounded-full text-xs font-medium flex justify-center items-center">
                      <span class="text-xl material-symbols-rounded">
                        add_circle
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <hr class="my-3">
              <div class="space-y-3">
                <div class="bg-gray-50 px-3 pt-3 pb-6 rounded-md">
                  <div class="flex items-start justify-between ">
                    <div class="flex justify-start">
                      <div class="">
                        <h2 class="text-ms font-bold">Pétrologie</h2>
                        <h6 class="-mt-0.5 text-sm text-gray-400">Liste des Unités d'enseignements</h6>
                      </div>
                    </div>
                    <div class="items-center inline-flex">
                      <div class="-mt-1 h-7 w-7 bg-white shadow rounded-full flex justify-center items-center">
                        <button title="Ajouter une UE"
                          class="rounded-full text-xs font-medium flex justify-center items-center">
                          <span class="text-xl material-symbols-rounded">
                            add_circle
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr class="my-3 border-t border-gray-200">
                  <div class="grid grid-cols-3 xl:grid-cols-4 gap-2 mt">
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input type="checkbox" class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded">
                      </div>
                      <div class="ml-3 text-sm">
                        <label class="font-medium text-gray-700">PETRO45</label>
                        <p class="text-xs leading-tight text-gray-400">lorem ipsum</p>
                        <p class="text-xs leading-tight text-gray-400">Credit: 4</p>
                      </div>
                    </div>
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input type="checkbox" class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded">
                      </div>
                      <div class="ml-3 text-sm">
                        <label class="font-medium text-gray-700">PETRO55</label>
                        <p class="text-xs leading-tight text-gray-400">lorem ipsum</p>
                        <p class="text-xs leading-tight text-gray-400">Credit: 4</p>
                      </div>
                    </div>
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input type="checkbox" class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded">
                      </div>
                      <div class="ml-3 text-sm">
                        <label class="font-medium text-gray-700">PETRO75</label>
                        <p class="text-xs leading-tight text-gray-400">lorem ipsum</p>
                        <p class="text-xs leading-tight text-gray-400">Credit: 4</p>
                      </div>
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
        <div class="flex items-start justify-between ">
          <div class="flex justify-start">
            <div class="inline-flex">
              <img class="h-6 mr-2 mt-1" :src="'public/assets/icons/tent.png'" alt="" />
              <h1 class="text-2xl font-bold mb-2">Facultés</h1>
            </div>
          </div>
          <div class="items-center inline-flex relative">
            <div v-if="showFacultyForm" class="absolute w-64 bg-white px-3 py-2 rounded-md shadow-md -left-64 top-10">
              <div class="inline-flex">
                <img class="h-4 mr-2" :src="'public/assets/icons/tent.png'" alt="" />
                <h1 class="text-sm font-medium">Ajouter une faculté</h1>
              </div>
              <hr class="my-2">
              <input placeholder="Nom de la fac" name="name" v-model="facultyFormData.name"
                class="block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs">
              <input placeholder="Acronyme..." name="name" v-model="facultyFormData.acronym"
                class="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs">
              <textarea v-model="facultyFormData.description" style="resize: none;" row="5" placeholder="Description"
                name="name"
                class="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"></textarea>
              <div class="mt-2 flex items-start justify-between">
                <div class="flex justify-start"></div>
                <div class="items-center inline-flex space-x-2">
                  <button @click="showFacultyForm = false"
                    class="text-gray-500 hover:bg-gray-100 px-3 py-1 text-xs rounded-md">Annuler</button>
                  <button @click="submitFacultyForm('add')"
                    class="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 text-xs rounded-md">Nouvelle
                    faculté</button>
                </div>
              </div>
            </div>
            <div class="h-7 w-7 bg-white shadow rounded-full flex justify-center items-center">
              <button title="Ajouter une faculté" @click="showFacultyForm = true"
                class="rounded-full text-xs text-blue-600 font-medium flex justify-center items-center">
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
            <div class="px-4 pb-4">
              <div class="relative mt-4">
                <h2 class="text-gray-700 font-bold text-base leading-tight">
                  {{ faculty.name }} ({{ faculty.acronym }})
                </h2>
              </div>
              <div class="mt-2">
                <h6 class="text-sm leading-tight text-gray-400 line-clamp-5">{{ faculty.description }}</h6>
              </div>
              <hr class="my-2">
              <div class="mt-2 flex items-start justify-between">
                <div class="flex justify-start space-x-1">
                  <button @click="handleFacultyDetails(faculty.id, 'getData')"
                    title="Afficher les détails de cette faculté"
                    class="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 text-xs rounded-md">Afficher les
                    détails</button>
                  <button @click="getFaculty(faculty.id)" title="Editer cette faculté"
                    class="group h-6 w-6 text-gray-400 hover:text-blue-600 rounded-md hover:bg-blue-100 flex justify-center items-center">
                    <span class="text-sm material-icons-outlined">edit</span>
                  </button>
                  <button title="Supprimer cette faculté" @click="deleteFaculty(faculty)"
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

      const showFacultyDetails = ref(false)
      const showFacultyForm = ref(false)
      const showSpecialityForm = ref(false)
      const showMatterForm = ref(false)
      const showTeachingUnitForm = ref(false)

      const state = ref({
        currentFaculty:{},
        faculties: [],
        specialities: [],
        currentSpeciality:{},
        matters: [],
        currentMatter:{},
        teachingUnits: []
      })

      /**/
      const facultyFormData = ref({
        name: "",
        acronym: "",
        description: ""
      })

      const specialityFormData = ref({
        facultyId: computed(() => state.value.currentFaculty.id ),
        acronym: "",
        description:""
      })

      const matterFormData = ref({
        specialityId: computed(() => state.value.currentSpeciality.id ),
        name: "",
        description: ""
      })

      const teachingUnitFormData = ref({
        //todo
      })

      /**/
      const submitFacultyForm = (param) => {
        if (param == 'add') {
          store.apiCallMethods.post('faculty', facultyFormData.value).then(
            (res) => {
              if (res) {
                showFacultyForm.value = false
                getFaculties()
              }
            })
        } else {
          //if is not add, is edit
          store.apiCallMethods.patch('faculty', facultyFormData).then(
            (res) => {
              if (res) {
                console.log('response', res.data)
              }
            })
        }
      }

      const submitSpecialityForm = (param) => {
        if (param == 'add') {
          console.log('specialityFormData', specialityFormData);
          store.apiCallMethods.post('speciality', specialityFormData.value).then(
            (res) => {
              if (res) {
                console.log('response', res.data)
                showSpecialityForm.value = false
              }
            })
        } else {
          //if is not add, is edit
          store.apiCallMethods.patch('speciality', specialityFormData).then(
            (res) => {
              if (res) {
                console.log('response', res.data)
              }
            })
        }
      }

      const submitMatterForm = (param) => {
        if (param == 'add') {
          console.log('matterFormData', matterFormData);
          return false;
          store.apiCallMethods.post('matter', matterFormData).then(
            (res) => {
              if (res) {
                console.log('response', res.data)
                showMatterForm.value = false
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
          console.log('teachingUnitFormData', teachingUnitFormData);
          return false;
          store.apiCallMethods.post('teachingUnit', teachingUnitFormData).then(
            (res) => {
              if (res) {
                console.log('response', res.data)
                showSpecialityForm.value = false
              }
            })
        } else {
          //if is not add, is edit
          store.apiCallMethods.patch('teachingUnit', teachingUnitFormData).then(
            (res) => {
              if (res) {
                console.log('response', res.data)
              }
            })
        }
      }

      /**/
      const getFaculty = (facultyId) => {
        store.apiCallMethods.get('faculty/' + facultyId).then(
          (res) => {
            if (res) {
              state.value.currentFaculty = res.data
            }
          })
      }

      const getSpeciality = (specialityId) => {
        store.apiCallMethods.patch('speciality/' + specialityId + '').then(
          (res) => {
            if (res) { //todo
              state.value.currentSpeciality = res.data
            }
          })
      }

      const getMatter = (matterId) => {
        store.apiCallMethods.patch('matter/' + matterId + '').then(
          (res) => {
            if (res) {
              console.log('response', res.data)
              //todo
            }
          })
      }

      const getTeachingUnit = (teachingUnitId) => {
        store.apiCallMethods.patch('teachingUnit/' + teachingUnitId + '').then(
          (res) => {
            if (res) {
              console.log('response', res.data)
              //todo
            }
          })
      }

      /**/
      const deletedFacultyFormData = ref({
        id: '',
      })

      const deletedSpecialityFormData = ref({
        id: '',
      })

      const deletedMatterFormData = ref({
        id: '',
      })

      const deletedTeachingUnitFormData = ref({
        id: '',
      })

      /**/
      const deleteFaculty = (param) => {
        let isDeletedFaculty = confirm('Voulez-vous vraiment supprimer la devise (' + param.name + ') ?')
        if (isDeletedFaculty) {
          deletedCurrencyFormData.value.id = param.id
          store.apiCallMethods.delete('faculty', deletedFacultyFormData).then(
            (res) => {
              if (res) {
                console.log('deleted...')
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
              if (res) {
                console.log('deleted...')
              } else {
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
              if (res) {
                console.log('deleted...')
              } else {
                console.log('error')
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
              if (res) {
                console.log('deleted...')
              } else {
                console.log('error')
              }
            });
        }
      }

      /**/
      const getFaculties = () => {
        store.apiCallMethods.get('faculty').then(
          (res) => {
            if (res) {
              console.log('response fac', res.data)
              state.value.faculties = res.data
            }
          })
      }

      const getSpecialitiesByFacultyId = () => {
        /* todo
        store.apiCallMethods.get('faculty').then(
          (res) => {
            if (res) {
              console.log('response', res.data)
              state.value.faculties = res.data
            }
          })*/
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

      /**/
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
        specialityFormData,
        handleFacultyDetails,
        showFacultyDetails,
        showFacultyForm,
        showSpecialityForm,
        showMatterForm,
        showTeachingUnitForm,
        submitFacultyForm,
        submitSpecialityForm,
        submitMatterForm,
        submitTeachingUnitForm,
        deleteFaculty,
        deleteSpeciality,
        deleteMatter,
        deleteTeachingUnit,
        getFaculty,
        getSpeciality,
        getMatter,
        getTeachingUnit,
        getFaculties,
        getSpecialitiesByFacultyId,
        getMattersBySpecialityId,
        getTeachingUnitsByMatterId,
      };
    },
  };
</script>