<template>
  <div id="app">
    <!-- Universal Component -->
    <b-container fluid class="bv-example-row">
      <JumbotronHeader />
     </b-container>
     <b-container fluid class="bv-example-row">
      <TopNavbar />
     </b-container>
     <!-- Universal Component -->
    <!-- injecting views with router links -->
    <router-view> </router-view>
      <!-- Universal Component -->
      <b-container fluid class="bv-example-row">
      <TopNavbar />
     </b-container>
   <b-container fluid class="bv-example-row">
      <JumbotronFooter />
     </b-container>
       <!-- Universal Component -->
  </div>
</template>

<script>

import Home from './views/Home.vue'
import JumbotronHeader from './components/JumbotronHeader.vue'
import JumbotronFooter from './components/JumbotronFooter.vue'
import TopNavbar from './components/TopNavbar.vue'

export default {
  name: 'App',
  components: {Home, JumbotronHeader , JumbotronFooter, TopNavbar }
 
}
</script>
<style scoped>

</style>