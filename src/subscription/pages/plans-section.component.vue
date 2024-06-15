<script >
import Card from "primevue/card"
import Button from "primevue/button"
import OverlayPanel from "primevue/overlaypanel"
import OverlayPanelForm from "./subscription-overlay-panel.component.vue"
import toolbarComponent from "../../public/components/toolbar.component.vue";

export default {
  name: "Plans",
  components: {
    toolbarComponent,
    Card,
    Button,
    OverlayPanel,
    OverlayPanelForm
  },
  methods: {
    showOverlayPanel() {
      this.$refs.op.toggle(event); // Muestra el OverlayPanel
    }
  }
};

</script>

<template>
  <toolbar-component></toolbar-component>
<div class="flex">

    <Card style="width: 25rem; overflow: hidden; margin-right:3em; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
      <template #header>
        <img class="image-fit" alt="user header" src="/src/assets/images/img_test.jpeg"/>
      </template>
      <template #title>Test Plan</template>
      <template #content>
        <p class="m-0">
         Prueba nuestro Test Plan para acceder a planes de nutrición personalizados y rutinas de ejercicio adaptadas antes de comprometerte.
         <br> !Empieza tu viaje hacia un estilo de vida mas saludable hoy mismo!
        </p>
      </template>
      <template #footer >
        <div class="button ">
          <Button label="Suscribirse" class="w-full" @click="showOverlayPanel" /> <!-- Agrega un evento click al botón -->
        </div>
      </template>
    </Card>




  <Card style="width: 25rem; overflow: hidden; margin-right:3em; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);  ">
    <template #header>
      <img class="image-fit" alt="user header" src="/src/assets/images/img_mensual.jpeg"/>
    </template>
    <template #title>Monthly Plan</template>
    <template #content>
      <p class="m-0">
        Consigue resultados sostenibles con nuestro Monthly Plan. Accede a planes de nutrición personalizados, entrenadores expertos y seguimiento de progreso.
        <br><br> !Alcanza tus metas de fitness mes a mes!
      </p>
    </template>
    <template #footer >
      <div class="button ">
        <Button label="Suscribirse" class="w-full" @click="showOverlayPanel" /> <!-- Agrega un evento click al botón -->
      </div>
    </template>

  </Card>

  <Card style="width: 25rem; overflow: hidden; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
    <template #header>
      <img class="image-fit" alt="user header" src="/src/assets/images/img_anual.jpeg"/>
    </template>
    <template #title>Annual Plan</template>
    <template #content>
      <p class="m-0">
       Compremétete con tu bienestar con nuestro Annual Plan. Accede a todos los beneficios de Fithub durante todo el año, desde planes de nutrición personalizados hasta sesiones de entrenamiento virtuales.
       !Haz de tu salud una prioridad y alcanza tus objetivos de fitness de manera consistente!
      </p>
    </template>
    <template #footer >
      <div class="button ">
        <Button label="Suscribirse" class="w-full" @click="showOverlayPanel" /> <!-- Agrega un evento click al botón -->
      </div>
    </template>

  </Card>
  <OverlayPanel ref="op" showCloseIcon appendTo="body"> <!-- Agrega el componente OverlayPanel -->
    <OverlayPanelForm /> <!-- Usa el componente OverlayPanelForm -->
  </OverlayPanel>

  </div>

</template>

<style scoped>
.flex{
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  text-align:center;
}
.image-fit {
  object-fit: contain;
  width: 100%;

}
</style>