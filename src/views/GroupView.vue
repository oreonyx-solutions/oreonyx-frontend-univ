<template>
    <div class="members">
        <div class="inline-flex w-full">
            <sidebar class="w-1/5 2xl:w-2/12" />
            <Group />
        </div>
    </div>
</template>
<style>
  .content-flow {
    height: 100vh;
  }
</style>
<script>

    import Sidebar from '@/components/home/Sidebar.vue'
    import Group from '@/components/home/Group.vue'

    export default {
        name: "MembersView",

        components: {
            Sidebar,
            Group,
        },

         setup() {
            return {
                
            }
        } 
    }
</script>