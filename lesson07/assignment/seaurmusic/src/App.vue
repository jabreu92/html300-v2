<template>
  <div id="app">
    <!-- Include the top jumbo nav bar and same for bottom navbar and jumbo footer here since they are universal take them out from the home faq view -->
    <!--Add image page with gallery of images with different sizes and responsive look into cards layout boosttrap -->



    
    <router-view></router-view>
  
  </div>
  
</template>
<script>


import Home from './views/Home.vue'
import Faq from './views/Faq.vue'
import Events from './views/Events.vue'


export default {
  name: 'App',
  components: {Home , Faq, Events }
 
}
</script>
<style scoped>

</style>