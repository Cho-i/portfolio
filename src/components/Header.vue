<template>
	<header>
		<h1 id="logo">HELLO</h1>
		<button id="menu" v-on:click="showMenu=!showMenu" v-bind:class="{on:showMenu}"><span></span></button>
		<div class="menu-wrap" v-bind:class="{open:showMenu}">
			<b-container>
				<b-row>
					<b-col>
						<ul>
							<!--<li v-for="(value, key) in this.propsdata" v-bind:key="value.id">
								<router-link :to="{name:'show',params:{id:key}}">{{value.name}}</router-link>
							</li>-->
							<li>
								<router-link to="/index">HOME</router-link>
							</li>
						</ul>
					</b-col>
				</b-row>
			</b-container>
		</div>
	</header>
</template>

<script>
	export default {
	    //props:['propsdata'],
		data(){
			return{
			  showMenu:false
			}
		},
		methods: {

		}
	}
</script>

<style scoped>

</style>