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
          <Button>
            <a href="/home"> Home </a>
          </Button>

        </li>
        <li>
          <Button>
            <a href="/routines"> Routines </a>
          </Button>
        </li>
        <li>
          <Button>
            <a href="/nutrition"> Nutrition </a>
          </Button>
        </li>
        <li>
          <Button>
            <a href="/book_section"> Book Session </a>
          </Button>
        </li>
        <li>
          <Button>
            <a href="/profie"> Profile </a>
          </Button>
        </li>
      </ul>
<!--      <pv-InputText type="text" v-model="value" />-->
<!--      <span class="pi pi-search"></span>-->
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