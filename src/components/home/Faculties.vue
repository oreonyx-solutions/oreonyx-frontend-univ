<template>
  <div class="w-4/5 2xl:w-10/12 px-6 py-6 h-full absolute right-0 top-0 bg-gray-50">
    <div class="h-full flex-grow inline-flex w-full relative">
      <div v-if="showFacultyDetails"
        class="absolute bg-white border rounded-xl top-0 h-full w-full z-10 inline-flex p-3">
        <div class="w-4/12 border-r flex flex-col">
          <div class="flex-grow">
            <div class="w-full pl-1 pr-4 rounded-md">
              <div class="h-32 w-full mb-3">
                <div title="Retour" @click="handleFacultyDetails"
                  class="inline-flex bg-white opacity-70 hover:opacity-100 top-5 left-6 rounded-full py-0.5 px-3 absolute text-blue-600 hover:text-gray-700 cursor-pointer">
                  <span class="material-symbols-outlined text-base">keyboard_backspace</span>
                  <span class="ml-1 text-sm mt-0.5">Retour</span>
                </div>
                <img class="h-32 w-full object-cover rounded-xl"
                  src="https://images.pexels.com/photos/12203460/pexels-photo-12203460.jpeg?cs=srgb&dl=pexels-ekaterina-12203460.jpg&fm=jpg"
                  alt="Image de la fac">
              </div>
              <div class="relative mt-1">
                <h2 class="text-gray-700 font-bold text-base leading-tight">
                  Faculté des Sciences (FDS)
                </h2>
              </div>
              <div class="mt-2">
                <h6 class="text-sm leading-tight text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat pariatur quis sequi eligendi quasi cum! Rem.</h6>
              </div>
              <hr class="my-3">
              <div>
                <div class="flex items-start justify-between ">
                  <div class="flex justify-start">
                    <h6 class="font-bold text-blue-600">Liste des spécialités</h6>
                  </div>
                  <div class="items-center inline-flex">
                    <div class="-mt-1 h-7 w-7 bg-white shadow rounded-full flex justify-center items-center">
                      <button title="Ajouter une spécialité"
                        class="rounded-full text-xs text-blue-600 font-medium flex justify-center items-center">
                        <span class="text-xl material-symbols-rounded">
                          add_circle
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <ul class="space-y-1 mt-2">
                  <li title="La Geosciences" class="hover:text-gray-400 cursor-pointer">Geosciences</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="ml-3 w-8/12">
          <div class="bg-white rounded-md px-4">
             <div class="flex items-start justify-between ">
                  <div class="flex justify-start">
                    <div class="">
                     <h2 class="text-xl font-bold">Geosciences</h2>
                      <h6 class="-mt-1 text-sm text-gray-400">Liste des matières</h6>
                    </div>
                  </div>
                  <div class="items-center inline-flex pr-3">
                    <div class="-mt-1 h-7 w-7 bg-white shadow rounded-full flex justify-center items-center">
                      <button title="Ajouter une matière"
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
                <div class="grid grid-cols-3 gap-2 mt">
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
              <textarea v-model="facultyFormData.description" style="resize: none;" row="5" placeholder="Description" name="name"
                class="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"></textarea>
              <div class="mt-2 flex items-start justify-between">
                <div class="flex justify-start"></div>
                <div class="items-center inline-flex space-x-2">
                  <button @click="showFacultyForm = false"
                    class="text-gray-500 hover:bg-gray-100 px-3 py-1 text-xs rounded-md">Annuler</button>
                  <button @click="submitFacultyForm(add)"
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
        <div class="grid grid-cols-3 gap-2">
          <div class="w-full bg-white my-1 p-4 rounded-md">
            <div class="h-32 w-full relative mb-3">
              <img class="h-32 w-full object-cover rounded-xl"
                src="https://images.pexels.com/photos/12203460/pexels-photo-12203460.jpeg?cs=srgb&dl=pexels-ekaterina-12203460.jpg&fm=jpg"
                alt="Image de la fac">
            </div>
            <div class="relative mt-1">
              <h2 class="text-gray-700 font-bold text-base leading-tight">
                Faculté des Sciences (FDS)
              </h2>
            </div>
            <div class="mt-2">
              <h6 class="text-sm leading-tight text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Fugiat pariatur quis sequi eligendi quasi cum! Rem.</h6>
            </div>

            <hr class="my-2">
            <div class="mt-2 flex items-start justify-between">
              <div class="flex justify-start space-x-1">
                <button @click="handleFacultyDetails" title="Afficher les détails de cette faculté"
                  class="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 text-xs rounded-md">Afficher les
                  détails</button>
                <button @click="getFaculty(faculty.id)" title="Editer cette faculté"
                  class="group h-6 w-6 text-gray-400 hover:text-blue-600 rounded-md hover:bg-blue-100 flex justify-center items-center">
                  <span class="text-sm material-icons-outlined">edit</span>
                </button>
                <button title="Supprimer cette faculté"  @click="deleteFaculty(faculty)"
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
</template>

