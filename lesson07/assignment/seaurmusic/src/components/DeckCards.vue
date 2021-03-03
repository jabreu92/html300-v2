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
                    {name: 'Music Blog 1 ', img:'https://picsum.photos/600/300/?image=25', description: 'Blog of Event Here'},
                    {name: 'Music Blog 2 ', img:'https://picsum.photos/600/300/?image=25', description: 'Blog of Event Here'},
                    {name: 'Music Blog 3 ', img:'https://picsum.photos/600/300/?image=25', description: 'Blog of Event Here'},
                    {name: 'Music Blog 3 ', img:'https://picsum.photos/600/300/?image=25', description: 'Blog of Event Here'}
            ]
        }
    }
}
</script>

<style>

</style>