<template>
  <div>
    <b-row>
      <b-col md="4" v-for="item in items" :key="item.id">
        <b-card :title="item.name" class="mt-1 mb-1 ">
        <b-img thumbnail :src="item.img" rounded fluid alt="Fluid image"></b-img>
      <b-card-text>
         {{item.description}}
      </b-card-text>
      <template #footer>
        <small class="text-muted">{{item.footer}}</small>
      </template>
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
                    {id: 1,name: 'Music Event  ', img:'https://picsum.photos/250/250/?image=54', description: '  Lorem ipsum dolor sit amet consectetur  blanditiis minus voluptates molestiae, totam eius.', footer: 'Last updated 3 mins ago'},
                    {id: 12,name: 'Music Event ', img:'https://picsum.photos/250/250/?image=58', description: '  Lorem ipsum dolor sit amet consectetur  blanditiis minus voluptates molestiae, totam eius.', footer: 'Last updated 3 mins ago'},
                    {id: 133,name: 'Music Event  ', img:'https://picsum.photos/250/250/?image=59', description: '  LLorem ipsum dolor sit amet consectetur  blanditiis minus voluptates molestiae, totam eius..' , footer: 'Last updated 3 mins ago'},
                    {id: 144,name: 'Music Event  ', img:'https://picsum.photos/600/300/?image=25', description: '  LLorem ipsum dolor sit amet consectetur  blanditiis minus voluptates molestiae, totam eius.' , footer: 'Last updated 3 mins ago'},
                    {id: 15,name: 'Music Event  ', img:'https://picsum.photos/600/300/?image=25', description: '  LLorem ipsum dolor sit amet consectetur  blanditiis minus voluptates molestiae, totam eius.' , footer: 'Last updated 3 mins ago'},
                    {id: 16,name: 'Music Event ', img:'https://picsum.photos/250/250/?image=54', description: '  LoLorem ipsum dolor sit amet consectetur  blanditiis minus voluptates molestiae, totam eius.' , footer: 'Last updated 3 mins ago'},
                    {id: 17,name: 'Music Event  ', img:'https://picsum.photos/600/300/?image=25', description: '  LLorem ipsum dolor sit amet consectetur  blanditiis minus voluptates molestiae, totam eius..' , footer: 'Last updated 3 mins ago'},
                    {id: 18,name: 'Music Event  ', img:'https://picsum.photos/250/250/?image=59', description: '  LLorem ipsum dolor sit amet consectetur  blanditiis minus voluptates molestiae, totam eius..' , footer: 'Last updated 3 mins ago'},
                    {id: 19,name: 'Music Event  ', img:'https://picsum.photos/600/300/?image=25', description: '  LLorem ipsum dolor sit amet consectetur  blanditiis minus voluptates molestiae, totam eius.' , footer: 'Last updated 3 mins ago'},
                    {id: 199,name: 'Music Event ', img:'https://picsum.photos/250/250/?image=58', description: '  LoLorem ipsum dolor sit amet consectetur  blanditiis minus voluptates molestiae, totam eius.' , footer: 'Last updated 3 mins ago'},
                    {id: 1999,name: 'Music Event  ', img:'https://picsum.photos/600/300/?image=25', description: '  LLorem ipsum dolor sit amet consectetur  blanditiis minus voluptates molestiae, totam eius..' , footer: 'Last updated 3 mins ago'},
                    {id: 15555,name: 'Music Event  ', img:'https://picsum.photos/250/250/?image=54', description: '  LLorem ipsum dolor sit amet consectetur  blanditiis minus voluptates molestiae, totam eius..' , footer: 'Last updated 3 mins ago'}
            ]
        }
    }
}
</script>

<style></style>
