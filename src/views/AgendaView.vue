<template>
    <div class="agenda">
         <div class="inline-flex w-full">
            <sidebar class="w-1/5 2xl:w-2/12'" />
            <agenda />
        </div>
    </div>
</template>

<script>

    import Sidebar from '@/components/home/Sidebar.vue'
    import Agenda from '@/components/home/Agenda.vue'

    export default {
        name: "AgendaView",

        components: {
            Sidebar,
            Agenda,
        },

         setup() {
            return {
                
            }
        } 
    }
</script>

<style>

</style>