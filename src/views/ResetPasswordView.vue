<template>
  <div class="reset-password">
      <resetpassword />
  </div>
</template>

<script>
// @ is an alias to /src
import resetpassword from '../components/Resetpassword.vue'

export default {
  name: 'ResetPasswordView',
  components: {
    resetpassword
  }
}
</script>
