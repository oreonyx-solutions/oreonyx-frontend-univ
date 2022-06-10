<template>
    <div class="members">
        <div class="inline-flex w-full">
            <sidebar class="w-1/5 2xl:w-2/12'" />
            <members />
        </div>
    </div>
</template>

<script>

    import Sidebar from '@/components/home/Sidebar.vue'
    import Members from '@/components/home/Members.vue'

    export default {
        name: "MembersView",

        components: {
            Sidebar,
            Members,
        },

         setup() {
            return {
                
            }
        } 
    }
</script>

<style>

</style>