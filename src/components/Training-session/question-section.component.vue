<script>
import Card from "primevue/card";
import FloatLabel from "primevue/inputtext";

export default {
  name: "QuestionSection",
  components: {
    Card,
    FloatLabel
  }
}
</script>

<template>
<div class="card" style="width: 100%">
  <Card >
    <template #title>
      <h2>Get Ready For Your Session</h2>
    </template>

    <template #content>
      <p class="m-1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
        quas!
      </p>
    </template>
  </Card>
</div>


</template>

<style >
h2{
font-size: 50px;
}
</style>
