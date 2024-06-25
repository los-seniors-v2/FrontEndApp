<script>
export default {
  name: "language-switcher",
  data() {
    return {
      languages: ['en', 'es'],
      language: 'en'
    }
  }
}
</script>

<template>
  <pv-select-Button v-model="$i18n.locale" :options="languages" class="bg-primary uppercase"/>
</template>