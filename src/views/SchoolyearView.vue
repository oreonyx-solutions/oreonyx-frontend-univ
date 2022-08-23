<template>
    <div class="schoolyear">
         <div class="inline-flex w-full">
            <schoolyear />
        </div>
    </div>
</template>

<script>

    import schoolyear from '@/components/home/Schoolyear.vue'

    export default {
        name: "SchoolyearView",

        components: {
            schoolyear,
        },

         setup() {
            return {
                
            }
        } 
    }
</script>

<style>

</style>