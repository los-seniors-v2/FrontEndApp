<script setup>
import Card from "primevue/card";
import { ref } from 'vue';

const value = ref(null);
</script>

<template>
<div class="card" style="width: 100%; text-align:center; ">
  <Card >
    <template #title>
      <h2>Get Ready For Your Session</h2>
    </template>

    <template #content>
      <p class="m-1">
        Prepare yourself for a productive session
      </p>
    </template>


    <template  #footer>
      <div style="display:flex; justify-content: center; align-items: center; width:85%; ">
        <pv-floatLabel >
          <pv-input-text id="username" v-model="value" style="width:200%; " />
          <label for="username"  style="width:190%; text-align:center; overflow:hidden">Enter any specific questions or topics you'd like to discuss</label>
        </pv-floatLabel>
      </div>

    </template>

  </Card>

</div>
</template>

<style scoped >
h2{
font-size: 50px;
  margin-bottom: 0;
}

</style>
