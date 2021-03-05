<template>
  <div>
    <b-container fluid class="bv-example-row">
      <b-row>
        <b-col lg="12">
          <AccordionsFAQ />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>

import JumbotronHeader from '../components/JumbotronHeader.vue'
import JumbotronFooter from '../components/JumbotronFooter.vue'
import TopNavbar from '../components/TopNavbar.vue'
import AccordionsFAQ from '../components/AccordionsFAQ.vue'

export default {
  name: 'Faq',
  components: {  JumbotronHeader , TopNavbar , AccordionsFAQ , JumbotronFooter }

}
</script>

<style scoped></style>
