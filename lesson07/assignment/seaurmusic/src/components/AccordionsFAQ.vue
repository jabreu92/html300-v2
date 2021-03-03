<template>
  <div>
    <div :key="index" v-for="(item,index) in details" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button
            block
            href="#"
            v-b-toggle="'accordion-' + index"
            variant="info"
            >{{item.title}}</b-button
          >
        </b-card-header>
        <b-collapse
          :id="'accordion-' + index"
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <b-card-text>{{ item.content }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: `
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
        brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
        tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
        synth nesciunt you probably haven't heard of them accusamus labore VHS.
      `,
      details:[
              {
                  title: 'Question1',
                  content: 'card1 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terryrichardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.'
              },
              {
                  title: 'Question2',
                  content: 'card2 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terryrichardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.'
              },
              {
                  title: 'Question3',
                  content: 'card3 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terryrichardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.'
              },
              {
                  title: 'Question4',
                  content: 'card4 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terryrichardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.'
              },
              {
                  title: 'Question5',
                  content: 'card5 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terryrichardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.'
              },
              {
                  title: 'Question6',
                  content: 'card6 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terryrichardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.'
              },
              {
                  title: 'Question7',
                  content: 'card7 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terryrichardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.'
              },
              {
                  title: 'Question8',
                  content: 'card8 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terryrichardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.'
              }
          ]
    }

  }
}
</script>
