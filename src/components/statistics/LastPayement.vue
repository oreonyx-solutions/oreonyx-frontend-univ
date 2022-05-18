<!-- This example requires Tailwind CSS v2.0+ -->
<template>

    <div class="relative overflow-x-auto bg-white border sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-400">
            <thead class="text-xs uppercase bg-blue-600 text-white">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Product name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Color
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Category
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Price
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b border-gray-100 bg-white hover:bg-gray-50">
                    <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap">
                        Apple MacBook Pro 17"
                    </th>
                    <td class="px-6 py-4">
                        Sliver
                    </td>
                    <td class="px-6 py-4">
                        Laptop
                    </td>
                    <td class="px-6 py-4">
                        $2999
                    </td>
                </tr>
                 <tr class="border-b border-gray-100 bg-white hover:bg-gray-50">
                    <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap">
                        Apple MacBook Pro 17"
                    </th>
                    <td class="px-6 py-4">
                        Sliver
                    </td>
                    <td class="px-6 py-4">
                        Laptop
                    </td>
                    <td class="px-6 py-4">
                        $2999
                    </td>
                </tr>
                 <tr class="border-gray-100 bg-white hover:bg-gray-50">
                    <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap">
                        Apple MacBook Pro 17"
                    </th>
                    <td class="px-6 py-4">
                        Sliver
                    </td>
                    <td class="px-6 py-4">
                        Laptop
                    </td>
                    <td class="px-6 py-4">
                        $2999
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
    import {
        toRefs,
        reactive,
        ref,
        inject,
        onMounted
    } from 'vue'

    import store from '../../store'

    export default {

        setup() {

            // const store = inject('store')
            const state = ref({
                data: {},
                payementExample: [{
                        id: 1,
                        establishment: "Université de Lomé",
                        email: "univ-lome.tg",
                        subscriptionType: "Premium",
                        interval: "01/01/2021 - 01/01/2022",
                        period: "01 année",
                        aggregator: "CinetPay",
                        statut: "Confirmé"
                    },
                    {
                        id: 1,
                        establishment: "Université de Lomé",
                        email: "univ-lome.tg",
                        subscriptionType: "Premium",
                        interval: "01/01/2021 - 01/01/2022",
                        period: "01 année",
                        aggregator: "CinetPay",
                        statut: "Confirmé"
                    },

                ]
            });

            /*store.apiCallMethods.get('lastPayement').then(
                (res) => {
                    if (res) {
                        state.value.data = res.data
                    } else {
                        console.log('error')
                    }
                });*/

            return {
                //...toRefs(state),
                state,
            }
        },
    }
</script>