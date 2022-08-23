<template>
  <Work v-if="store.state.toggleWorkSpace" />
  <div v-if="!store.state.toggleWorkSpace" class="w-4/5 2xl:w-10/12 px-6 pb-6 h-full absolute right-0 top-0">
    <div class="h-full flex-grow inline-flex w-full">
      <div class="w-4/6 h-full bg-white mr-6 pr-6 py-6 border-r">
        <div class=" shadow-blue-500/50 bg-blue-600 text-white p-4 rounded-xl inline-flex shadow-lg">
          <div class="w-3/6 2xl:w-2/6 pr-6">
            <div class="inline-flex">
              <h1 class="text-2xl 2xl:text-4xl font-bold">{{ state.times.time.hours }}:{{ state.times.time.minutes }}
              </h1>
            </div>
            <h1 class="text-xl font-bold">Bonjour, Jerome !</h1>
            <h6 class="text-sm mt-2">
              Voici votre programme de la journée. Vous avez 01 cours en ligne et 03 cours en
              présentiel. Voir ci-desous les détails de votre journée.
            </h6>
          </div>
          <div class="w-3/6  2xl:w-4/6">
            <div class="grid grid-cols-3 gap-3">
              <div class="rounded-xl flex flex-col">
                <div class="flex-grow">
                  <div class="h-32 w-full rounded-xl bg-blue-400">
                    <img class="shadow-xl rounded-xl h-full w-full object-cover"
                      src="../../../public/assets/illustrations/summer-illustrations-3.jpg" alt="Photo de profil">
                  </div>
                </div>
                <div class="mt-1">
                  <h5 class="text-sm font-bold py-1 leading-none">University connect</h5>
                </div>
              </div>
              <div class="rounded-xl flex flex-col">
                <div class="flex-grow">
                  <div class="h-32 w-full rounded-xl bg-blue-400">
                    <img class="shadow-xl rounded-xl h-full w-full object-cover"
                      src="../../../public/assets/illustrations/summer-illustrations-6.jpg" alt="Photo de profil">
                  </div>
                </div>
                <div class="mt-1">
                  <h5 class="text-sm font-bold py-1 leading-none">University connect</h5>
                </div>
              </div>
              <div class="rounded-xl flex flex-col">
                <div class="flex-grow">
                  <div class="h-32 w-full rounded-xl bg-blue-400">
                    <img class="shadow-xl rounded-xl h-full w-full object-cover"
                      src="../../../public/assets/illustrations/summer-illustrations-7.jpg" alt="Photo de profil">
                  </div>
                </div>
                <div class="mt-1">
                  <h5 class="text-sm font-bold py-1 leading-none">Programme partenaires</h5>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="mt-6 flex items-start justify-between my-3">
          <div class="justify-start">
            <h2 class="text-lg font-bold -mt-1.5">{{  state.times.date }}</h2>
            <h5 class="text-gray-400 text-base -mt-1">06 tâches à venir</h5>
          </div>
          <div class="items-center inline-flex space-x-2">
            <button title="Programme d'aujourd'hui" @click="swithBetweenTabs('today')"
              :class="{' text-white bg-blue-600 hover:bg-blue-600' : currentTab == 'today', 'text-gray-400 hover:bg-gray-200' : currentTab != 'today'}"
              class="text-sm rounded-full px-4 pb-0.5 inline-flex">
              <span v-if="currentTab != 'today'" class="mr-1 text-base material-icons-outlined">
                today
              </span>
              <span v-if="currentTab == 'today'" class="mr-1 text-base material-icons-round">
                today
              </span>
              <h6 class="mt-0.5">Aujourd'hui</h6>
            </button>
            <button title="Programme de la semaine" @click="swithBetweenTabs('week')"
              :class="{' text-white bg-blue-600 hover:bg-blue-600' : currentTab == 'week', 'text-gray-400 hover:bg-gray-200' : currentTab != 'week'}"
              class="text-sm rounded-full px-4 pb-0.5 inline-flex">
              <span v-if="currentTab != 'week'" class="mr-1 text-base material-icons-outlined">
                date_range
              </span>
              <span v-if="currentTab == 'week'" class="mr-1 text-base material-icons-round">
                date_range
              </span>
              <h6 class="mt-0.5">Semaine</h6>
            </button>
            <button title="Programme du mois" @click="swithBetweenTabs('month')"
              :class="{' text-white bg-blue-600 hover:bg-blue-600' : currentTab == 'month', 'text-gray-400 hover:bg-gray-200' : currentTab != 'month'}"
              class="text-sm rounded-full px-4 pb-0.5 inline-flex">
              <span v-if="currentTab != 'month'" class="mr-1 text-base material-icons-outlined">
                calendar_month
              </span>
              <span v-if="currentTab == 'month'" class="mr-1 text-base material-icons-round">
                calendar_month
              </span>
              <h6 class="mt-0.5">Mois</h6>
            </button>
          </div>
        </div>
        <div>

          <div class="tabs">
            <div v-if="tabs.today" class="p-3 hover:bg-gray-50 text-gray-400 rounded-lg ">

              <todo />
            </div>
            <div v-if="tabs.week" class="pt-3 px-3 space-y-2">

              <todo />
            </div>
            <div v-if="tabs.month" class="pt-3 px-3 space-y-2">

              <todo />
            </div>
          </div>
        </div>
      </div>
      <div class="w-2/6 h-full space-y-3">
        <div class="w-full bg-white mb-1 pl-0 p-4 rounded-md">
          <div class="h-auto w-full relative">
            <img class="h-32 object-scale-down" src="../../../public/assets/default_establishment_pp.png"
              alt="Photo de profil">

          </div>
          <hr class="my-2">
          <button title="Compte Business"
            :class="{ 'border-green-600 bg-green-600' : isSubscriptionEnd() == false, 'border-red-600 bg-red-600' : isSubscriptionEnd() == true }"
            class="z-10 inline-flex border text-white rounded-full px-3">
            <span v-if="isSubscriptionEnd() == false" style="font-size:18px; margin-top:0.2rem"
              class="material-symbols-rounded">
              verified
            </span>
            <span v-if="isSubscriptionEnd() == true" style="font-size:18px; margin-top:0.2rem"
              class="material-symbols-rounded">
              warning
            </span>
            <div v-if="isSubscriptionEnd() == false" class="ml-1 font-semibold">Standard</div>
            <div v-if="isSubscriptionEnd() == true" class="ml-1 font-semibold">Abonnement terminé</div>
          </button>
          <div class="relative mt-1">
            <h2 class="text-gray-700 font-bold text-base leading-tight">
              {{ state.establishment.name}}({{ state.establishment.acronym}})
            </h2>
          </div>
          <div class="mt-2">
            <h6 class="text-base leading-tight text-gray-400">Boulevard du 30 Aout, Station Energium à 50m des rails
              d'IPG , 07BP700</h6>
          </div>
          <div class="my-2">
            <div class="text-gray-400 inline-flex w-full">
              <span class="text-base font-base">Status:</span>
              <div class="inline-flex">
                <div class="mt-2 mx-1 h-2 w-2 bg-green-500 rounded-full"></div>
                <div class="text-green-500">systèmes opérationnels</div>
              </div>
            </div>
            <div class="text-gray-400 ">
              <div class=" text-md inline-flex">
                <span class="text-md font-base">Membres:</span>
                <div class="ml-2">0,003 personnes</div>
              </div>
            </div>
            <div title="Addresse e-mail officiel, écrivez-nous!" class="text-gray-400 inline-flex w-full">
              <div class="text-md inline-flex">
                <span class="text-md font-base">Email:</span>
                <a target="_blank" href="mailto:isica_ul@univ-lome.tg"
                  class="ml-2 text-base text-gray-400 hover:underline line-clamp-1">{{ state.establishment.email}}</a>
              </div>
            </div>
            <div title="Addresse e-mail officiel, écrivez-nous!" class="text-gray-400 inline-flex w-full">
              <div class="text-md inline-flex">
                <span class="text-md font-base">Pays:</span>
                <span class="ml-2 text-base text-gray-400 line-clamp-1">Togo</span>
                <img src="../../../public/assets/icons/flag-togo_1f1f9-1f1ec.png" alt="" class="h-6 ml-1" />
              </div>
            </div>
            <div title="Addresse e-mail officiel, écrivez-nous!" class="text-gray-400 inline-flex w-full">
              <div class="text-md inline-flex">
                <span class="text-md font-base">Fonder le:</span>
                <a target="_blank" href="mailto:isica_ul@univ-lome.tg"
                  class="ml-2 text-base text-gray-400 hover:underline line-clamp-1">15 Mai 1997 (25ans)</a>
              </div>
            </div>
            <div title="Addresse e-mail officiel, écrivez-nous!" class="text-gray-400 inline-flex w-full">
              <div class="text-md inline-flex">
                <span class="text-md font-base">Hotline:</span>
                <a target="_blank" href="tel:22890318830" class="hover:underline ml-2 text-base text-gray-400">228
                  {{ state.establishment.phoneNumber}}</a>
              </div>
            </div>
            <div class="mt-3">
              <a title="www.google.com" target="_blank" href="www.google.com"
                class="hover:bg-blue-600 hover:text-white text-base text-blue-600 bg-white rounded-full border border-blue-600 px-3 py-0.5 inline-flex">
                <span class="material-symbols-outlined text-lg mr-2">language</span>
                <span class="mt-0.5">Acceder au site web</span>
              </a>
            </div>
            <div>
              <div class="grid grid-cols-2 gap-3 mt-6 mb-2">
                <div class="bg-gray-100 h-28 rounded-md">
                  <img class="object-cover h-full w-full rounded-md"
                    src="https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="">
                </div>
                <div class="bg-gray-100 h-28 rounded-md">
                  <img class="object-cover h-full w-full rounded-md"
                    src="https://images.pexels.com/photos/2171277/pexels-photo-2171277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="">
                </div>
              </div>
              <h6 class="text-gray-400 text-xs underline">Tout afficher</h6>
            </div>
          </div>
        </div>

        <div class="bg-white pb-6 rounded-md">
          <div class="inline-flex pb-1">
            <div class="text-neutral-500">Communiqués</div>
            <div class="text-white px-1.5 bg-blue-600 ml-2 rounded-full flex justify-center items-center">
              <h6 style="font-size:12px">10</h6>
            </div>
          </div>

          <div class="relative flex justify-center pt-2">
            <div class="z-10 absolute w-full bg-white shadow rounded-md px-4 py-3">
              <div class="inline-flex w-full">
                <div class="mr-2 h-6 w-6 bg-gray-100 rounded-full">
                  <img class="h-full w-full rounded-full object-cover"
                    :src="'https://images.pexels.com/photos/12082493/pexels-photo-12082493.jpeg?cs=srgb&dl=pexels-elena-rubtsova-12082493.jpg&fm=jpg'"
                    alt="Photo de profil" />
                </div>
                <h5 class="text-sm line-clamp-1 mt-0.5">Da'Silvera Jeremie</h5>
                <span class="text-sm text-blue-600 ml-1 mt-0.5 material-symbols-rounded">verified</span>
                <span class="text-sm ml-2 mt-0.5">- Il y'a 3h</span>
              </div>
              <h5 class="text-gray-500 text-sm line-clamp-2 -mt-1 ">
                Hey you! Would you be able to help me with the designs for the home screen? I'm swamped ATM.
              </h5>
            </div>
            <div style="width:75%" class="mt-11 bg-white h-20 absolute shadow rounded-md px-4 py-3"></div>
            <div style="width:80%" class="mt-9 bg-white h-20 absolute shadow rounded-md px-4 py-3"></div>
            <div style="width:85%" class="mt-7 bg-white h-20 absolute shadow rounded-md px-4 py-3"></div>
            <div style="width:95%" class="mt-5 bg-white h-20 absolute shadow rounded-md px-4 py-3"></div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    onMounted,
    ref,
    reactive
  } from 'vue'

  import Todo from '@/components/home/Todo.vue'
  import Work from '@/components/home/Work.vue'
  import store from "../../store";

  export default {
    name: "Blog",
    components: {
      Todo,
      Work,
    },
    setup() {
      const showWelcomeMessage = ref(false)

      const state = reactive({
        times: {
          time: {
            hours: '00',
            minutes: '00',
            seconds: '00'
          },
          date: ""
        },
        establishment: store.state.establishment
      })

      //get current date and time
      const currentDateTime = () => {
        var now = new Date();

        //save in array you called "montNAmesInFrench" the month names in french
        var monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre",
          "Octobre", "Novembre", "Décembre"
        ];

        var year = now.getFullYear();
        var month = monthNames[now.getMonth()];
        var day = now.getDate();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();

        if (month.toString().length == 1) {
          var month = '0' + month;
        }
        if (day.toString().length == 1) {
          var day = '0' + day;
        }
        if (hour.toString().length == 1) {
          var hour = '0' + hour;
        }
        if (minute.toString().length == 1) {
          var minute = '0' + minute;
        }
        if (second.toString().length == 1) {
          var second = '0' + second;
        }

        state.times.time.hours = hour
        state.times.time.minutes = minute
        state.times.time.seconds = second
        state.times.date = day + ' ' + month + ' ' + year

      }

      //Autorefresh for home clock
      const autoRefresh = () => {
        setInterval(() => {
          currentDateTime();
        }, 1000);
      }

      const tabs = ref({
        today: true,
        week: false,
        month: false,
      })

      let currentTab = ref(null)

      const swithTabFromTrueToFalse = (element) => {
        switch (element) {
          case 'today':
            tabs.value.today = true
            tabs.value.week = false
            tabs.value.month = false
            break;
          case 'week':
            tabs.value.today = false
            tabs.value.week = true
            tabs.value.month = false
            break;
          default:
            tabs.value.today = false
            tabs.value.week = false
            tabs.value.month = true
            break;
        }
        currentTab.value = element
      }

      const swithBetweenTabs = (tabName) => {
        swithTabFromTrueToFalse(tabName)
      }

      onMounted(() => {
        currentDateTime();
        autoRefresh();
        swithBetweenTabs('today')
      })

      //destructurate in establishment component
      const isSubscriptionEnd = () => {
        let isSubscriptionFinished = false
        store.apiCallMethods.get("../infos-subscription").then(res => {
          let currentDate = new Date()
          let expireDate = new Date(res.data.expireDate)
          currentDate > expireDate ? isSubscriptionFinished = true : isSubscriptionFinished = false
        });

        return isSubscriptionFinished
      }

      const getAdminInfos = () => {
        store.apiCallMethods.get("../api/user/1").then(res => {});
      }

      const getStatements = () => {
        store.apiCallMethods.get('/link').then(
          (res) => {
            if (res) {
              console.log('response', res)
              communications.list.value = res.data
              //all type of statements are in this data object (important, ...etc)
            }
          })
      }

      //function to verify if current url contain param "new-year"
      const isNewYear = () => {
        let url = window.location.href
        let newYear = url.includes('new-year')
        if (newYear) {
          showWelcomeMessage.value = true
        }
      }

      onMounted(() => {
        isNewYear()
        isSubscriptionEnd(),
          getAdminInfos()
        //getStatements()
      })

      return {
        store,
        state,
        tabs,
        currentTab,
        showWelcomeMessage,
        swithBetweenTabs,
        swithTabFromTrueToFalse,
        isSubscriptionEnd,
        getAdminInfos,
        getStatements,
      }
    },
  };
</script>