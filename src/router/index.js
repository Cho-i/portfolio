import Vue from 'vue'
import App from '../App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Content = App.components.Content;
const Page = App.components.Page;

export default new VueRouter({
	mode:'history',
	routes:[
		{
			path:'/main',
			component:Content
		},
		{
			path:'/page/:id',
			name:'view',
			component:Page
		}
	]
})
