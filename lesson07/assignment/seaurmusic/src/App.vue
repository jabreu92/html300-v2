<template>
  <div id="app">
    <router-view></router-view>
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