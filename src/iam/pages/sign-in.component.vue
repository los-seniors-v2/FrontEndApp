<script>
import {useAuthenticationStore} from "../services/authentication.store.js";
import {SignInRequest} from "../model/sign-in.request.js";

export default {
  name: "sign-in",
  components: {},
  data() {
    return {
      checked1: false, // or any default value you want
      errorMessage: '', // or any default value you want
      username: '',
      password: ''
    };
  },
  created() {

  },
  methods: {
    onSignIn() {
      let authenticationStore = useAuthenticationStore();
      let signInRequest = new SignInRequest(this.username, this.password);
      authenticationStore.signIn(signInRequest, this.$router);
    }
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
        <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer" @click="$router.push('/sign-up')">Create
          today!</a>
      </div>

      <div>
        <form @submit.prevent="onSignIn">
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