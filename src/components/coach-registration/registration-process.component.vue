<script>
import InputText  from "primevue/inputtext";
import Button from "primevue/button";
import axios from "axios";
export default {
  name: "RegistrationProcess",
  data() {
    return {
      coach:null
    };
  },
  methods: {
    fetchCoaches() {
      axios.get("/src/services/coach-api.service.json")
          .then(response => {
            // Aquí se selecciona el primer entrenador de la lista y se guarda
            this.coach = response.data.coaches[0];
          })
          .catch(error => {
            // En caso de error al obtener los datos, se muestra en consola
            console.error('Error al obtener los coaches:', error);
          });
    }
  },
  mounted() {
    // Se llama al método fetchCoaches cuando el componente se monta
    this.fetchCoaches();
  },
  components: {
    InputText,
    Button
  }
}

</script>

<template>
  <div>

  <div class="container1">
    <h1>Coach Registration</h1>
    <div class="card">
      <InputText type="text" v-model="value" placeholder="Enter your details" style="width:320px; " />
    </div>
    <div class="button">
      <Button label="Submit" />
    </div>
  </div>

  <div class="container2">
    <h1>Verification Process</h1>
    <p>Comeplete the verification steps below</p>
    <div class="card" >
      <label for="image" style="font-weight:bold">Certified Image</label>
      <InputText id="image"  placeholder="Upload certified"  style="width:520px; " />
    </div>
    <div class="button">
      <Button label="Verify" />
    </div>
  </div>
    <div class="profile-container" v-if="coach">
      <div class="profile-image-container">
        <img :src="coach.photo" alt="profile picture" class="profile-picture"/>
      </div>
      <div class="profile-info">
        <h1>{{ coach.name }}</h1>
        <spam class="certified-trainer">{{ coach.knowledge }}</spam>
        <p class="profile-setup">Profile setup required</p>
      </div>
      <button class="edit-profile-btn">Edit Profile</button>
    </div>


  </div>
</template>

<style>
.container1{
  background-image:linear-gradient(to right,#395BB2 0%,#2956CA 38%,#001855 100%);
  width:100%;
  text-align:center;
  position:fixed;
  left:0;
  top:50px;
  padding:30px;
  h1{
    color:white;
  }
}

.card{
  margin-bottom:15px;
}
InputText{
  width:100px;
}
Button{
  background-color:black;
  border:none;
  padding:10px 50px 10px 50px;
}
.container2{
  text-align:center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div{
    display:flex;
    flex-direction: column;
    align-items:start;
  }
}

.profile-container {
  display: flex;
  align-items: center;
  justify-content: space-between; /* Asegura que los elementos estén separados */
  background-color: #FFF; /* Fondo blanco o el color de tu preferencia */
  padding: 20px;
  border-radius: 8px; /* Bordes redondeados del contenedor */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra suave */
  max-width: 1000px; /* El ancho máximo que prefieras */
  margin: 55px auto auto; /* Centra el contenedor si es más pequeño que el ancho máximo */
}

.profile-image-container {
  flex: 0 0 auto; /* No permite que la imagen se estire o encoga */
}

.profile-picture {
  width: 90px; /* Ancho fijo */
  height: 90px; /* Alto fijo */
  border-radius: 50%; /* Hace la imagen redonda */
  object-fit: cover; /* Asegura que la imagen cubra todo el espacio sin distorsionarse */
  margin-right: 10px; /* Espacio entre la imagen y la información del perfil */
}

.profile-info {
  flex-grow: 1; /* Permite que este div ocupe todo el espacio horizontal disponible */
  padding-right: 20px; /* Espacio entre la información del perfil y el botón */
}

.profile-info h1 {
  font-size: 1.5rem; /* Tamaño de fuente para el nombre */
  margin-bottom: 0.25rem; /* Espacio debajo del nombre */
}

.certified-trainer {
  font-size: 1rem; /* Tamaño de fuente para el título/certificación */
  margin-bottom: 0.5rem; /* Espacio debajo del título/certificación */
  background-color: #D9D9D980;
}

.profile-setup {
  font-size: 0.9rem; /* Tamaño de fuente para el estado del perfil */
  color: #888; /* Color gris para el texto de estado */
}

.edit-profile-btn {
  padding: 10px 20px; /* Espaciado interno del botón */
  font-size: 0.9rem; /* Tamaño de fuente del botón */
  background-color: #000; /* Color de fondo del botón */
  color: #FFF; /* Color de texto del botón */
  border: none; /* Sin bordes */
  border-radius: 10px; /* Bordes redondeados del botón */
  cursor: pointer; /* Cursor tipo puntero al pasar el mouse */
}

.edit-profile-btn:hover {
  background-color: #333; /* Color de fondo del botón al pasar el mouse */
}

</style>