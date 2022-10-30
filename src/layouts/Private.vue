<template>
  <div>
    <Work v-if="store.state.workspace.display" />
    <router-view v-else />
  </div>
</template>

<script>

  import {
    onMounted,
  } from 'vue'

  import Work from "@/components/home/Work.vue";
  import store from "../store";

  export default {
    components: {
      Work,
    },
    setup() {
      store.apiCallMethods.get("../infos-establishment").then((res) => {
        console.log(res.data);
        store.state.establishment = res.data;
      });


      onMounted(() => {})

      return {
        store,
      };
    },
  };
</script>