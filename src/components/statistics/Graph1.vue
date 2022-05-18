<template>

  <div class="p-4">
    <apexchart width="100%" type="area" :options="chartOptions" :series="series"></apexchart>
  </div>

</template>

<script>
  import VueApexCharts from "vue3-apexcharts";

  export default {
    name: "Graph1",
    components: {
      apexchart: VueApexCharts,
    },
    data: function () {
      return {
        chartOptions: {
          chart: {
            type: 'area',
            stacked: false,
            sparkline: {
              enabled: true
            },
            zoom: {
              enabled: false
            },
            toolbar: {
              show: false,
              offsetX: 0,
              offsetY: 0,
            },
          },
          stroke: {
            curve: 'straight'
          },
          fill: {
            opacity: 0.3
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
          xaxis: {
            crosshairs: {
              width: 1
            },
          },
          yaxis: {
            min: 0
          },
          title: {
            text: '$135,965',
            offsetX: 0,
            style: {
              fontSize: '20px',
            }
          },
          subtitle: {
            text: 'Graph1',
            offsetX: 0,
            style: {
              fontSize: '14px',
            }
          }
        },
        series: [{
          name: "series-2",
          data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
        }, ],
      };
    },
  }
</script>

<style>

</style>