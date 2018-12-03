import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(BootstrapVue);

const Content = App.components.Content;
const List = App.components.List;
const View = App.components.View;

const routes = [
	{
		path:'',
		component:Content,
		children:[
			{path:'',component:List}
		]
	},
	{
		path:'/view',
		component:View
	}
];

const router = new VueRouter({
	mode:'history',
	routes
});

new Vue({
  render: h => h(App),
	router
}).$mount('#app');
