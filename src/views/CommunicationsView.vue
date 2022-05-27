<template>
    <div class="communications h-auto">
    <div class="inline-flex w-full">
      <sidebar class="w-1/5 2xl:w-2/12'" />
      <communications /> 
    </div>
  </div>
</template>

<script>

    import Sidebar from '@/components/home/Sidebar.vue'
    import Communications from '@/components/home/Communications.vue'

    export default {
        name: "CommunicationsView",

        components: {
            Sidebar,
            Communications,
        },

         setup() {
            return {
                
            }
        } 
    }
</script>

<style>

</style>