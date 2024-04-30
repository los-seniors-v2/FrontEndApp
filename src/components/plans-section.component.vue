<script >
export default {
  name: "Plans",
};

</script>

<template>
<div class="flex">

    <Card style="width: 25rem; overflow: hidden; margin-right:3em; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
      <template #header>
        <img alt="user header" src="/src/assets/img_test.jpeg"/>
      </template>
      <template #title>Test Plan</template>
      <template #content>
        <p class="m-0">
         Prueba nuestro Test Plan para acceder a planes de nutrición personalizados y rutinas de ejercicio adaptadas antes de comprometerte.
         <br> !Empieza tu viaje hacia un estilo de vida mas saludable hoy mismo!
        </p>
      </template>
      <template #footer >
        <div class="flex ">
          <Button label="Suscribirse" class="w-full" />
        </div>
      </template>
    </Card>



  <Card style="width: 25rem; overflow: hidden; margin-right:3em; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);  ">
    <template #header>
      <img alt="user header" src="/src/assets/img_mensual.jpeg"/>
    </template>
    <template #title>Monthly Plan</template>
    <template #content>
      <p class="m-0">
        Consigue resultados sostenibles con nuestro Monthly Plan. Accede a planes de nutrición personalizados, entrenadores expertos y seguimiento de progreso.
        <br><br> !Alcanza tus metas de fitness mes a mes!
      </p>
    </template>
    <template #footer >
      <div class="flex ">
        <Button label="Suscribirse" class="w-full" />
      </div>
    </template>

  </Card>

  <Card style="width: 25rem; overflow: hidden; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
    <template #header>
      <img alt="user header" src="/src/assets/img_anual.jpeg"/>
    </template>
    <template #title>Annual Plan</template>
    <template #content>
      <p class="m-0">
       Compremétete con tu bienestar con nuestro Annual Plan. Accede a todos los beneficios de Fithub durante todo el año, desde planes de nutrición personalizados hasta sesiones de entrenamiento virtuales.
       !Haz de tu salud una prioridad y alcanza tus objetivos de fitness de manera consistente!
      </p>
    </template>
    <template #footer >
      <div class="flex ">
        <Button label="Suscribirse" class="w-full" />
      </div>
    </template>

  </Card>


  </div>

</template>

<style scoped>
div.flex{
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;

}

</style>