<template>
  <div id="app">

   <BootstrapImage :image-src-url="this.src" :image-alt="this.alt" :image-title="this.title"/> 

  </div>
</template>

<script>

import BootstrapImage from './components/BootstrapImage.vue'


export default {
  name: 'App',
  components: {BootstrapImage },
  data () {
    return {
       src: 'https://picsum.photos/250/250/?image=54',
       alt: 'custom alt',
       title: 'custom title'
    }
  }
 
}
</script>
<style scoped>

</style>