<template>
  <div id="app">
    <h1> Lets Go Somewhere </h1>
    <router-link to="/">Home</router-link>
    <router-link to="/faq">Faq</router-link>
    <router-view></router-view>
  </div>
</template>
<script>


export default {
  name: 'App',
 
}
</script>
<style scoped>

</style>