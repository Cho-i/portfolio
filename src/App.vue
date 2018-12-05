<template>
	<div id="app">
		<Header v-bind:propsdata="projectList"></Header>
		<router-view v-bind:propsdata="projectList"></router-view>
		<Footer></Footer>
	</div>
</template>

<script>
	import Header from './components/Header.vue'
	import Content from './components/Content.vue'
	import List from './components/List.vue'
	import Page from './components/Page.vue'
	import Footer from './components/Footer.vue'
	import json from './data/data.json'

	export default {
		name: 'app',
		components:{
			'Header':Header,
		    'Content':Content,
			'List':List,
			'Page':Page,
			'Footer':Footer
		},
		data() {
			return {
				projectList: []
			}
		},
		created(){
			if(json.sample.length > 0){
				for(var i = 0; i < json.sample.length; i++){
					this.projectList.push(json.sample[i]);
				}
			}
		},
	    methods:{

	    }
	}

</script>

<style lang="scss">
	@import "style/main.scss";
</style>
