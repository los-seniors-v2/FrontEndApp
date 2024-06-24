<script>

import FormRegister from "../components/form-register.component.vue";
import FileUploadContent from "../components/file-upload-content.component.vue";
import {IamApiService} from "../services/iam-api.service.js";
import {User} from "../model/user.entity.js";


export default {
  name: "resgister",
  components: {FileUploadContent, FormRegister},
  data() {
    return {
      iamService: new IamApiService(),
      ingredient: null,
      password: null,
      confirmPassword: null
    };
  },
  methods: {
    async createUser(user) {
      try {
        // Crear cuenta de usuario en el servicio de autenticación
        const authResponse = await this.iamService.signUpUser(user);
        console.log('User signed up:', authResponse.data);

        // Crear perfil de usuario
        const profileResponse = await this.iamService.createProfile(user);
        console.log('Profile created:', profileResponse.data);

        // Mostrar mensaje de éxito o redirigir al usuario
        this.$router.push('/login');
      } catch (error) {
        console.error('Error creating user:', error);
      }
    }

  }
}
</script>

<template>
  <div class="main">
    <div class="align-items-center">
      <div class="surface-card  shadow-2 border-round">
        <div class="flex justify-content-center ">
          <div>
            <div class="flex justify-content-center align-items-center">
              <img src="../../assets/images/flexpal-logo.png" alt="logo" style="width:400px;"/>
            </div>
            <h2 class="flex justify-content-center align-items-center" style="margin-top: 0;">Register</h2>
          </div>
        </div>

        <!-- <form-register @form-submitted="createUser" ></form-register>-->
        <form-register @form-submitted="createUser"></form-register>

      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>