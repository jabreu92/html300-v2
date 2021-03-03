<template>
  <div id="app">
    <!--
     <router-link to="/"> Home</router-link>
     <router-link to="/faq"> Faq</router-link>
    <router-view />
    -->
  
    <TopNavbar />
   
  </div>
</template>
<script>


import TopNavbar from './components/TopNavbar.vue'
export default {
  name: 'App',
  components: {TopNavbar}
 
}
</script>
<style scoped>

</style>