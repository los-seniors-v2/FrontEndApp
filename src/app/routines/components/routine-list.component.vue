<script>

import RoutineCard from "./routine-card.component.vue";

export default {
  name: "routine-list",
  components: {RoutineCard},
  data() {
    return {
      routines: [],
    };
  },
  created() {
    fetch('src/app/routines/services/routines-api.service.json')
        .then(response => response.json())
        .then(data => {
          this.routines = data;
        });
  },
}
</script>

<template>
  <RoutineCard v-for="routine in routines" :key="routine.id" :routine="routine"/>
</template>

<style scoped>

</style>