<template>
  <div class="bg-indigo-800 h-10">
    <nav class="px-6 py-2 flex items-start justify-between ">
      <div class="flex justify-start">
        <img class="h-6" :src="'src/assets/logo.png'" alt="" />
      </div>
      <div class="items-center inline-flex">
        <button type="button"
          class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
          aria-expanded="false" aria-haspopup="true">
          <span class="sr-only">Open user menu</span>
          <img class="h-6 w-6 rounded-full object-cover"
            src="https://images.pexels.com/photos/9941070/pexels-photo-9941070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="">
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Navbar'
  }
</script>

<style>

</style>