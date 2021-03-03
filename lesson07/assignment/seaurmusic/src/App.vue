<template>
  <div id="app">
    <!--
     <router-link to="/"> Home</router-link>
     <router-link to="/faq"> Faq</router-link> need to read on the navbar pills documentation for vue router
    <router-view />
    -->
  
    <DeckCards />
   
  </div>
</template>
<script>


import DeckCards from './components/DeckCards.vue'
export default {
  name: 'App',
  components: {DeckCards}
 
}
</script>
<style scoped>

</style>