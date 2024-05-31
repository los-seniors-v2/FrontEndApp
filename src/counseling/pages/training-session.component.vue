<script>
import QuestionSection from "../components/training-session/question-section.component.vue";
import DetailsSection from "../components/training-session/details-section.component.vue";
import TrainerSection from "../components/training-session/trainer-section.component.vue";
import GuidelinesSectionComponent from "../components/training-session/guidelines-section.component.vue";
import toolbarComponent from "../../public/components/toolbar.component.vue";

export default {
  name: "training-session.component",
  components: {
    QuestionSection,
    DetailsSection,
    TrainerSection,
    GuidelinesSectionComponent,
    toolbarComponent
  }
}
</script>

<template>
  <toolbar-component></toolbar-component>
  <QuestionSection />
  <DetailsSection />
  <TrainerSection />
  <GuidelinesSectionComponent />
</template>

<style scoped>

</style>