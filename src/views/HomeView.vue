<template>
  <div class="home bg-gray-50">
    <div class="inline-flex content-flow w-full">
      <div class="w-1/5 2xl:w-2/12">
        <sidebar />
      </div>
      <div class="rounded-tl-3xl w-4/5 2xl:w-10/12 h-full flex flex-col border">
        <div class="">
          <div class="grid grid-cols-3 divide-x-2 divide-gray-100">
            <establishments />
            <users />
            <videoconferences />
          </div>
        </div>
        <hr class="border-b border-gray-100">
        <div class="h-full grid-rows-2 p-6 overflow-hidden">
          <div class="w-full h-full inline-flex">
            <div class="h-full flex flex-col w-1/2 2xl:w-3/5">
              <div class="h-auto">
                <div class="inline-flex w-full">
                  <div class="inline-flex w-full">
                    <div class="w-9/12">
                      <h5 class="text-base font-bold">Derniers Abonnements</h5>
                    </div>
                    <div class="w-3/12 flex flex-row-reverse">
                      <button title=" Tout afficher"
                        class="rounded-md px-3 py-1 text-xs bg-white border font-medium inline-flex text-gray-500">
                        Tout afficher
                      </button>
                    </div>
                  </div>
                </div>
                <div class="w-full flex-grow">
                  <div class="mt-6 h-full w-full">
                    <lastPayement />
                  </div>
                </div>
              </div>
              <div class="mt-5 w-full flex-grow">
                <div class="inline-flex w-full">
                  <div class="w-9/12">
                    <h5 class="text-base font-bold">Graphique des performances</h5>
                  </div>
                  <div class="w-3/12 flex flex-row-reverse">
                    <button title=" Tout afficher"
                        class="rounded-md px-3 py-1 text-xs bg-white border font-medium inline-flex text-gray-500">
                        <span style="font-size:15px;" class="material-symbols-outlined mr-1">
                        calendar_month
                      </span>
                        Mensuelle
                         <span style="font-size:15px;" class="material-symbols-outlined mt-0.5 ml-2">
                        keyboard_arrow_down
                      </span>
                      </button>
                  </div>
                </div>
                <div class="bg-white border mt-6 rounded-md w-full flex-grow h-auto">
                  <performancesGraph />
                </div>
              </div>
            </div>
            <div class="pl-6 h-full w-1/2 2xl:w-2/5">
              <div class="rounded-l-xl rounded-r-xl h-full flex flex-col">
                <div class="grid grid-cols-2 gap-2">
                  <div class="bg-white border rounded-md">
                    <graph1 />
                  </div>
                  <div class="bg-white border rounded-md">
                    <graph2 />
                  </div>
                </div>

                <div class="grid grid-cols-2 gap-2 mt-2">
                  <div class="bg-white border rounded-md">
                    <graph4 />
                  </div>
                  <div class="bg-white border rounded-md">
                    <graph3 />
                  </div>
                </div>

                <div class="mt-3 w-full flex-grow">
                  <div class="bg-white border rounded-xl">
                    <graph5 />
                    <div class="w-full h-20 border border-l-0 border-r-0 rounded-xl p-3">
                      <p class="text-xs text-gray-600 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti odit ducimus necessitatibus
                        atque iusto enim tenetur quo sapiente ad perspiciatis facere.
                      </p>
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
</template>

<style>
  .content-flow {
    height: 100vh;
  }
</style>

<script>
  import Sidebar from '../components/home/Sidebar.vue'
  import Establishments from '../components/statistics/Establishments.vue'
  import Users from '../components/statistics/Users.vue'
  import Videoconferences from '../components/statistics/Videoconferences.vue'
  import LastPayement from '../components/statistics/LastPayement.vue'
  import PerformancesGraph from '../components/statistics/PerformancesGraph.vue'
  import PerformancesOverview from '../components/statistics/PerformancesOverview.vue'
  import IncomesOverview from '../components/statistics/IncomesOverview.vue'
  import Graph1 from '../components/statistics/Graph1.vue'
  import Graph2 from '../components/statistics/Graph2.vue'
  import Graph3 from '../components/statistics/Graph3.vue'
  import Graph4 from '../components/statistics/Graph4.vue'
  import Graph5 from '../components/statistics/Graph5.vue'

  export default {
    name: 'Homeview',
    components: {
      Sidebar,
      Establishments,
      Users,
      Videoconferences,
      LastPayement,
      PerformancesGraph,
      PerformancesOverview,
      IncomesOverview,
      Graph1,
      Graph2,
      Graph3,
      Graph4,
      Graph5
    }
  }
</script>