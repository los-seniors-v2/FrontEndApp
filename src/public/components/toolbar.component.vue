<script>

export default {
  name: "toolbar-component",

}
</script>

<template>

  <pv-toolbar class="toolbar">
    <template #start>
        <img src="../../assets/images/flexpal-logo.png" alt="Flex Pal Logo" style="width: 350px; height: 70px;"/>
    </template>

    <template #end >
      <div class="input">
      <pv-InputText type="text" v-model="value" class="inner_input" placeholder="Search in site"/>
      <span class="pi pi-search" style="font-size: 1.5rem"></span>
      </div>
    </template>
  </pv-toolbar>

</template>

<style scoped>
.toolbar{
  width: 100vw;
  display: flex;
  justify-content: space-around;

  li{
    list-style-type: none;
    display: inline;
    padding: 10px;
  }
  .input{
    border:2px solid gray;
    border-radius: 10px;
    padding: 5px;
    display: flex;
    align-items: center;
    .inner_input{
      border:none;
      outline: none;
      margin-right: 5px;
      background-color: transparent;
    }
  }

}
</style>