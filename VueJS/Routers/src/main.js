import Vue from 'vue'  
import VueRouter from 'vue-router'  
import App from './App.vue'
import ComponentA from './ComponentA.vue'
import ComponentB from './ComponentB.vue'

Vue.use(VueRouter) 
const router = [
{path:'/a', component: ComponentA},
{path:'/b', component: ComponentB}
]

// const router = new VueRouter({
// router // short for routes: routes
// })

const app = new Vue({
	router
}).$mount('#container')


// new Vue({  
// 	el: 'body',
// 	components: { App }
// })
