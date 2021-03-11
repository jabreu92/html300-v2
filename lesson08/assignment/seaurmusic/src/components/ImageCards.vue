<template>
  <div>
    <b-row v-if="this.items"> 
      <b-col md="4" v-for="item in items" :key="item.id">
        <b-card :title="item.name" class="mt-1 mb-1 ">
          <!--
        <b-img thumbnail :src="item.img" rounded fluid alt="Fluid image"></b-img>
        -->
        <BootstrapImage :image-src-url="item.img" /> 
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
import BootstrapImage from '../components/BootstrapImage.vue'
export default {
  components: {BootstrapImage },
    data() {
        return {
            items: [
                    {id: 99999, name: 'Music Event  ', img:'https://picsum.photos/250/250/?image=54', description: '  Lorem ipsum dolor sit amet consectetur  blanditiis minus voluptates molestiae, totam eius.', footer: 'Last updated 3 mins ago'},
                    {id: 99979797999, name: 'Music Event ', img:'https://picsum.photos/250/250/?image=58', description: '  Lorem ipsum dolor sit amet consectetur  blanditiis minus voluptates molestiae, totam eius.', footer: 'Last updated 3 mins ago'},
                    {id: 97777999, name: 'Music Event  ', img:'https://picsum.photos/250/250/?image=59', description: '  LLorem ipsum dolor sit amet consectetur  blanditiis minus voluptates molestiae, totam eius..' , footer: 'Last updated 3 mins ago'},
                    {id: 99000009, name: 'Music Event  ', img:'https://picsum.photos/600/300/?image=25', description: '  LLorem ipsum dolor sit amet consectetur  blanditiis minus voluptates molestiae, totam eius.' , footer: 'Last updated 3 mins ago'},
                    {id: 999, name: 'Music Event  ', img:'https://picsum.photos/600/300/?image=25', description: '  LLorem ipsum dolor sit amet consectetur  blanditiis minus voluptates molestiae, totam eius.' , footer: 'Last updated 3 mins ago'},
                    {id: 9229, name: 'Music Event ', img:'https://picsum.photos/250/250/?image=54', description: '  LoLorem ipsum dolor sit amet consectetur  blanditiis minus voluptates molestiae, totam eius.' , footer: 'Last updated 3 mins ago'},
                    {id: 9993799, name: 'Music Event  ', img:'https://picsum.photos/600/300/?image=25', description: '  LLorem ipsum dolor sit amet consectetur  blanditiis minus voluptates molestiae, totam eius..' , footer: 'Last updated 3 mins ago'},
                    {id: 9955999, name: 'Music Event  ', img:'https://picsum.photos/250/250/?image=59', description: '  LLorem ipsum dolor sit amet consectetur  blanditiis minus voluptates molestiae, totam eius..' , footer: 'Last updated 3 mins ago'},
                    {id: 9449999, name: 'Music Event  ', img:'https://picsum.photos/600/300/?image=25', description: '  LLorem ipsum dolor sit amet consectetur  blanditiis minus voluptates molestiae, totam eius.' , footer: 'Last updated 3 mins ago'},
                    {id: 9999229, name: 'Music Event ', img:'https://picsum.photos/250/250/?image=58', description: '  LoLorem ipsum dolor sit amet consectetur  blanditiis minus voluptates molestiae, totam eius.' , footer: 'Last updated 3 mins ago'},
                    {id: 99944599, name: 'Music Event  ', img:'https://picsum.photos/600/300/?image=25', description: '  LLorem ipsum dolor sit amet consectetur  blanditiis minus voluptates molestiae, totam eius..' , footer: 'Last updated 3 mins ago'},
                    {id: 9999677779, name: 'Music Event  ', img:'https://picsum.photos/250/250/?image=54', description: '  LLorem ipsum dolor sit amet consectetur  blanditiis minus voluptates molestiae, totam eius..' , footer: 'Last updated 3 mins ago'}
            ]
        }
    }
}
</script>

<style></style>
