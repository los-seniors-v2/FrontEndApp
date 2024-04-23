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
  <pv-card class="m-2">
    <template #header>
      <img alt="Imagen de Rutina" src="" />
    </template>
    <template #title>Advanced Card</template>
    <template #subtitle>Card subtitle</template>
    <template #content>
      <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
        quas!
      </p>
    </template>
    <template #footer>
      <div class="flex gap-3 mt-1">
        <Button label="Cancel" severity="secondary" outlined class="w-full" />
        <Button label="Save" class="w-full" />
      </div>
    </template>
  </pv-card>
</template>