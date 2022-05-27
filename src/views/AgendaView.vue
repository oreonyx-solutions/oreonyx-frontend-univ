<template>
    <div class="agenda">
        <div class="inline-flex content-flow w-full">
            <sidebar class="w-1/5 2xl:w-2/12': store.state.sideBarState"/>
            <div class="w-4/5 2xl:w-10/12 px-6 py-6 h-full">
                <div class="h-full flex-grow">
                    <agenda />
                </div>
            </div>
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