<template>
  <div>
   
   <b-container fluid class="bv-example-row">
      <JumbotronHeader />
     </b-container>
     <b-container fluid class="bv-example-row">
      <TopNavbar />
     </b-container>

     <b-container fluid >
      <b-row>
       <b-col lg="12">
         <ImageCards />
        </b-col>
      </b-row>
     </b-container>

       <b-container fluid class="bv-example-row">
      <TopNavbar />
     </b-container>
     
   <b-container fluid class="bv-example-row">
      <JumbotronFooter />
     </b-container>
    
     
 </div>
</template>
<script>

import JumbotronHeader from '../components/JumbotronHeader.vue'
import JumbotronFooter from '../components/JumbotronFooter.vue'
import TopNavbar from '../components/TopNavbar.vue'
import ImageCards from '../components/ImageCards.vue'



export default {
  name: 'Events',
  components: {ImageCards , JumbotronHeader , TopNavbar  , JumbotronFooter }
 
}
</script>

<style scoped>

</style>