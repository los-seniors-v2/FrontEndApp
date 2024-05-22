<script setup>
import { ref } from "vue";
import Calendar from "primevue/calendar";

const datedisplay = ref();
const timedisplay = ref();
</script>

<template>
  <div class="card flex flex-wrap gap-3 p-fluid">
    <div class="flex-auto">
      <label for="datedisplay" class="font-bold block mb-2"> Date </label>
      <Calendar v-model="datedisplay" showIcon :showOnFocus="true" inputId="datedisplay" class="my-calendar"/>
    </div>
    <div class="flex-auto">
      <label for="timedisplay" class="font-bold block mb-2"> Time </label>
      <Calendar v-model="timedisplay" showIcon iconDisplay="input" timeOnly inputId="timedisplay">
        <template #inputicon="{ clickCallback }">
          <InputIcon class="pi pi-clock cursor-pointer" @click="clickCallback" />
        </template>
      </Calendar>
    </div>
    <a href="/programming-session">
      <button>Program</button>
    </a>
  </div>


</template>

<style>
.flex-auto{
  width: 200px;
  margin-left: 850px;
  text-align: center;
}
</style>