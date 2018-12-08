<template>
	<div id="app">
		<Header></Header>
		<transition name="fade" mode="out-in">
			<router-view v-bind:propsdata="projectList"></router-view>
		</transition>
		<Footer></Footer>
	</div>
</template>

<script>
	import Header from './components/Header.vue'
	import Content from './components/Content.vue'
	import Page from './components/Page.vue'
	import Footer from './components/Footer.vue'
	import About from './components/About.vue'
	import json from './data/data.json'

	export default {
		name: 'app',
		components:{
			'Header':Header,
		    'Content':Content,
			'Page':Page,
			'Footer':Footer,
			'About':About
		},
		data() {
			return {
				projectList: []
			}
		},
		created(){
			if(json.project.length > 0){
				for(var i = 0; i < json.project.length; i++){
					this.projectList.push(json.project[i]);
				}
			}
		}
	}

</script>

<style lang="scss">
	@import "style/main.scss";
</style>
