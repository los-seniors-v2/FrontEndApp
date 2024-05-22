<script>
export default {
  name: "toolbar-component"
}
</script>

<template>
  <pv-toolbar class="toolbar">
    <template #start>
      <img src="src/assets/images/flexpal-logo.png" alt="logo" width="150px">
    </template>

    <template #center>
    </template>

    <template #end>
      <ul class="list-none p-0 m-0 overflow-hidden" style="display:flex; ">
        <li>
          <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple" href="/home">
            <i class="pi pi-home mr-4" style="font-size: 2.5rem"></i>
            <span class="font-medium" style="font-size: 1.5rem">Home</span>
          </a>
        </li>
        <li>
          <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple" href="/performance">
            <i class="pi pi-heart mr-4" style="font-size: 2.5rem"></i>
            <span class="font-medium" style="font-size: 1.5rem">Examiner Performance Overview</span>
          </a>
        </li>
      </ul>
    </template>
  </pv-toolbar>


</template>

<style scoped>

</style>