<script>
  import {
    ref,
    onMounted
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
        faculties: [],
        specialities: [],
        matters: [],
        teachingUnits: []
      })

    /**/
      const facultyFormData = ref({
        id: "",
        name: "",
        acronym: "",
        description: ""
      })

      const specialityFormData = ref({ 
       //todo
      })

      const matterFormData = ref({ 
        //todo
      })

      const teachingUnitFormData = ref({
         //todo
      })

    /**/
      const submitFacultyForm = ( param ) => {
        if (param == 'add') {
          console.log('facultyFormData', facultyFormData);
          return false;
          store.apiCallMethods.post('faculty', facultyFormData).then(
            (res) => {
              if (res) {
                console.log('response', res.data)
                showFacultyForm.value = false
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

      const submitSpecialityForm = ( param ) => {
        if (param == 'add') {
          console.log('specialityFormData', specialityFormData);
          return false;
          store.apiCallMethods.post('speciality', facultyFormData).then(
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

      const submitMatterForm = ( param ) => {
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

      const submitTeachingUnitForm = ( param ) => {
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
      const getFaculty = ( facultyId ) => {
        store.apiCallMethods.patch('faculty/' + facultyId + '').then(
          (res) => {
            if (res) {
              console.log('response', res.data)
              facultyFormData.id = res.data.id
              facultyFormData.name = res.data.name
              facultyFormData.acronym = res.data.acronym
              facultyFormData.description = res.data.description
            }
          })
      }

      const getSpeciality = ( specialityId ) => {
        store.apiCallMethods.patch('speciality/' + specialityId + '').then(
          (res) => {
            if (res) {//todo
              console.log('response', res.data)
              specialityFormData.id = res.data.id
              specialityFormData.name = res.data.name
              specialityFormData.acronym = res.data.acronym
              specialityFormData.description = res.data.description
            }
          })
      }

      const getMatter = ( matterId ) => {
        store.apiCallMethods.patch('matter/' + matterId + '').then(
          (res) => {
            if (res) {
              console.log('response', res.data)
              //todo
            }
          })
      }

      const getTeachingUnit = ( teachingUnitId ) => {
        store.apiCallMethods.patch('teachingUnit/' + teachingUnitId + '').then(
          (res) => {
            if (res) {
              console.log('response', res.data)
              //todo
            }
          })
      }

    /**/
      const deletedFacultyFormData = ref({ id: '',})

      const deletedSpecialityFormData = ref({ id: '',})

      const deletedMatterFormData = ref({ id: '',})

      const deletedTeachingUnitFormData = ref({ id: '',})

    /**/
      const deleteFaculty = ( param ) => {
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

      const deleteSpeciality = ( param ) => {
        let isDeletedSpeciality= confirm('Voulez-vous vraiment supprimer la specialité (' + param.name + ') ?')
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

      const deleteMatter = ( param ) => {
        let isDeletedMatter= confirm('Voulez-vous vraiment supprimer la matière (' + param.name + ') ?')
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

      const deleteTeachingUnit = ( param ) => {
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
      const handleFacultyDetails = () => {
        showFacultyDetails.value = !showFacultyDetails.value
      }

      onMounted(() => {
        getFaculties()
      })

      return {
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