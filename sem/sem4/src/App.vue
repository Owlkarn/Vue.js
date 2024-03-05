<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HelloMessage/>
    <GalleryComponent/>
    <SortComponent/>
    <AutentificationComponent/>
    <CartComponent/>
    <MortgageCalculator/>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HelloMessage from "@/components/HelloMessage.vue";
import GalleryComponent from "@/components/GalleryComponent.vue";
import SortComponent from "@/components/SortComponent.vue";
import AutentificationComponent from "@/components/AutentificationComponent.vue";
import CartComponent from "@/components/CartComponent.vue";
import MortgageCalculator from "@/components/MortgageCalculator.vue";

export default {
  name: 'App',
  components: {
    MortgageCalculator,
    CartComponent,
    SortComponent,
    GalleryComponent,
    HelloMessage,
    HelloWorld,
    AutentificationComponent,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
