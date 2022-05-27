<template>
    <div class="subscription bg-gray-50">
        <div class="inline-flex content-flow w-full">
            <sidebar class="w-1/5 2xl:w-2/12'" />
            <subscription />
        </div>
    </div>
</template>

<script>

    import Sidebar from '@/components/home/Sidebar.vue'
    import Subscription from '@/components/home/Subscription.vue'

    export default {
        name: "SubscriptionView",

        components: {
            Sidebar,
            Subscription,
        },

         setup() {
            return {
                
            }
        } 
    }
</script>

<style>

</style>