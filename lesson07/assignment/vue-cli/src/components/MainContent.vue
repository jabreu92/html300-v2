<template>
  <div>
      <b-container fluid class="bv-example-row">
      <b-row>
       <b-col lg="8">
         <b-carousel
         controls
         indicators
         fade
         img-width="1024"
         img-height="480"
         >

         <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=10"
            caption="First Slide"
            text="Music Event Number 1"
         > 

         </b-carousel-slide>
         <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=11"> 
            <h1>Second Slide</h1>
            <p> Music Event Number 2 </p>
         </b-carousel-slide>
         <b-carousel-slide> 
           <template v-slot:img>
             <img class="d-block img-fluid w-100" width="1024" height="480" src="https://picsum.photos/1024/480/?image=12" />
           </template>

         </b-carousel-slide>
         <b-carousel-slide caption="Blank Image" img-blank style="background: lightskyblue"> 
           <p> My Custom Slide</p>
         </b-carousel-slide>
         <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=14"> </b-carousel-slide>
         </b-carousel>
       </b-col>
       <b-col lg="4">
         
       </b-col>

       </b-row>
    </b-container>
  </div>
</template>

<script scoped>
export default {

}

</script>

<style>



</style>
