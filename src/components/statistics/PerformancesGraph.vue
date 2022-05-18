<template>

  <div class="text-500 sm:rounded-lg pt-4 2xl:hidden">
    <apexchart class="bg-white" height="359" width="100%" type="area" :options="chartOptions" :series="series">
    </apexchart>
  </div>
  <div class="sm:rounded-lg py-4 hidden 2xl:block">
    <apexchart class="bg-white" height="385" width="100%" type="area" :options="chartOptions" :series="series">
    </apexchart>
  </div>

</template>

<script>
  import VueApexCharts from "vue3-apexcharts";

  export default {
    name: "PerformancesGraph",
    components: {
      apexchart: VueApexCharts,
    },
    data: function () {
      return {
        chartOptions: {
          legend: {
            position: 'top'
          },
          chart: {
            type: 'area',
            stacked: false,
            zoom: {
              enabled: false
            },
            toolbar: {
              show: true,
              offsetX: 0,
              offsetY: 0,
            },
          },
          dataLabels: {
            enabled: false
          },
          markers: {
            size: 0,
          },
          theme: {
            mode: 'light',
            palette: 'palette7',

          },
          fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 1,
              inverseColors: false,
              opacityFrom: 0.45,
              opacityTo: 0.05,
              stops: [20, 100, 100, 100]
            },
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          },

        },
        series: [{
            name: "Data1",
            data: [30, 40, 35, 50, 49, 60, 70, 91],
          },
          {
            name: "Data2",
            data: [50, 20, 35, 66, 77, 53, 62, 80],
          },
        ],
      };
    },
  }
</script>

<style>

</style>