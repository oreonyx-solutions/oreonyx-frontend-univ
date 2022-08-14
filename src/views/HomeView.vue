<template>
  <div class="home">
    <div class="inline-flex w-full">
      <sidebar class="w-1/5 2xl:w-2/12" />
      <home />
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
  import Home from '../components/home/Home.vue'
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
      Home,
      IncomesOverview,
      Graph1,
      Graph2,
      Graph3,
      Graph4,
      Graph5
    }
  }
</script>