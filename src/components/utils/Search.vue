<template>
  <div class="z-20 flex rounded-md shadow-sm w-full relative">
          <div v-if="enableSearch" class="absolute mt-8 rounded-b-md border bg-white w-full h-auto py-3.5">
            <div class="flex justify-center">
              <svg class="animate-spin -ml-1 mr-3 h-3 w-3 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
              </svg>
            </div>
          </div>
          <div class=" z-20 w-full inline-flex">
            <span :class="{'rounded-b-none': enableSearch }"
              class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-white text-gray-500 text-sm">
              <span class="material-icons-outlined">search</span>
            </span>
            <input type="text" name="company-website" id="company-website" :class="{'rounded-b-none': enableSearch }"
              :change="launchSearch()" v-model="query"
              class=" flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
              placeholder="Rechercher des communiqués...">
          </div>
        </div>
</template>

<script>
 import {
    ref,
    onMounted
  } from 'vue'

export default {
    name: 'Search',

setup () {
     const enableSearch = ref(false)
     const query = ref("")

     const launchSearch = () => {
        if (query.value != "") {
          //send request
          //then..
          enableSearch.value = true
        } else {
          enableSearch.value = false
        }
      }

      return {
        enableSearch,
        launchSearch,
        query,
   };
    },
  };
</script>

<style>

</style>