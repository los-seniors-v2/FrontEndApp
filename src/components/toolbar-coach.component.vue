<script >
import Toolbar from "primevue/toolbar";
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
export default {
  name: "ToolbarCoach",
  components: {
    Toolbar
  }
};

</script>

<template>
  <div class="card">
    <Toolbar style=" padding: 1rem 1rem 1rem 1.5rem">
      <template #start>
        <div class="flex ">
          <img src="/src/assets/images/flexpal-logo.png" height="60px" width="250px">
          <div class="input-wrapper">
            <input class="input" type="text" v-model="search" placeholder="Search in site">
            <i class="pi pi-search"></i>
          </div>
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

.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90vw;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input {
  padding: 0.5rem;
  padding-right: 2rem; 
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  width: 14rem;
}

.pi-search {
  position: absolute;
  right: 1rem;
}
</style>