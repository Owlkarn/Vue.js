<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HelloMessage/>
    <GalleryComponent/>
    <SortComponent/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HelloMessage from "@/components/HelloMessage.vue";
import GalleryComponent from "@/components/GalleryComponent.vue";
import SortComponent from "@/components/SortComponent.vue";

export default {
  name: 'App',
  components: {
    SortComponent,
    GalleryComponent,
    HelloMessage,
    HelloWorld
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
