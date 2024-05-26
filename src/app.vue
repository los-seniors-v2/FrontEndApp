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

  import ToolbarSection from "./public/components/toolbar.component.vue";

  export default {
    name: 'app',
    components: {ToolbarSection},
    title: 'Flex Pal',
  }
</script>

<template>
  <toolbar-section v-if="$route.path !== '/login' && $route.path !== '/register'"/>
   <router-view/>
</template>


<style >


</style>
