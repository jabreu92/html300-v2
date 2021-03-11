<template>
  <div>
    <b-carousel
      controls
      indicators
      fade
      img-width="1024"
      img-height="480"
      class="mt-1"
    >
      <b-carousel-slide v-for="item in items" :key="item.id" :img-src="item.img">
        <h1>{{item.name}}</h1>
        <p>{{item.description}}</p>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                    {id: 1,name: 'Music Event 1 ', img:'https://picsum.photos/1024/480/?image=11', description: 'Info of Event Here'},
                    {id: 2,name: 'Music Event 2 ', img:'https://picsum.photos/1024/480/?image=12', description: 'Info of Event Here'},
                    {id: 3,name: 'Music Event 3 ', img:'https://picsum.photos/1024/480/?image=13', description: 'Info of Event Here'},
            ]
        }
    }
}
</script>

<style></style>
