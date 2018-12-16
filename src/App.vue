<template>
  <div id="app">
    <kendo-buttongroup :index="0">
      <kendo-buttongroup-button>Bitcoin</kendo-buttongroup-button>
      <kendo-buttongroup-button>Ethereum</kendo-buttongroup-button>
      <kendo-buttongroup-button>Dash</kendo-buttongroup-button>
    </kendo-buttongroup>
  </div>
</template>

<script>
import Card from './Card.vue'

export default {
  name: 'app',
  components: {
    Card
  },
  data () {
    return {
    }
  }
}
</script>

<style>


</style>
