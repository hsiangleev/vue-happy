import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import VueResource from "vue-resource"

Vue.use(VueRouter);
Vue.use(VueResource);

import home from "./components/home.vue"
import que from "./components/question.vue"
import score from "./components/score.vue"

const router=new VueRouter({
	mode: "history",
	base: __dirname,
	routes: [
		{
			path: "/home",
			alias: "/",
			component: home
		},
		{
			path: "/que",
			component: que
		},
		{
			path: "/score",
			component: score
		}
	]
})

new Vue({
	router: router,
	render: h => h(App)
}).$mount("#app")

