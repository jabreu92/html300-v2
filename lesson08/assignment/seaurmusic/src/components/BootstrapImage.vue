<template>
   <div>
    <b-img thumbnail :src="imageSrcUrl" fluid :alt="imageAlt" :title="imageTitle"></b-img>
  </div>
</template>

<script>
export default {
  props: {
    imageSrcUrl: {
      type: String,
      required: true,
      default: 'https://picsum.photos/250/250/?image=59'
    },
    imageAlt: {
      type: String,
      required: true,
      default: 'Event Image Goes Here'
    },
    imageTitle: {
      type: String,
      required: true,
      default: 'Event Title Goes Here'
    }
  }

}
</script>

<style>

</style>