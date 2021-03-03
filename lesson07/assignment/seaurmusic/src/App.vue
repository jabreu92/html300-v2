<template>
  <div id="app">
    <!--
     <router-link to="/"> Home</router-link>
     <router-link to="/faq"> Faq</router-link>
    <router-view />
    -->
  
    <CarrouselMain />
   
  </div>
</template>
<script>


import CarrouselMain from './components/CarrouselMain.vue'
export default {
  name: 'App',
  components: {CarrouselMain}
 
}
</script>
<style scoped>

</style>