<script>
import LanguageSwitcher from "./language-switcher.component.vue";
import {useAuthenticationStore} from "../../iam/services/authentication.store.js";
import {useRouter} from "vue-router";
export default {
  name: "toolbar-component",
  components: {LanguageSwitcher},
  data() {
    return {
      router: useRouter(),
      authenticationStore: useAuthenticationStore(),
      components: {LanguageSwitcher}
    }
  },
  methods: {
    onSignOut() {
      this.authenticationStore.signOut(this.router);
    }
  }

}
</script>

<template>

  <pv-toolbar class="toolbar">
    <template #start>
      <img src="../../assets/images/flexpal-logo.png" alt="Flex Pal Logo" style="width: 350px; height: 70px;"/>
    </template>



    <template #end>
      <ul class="list-none p-0 m-0 overflow-hidden" style="display:flex; ">
        <li>
          <pv-button>
            <a href="/home"> Home </a>
          </pv-button>

        </li>
        <li>
          <pv-button>
            <a href="/routines"> Routines </a>
          </pv-button>
        </li>
        <li>
          <pv-button>
            <a href="/nutrition"> Nutrition </a>
          </pv-button>
        </li>
        <li>
          <pv-button>
            <a href="/programming-session"> Book Session </a>
          </pv-button>
        </li>
        <li>
          <pv-button>
            <a href="/profile-member"> Profile </a>
          </pv-button>
        </li>
        <li>
          <button @click="onSignOut">Sign Out</button>
        </li>
        <language-switcher> i18n </language-switcher>
      </ul>

    </template>
  </pv-toolbar>

</template>

<style scoped>
.toolbar{
  width: 100vw;
  display: flex;
  justify-content: space-around;

  li{
    list-style-type: none;
    display: inline;
    padding: 10px;
    Button{
      background-color: #6baada;
      border-radius: 10px;
      a{
        text-decoration: none;
        color: white;
      }
    }

  }


}
</style>