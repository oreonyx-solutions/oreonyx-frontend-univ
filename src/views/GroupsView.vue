<template>
    <div class="agenda">
        <div class="inline-flex content-flow w-full">
            <sidebar class="w-1/5 2xl:w-2/12': store.state.sideBarState"/>
            <div class="w-4/5 2xl:w-10/12 px-6 py-6 h-full">
                <div class="h-full flex-grow">
                    <groups />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Sidebar from '@/components/home/Sidebar.vue'
    import Groups from '@/components/home/Groups.vue'

    export default {
        name: "GroupsView",

        components: {
            Sidebar,
            Groups,
        },

         setup() {
            return {
                
            }
        } 
    }
</script>

<style>

</style>