<template>
	<header>
		<h1 id="logo">HELLO</h1>
		<button id="menu" v-on:click="showMenu=!showMenu" v-bind:class="{on:showMenu}"><span></span></button>
		<div class="menu-wrap" v-bind:class="{open:showMenu}">
			<b-container>
				<b-row>
					<b-col>
						<ul>
							<li><router-link to="/Content/test1">test1</router-link></li>
							<li><router-link to="/Content/test2">test2</router-link></li>
							<!--<li><a href="">About Us</a></li>
							<li><a href="">Parties & Events</a></li>
							<li><a href="">For Adults</a></li>-->
						</ul>
					</b-col>
				</b-row>
			</b-container>
		</div>
	</header>
</template>

<script>
	export default {
		data(){
			return{
			  showMenu:false
			}
		}
	}
</script>

<style scoped>

</style>