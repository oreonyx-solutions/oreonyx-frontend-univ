<template>
  <div class="h-full w-full absolute right-0 top-0 ">
    <Transition>
      <div v-if="showLoadingSpin" class="h-full w-full flex justify-center items-center">
        <div class="h-full w-full flex justify-center items-center">
          <svg class="animate-spin h-8 w-8 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
            </path>
          </svg>
        </div>
      </div>
    </Transition>
    <Transition>
      <div class="flex h-full w-full" v-if="moveDownAllComponentsOnFinish">
        <div class="w-1/2 bg-indigo-50 h-full flex justify-center">
          <div class="w-[32rem] mt-28">
            <h2 class="mt-2 text-3xl font-bold">Oreonyx is the best place to find remote talent. We've been super
              impressed by
              the quality of applicants.</h2>
            <div class="flex mt-6">
              <div class="h-6 flex items-center">
                <div class="h-1 bg-black w-3"></div>
              </div>
              <h6 style="font-family: 'JetBrains Mono', monospace" class="ml-2 text-black font-bold">Olivia Rye</h6>
            </div>
            <h6 style="font-family: 'JetBrains Mono', monospace" class="text-slate-500">CMO, Oreonyx</h6>
            <div class="w-full flex justify-enter items-center">
              <img class="bottom-0 absolute -ml-96 w-[55rem]" src="../../../public/assets/illustrations/hero-home.jpg"
                alt="Oreonyx">
            </div>
          </div>
        </div>
        <div class="w-1/2 h-full flex justify-center items-center relative ">
          <button title="Déconnexion" v-if="state.currentSchoolYears == null" @click="logout"
            class="h-10 w-10 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-200 absolute top-5 right-5 flex justify-center items-center">
            <span class="material-symbols-outlined">close</span>
          </button>
          <router-link v-if="state.currentSchoolYears != true" :to="{ name: 'home' }">
            <button title="Retour au dashboard"
              class="h-10 w-10 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-200 absolute top-5 right-5 flex justify-center items-center">
              <span class="material-symbols-outlined">close</span>
            </button>
          </router-link>
          <Transition>
            <div v-if="showWelcomeConfiguration" class="w-full px-24">
              <div class="flex">
                <div class="flex">
                  <div class="h-12">
                    <img class="w-full h-full" src="../../../public/assets/logo.png" alt="Oreonyx">
                  </div>
                  <span class="h-12 w-12 flex justify-center items-center">
                    <span class="material-symbols-outlined text-slate-400">handshake</span>
                  </span>
                  <div class="h-12">
                    <img class="w-full h-full" src="../../../public/assets/default_establishment_pp.png" alt="Oreonyx">
                  </div>
                </div>
              </div>
              <div class="mt-6">
                <h3 v-if="state.currentSchoolYears === 0" class="font-medium text-slate-500">Bienvenue cher.e
                  Administrateur.trice. Nous sommes honorés de vous
                  acceuillir sur notre plateforme collaborative. Débuter dès maintenant la configuration de votre
                  etablissement en cliquant sur le bouton ci-dessous.</h3>
                <h3 v-if="state.currentSchoolYears != 0" class="font-medium text-slate-500">
                  Bon bien le retour cher cher.e Administrateur.trice. Votre précedente année scolaire c'est terminée avec
                  succès et nous espérons que l'expérience fut agréable. Procéder à la configuration de votre
                  nouvelle année en cliquant sur le bouton ci-dessous.
                </h3>

              </div>
              <button @click="performConfiguration()"
                class="mt-8 group relative w-full flex justify-center py-4 px-4 border border-transparent text-md font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Débuter la configuration
                <span class="ml-2 material-symbols-outlined transfrom rotate-90">auto_mode</span>
              </button>
            </div>
          </Transition>
          <Transition>
            <div v-if="showYearsForm" class="w-2/3">
              <div class="mb-12">
                <div class="flex text-slate-400">
                  <span class="text-xs mr-1 material-symbols-outlined">
                    inventory_2
                  </span>
                  <h6 class="text-xs mb-2">Archives années scolaires précédentes</h6>
                </div>
                <div class="">
                  <h1 title="Archive non disponible"
                    class="leading-tight text-2xl font-extrabold text-slate-300 hover:text-slate-300 cursor-pointer"
                    v-for="year in state.currentSchoolYears" :key="year.id">{{ year.name }}</h1>
                </div>
              </div>
              <hr>
              <h4 class="my-6 font-black text-lg text-gray-500">Configuration de la nouvelle année</h4>
              <form action="" @submit.prevent="submitForm">
                <div>
                  <label class="text-xs" for="begin">Date de début</label>
                  <div class="relative rounded-md shadow-sm">
                    <input type="date" v-model="schoolYearFormData.startAt"
                      class="border border-gray-300 block w-full py-2 pl-4 pr-3 sm:text-xs rounded-md">
                  </div>
                </div>
                <div>
                  <label class="text-xs" for="begin">Date de fin</label>
                  <div class="relative rounded-md shadow-sm">
                    <input type="date" v-model="schoolYearFormData.endAt"
                      class="border border-gray-300 block w-full py-2 pl-4 pr-3 sm:text-xs rounded-md">
                  </div>
                </div>
                <button @click="submitSchoolYear()"
                  class="mt-6 group relative w-full flex justify-center py-4 px-4 border border-transparent text-md font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Suivant
                  <span class="text-base ml-2 material-symbols-outlined">
                  arrow_circle_right
                  </span>
                </button>
                <button @click="nextScholarshipPeriodRequest()"
                  class="hover:text-gray-500 mt-6 group relative w-full flex justify-center py-0 text-gray-400 px-4 text-md font-medium">
                  Passer
                </button>
              </form>
            </div>
          </Transition>
          <Transition>
            <div v-if="showPeriodsForm" class="w-2/3 ">
              <div style="font-family: 'JetBrains Mono', monospace"
                class="text-indigo-600 mb-12 bg-indigo-50 rounded-md p-3 border border-indigo-500">
                <div class="flex">
                  <span class="material-symbols-outlined mr-2 -mt-1">
                    batch_prediction
                  </span>
                  <h6 class="font-bold">Astuces</h6>
                </div>
                <hr class="my-2 border-t-indigo-500">
                <h6 class="text-sm leading-tight ">Les Années scolaires sont subdivisées en <strong>périodes</strong>, les
                  plus populaires étant <strong>le trimestre</strong> et <strong>le semestre</strong>. Ces derniers sont
                  le plus souvent nommées pour plus de facilité d'utilisation; Exemples: <strong>"Harmattan"</strong>,
                  <strong>"Mousson"</strong>...etc</h6>
              </div>

              <div class="flex items-start justify-between w-full my-6 ">
                <div class="flex justify-start w-1/2">
                  <h4 class="font-black text-lg text-gray-500">Vos périodes</h4>
                </div>
                <div class="items-center inline-flex relative space-x-1">

                  <div v-if="showAddPeriodButton"
                    class="h-6 w-6 bg-white shadow rounded-full flex justify-center items-center">
                    <button title="Ajouter une période" @click="addPeriod()"
                      class="rounded-full text-xs font-medium flex justify-center items-center">
                      <span class="text-lg material-symbols-rounded">
                        add_circle
                      </span>
                    </button>
                  </div>
                  <div v-if="showRemovePeriodButton"
                    class="h-6 w-6 bg-white shadow rounded-full flex justify-center items-center">
                    <button title="Supprimer une période" @click="removePeriod()"
                      class="rounded-full text-xs font-medium flex justify-center items-center">
                      <span class="text-lg material-symbols-rounded">
                        remove_circle
                      </span>
                    </button>
                  </div>

                </div>
              </div>
              <form action="" @submit.prevent="submitForm">
                <div class="mb-2 bg-gray-100 p-3 pt-0 rounded-md"
                  v-for="(period, index ) in scholarshipPeriodsFormData.periods" :key="index">
                  <div class="flex space-x-2">
                    <div class="w-2/3">
                      <label class="text-xs" for="begin">Nom de la période</label>
                      <div class="relative rounded-md shadow-sm">
                        <input placeholder="Ex:Harmattan" type="texte" v-model="period.name"
                          class="border border-gray-300 block w-full py-2 pl-4 pr-3 sm:text-xs rounded-md">
                      </div>
                    </div>
                    <div class="w-1/3">
                      <label class="text-xs" for="begin">Année Scolaire</label>
                      <select type="text" name="schoolYearId" v-model.number="period.schoolYearId"
                        class="block w-full py-1 px-3 border border-gray-300 bg-white rounded-md  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                        <option disabled value="null">Années...</option>
                        <option :selected='currentSchoolYear.schoolYearId === 1'
                          v-for="(currentSchoolYear, indexx) in state.currentSchoolYears" :key="indexx"
                          :value="currentSchoolYear.id">
                          {{ currentSchoolYear.name }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="grid grid-cols-2 gap-2">
                    <div>
                      <label class="text-xs" for="begin">Date de début</label>
                      <div class="relative rounded-md shadow-sm">
                        <input type="date" v-model="period.startAt"
                          class="border border-gray-300 block w-full py-2 pl-4 pr-3 sm:text-xs rounded-md">
                      </div>
                    </div>
                    <div>
                      <label class="text-xs" for="begin">Date de fin</label>
                      <div class="relative rounded-md shadow-sm">
                        <input type="date" v-model="period.endAt"
                          class="border border-gray-300 block w-full py-2 pl-4 pr-3 sm:text-xs rounded-md">
                      </div>
                    </div>
                  </div>
                </div>
                <button @click="submitScholarshipPeriods()"
                  class="mt-6 group relative w-full flex justify-center py-4 px-4 border border-transparent text-md font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Terminer
                  <span class="text-base ml-2 material-symbols-outlined">
                    check_circle
                  </span>
                </button>
                 <button @click="nextCongratulationScreen()"
                  class="hover:text-gray-500 mt-6 group relative w-full flex justify-center py-0 text-gray-400 px-4 text-md font-medium">
                  Passer
                </button>
              </form>
            </div>
          </Transition>
          <Transition>
            <div v-if="showCongratulationsMessage" class="w-2/3 ">
              <div>
                <img class="w-full" src="../../../public/assets/illustrations/cover-9x-illustration--view--var.jpg"
                  alt="Image de la nouvelle année">
                <div>
                  <h4 style="font-family: 'JetBrains Mono', monospace" class="text-center">Félicitations! Vous venez de
                    terminer avec succès la configuration de votre nouvelle année. Accedez à présent à votre compte
                    en cliquant sur le bouton ci-dessous.</h4>
                </div>
                <button @click="moveForwardToHome()"
                  class="mt-8 group relative w-full flex justify-center py-4 px-4 border border-transparent text-md font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Démarrer votre nouvelle année
                  <img class="h-6 ml-2" src="../../../public/assets/illustrations/partying_face.gif" alt="">
                </button>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </Transition>
</div>
</template>
<style scoped >
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
    computed,
    reactive
  } from 'vue'
  import store from '../../store'
  import router from '../../router'

  export default {
    name: "Schoolyear",
    setup() {
      const showWelcomeConfiguration = ref(false)
      const showYearsForm = ref(true)
      const showPeriodsForm = ref(false)
      const showCongratulationsMessage = ref(false)
      const moveDownAllComponentsOnFinish = ref(true)
      const showLoadingSpin = ref(false)
      const showAddPeriodButton = ref(true)
      const showRemovePeriodButton = ref(true)

      const state = reactive({
        currentSchoolYears: null,
      })

      const performConfiguration = () => {
        showWelcomeConfiguration.value = false
        setTimeout(() => {
          showYearsForm.value = true
        }, 1200)
      }

      //resquest from api to get schoolYear
      const getSchoolYear = () => {
        store.apiCallMethods.get('school-year').then(
          (res) => {
            if (res) {
              console.log('years:', res.data)
              state.currentSchoolYears = res.data
            }
          })
      }

      //submit forms
      const schoolYearFormData = reactive({
        name: computed(() => schoolYearFormData.startAt.split('-')[0] + ' - ' + schoolYearFormData.endAt.split('-')[
          0]),
        startAt: "",
        endAt: ""
      })

      const scholarshipPeriodsFormData = reactive({
        periods: [{
          schoolYearId: "",
          name: "",
          startAt: "",
          endAt: "",
          isCurrent: true
        }]
      })

      //create function to add another period into periods array
      const addPeriod = () => {
        //before adding verify if this period.name is not already in the array
        scholarshipPeriodsFormData.periods.push({
          schoolYearId: "",
          name: "",
          startAt: "",
          endAt: "",
          isCurrent: false
        })
        //hide add period button if period number is equal to 3
        if (scholarshipPeriodsFormData.periods.length == 3) {
          showAddPeriodButton.value = false
        }
      }

      //remove period from periods array
      const removePeriod = (index) => {
        scholarshipPeriodsFormData.periods.splice(index, 1)
        //show add period button if period number is equal or under 2
        if (scholarshipPeriodsFormData.periods.length < 3) {
          showAddPeriodButton.value = true
        }
      }


      //submit new year form
      const submitSchoolYear = () => {
        store.apiCallMethods.post('school-year', schoolYearFormData).then(
          (res) => {
            if (res) {
              nextScholarshipPeriodRequest()
            }
          })
      }

      const nextScholarshipPeriodRequest = () => {
       
      }

      const nextCongratulationScreen = () => {
        showPeriodsForm.value = false
        setTimeout(() => {
            showCongratulationsMessage.value = true
        }, 1200)
      }

      const submitScholarshipPeriodsRequest = (period) => {
        store.apiCallMethods.post('period', period).then(
          (res) => {
            if (res) {}
          })
      }

      const submitScholarshipPeriods = () => {
        const latestPeriod = scholarshipPeriodsFormData.periods[scholarshipPeriodsFormData.periods.length - 1]
        scholarshipPeriodsFormData.periods.forEach(period => {
          if (period == latestPeriod) {
            submitScholarshipPeriodsRequest(latestPeriod)
            nextCongratulationScreen() 
          } else {
            submitScholarshipPeriodsRequest(period)
            console.log('sent:', period.name)
          }
        })
      }


      const moveForwardToHome = () => {
        //moveDownAllComponentsOnFinish = true
        moveDownAllComponentsOnFinish.value = false
        //Show Loading spin / After we are are going to change it for Oreonyx animated logo
        
        setTimeout(() => {
          //redirect to home
          showLoadingSpin.value = true
        }, 1000)
        //set 2s timeout to redirect to home
        setTimeout(() => {
          //redirect to home
          router.push({
            name: 'home',
            query: {
              redirect: '/home'
            },
            params: {
              newYear: true
            }
          })
        }, 2000)
      }

const logout = () => {
        store.apiCallMethods.post("auth/logout").then((res) => {
          if (res) {
            store.authMethods.removeSessionCredentials();
            store.methods.storeUser(null);
            store.state.isAuth = false;

            // set request header token temporally
            store.authMethods.setRequestHeaders(null);
            console.log("logout", res.message);
            router.push({
              name: "login",
            });
          }
        });
      };

      onMounted(() => {
        getSchoolYear()
      })

      return {
        state,
        getSchoolYear,
        submitSchoolYear,
        submitScholarshipPeriods,
        performConfiguration,
        moveForwardToHome,
        addPeriod,
        removePeriod,
        submitScholarshipPeriodsRequest,
        nextScholarshipPeriodRequest,
        nextCongratulationScreen,
        logout,
        showWelcomeConfiguration,
        showCongratulationsMessage,
        showYearsForm,
        showPeriodsForm,
        schoolYearFormData,
        scholarshipPeriodsFormData,
        moveDownAllComponentsOnFinish,
        showLoadingSpin,
        showAddPeriodButton,
        showRemovePeriodButton,
      };
    },
  };
</script>