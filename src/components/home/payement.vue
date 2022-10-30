<template>
    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
      <Transition>
        <div v-if="showPayementCard" class="w-full z-20 absolute top-0 h-screen flex justify-center items-center p-6">
            <div class="relative py-6 px-6 w-[28rem]">
                <div class="w-full px-3">
                    <div class="bg-green-500 text-white py-6 px-4 w-full rounded-tl-lg rounded-tr-lg">
                        <div class="realtive w-full flex justify-center items-center mb-3">
                            <span class="flex h-16 w-16 relative">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-30"></span>
                                <div class="border rounded-full p-2 h-16 w-16 flex justify-center items-center ">
                                    <span class="material-icons text-4xl">
                                        check_circle
                                    </span>
                                </div>
                              </span>
                            
                        </div>
                        <h1 class="text-center text-xl font-semibold">Merci pour votre commande</h1>
                        <h6 class="text-center my-3 text-sm">
                            Vous avez sélectionnez vos unités d'enseignement pour l'année en cours. 
                            Veuillez confirmer vos choix et procéder au paiement.
                        </h6>
                    </div>
                </div>
                <div class="w-full">
                    <div class="bg-white shadow-lg rounded-lg py-6 px-6 w-full">
                        <div>
                            <div class="flex items-start justify-between ">
                                <div class="flex justify-start">
                                    <h4 class="text-md ml-2 mt-0.5 font-semibold">Panier</h4>
                                </div>
                                <div class="items-center inline-flex relative">
                                    <h6 class="text-sm ml-2 mt-0.5 font-base">#110428</h6>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div v-for="cart in user_cart.details" :key="cart.teachingUnit.code" class="flex items-start justify-between">
                                <div class="flex justify-start">
                                <h6 class="text-sm ml-2 mt-0.5 font-base">{{ cart.teachingUnit.code }} ({{ cart.teachingUnit.credits }} credits)</h6>
                                </div>
                                <div class="items-center inline-flex relative">
                                    <h6 class="text-sm ml-2 mt-0.5 font-base"><span style="font-family:sans-serif">{{ user_cart.currency_symbol }}</span> {{ cart.teachingUnit.credits * user_cart.creditPrice }}.00</h6>
                                </div>
                            </div>
                        </div>
                        <hr class="mt-6 mb-3 border-1 border-dashed"/>
                        <div class="mt-3 mb-3 space-y-2">
                            <div>
                                <div class="flex items-start justify-between ">
                                    <div class="flex justify-start">
                                    <h6 class="text-sm ml-2 mt-0.5 font-base">Sous-total</h6>
                                    </div>
                                    <div class="items-center inline-flex relative">
                                        <h6 class="text-sm ml-2 mt-0.5 font-base"><span style="font-family:sans-serif">{{ user_cart.currency_symbol }}</span> {{ user_cart.amount }}.00</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="">
                                <div>
                                    <div class="text-slate-400 flex items-start justify-between text-xs">
                                        <div class="flex justify-start space-x-1 space-y-0.5">
                                            <h6 class="ml-2 mt-0.5 font-base">Remise</h6>
                                            <span class="material-symbols-outlined text-xs">
                                                north_east
                                            </span>
                                        </div>
                                        <div class="items-center inline-flex relative">
                                            <h6 class="ml-2 mt-0.5 font-base">(0%) - <span style="font-family:sans-serif">{{ user_cart.currency_symbol }}</span> 0.00</h6>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="text-slate-400 flex items-start justify-between text-xs">
                                        <div class="flex justify-start space-x-1 space-y-0.5">
                                            <h6 class="ml-2 mt-0.5 font-base">Taxes</h6>
                                            <span class="material-symbols-outlined text-xs">
                                                north_east
                                            </span>
                                        </div>
                                        <div class="items-center inline-flex relative">
                                            <h6 class="ml-2 mt-0.5 font-base">+ <span style="font-family:sans-serif">{{ user_cart.currency_symbol }}</span> 0.00</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <hr class="my-3 border-1 border-dashed"/>
                                <div class="flex items-start justify-between ">
                                    <div class="flex justify-start">
                                    <h6 class="text-md ml-2 mt-0.5 font-semibold">Total</h6>
                                    </div>
                                    <div class="items-center inline-flex relative">
                                        <h6 class="text-md ml-2 mt-0.5 font-semibold"> <span style="font-family:sans-serif">{{ user_cart.currency_symbol }}</span> {{ user_cart.amount }}.00</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button @click="submitPayement()" title="Confirmer et payer"
                            class="shadow-green-500/50 shadow-lg px-4 py-2 rounded-md inline-flex text-white bg-green-500 text-sm w-full justify-center"><span
                            class="mt-0.5">Payer <span style="font-family:sans-serif">{{ user_cart.currency_symbol }}</span> {{ user_cart.amount }}.00</span>
                        </button>
                        <div class="my-3 inline-flex text-slate-400 w-full justify-center ">
                            <div class="inline-flex">
                                <span class="text-xs material-symbols-outlined mr-1">
                                    lock
                                    </span>
                                <h6 class="text-xs">Les paiements sont sécurisés et chiffrés</h6>
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
      transform: translateY(-100px);
      opacity: 0;
    }
  </style>
  <script>
    import {
      ref,
      onMounted,
      reactive,
      computed 
    } from 'vue'
    import router from '../../router'
    import store from '../../store'
  
    export default {
      name: 'ChooseOffers',
      setup() {
        const showPayementCard = ref(false)
        
        const user_cart = reactive({
            user:{},
            details: {},
            creditPrice: null,
            currency: null,
            currency_symbol: null,
            paymentId: null,
            discount: 0.00,
            tax: 0.00,
            amount: null
        })

        const subscriptionFormData = reactive({
            id: computed(() => user_cart.paymentId),
            provider: "Cinetpay",
            method: "Tmoney",
            account: "00000000",
            phoneNumber: "00000000",
            email: computed(() => user_cart.user.email),
            amount: computed(() => user_cart.amount),
            currencyName: computed(() => user_cart.currency),
            status: 1
        })


        const setUserCart = () => {
            user_cart.user = store.state.user
            user_cart.details = store.state.offers_cart
            if(store.state.payement_payload.currencyName == "XOF"){
                user_cart.currency_symbol = "₣"
            }
            user_cart.currency = store.state.payement_payload.currencyName
            user_cart.amount = store.state.payement_payload.amount
            user_cart.creditPrice = store.state.establishment.creditPrice
            user_cart.paymentId = store.state.payement_payload.paymentId
        }

        const submitPayement= () => {
            store.apiCallMethods.post('subscription-payment', subscriptionFormData).then(
            (res) => {
              if (res) {
                showPayementCard.value = false;
                setTimeout(() => {
                    router.push({
                      name: 'home',
                    })
                  }, 1200)
              }
            })
        }

        onMounted(() => {
            //setup cart 
            setUserCart()
            console.log('user_cart finito', user_cart)
            //console.log('subscriptionFormData', subscriptionFormData)
            showPayementCard.value = true;
        })
  
        return {
          store,
          user_cart,
          setUserCart,
          subscriptionFormData,
          showPayementCard,
          submitPayement
        }
      },
  
    }
  </script>
  
  <style>
  
  </style>