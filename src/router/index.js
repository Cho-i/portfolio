import Vue from 'vue'
import App from '../App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Content = App.components.Content;
const List = App.components.List;
const Page = App.components.Page;

export default new VueRouter({
	mode:'history',
	routes:[
		{
			path:'/index',
			component:Content,
			children:[
				{path:':id',name:'show',component:List}
			]
		},
		{
			path:'/page/:id',
			component:Page
		}
	]
})