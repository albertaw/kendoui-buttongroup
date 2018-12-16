import Vue from 'vue'
import App from './App.vue'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import { ButtonGroup,
        ButtonGroupButton,
        ButtonsInstaller } from '@progress/kendo-buttons-vue-wrapper'

Vue.use(ButtonsInstaller)

new Vue({
  el: '#app',
  components: {
    ButtonGroup,
    ButtonGroupButton
  },
  render: h => h(App)
})
