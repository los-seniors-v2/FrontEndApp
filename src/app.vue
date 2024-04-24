<script setup>
import BookASession from "./components/book-a-session.component.vue";
export default {
  name: "app",
  components: {
    BookASession,
  },
  data() {
    return {
      coaches: [],
    };
  }


</script>

<template>
  <BookASession></BookASession>
</template>

<style scoped>

</style>
