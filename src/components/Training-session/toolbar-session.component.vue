<script >
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";

export default {
  name: "ToolbarSession",
  components: {
    Button,
    Toolbar
  }
};

</script>

<template>

  <div class="card">
    <Toolbar style=" padding: 1rem 1rem 1rem 1.5rem">
      <template #start>
        <div class="flex ">
          <img src="/src/assets/images/flexpal-logo.png" height="60px" width="250px" alt="flexpal logo">
          <span >Video Call with Trainer </span>
        </div>
      </template>

    </Toolbar>

  </div>

</template>

<style scoped>
.card {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding:0;
}

span{
  color:black;
  font-weight: bold;
  margin-left:1rem;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>