<template>
  <div>
    <b-container fluid>
      <JumbotronHeader />
    </b-container>
    <b-container fluid>
      <TopNavbar />
    </b-container>
     <b-container fluid class="bv-example-row">
      <b-row>
       <b-col lg="12">
         <AccordionsFAQ />
        </b-col>
      </b-row>
     </b-container>
     <b-container fluid>
      <TopNavbar />
    </b-container>
     <b-container fluid>
      <JumbotronFooter />
    </b-container>
 </div>
</template>
<script>
import CarrouselMain from '../components/CarrouselMain.vue'
import DeckCards from '../components/DeckCards.vue'
import JumbotronHeader from '../components/JumbotronHeader.vue'
import JumbotronFooter from '../components/JumbotronFooter.vue'
import TopNavbar from '../components/TopNavbar.vue'
import AccordionsFAQ from '../components/AccordionsFAQ.vue'

export default {
  name: 'Home',
  components: {CarrouselMain , DeckCards , JumbotronHeader , TopNavbar , AccordionsFAQ , JumbotronFooter }
 
}
</script>

<style scoped>

</style>