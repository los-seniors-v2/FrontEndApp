<script>
import {Routine} from "../model/routine.entity.js";

export default {
  name: "routine-card",
  props: {
    routine: {
      type: Routine,
      required: true
    }
  },
  methods: {
    addRoutine() {
      this.$confirm.require({
        message: `The routine ${this.routine.name} will be added to your list of routines. Do you want to proceed?`,
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        rejectClass: 'p-button-secondary p-button-outlined',
        rejectLabel: 'Cancel',
        acceptLabel: 'Save',
        accept: () => {
          this.$toast.add({severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000});
        },
        reject: () => {
          this.$toast.add({severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000});
        }
      });
    }
  }
}
</script>

<template>
  <pv-card class="m-2">
    <template #header>
      <img :alt="routine.title" :src="routine.image">
    </template>
    <template #title>{{ routine.name }}</template>
    <template #subtitle>{{ routine.category }}</template>
    <template #content>
      <p class="m-0">
        {{ routine.instructions }}
      </p>
    </template>
    <template #footer>
      <pv-button @click="addRoutine()" label="Add routine"/>
      <pv-button label="I'm not interested" class="w-full"/>
    </template>
  </pv-card>
</template>