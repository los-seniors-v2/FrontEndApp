<script>
export default {
  name: "calender.component"
}
</script>

<template>
  <Calendar v-model="buttondisplay" showIcon :showOnFocus="false" />
  <Calendar v-model="icondisplay" showIcon iconDisplay="input" />
  <Calendar v-model="templatedisplay" showIcon iconDisplay="input" timeOnly>
    <template #inputicon="{ clickCallback }">
      <InputIcon class="pi pi-clock cursor-pointer" @click="clickCallback" />
    </template>
  </Calendar>
</template>

<style scoped>

</style>