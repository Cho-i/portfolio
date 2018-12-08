import Vue from 'vue'
import App from '../App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Content = App.components.Content;
const Page = App.components.Page;
const About = App.components.About;

export default new VueRouter({
	mode:'history',
	routes:[
		{
			path:'*',
			component:Content
		},
		{
			path:'/page/:id',
			name:'view',
			component:Page
		},
		{
			path:'/about',
			component:About
		}
	],
	scrollBehavior (to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		}
		else {
			return { x: 0, y: 0 }
		}
	}
})
