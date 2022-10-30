<template>
    <div class="ChooseSpecialities">
        <Payement />
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import Payement from '../components/home/payement.vue'
  
  export default {
    name: 'PayementView',
    components: {
        Payement
    }
  }
  </script>
  