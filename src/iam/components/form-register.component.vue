<script>
import {User} from "../model/user.entity.js";

export default {
  name: "form-register",
  components: {},
  data(){
    return {
      user: new User(),
      confirmPassword: null
    }
  },
  methods: {
    submitForm() {
      if (this.user.password !== this.confirmPassword) {
        console.log('Las contraseñas no coinciden');
        return;
      }
      this.$emit('form-submitted', this.user);
      this.resetForm();
    },
    resetForm() {
      this.user = new User();
      this.confirmPassword = null;
    },
    goLogin() {
      this.$router.push('/sign-in');
    }
  }
}
</script>

<template>
  <div class="flex justify-content-center align-items-center ">
    <form @submit.prevent="submitForm" class="flex flex-column">
      <!-- Campos del formulario aquí... -->
      <pv-InputGroup class="mb-4 mt-5">
        <label class="px-5 w-4" for="firstname">Firstname</label>
        <pv-InputGroupAddon>
          <i class="pi pi-user"></i>
        </pv-InputGroupAddon>
        <pv-InputText class="w-4" id="firstname" v-model="user.firstname" placeholder="Firstname"/>
      </pv-InputGroup>

      <pv-InputGroup class="mb-4">
        <label class="px-5 w-4" for="lastname">Lastname</label>
        <pv-InputGroupAddon>
          <i class="pi pi-user"></i>
        </pv-InputGroupAddon>
        <pv-InputText id="lastname" v-model="user.lastname" placeholder="Lastname"/>
      </pv-InputGroup>

      <pv-InputGroup class="mb-4">
        <label class="px-5 w-4" for="email">Email</label>
        <pv-InputGroupAddon>
          <i class="pi pi-envelope"></i>
        </pv-InputGroupAddon>
        <pv-InputText id="email" v-model="user.email" placeholder="Email"/>
      </pv-InputGroup>

      <pv-InputGroup class="mb-4">
        <label class="px-5 w-4" for="weigth">Weight</label>
        <pv-InputGroupAddon>
          <i class="pi pi-envelope"></i>
        </pv-InputGroupAddon>
        <pv-InputText id="weigth" v-model="user.weigth" placeholder="Weight"/>
      </pv-InputGroup>

      <pv-InputGroup class="mb-4">
        <label class="px-5 w-4" for="heigth">Height</label>
        <pv-InputGroupAddon>
          <i class="pi pi-envelope"></i>
        </pv-InputGroupAddon>
        <pv-InputText id="heigth" v-model="user.heigth" placeholder="Height"/>
      </pv-InputGroup>

      <pv-InputGroup class="mb-4">
        <label class="px-5 w-4" for="phone">Phone</label>
        <pv-InputGroupAddon>
          <i class="pi pi-envelope"></i>
        </pv-InputGroupAddon>
        <pv-InputText id="phone" v-model="user.phone" placeholder="Phone"/>
      </pv-InputGroup>

      <pv-InputGroup class="mb-4">
        <label class="px-5 w-4" for="username">Username</label>
        <pv-InputGroupAddon>
          <i class="pi pi-envelope"></i>
        </pv-InputGroupAddon>
        <pv-InputText id="username" v-model="user.username" placeholder="Username"/>
      </pv-InputGroup>

      <pv-InputGroup class="mb-4">
        <label class="px-5 w-4" for="password">Password</label>
        <pv-InputGroupAddon>
          <i class="pi pi-lock"></i>
        </pv-InputGroupAddon>
        <pv-password id="password" v-model="user.password" toggleMask placeholder="Password">
          <template #header>
            <h6>Pick a password</h6>
          </template>
          <template #footer>
            <pv-divider/>
            <p class="mt-2">Suggestions</p>
            <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
              <li>At least one lowercase</li>
              <li>At least one uppercase</li>
              <li>At least one numeric</li>
              <li>Minimum 8 characters</li>
            </ul>
          </template>
        </pv-password>
      </pv-InputGroup>

      <pv-InputGroup class="mb-4">
        <label class="px-5 w-4" for="confirmPassword">Confirm Password</label>
        <pv-InputGroupAddon>
          <i class="pi pi-lock"></i>
        </pv-InputGroupAddon>
        <pv-password v-model="confirmPassword" id="confirmPassword" placeholder="Confirm Password" toggleMask/>
      </pv-InputGroup>

      <div class="card flex justify-content-center" style="margin-bottom:1rem;">
        <div class="flex flex-wrap gap-3">
          <div class="flex align-items-center">
            <pv-radioButton v-model="user.role" inputId="member" name="member" value="Member"/>
            <label for="user" class="ml-2">Member</label>
          </div>
          <div class="flex align-items-center">
            <pv-radioButton v-model="user.role" inputId="coach" name="coach" value="Coach"/>
            <label for="coach" class="ml-2">Coach</label>
          </div>
        </div>
      </div>

      <div style=" text-align:center;" class="centered-button">
        <pv-button class="centered-button" type="submit" style="width:100%;">Submit</pv-button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.centered-button {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>