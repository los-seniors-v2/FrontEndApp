<script>
import {IamApiService} from "../services/iam-api.service.js";


export default {
  name: "login",
  components: {},
  data() {
    return {
      username: "",
      password: "",
      iamService: new IamApiService(),
      errorMessage: "",
      checked1: false
    };
  },
  created() {

  },
  methods: {

    async login() {
      try {
        const response = await this.iamService.signInUser(this.username, this.password);
        localStorage.setItem('token', response.token);
        localStorage.setItem('userId', response.id);
        localStorage.setItem('role', response.role);
        this.$router.push("/home");
      } catch (error) {
        this.errorMessage = "Invalid username or password.";
        console.error('Error logging in:', error);
      }
    }


  },

  setup() {

  }
}
</script>

<template>
  <div class="flex justify-content-center align-items-center " style="height: 100vh">
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
      <div class="text-center mb-5">
        <img src="../../assets/images/flexpal-logo.png" alt="Image" height="50" class="mb-3"/>
        <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
        <span class="text-600 font-medium line-height-3">Don't have an account?</span>
        <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer" @click="$router.push('/register')">Create
          today!</a>
      </div>

      <div>
        <form @submit.prevent="login">
          <label for="username" class="block text-900 font-medium mb-2">Username</label>
          <pv-InputText v-model="username" id="username" type="text" placeholder="Username" class="w-full mb-3"/>

          <label for="password1" class="block text-900 font-medium mb-2">Password</label>
          <pv-InputText v-model="password" id="password1" type="password" placeholder="Password" class="w-full mb-3"/>

          <div class="flex align-items-center justify-content-between mb-6">
            <div class="flex align-items-center">
              <pv-checkbox id="rememberme1" :binary="true" v-model="checked1" class="mr-2"></pv-checkbox>
              <label for="rememberme1">Remember me</label>
            </div>
            <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
          </div>

          <pv-button label="Sign In" icon="pi pi-user" class="w-full" type="submit"></pv-button>
        </form>

        <div v-if="errorMessage" class="text-red-500 mt-3">{{ errorMessage }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>