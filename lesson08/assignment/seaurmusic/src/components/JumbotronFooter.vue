<template>
  <div>
    <b-jumbotron
      bg-variant="dark"
      text-variant="white"
      border-variant="dark"
      class="mb-0 mt-1"
    >
      <template v-slot:header> {{headerText}}</template>
      <template v-slot:lead> {{leadText}}</template>
      <hr class="mb-1" />
      <p>{{addressText}}</p>
    </b-jumbotron>
  </div>
</template>
<script scoped>
export default {
  Name: 'JumbotronFooter',
  data () {
    return {
      headerText: 'SeaUrMusic',
      leadText: 'Seattle #1 Music Event Provider',
      addressText: 'Located in 1414 Dexter Ave N. Seattle, WA 98109',
      showContactInfoFooter: true,
      email: 'seaurmusic@hotmail.com',
      phone: '787-789-9992'
    }
  }
}
</script>

<style></style>
