<template>
  <div>
          <b-row>
              <b-col md="3" v-for="item in items" :key="item" >
                  <b-card
                    :title="item.name"
                    :img-src="item.img"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-1 mt-1"
                >
                    <b-card-text>
                    {{item.description}}
                    </b-card-text>
                      
                    <b-button
                    variant="primary"
                    >See Blog</b-button
                    >
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
                    {name: 'Music Blog  ', img:'https://picsum.photos/600/300/?image=25', description: '  Lorem ipsum dolor sit amet consectetur  blanditiis minus voluptates molestiae, totam eius.'},
                    {name: 'Music Blog ', img:'https://picsum.photos/600/300/?image=25', description: '  Lorem ipsum dolor sit amet consectetur  blanditiis minus voluptates molestiae, totam eius.'},
                    {name: 'Music Blog  ', img:'https://picsum.photos/600/300/?image=25', description: '  LLorem ipsum dolor sit amet consectetur  blanditiis minus voluptates molestiae, totam eius..'},
                    {name: 'Music Blog  ', img:'https://picsum.photos/600/300/?image=25', description: '  LLorem ipsum dolor sit amet consectetur  blanditiis minus voluptates molestiae, totam eius.'},
                    {name: 'Music Blog  ', img:'https://picsum.photos/600/300/?image=25', description: '  LLorem ipsum dolor sit amet consectetur  blanditiis minus voluptates molestiae, totam eius.'},
                    {name: 'Music Blog ', img:'https://picsum.photos/600/300/?image=25', description: '  LoLorem ipsum dolor sit amet consectetur  blanditiis minus voluptates molestiae, totam eius.'},
                    {name: 'Music Blog  ', img:'https://picsum.photos/600/300/?image=25', description: '  LLorem ipsum dolor sit amet consectetur  blanditiis minus voluptates molestiae, totam eius..'},
                    {name: 'Music Blog  ', img:'https://picsum.photos/600/300/?image=25', description: '  LLorem ipsum dolor sit amet consectetur  blanditiis minus voluptates molestiae, totam eius..'}
            ]
        }
    }
}
</script>

<style>

</style>