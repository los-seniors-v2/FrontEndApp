<script>
  import ToolbarComponent from "./public/components/toolbar.component.vue";

  export default {
    name: 'app',
    components: {ToolbarComponent},
    title: 'Flex Pal',
    data() {
      return {
        drawer: false,
        items: [
          { label: 'Routine List', to: '/routine-list'},
          { label: 'Plans', to: '/plans'},
          { label: 'Programming Session', to: '/programming-session'},
          { label: 'Home', to: '/home'},
        ]
      }
    },
    methods: {
    }
  }
</script>

<template>
   <router-view/>
</template>


<style >


</style>