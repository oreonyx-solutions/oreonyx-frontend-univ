<template>
  <div class="2xl:hidden">
    <apexchart width="455"  type="donut" :options="chartOptions" :series="series"></apexchart>
  </div>
   <div class="hidden 2xl:block">
    <apexchart width="445"  type="donut" :options="chartOptions" :series="series"></apexchart>
  </div>

</template>

<script>
  import VueApexCharts from "vue3-apexcharts";

  export default {
    name: "Graph5",
    components: {
      apexchart: VueApexCharts,
    },
    data: function () {
      return {
       series: [44, 55, 13, 43, 22],
          chartOptions: {
             theme: {
            mode: 'light',
            palette: 'palette2',

          },
            chart: {
              type: 'donut',
            },
            labels: ['Data3', 'Data4', 'Data5', 'Data6', 'Data7'],
          },
      };
    },
  }
</script>

<style>

</style>