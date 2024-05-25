<script>

import {defineComponent} from "vue";
import RoutineList from "./routines/components/routine-list.component.vue";

export default defineComponent({
  components: {RoutineList}
})
</script>

<template>
  <Toast/>
  <pv-confirm-dialog></pv-confirm-dialog>
  <RoutineList />
</template>

<style scoped>
</style>
