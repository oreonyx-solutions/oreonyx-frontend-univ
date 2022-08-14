<template>
  <div class="w-4/5 2xl:w-10/12 px-6 py-6 h-full absolute right-0 top-0">
    <div class="h-full flex-grow inline-flex w-full overflow-hidden">
      <div class="w-full h-full">
        <div class="flex items-start justify-between ">
          <div class="flex justify-start">
            <div class="inline-flex">
              <img class="h-6 mr-2 mt-1" :src="'public/assets/icons/members.png'" alt="" />
              <h1 class="text-2xl font-bold mb-2">Membres</h1>
            </div>
          </div>
          <div class="items-center inline-flex relative">
            <Transition>
              <div v-if="showMembersForm" style="width:400px;"
                class="z-10 h-auto bg-white absolute right-10 top-10 shadow-md rounded-md border border-t-0">
                <div class="rounded-t-md w-full h-8 py-1 bg-indigo-600 px-3 text-white">
                  <div class="flex items-start justify-between ">
                    <div class="flex justify-start">
                      <span class="material-symbols-outlined text-xl -mt-0.5 ">
                        account_circle
                      </span>
                      <h6 class="text-sm ml-2 mt-0.5 font-medium">Ajouter un membre</h6>
                    </div>
                    <div class="items-center inline-flex relative">
                      <button class="Fermer" @click="showMembersForm = false">
                        <span class="material-symbols-outlined">
                          close
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="px-3 pt-2">
                   <h6 class="text-xs leading-tight text-gray-400">Vous pouvez assignez plusieurs facultés à un membre.</h6>
                   <h5 class="text-sm">Faculté assignées: <span v-if="membersFormData.faculties == []">0</span><span v-if="membersFormData.faculties != []">{{ membersFormData.faculties.length }}</span></h5>
                 
                </div>
                
                <div class="p-3 w-full h-full space-y-1.5">
                  <select type="text" name="facultyId" @change="setUserFaculties($event)" 
                    class="block w-full py-1 px-3 border border-gray-300 bg-white rounded-md  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs">
                    <option disabled value="null">Facultés...</option>
                    <option :selected='faculty.name == "Faculty One"' v-for="faculty in state.faculties"
                      :key="faculty.id" :value="faculty.id">
                      {{ faculty.name }}
                    </option>
                  </select>
                  <div class="grid grid-cols-2 gap-2">
                    <input placeholder="Nom" name="FirstName" v-model="membersFormData.firstName" type="text"
                      class="block w-full py-1 px-3 border border-gray-300 bg-white rounded-md  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs">
                    <input placeholder="Prenoms" name="LastName" v-model="membersFormData.lastName" type="text"
                      class="block w-full py-1 px-3 border border-gray-300 bg-white rounded-md  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs">
                  </div>
                  <div class="grid grid-cols-2 gap-2">
                    <select v-model="membersFormData.roleName" name="role"
                      class="block w-full py-1 px-3 border border-gray-300 bg-white rounded-md  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs">
                      <option disabled value="">Role</option>
                      <option value="admin">Admin</option>
                      <option value="moderator">Moderateur</option>
                    </select>
                    <input name="birthDay" type="date" id="birthDay" v-model="membersFormData.birthDate"
                      class="block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs">
                  </div>
                  <input placeholder="Adresse email" name="email" v-model="membersFormData.email"
                    class="block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs">
                  <input placeholder="Telephone (sans l'indicatif)" name="phone" v-model="membersFormData.phoneNumber"
                    class="block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs">
                  <div class="pt-1">
                    <button title="Ajouter un nouveau membre" @click="submitMemberForm()"
                      class="shadow-indigo-500/50 shadow-lg px-4 py-2 rounded-md inline-flex text-white bg-indigo-600 text-sm w-full justify-center"><span
                        class="mt-0.5">Ajouter</span>
                    </button>
                    <div class="mt-2">
                      <h6 class="text-xs leading-tight text-gray-400">En cliquant sur "Ajouter" vous confirmer les
                        informations ci-dessus. Des identifiants de connexion seront automatiquement envoyé à cette
                        personne par mail et une notification de rappel par SMS.</h6>
                      <div class="inline-flex text-indigo-600 ">
                        <a href="#" class="text-xs inline-flex">
                          <span class="material-symbols-outlined text-sm">info</span>
                          <span class="hover:underline ml-1 mt-0.5">En savoir plus</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
            <div class="h-7 w-7 bg-white shadow rounded-full flex justify-center items-center">
              <button title="Ajouter un membre" @click="showMembersForm = true"
                class="rounded-full text-xs text-blue-600 font-medium flex justify-center items-center">
                <span class="text-xl material-symbols-rounded">
                  add_circle
                </span>
              </button>
            </div>
          </div>
        </div>
        <div 
          class="mt-2 grid grid-cols-4 2xl:grid-cols-6 gap-3 rounded-xl w-full h-full overflow-hidden overflow-y-auto">
          <div class="hidden rounded-xl h-64 relative">
            <div
              class="rounded-xl absolute backdrop-blur-sm bg-white/30 w-full h-12 bottom-0 z-20 p-2 inline-flex space-x-2">
              <button title="Envoyer un message ou un mail à cet membre"
                class="shadow-indigo-500/50 shadow-lg px-4 py-1 rounded-md inline-flex text-white bg-indigo-600 text-sm"><span
                  class="mt-0.5">Contacter</span><span
                  class="text-lg -mt-0.5 material-symbols-outlined ml-1">expand_more</span></button>
              <button title="Options supplémentaires du compte"
                class="shadow-white-500/50 shadow-lg px-4 py-1 rounded-md inline-flex border border-black text-black text-sm"><span
                  class="mt-0.5">Gérer le compte</span><span
                  class="text-lg -mt-0.5 material-symbols-outlined ml-1">arrow_outward</span></button>
            </div>
            <img class="rounded-xl z-10 absolute w-full h-full object-cover"
              src="../../../public/assets/illustrations/v904-nunny-012-a.jpg" alt="">
            <div class="absolute z-20 w-full p-4">
              <div class="inline-flex w-full">
                <div class="w-1/3">
                  <div class="h-20 w-full bg-gray-50">
                    <img class="h-full w-full object-top object-cover"
                      src="https://images.pexels.com/photos/7196350/pexels-photo-7196350.jpeg?cs=srgb&dl=pexels-dziana-hasanbekava-7196350.jpg&fm=jpg"
                      alt="">
                  </div>
                </div>
                <div class="w-2/3 pl-2 text-black">
                  <h5 title="" class="line-clamp-1 font-bold ">Bonsoa Ayén</h5>
                  <h6 class="text-sm leading-tight line-clamp-2">Professeur titulaire, Depuis 2021 et Doyen de la FASEG
                  </h6>
                  <div class="inline-flex">
                    <div class="mt-2 mr-1 h-2 w-2 bg-green-500 rounded-full"></div>
                    <div class="text-green-500">compte actif</div>
                  </div>
                </div>
              </div>
              <hr class="my-2 border-t border-black">
              <div>
                <h6 class="text-sm "><span class="font-bold">Telephone</span>: +228 90 31 88 30</h6>
                <h6 class="text-sm "><span class="font-bold">Email:</span> bonsoa.yen@gmail.com</h6>
                <h6 class="text-sm "><span class="font-bold">Distinctions:</span> Doyen</h6>
                <h6 class="text-sm"><span class="font-bold">Fac d'Interventions:</span> ENSI, FASEG, 03+</h6>
              </div>
            </div>
          </div>
          <div v-for="member in state.members" :key="member.id">
            <div class="bg-gray-50 h-52 rounded-md flex justify-center items-center relative overflow-hidden">
              <div style="background-image: url('../../public/assets/illustrations/v904-nunny-012-a.jpg');" class="bg-cover h-full w-full relative">
                
              </div>
              <div v-if="member.avatar != null" class="hidden h-40 w-40 rounded-full bg-gray-50 relative">
                <img class="rounded-full h-full w-fullh-full w-full object-top object-cover"
                  src="https://images.pexels.com/photos/7196350/pexels-photo-7196350.jpeg?cs=srgb&dl=pexels-dziana-hasanbekava-7196350.jpg&fm=jpg"
                  alt="">  
              </div>
              <div v-if="member.avatar == null" class="h-40 w-40 text-white rounded-full hover:bg-indigo-300 bg-gradient-to-b from-indigo-300 to-indigo-600 absolute flex justify-center items-center">
                <h5 class="text-2xl">{{ member.initials }}</h5>  
              </div>
            </div>
            <div class="mt-2">
              <h5 title="" class="line-clamp-1 font-bold ">{{ member.firstName }} {{ member.lastName }}</h5>
              <h6 style="font-family: 'JetBrains Mono', monospace"
                class="text-gray-400 text-lg leading-tight line-clamp-2">@{{ member.firstName }}{{ member.lastName }}</h6>
              <h5 title="" class="line-clamp-1  text-green-600">Professeur *</h5>
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
    name: "Members",
    setup() {
      const showMembersForm = ref(false)

      const state = ref({
        faculties: [],
        members: {},
        userFaculties:[],
      })

      const setUserFaculties = (event) => {
        let facultyId = event.target.value
        let data = { id: ''}
        data.id = facultyId
         //check if data value is already in "state.value.userFaculties" if not push data into array
        if(state.value.userFaculties.find(item => item.id === data.id) === undefined){
          state.value.userFaculties.push(data)
        }
        console.log('userFaculties', state.value.userFaculties)
      }

      /**/
      const membersFormData = ref({
        faculties: computed(() => state.value.userFaculties),
        specialities: [],
        lastName: "",
        firstName: "",
        email: "",
        phoneNumber: "",
        roleName: "",
        birthDate: "",
        post: "",
      })

      //faculties": [{ "id": 1}],

      const getInitials = () => {
        state.value.members.forEach(member => {
          member.initials = member.firstName.charAt(0) + member.lastName.charAt(0)
        })
      }

      const submitMemberForm = () => {
        console.log('membersFormData', membersFormData);
        store.apiCallMethods.post('user', membersFormData.value).then(
          (res) => {
            if (res) {
              console.log('MEMBER SAVED:', res.data)
              showMembersForm.value = false
              getMembers()
            }
          })
      }

      /**/ 
      const getMembers = () => {
        store.apiCallMethods.get('user').then(
          (res) => {
            if (res) {
              console.log('MEMBERS:', res.data)
              state.value.members = res.data
              getInitials()
            }
          })
      }

      /**/
      const getFaculties = () => {
        store.apiCallMethods.get('faculty').then(
          (res) => {
            if (res) {
              state.value.faculties = res.data
            }
          })
      }

      onMounted(() => {
        getFaculties()
        getMembers()
      })
     

      return {
        showMembersForm,
        membersFormData,
        state,
        submitMemberForm,
        getInitials,
        setUserFaculties,
      };
    },
  };
</script>