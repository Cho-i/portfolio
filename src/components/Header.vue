<template>
	<header>
		<h1 id="logo">HELLO</h1>
		<button id="menu" v-on:click="show=!show" v-bind:class="{on:show}"><span></span></button>
		<transition name="slide">
			<div class="menu-wrap" v-if="show">
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
		</transition>
	</header>
</template>

<script>
	export default {
	    //props:['propsdata'],
		data(){
			return{
			  show:false
			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.slide-leave-active,
	.slide-enter-active {
		transition:1s;
	}
	.slide-enter {
		transform:translate(-100%, 0);
	}
	.slide-leave-to {
		transform:translate(-100%, 0);
	}
</style>