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
  <Toast/>
    <header>
      <Toolbar class="bg-primary" fixed>
        <template #start>
          <a href="/home">
          <img src="/src/assets/images/flexpal-logo.png" height="60px" width="250px" alt="flexpal logo">
          </a>
        </template>
        <template #end>
          <div class="flex-column">
            <router-link v-for="item in items" :key="item.label" v-slot="{navigate, href}" :to="item.to" custom>
              <pv-button :href="href" class="p-button-text text-white" @click="navigate">{{ item.label }}</pv-button>
            </router-link>
          </div>
        </template>
      </Toolbar>
    </header>
  <main>
    <router-view/>
  </main>
</template>


<style >


</style>