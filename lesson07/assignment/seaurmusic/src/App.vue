<template>
  <div id="app">
    <!--
     <router-link to="/"> Home</router-link>
     <router-link to="/faq"> Faq</router-link> need to read on the navbar pills documentation for vue router
    <router-view />
    -->
    <Home />
  </div>
</template>
<script>


import Home from './views/Home.vue'
import Faq from './views/Faq.vue'

export default {
  name: 'App',
  components: {Home , Faq }
 
}
</script>
<style scoped>

</style>