<template>

  <div class="p-4">
    <apexchart width="100%" type="bar" :options="chartOptions" :series="series"></apexchart>
  </div>

</template>

<script>
  import VueApexCharts from "vue3-apexcharts";

  export default {
    name: "Graph4",
    components: {
      apexchart: VueApexCharts,
    },
    data: function () {
      return {
        chartOptions: {
          chart: {
            type: 'bar',
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
          plotOptions: {
            bar: {
              columnWidth: '80%'
            }
          },
          labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],

          dataLabels: {
            enabled: false
          },
          markers: {
            size: 0,
          },
          theme: {
            mode: 'light',
            palette: 'palette6',

          },
          xaxis: {
            crosshairs: {
              width: 1
            },
          },
          tooltip: {
            fixed: {
              enabled: false
            },
          },
          x: {
            show: false
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
            text: 'Graph4',
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