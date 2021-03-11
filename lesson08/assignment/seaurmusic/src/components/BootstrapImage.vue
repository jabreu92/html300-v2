<template>
  <div>
    <b-img thumbnail :rounded="imageBorder" :src="imageSrcUrl" fluid :alt="imageAlt" :title="imageTitle" @click="modifyBorder"></b-img>
  </div>
</template>

<script>

const imageMixin = { 

  data (){
    return {
      imageBorder: '0',
      isRounded: false
    }

  },
  methods: {
    modifyBorder () {
      this.isRounded = !this.isRounded

      if(this.isRounded) {
        this.imageBorder = 'circle'
      }else {
        this.imageBorder = '0'
      }

    }
  }
}


export default {
  props: {
    imageSrcUrl: {
      type: String,
      required: false,
      default: 'https://picsum.photos/1024/400/?image=41'
    },
    imageAlt: {
      type: String,
      required: false,
      default: 'Event Image Goes Here'
    },
    imageTitle: {
      type: String,
      required: false,
      default: 'Event Title Goes Here'
    }
  }, 
  mixins: [imageMixin]
  

}
</script>

<style>

</style>