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
            <a href="/book_section"> Book Session </a>
          </pv-button>
        </li>
        <li>
          <pv-button>
            <a href="/profile"> Profile </a>
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