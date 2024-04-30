<script>
import Card from "primevue/card";
import Button from "primevue/button";
import Panel from 'primevue/panel';
import Toolbar from "primevue/toolbar";

export default {
  name: "Guidelines",
};

</script>

<template>

  <div class="card" style="width: 100%">
    <card>
      <template #title>
        <h2 style="margin-left: 15%">Session Guidelines</h2>
        <section>
          <Panel class="right-panel" style="width: 40%">
            <template #header>
              <div class="header-content">
                <img src="/src/assets/images/stay-hydrated.png" alt="stay-hydrated" class="header-image">
                <div class="header-text">
                  <h3>Stay Hydrated</h3>
                  <p>Drink water before and during the session</p>
                </div>
              </div>
            </template>
          </Panel>

          <Panel class="right-panel" style="width: 40%">
            <template #header>
              <div class="header-content">
                <img src="/src/assets/images/active-participation.png" alt="stay-hydrated" class="header-image">
                <div class="header-text">
                  <h3>Active Participation</h3>
                  <p>Engage and ask questions for better understanding</p>
                </div>
              </div>
            </template>
          </Panel>
        </section>
      </template>

      <template #content>
        <p class="m-1" style="margin-left: 15%">
          Follow these tips to make the most out of your session


        </p>
      </template>

      <template  #footer>
        <div>
          <Button label="Read More"  style="background-color: black; padding:15px 50px 15px 50px; margin-left: 15%"/>
        </div>
      </template>
    </card>
  </div>

</template>

<style >
/*Panel Styles */
.right-panel {
  display: flex;
  order: 1;
}
.header-content {
  display: flex;
  align-items: center; /* Esto alinea verticalmente los elementos al centro */
}
.header-image {
  width: 100px; /* Ajusta esto a la anchura que desees para tu imagen */
  height: 100px; /* Ajusta esto a la altura que desees para tu imagen */
  margin-right: 10px; /* Esto añade un poco de espacio a la derecha de la imagen */
}
.header-text {
  display: flex;
  flex-direction: column;
}
.header-text p {
  margin-top: -15px; /* Esto eliminará el margen superior del título */
}


</style>