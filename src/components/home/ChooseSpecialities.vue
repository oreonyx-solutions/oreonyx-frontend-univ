<template>
  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
    <Transition>
      <div class="w-full z-20 absolute top-0 h-screen flex justify-center items-center p-6">
        <div class="bg-white flex flex-col md:h-full w-full p-3 relative">
          <div class="rounded-xl space-x-2 flex border shadow-md bg-white fixed px-3 py-2 bottom-16 right-16 z-20 ">
            <div class="flex space-x-2 border-r pr-3 mr-3">
              <span class="h-14 w-14 bg-gray-50 rounded-full mt-1 relative">
                <span class="bg-green-600 h-2 w-2 absolute bottom-0 right-2 rounded-full ring-4 ring-white"></span>
                <img class="w-full h-full rounded-full" src="../../../public/assets/illustrations/test_profile.png"
                  alt="user_picture">
              </span>
              <div class="w-32">
                <h4 class="text-lg font-bold mt-2">{{ store.state.user.firstName }}</h4>
                <h6 class="text-indigo-600 text-base line-clamp-1 -mt-1">
                  <span v-if="specialitiesFormData.specialities.length <= 9
                        && specialitiesFormData.specialities.length != 0 ">0</span>
                  <span>{{ specialitiesFormData.specialities.length }}</span>
                  spécialité(s)
                </h6>
              </div>
            </div>
            <div>
              <span class="h-16 w-16 rounded-full overflow-hidden flex justify-center items-center">
                <button title="Valider et poursuivre" @click="submitStudentSpecialities()"
                  class="absolute z-20 shadow-md transition ease-in-out delay-150 hover:scale-110 duration-300 z-10 text-white rounded-full h-14 w-14 hover:bg-indigo-300 bg-gradient-to-b from-indigo-400 to-indigo-700 flex justify-center items-center">
                  <span class="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
                <img class="w-full h-full animate-spin"
                  src="../../../public/assets/illustrations/background.6c3571e0.jpg" alt="cover_picture">
              </span>
            </div>
          </div>
          <div class="grid grid-cols-3 2xl:grid-cols-4 gap-4">
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
                <div class="relative">
                  <h2 class="text-gray-700 font-bold text-base leading-tight">
                    {{ faculty.name }}
                  </h2>
                </div>
                <div class="mt-2 ml-2 flex">
                  <h6 class="pl-2 border-dotted border-l-4 text-sm leading-tight text-gray-400">
                    {{ faculty.description }}</h6>
                </div>

                <div class="bg-indigo-600 rounded-lg w-full h-auto mt-4 px-3 py-3 shadow-2xl">
                  <div class="flex w-full">
                    <div class="h-12 w-12 bg-white rounded-full flex justify-center items-center text-indigo-600">
                      <span class="material-symbols-outlined">domain_add</span>
                    </div>
                    <div class="ml-2 relative w-5/6 text-white">
                      <h6 class="font-bold -mt-1">Veuillez choisir votre spécialité</h6>
                      <h6 class="text-xs absolute -mt-0.5">Vous pouvez sélectionner entre une ou plusieurs spécialités
                      </h6>
                    </div>
                  </div>
                </div>
                <div class="my-4">
                  <div v-for="(speciality , index) in faculty.specialities" :key="index"
                    class="flex items-start even:bg-slate-100 px-2 pt-2 pb-1 rounded-md">
                    <div class="flex items-center h-5">
                      <input @change="chooseSpecialities(speciality)" id="comments" name="comments" type="checkbox"
                        class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="comments" class="font-medium text-gray-700">{{ speciality.name }}
                        ({{ speciality.acronym }})</label>

                      <p class="text-gray-500 leading-tight text-xs">
                        {{ speciality.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </Transition>
    <img class=" w-full absolute  transform rotate-90"
      src="../../../public/assets/illustrations/background.6c3571e062.jpg" alt="cover_picture">
    <div class="max-w-md w-full space-y-8 absolute top-16">

    </div>
  </div>
</template>
<style scoped>
  /* transition styles */
  .v-enter-active,
  .v-leave-active {
    transition: transform 1s ease, opacity 1s ease;
  }

  .v-enter-from,
  .v-leave-to {
    transform: translateX(-100px);
    opacity: 0;
  }
</style>
<script>
  import {
    ref,
    onMounted,
    reactive
  } from 'vue'
  import router from '../../router'
  import store from '../../store'

  export default {
    name: 'ChooseSpecialities',
    setup() {

      const showChooseSpecialities = ref(false)

      const state = ref({
        establishment: {
          acronym: 'loading...'
        },
        faculties: {}

      })

      //form data
      const specialitiesFormData = reactive({
        specialities: []
      })

      const getFaculties = () => {
        store.apiCallMethods.get('faculty').then(
          (res) => {
            if (res) {
              state.value.faculties = res.data
            }
          })
      }

      //submit student specialities
      const submitStudentSpecialities = () => {
        if (specialitiesFormData.specialities.length === 0) {
          alert('Veuillez choisir votre spécialité')
        } else {
          store.apiCallMethods.post('auth/edit-profile', specialitiesFormData).then(
            (res) => {
              if (res) {
                showChooseSpecialities.value = false;
                verifyStudentOffer()
              }
            })
        }
      }

      const verifyStudentOffer = () => {
        if (store.state.user.groups.length === 0) {
          setTimeout(() => {
            router.push({
              name: 'choose-offer',
            })
          }, 1200)
        }
      }

      const removeOrAddThisItem = (newSpeciality) => {
        if (specialitiesFormData.specialities.find(item => item.id === newSpeciality.id) === undefined) {
          specialitiesFormData.specialities.push(newSpeciality)
        } else {
          let specialityIndex = specialitiesFormData.specialities.indexOf(newSpeciality);
          specialitiesFormData.specialities.splice(specialityIndex, 1)
        }
      }

      const chooseSpecialities = (speciality) => {
        let data = {
          id: ''
        }
        data.id = speciality.id
        removeOrAddThisItem(data)
      }

      onMounted(() => {
        window.setTimeout(() => state.value.establishment = store.state.establishment, 1000)
        getFaculties()
        showChooseSpecialities.value = true
      })

      return {
        store,
        state,
        showChooseSpecialities,
        chooseSpecialities,
        specialitiesFormData,
        submitStudentSpecialities
      }
    },

  }
</script>

<style>

</style>