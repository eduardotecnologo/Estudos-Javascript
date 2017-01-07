// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//css para acesso Webpack(processo)
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
//Import
Vue.use(VueMaterial)
//Tema padrão para o MD
// link: https://material.google.com/style/color.html#color-color-palette
Vue.material.theme.register('default', {
	primary: 'light-blue',
	accent: 'pink'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
