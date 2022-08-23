<template>
  <div class="register">
      <register />
  </div>
</template>

<script>
// @ is an alias to /src
import register from '../components/Register.vue'

export default {
  name: 'RegisterView',
  components: {
    register
  }
}
</script>
