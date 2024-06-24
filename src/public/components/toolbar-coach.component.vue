<script>

export default {
  name: "toolbar-component",

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
            <a href="/home-coach"> Home </a>
          </pv-button>

        </li>
        <li>
          <pv-button>
            <a href="/make-plans"> Fitness Plans </a>
          </pv-button>
        </li>
        <li>
          <pv-button>
            <a href="/programming-session"> Book Session </a>
          </pv-button>
        </li>
        <li>
          <pv-button>
            <a href="/profile-coach"> Profile </a>
          </pv-button>
        </li>
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