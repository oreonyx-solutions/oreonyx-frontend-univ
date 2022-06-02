<template>
  <div class="w-4/5 2xl:w-10/12 px-6 py-6 h-full absolute right-0 top-0">
    <div class="h-full flex-grow inline-flex w-full">
      <div class="h-full w-full">
        <div class="inline-flex w-full">
          <img class="h-6 mr-2 mt-1" :src="'public/assets/icons/fire.png'" alt="" />
          <h1 class="text-2xl font-bold mb-2">Statistiques</h1>
        </div>
        <div class="grid grid-cols-3 divide-x-2 divide-gray-100">
          <establishments />
          <users />
          <videoconferences />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import Users from '@/components/statistics/Users.vue'
  import Videoconferences from '@/components/statistics/Videoconferences.vue'
  import Establishments from '@/components/statistics/Establishments.vue'
  import LastPayement from '@/components/statistics/LastPayement.vue'
  import PerformancesGraph from '@/components/statistics/PerformancesGraph.vue'
  import PerformancesOverview from '@/components/statistics/PerformancesOverview.vue'
  import IncomesOverview from '@/components/statistics/IncomesOverview.vue'
  import Graph1 from '@/components/statistics/Graph1.vue'
  import Graph2 from '@/components/statistics/Graph2.vue'
  import Graph3 from '@/components/statistics/Graph3.vue'
  import Graph4 from '@/components/statistics/Graph4.vue'


  export default {
    name: "Statistics",
    components: {
      Videoconferences,
      Establishments,
      Users,
      LastPayement,
      PerformancesGraph,
      PerformancesOverview,
      IncomesOverview,
      Graph1,
      Graph2,
      Graph3,
      Graph4,
    },
    setup() {

      return {

      };
    },
  };
</script>