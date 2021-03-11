<template>
  <div>
    <b-row>
      <b-col md="3" v-for="item in items" :key="item.id">
        <b-card
          :title="item.name"
          :img-src="item.img"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-1 mt-1"
        >
          <b-card-text>
            {{item.description}}
          </b-card-text>

          <b-button variant="primary">See Blog</b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                    {id: 1,name: 'Music Blog  ', img:'https://picsum.photos/600/300/?image=25', description: '  Lorem ipsum dolor sit amet consectetur  blanditiis minus voluptates molestiae, totam eius.'},
                    {id: 11,name: 'Music Blog ', img:'https://picsum.photos/600/300/?image=25', description: '  Lorem ipsum dolor sit amet consectetur  blanditiis minus voluptates molestiae, totam eius.'},
                    {id: 122,name: 'Music Blog  ', img:'https://picsum.photos/600/300/?image=25', description: '  LLorem ipsum dolor sit amet consectetur  blanditiis minus voluptates molestiae, totam eius..'},
                    {id: 133,name: 'Music Blog  ', img:'https://picsum.photos/600/300/?image=25', description: '  LLorem ipsum dolor sit amet consectetur  blanditiis minus voluptates molestiae, totam eius.'},
                    {id: 14,name: 'Music Blog  ', img:'https://picsum.photos/600/300/?image=25', description: '  LLorem ipsum dolor sit amet consectetur  blanditiis minus voluptates molestiae, totam eius.'},
                    {id: 145,name: 'Music Blog ', img:'https://picsum.photos/600/300/?image=25', description: '  LoLorem ipsum dolor sit amet consectetur  blanditiis minus voluptates molestiae, totam eius.'},
                    {id: 166,name: 'Music Blog  ', img:'https://picsum.photos/600/300/?image=25', description: '  LLorem ipsum dolor sit amet consectetur  blanditiis minus voluptates molestiae, totam eius..'},
                    {id: 177,name: 'Music Blog  ', img:'https://picsum.photos/600/300/?image=25', description: '  LLorem ipsum dolor sit amet consectetur  blanditiis minus voluptates molestiae, totam eius..'}
            ]
        }
    }
}
</script>

<style></style>
