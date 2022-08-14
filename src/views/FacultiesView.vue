<template>
    <div class="faculties">
        <div class="inline-flex w-full">
            <sidebar class="w-1/5 2xl:w-2/12"/>
            <faculties />
        </div>
    </div>
</template>

<script>

    import Sidebar from '@/components/home/Sidebar.vue'
    import Faculties from '@/components/home/Faculties.vue'

    export default {
        name: "FacultiesView",

        components: {
            Sidebar,
            Faculties,
        },

         setup() {
            return {
                
            }
        } 
    }
</script>

<style>

</style>