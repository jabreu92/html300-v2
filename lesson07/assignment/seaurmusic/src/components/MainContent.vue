<template>
  <div>
      <b-container fluid class="bv-example-row">
      <b-row>
       <b-col lg="6">
         <b-carousel
         controls
         indicators
         fade
         img-width="1024"
         img-height="480"
         class="mt-1"
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
        
       <template>
  <b-calendar block locale="en-US" class="mt-1 mb-1"></b-calendar>
</template>
         
       </b-col>

        <b-col lg="6">
          <b-container fluid>
            <b-card-group deck class="mt-1"> 
              <b-row>
                <b-col sm="4">
                  <b-card
                    title="Card Title"
                    img-src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/img-1-1000x600.jpg"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                  >
                    <b-card-text>
                      This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </b-card-text>

                    <small class="text-muted">Last updated 3 mins ago</small>
                  </b-card>
                </b-col>
                 <b-col sm="4" >
                  <b-card
                    title="Card Title"
                    img-src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/img-1-1000x600.jpg"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                  >
                    <b-card-text>
                      This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </b-card-text>

                    <small class="text-muted">Last updated 3 mins ago</small>
                  </b-card>
                </b-col>
                 <b-col sm="4" >
                  <b-card
                    title="Card Title"
                    img-src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/img-1-1000x600.jpg"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                  >
                    <b-card-text>
                      This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </b-card-text>

                    <small class="text-muted">Last updated 3 mins ago</small>
                  </b-card>
                </b-col>

                <b-col sm="4">
                  <b-card
                    title="Card Title"
                    img-src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/img-1-1000x600.jpg"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                  >
                    <b-card-text>
                      This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </b-card-text>

                    <small class="text-muted">Last updated 3 mins ago</small>
                  </b-card>
                </b-col>
                 <b-col sm="4" >
                  <b-card
                    title="Card Title"
                    img-src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/img-1-1000x600.jpg"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                  >
                    <b-card-text>
                      This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </b-card-text>

                    <small class="text-muted">Last updated 3 mins ago</small>
                  </b-card>
                </b-col>
                 <b-col sm="4" >
                  <b-card
                    title="Card Title"
                    img-src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/img-1-1000x600.jpg"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                  >
                    <b-card-text>
                      This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </b-card-text>

                    <small class="text-muted">Last updated 3 mins ago</small>
                  </b-card>
                </b-col>
              </b-row>
            </b-card-group>
          </b-container>
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
