
<script>

  import ToolbarSessionComponent from "./components/Training-session/Toolbar-session.component.vue";
  import QuestionSection from "./components/Training-session/question-section.component.vue";
  import DetailsSection from "./components/Training-session/details-section.component.vue";
  import TrainerSection from "./components/Training-session/trainer-section.component.vue";
  import GuidelinesSection from "./components/Training-session/guidelines-section.component.vue";

  export default {
  components: {
  ToolbarSessionComponent, QuestionSection, DetailsSection, GuidelinesSection, TrainerSection
}
};
</script>

<template>
  <div>
    <ToolbarSessionComponent />
    <QuestionSection />
    <DetailsSection />
    <TrainerSection />
    <GuidelinesSection />
  </div>



</template>


<style >


</style>