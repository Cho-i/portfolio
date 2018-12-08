<template>
	<header>
		<h1 id="logo">CHO-I</h1>
		<button id="menu" v-on:click="show=!show" v-bind:class="{on:show}"><span></span></button>
		<transition name="slide">
			<div class="menu-wrap" v-if="show">
				<b-container>
					<b-row>
						<b-col>
							<ul>
								<li>
									<router-link to="/main">HOME</router-link>
								</li>
								<li>
									<router-link to="/about">About</router-link>
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
		data(){
			return{
			  show:false
			}
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
