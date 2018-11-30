<template>
	<div id="app">
		<Header></Header>
		<router-view></router-view>
		<Footer></Footer>
	</div>
</template>

<script>
	import Header from './components/Header.vue'
	import Content from './components/Content.vue'
	import List from './components/List.vue'
	import View from './components/View.vue'
	import Footer from './components/Footer.vue'
	//import json from 'data.json'

	export default {
		name: 'app',
		components:{
			'Header':Header,
		    'Content':Content,
			'List':List,
			'View':View,
			'Footer':Footer,

		}
	}

</script>

<style lang="scss">
	@import "style/main.scss";
</style>
