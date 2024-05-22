<script>

  /*import ToolbarSessionComponent from "./components/training-session/toolbar-session.component.vue";
  import QuestionSection from "./components/training-session/question-section.component.vue";
  import DetailsSection from "./components/training-session/details-section.component.vue";
  import TrainerSection from "./components/training-session/trainer-section.component.vue";
  import GuidelinesSection from "./components/training-session/guidelines-section.component.vue";

  export default {
      components: {
      ToolbarSessionComponent, QuestionSection, DetailsSection, GuidelinesSection, TrainerSection
    }
  };*/
  export default {
    name: 'app',
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
      toggleDrawer() {
        this.drawer = !this.drawer
      }
    }
  }
</script>

<template>
  <toolbar/>
   <router-view/>
</template>


<style >


</style>