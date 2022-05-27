<template>
    <div class="blog h-auto">
        <div class="inline-flex w-full">
            <sidebar class="w-1/5 2xl:w-2/12"/>
             <blog />
        </div>
    </div>
</template>

<script>

    import Sidebar from '@/components/home/Sidebar.vue'
    import Blog from '@/components/home/Blog.vue'

    export default {
        name: "BlogView",

        components: {
            Sidebar,
            Blog,
        },

         setup() {
            return {
                
            }
        } 
    }
</script>

<style>

</style>