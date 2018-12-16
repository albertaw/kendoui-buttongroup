<template>
  <div id="app">
    <kendo-buttongroup :index="0" @select="onSelect">
      <kendo-buttongroup-button>Bitcoin</kendo-buttongroup-button>
      <kendo-buttongroup-button>Ethereum</kendo-buttongroup-button>
      <kendo-buttongroup-button>Dash</kendo-buttongroup-button>
    </kendo-buttongroup>
    <Card :label="info.Label" :open="info.Open" :close="info.Close" :high="info.High" :low="info.Low" />
  </div>
</template>

<script>
import axios from 'axios'
import Card from './Card.vue'

export default {
  name: 'app',
  components: {
    Card
  },
  data () {
    return {
      info: null,
      btc: null,
      eth: null,
      dash: null
    }
  },
  mounted() {
    axios.all([
      axios.get('https://www.cryptopia.co.nz/api/GetMarket/BTC_USDT'),
      axios.get('https://www.cryptopia.co.nz/api/GetMarket/ETH_USDT'),
      axios.get('https://www.cryptopia.co.nz/api/GetMarket/DASH_USDT')
    ])
      .then(axios.spread((btc, eth, dash) => {
        this.btc = this.info = btc.data.Data;
        this.eth = eth.data.Data;
        this.dash = dash.data.Data;
      }));
  },
  methods: {
      onSelect: function (e) {
          if (e.indices == 0) {
            this.info = this.btc
          } else if (e.indices == 1) {
            this.info = this.eth
          } else {
            this.info = this.dash
          }
      }
  }
}
</script>

<style>
  #app {
    font-family: 'helvetica';
  }
</style>
