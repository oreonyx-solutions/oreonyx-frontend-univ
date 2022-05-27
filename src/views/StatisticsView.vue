<template>
     <div class="statistics bg-gray-50">
        <div class="inline-flex content-flow w-full">
            <sidebar class="w-1/5 2xl:w-2/12'" />
            <statistics />
        </div>
    </div>
</template>

<script>

    import Sidebar from '@/components/home/Sidebar.vue'
    import Statistics from '@/components/home/Statistics.vue'

    export default {
        name: "StatisticsView",

        components: {
            Sidebar,
            Statistics,
        },

         setup() {
            return {
                
            }
        } 
    }
</script>

<style>

</style>