<script>
import {Routine} from "../model/routine.entity.js";

export default {
  name: "routine-card",
  props:{
    routine: {
      type: Routine,
      required: true
    }
  }
}
</script>

<template>
  <Toast />
  <pv-card class="m-2">
    <template #header>
      <img :alt="routine.title" :src="routine.image">
    </template>
    <template #title>{{routine.name}}</template>
    <template #subtitle>{{ routine.category }}</template>
    <template #content>
      <p class="m-0">
        {{ routine.instructions }}
      </p>
    </template>
    <template #footer>
      <pv-button label="Add routine" severity="secondary" outlined class="w-full" />
      <pv-button label="I'm not interested" class="w-full" />
    </template>
  </pv-card>
</template>