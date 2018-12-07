<template>
	<div class="contents">
		<div class="view-bg">
			<img v-bind:src="this.propsdata[this.idx].img" alt="">
			<h2>{{this.propsdata[this.idx].title}}</h2>
		</div>
		<div class="view-cont">
			<b-container>
				<b-row>
					<b-col>
						<p>{{this.propsdata[this.idx].text}}</p>
					</b-col>
				</b-row>
			</b-container>
		</div>
	</div>
</template>

<script>
	export default {
		props:['propsdata'],
		data(){
			return{
				idx:0
			}
		},
		created(){
		  this.fetchData();
		},

		watch:{
		  '$route':'fetchData'
		},
		methods:{
			fetchData(){
				this.idx = this.$route.params.id;
			}

		}
	}
</script>

<style lang="scss">
	.view-bg{
		position:relative;
		&:after{
			position:absolute;
			top:0;
			left:0;
			display:block;
			width:100%;
			height:100%;
			content:'';
			background:#000;
			opacity:0.3;
		}
		img{
			position:fixed;
			top:0;
			left:0;
			width:100%;
			vertical-align:top;

		}
		h2{
			position:relative;
			padding:15rem 0;
			font-size:5rem;
			color:#fff;
			text-align:center;
			z-index:1;
		}
	}
	.view-cont{
		position:relative;
		padding:3rem 0;
		background:#fff;
	}
</style>
