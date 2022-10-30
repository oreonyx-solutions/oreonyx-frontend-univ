<template>
  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
    <Transition>
      <div v-if="showChooseOffers" class="w-full z-20 absolute top-0 h-screen flex justify-center items-center p-6">
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
                  <span v-if="offersFormData.cart.length <= 9
                        && offersFormData.cart.length != 0 ">0</span>
                  <span>{{ offersFormData.cart.length }}</span>
                  Unités
                </h6>
              </div>
            </div>
            <div>
              <span class="h-16 w-16 rounded-full overflow-hidden flex justify-center items-center">
                <button title="Valider et poursuivre" @click="submitStudentOffers()"
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

          <!-- content -->
          <div class="">
            <div class="pt-2 pl-4 pr-3 h-full flex flex-col backdrop-blur-2xl bg-white/30  w-full absolute">
              <div class="flex items-start justify-between pb-2 ">
                <div class="flex justify-start">
                  <div class="flex space-x-2">
                    <div class="text-xs" style="font-family: 'JetBrains Mono', monospace "><h6>{{ store.state.establishment.acronym }} - </h6></div>
                    <div class="text-xs" style="font-family: 'JetBrains Mono', monospace"><h6>Liste des Matières & Unités d'enseignements</h6></div>
                  </div>
                </div>
              </div>

              <div v-for="matter in state.offers" :key="matter.name"
                class="flex-grow overflow-hidden overflow-y-auto relative">
                <div class="grid grid-cols-4">
                  <div class="w-full border rounded-xl px-3">
                    <div class="mt-2">
                      <h5 class="text-xs line-clamp-2">{{ matter.name }}</h5>
                    </div>
                    <div class="text-white py-2 pb-3 rounded-xl">
                      <div class="flex justify-center w-full">
                        <button class="flex justify-center bg-indigo-600 w-full py-1 rounded-md rounded-bl-none rounded-br-none">
                          {{ matter.speciality.name }}
                          <span class="ml-2 material-symbols-outlined">
                            expand_more
                          </span>
                        </button>
                      </div>
                      <div class="space-y-2">
                        <div v-for="ue in matter.teachingUnits" :key="ue.code" class="bg-white border border-t-0 border-l-0 border-r-0 border-b last:border-b-0 text-indigo-600 px-2 py-2">
                          <div class="flex items-start justify-between w-full">
                            <div class="flex justify-start w-1/2">
                              <h6 class="font-bold">
                                {{ ue.code }}
                              </h6>
                            </div>
                            <div class="items-center inline-flex relative">
                              <input type="checkbox" @change="chooseTeachingUnits(ue.code, ue.groups[0].id)"
                                class="mt-1 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                            </div>
                          </div>
                          <div class="w-2/3">
                            <div>
                              <h6 class="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit.ero?</h6>
                           </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div class="hidden grid grid-cols-8 2xl:grid-cols-4 gap-1">
                    <div v-for="ue in matter.teachingUnits" :key="ue.code">
                      <div class="border border-indigo-50 h-32 rounded-md flex justify-center items-center relative">
                        <div
                          class="cursor-pointer h-20 w-20 text-white rounded-full hover:bg-indigo-300 bg-gradient-to-b from-indigo-300 to-indigo-600 absolute flex justify-center items-center">
                          <div class="p-3 rounded-full">
                            <div>
                              <div>
                                <h6 class="text-xs">{{ ue.code }}</h6>
                                <!-- <div v-for="group in ue.groups" :key="group.id">
                                group: {{ group.id }}
                              </div> -->
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
    name: 'ChooseOffers',
    setup() {

      const showChooseOffers = ref(true)

      const state = reactive({
        offers: {}
      })

      const offersFormData = reactive({
        cart: []
      })

      
      const removeOrAddThisItem = (newOffer) => {
          if(offersFormData.cart.find(item => item.teachingUnitCode === newOffer.teachingUnitCode) === undefined){
            offersFormData.cart.push(newOffer)
          }else{
            let TE_Index = offersFormData.cart.indexOf(newOffer);
            offersFormData.cart.splice(TE_Index, 1)
          }
        }

      const chooseTeachingUnits = (teachingUnitId, groupId) => {
        let data = { teachingUnitCode: '', groupId: ''}
        data.teachingUnitCode = teachingUnitId
        data.groupId = groupId
        removeOrAddThisItem(data)
      }
      
      const getOffer = () => {
        store.apiCallMethods.get('offer').then(
          (res) => {
            if (res) {
              console.log(res.data)
              state.offers = res.data
            }
          })
      }

      //submit student offers
      const submitStudentOffers= () => {
          if(offersFormData.cart.length === 0){
              alert('Veuillez choisir vos unités d\'enseignements')
          }else{
            store.apiCallMethods.post('subscription', offersFormData).then(
            (res) => {
              if (res) {
                showChooseOffers.value = false;
                store.state.payement_payload = res
                store.state.offers_cart = res.cart

                //loading
                 setTimeout(() => {
                    router.push({
                      name: 'payement',
                    })
                  }, 1200)

                //redirect to payment page
                 return false;
              }
            })
          }
        }

      onMounted(() => {
        getOffer()
      })


      return {
        store,
        state,
        offersFormData,
        showChooseOffers,
        removeOrAddThisItem,
        chooseTeachingUnits,
        submitStudentOffers,
        getOffer,
      }
    },

  }
</script>

<style>

</style>