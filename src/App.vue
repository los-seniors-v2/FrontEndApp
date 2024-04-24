
<script>

  import ToolbarSessionComponent from "./components/Training-session/Toolbar-session.component.vue";
  import QuestionSection from "./components/Training-session/question-section.component.vue";
  import DetailsSection from "./components/Training-session/details-section.component.vue";

  export default {
  components: {
  ToolbarSessionComponent, QuestionSection, DetailsSection
}
};
</script>

<template>
  <div>
    <ToolbarSessionComponent />
    <QuestionSection />
    <DetailsSection />
  </div>



</template>


<style >


</style>