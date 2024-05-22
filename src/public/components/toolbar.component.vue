<script>
export default {
  name: "toolbar-component"
}
</script>

<template>

  <div>

  <pv-toolbar class="toolbar">
    <template #start>
        <img src="../../assets/images/flexpal-logo.png" alt="Flex Pal Logo" style="width: 400px; height: 100px;"/>
    </template>

    <template #center>
    </template>

    <template #end>
      <ul class="list-none p-0 m-0 overflow-hidden" style="display:flex; ">
        <li>
         <a href="/home"> Home </a>
        </li>
        <li>
          <a href="/routines"> Routines </a>
        </li>
      </ul>
    </template>
  </pv-toolbar>

  </div>

</template>

<style scoped>

</style>