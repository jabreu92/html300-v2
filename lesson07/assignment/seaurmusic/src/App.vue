<template>
  <div id="app">
    <TopHeader />
    <TopNavbar />
    <MainContent />
    <TopNavbar />
    <TopHeader />
  </div>
</template>
<script>


import TopHeader from './components/TopHeader.vue'
import TopNavbar from './components/TopNavbar.vue'
import MainContent from './components/MainContent.vue'


export default {
  name: 'App',
  components: { TopHeader, TopNavbar,
    MainContent
    
  }
}
</script>
<style scoped>

</style>