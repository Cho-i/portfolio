<template>
	<div class="contents">
		<div class="view-bg" :style="{'background-image': 'url(' + this.propsdata[this.idx].mainImg + ')'}">
			<h2>{{this.propsdata[this.idx].title}}</h2>
		</div>
		<div class="view-cont">
			<b-container>
				<b-row>
					<b-col>
						<h3>PROJECT</h3>
						<p>{{this.propsdata[this.idx].title}}</p>
					</b-col>
					<b-col>
						<h3>PERIOD</h3>
						<p>{{this.propsdata[this.idx].period}}</p>
					</b-col>
				</b-row>
				<b-row>
					<b-col>
						<h3>ROLE</h3>
						<p>{{this.propsdata[this.idx].role}}</p>
					</b-col>
				</b-row>
				<b-row>
					<b-col>
						<h3>CONTENT</h3>
						<p>{{this.propsdata[this.idx].des}}</p>
						<br>
						<p>{{this.propsdata[this.idx].desFull}}</p>
					</b-col>
				</b-row>
				<b-row v-if="this.propsdata[this.idx].subImg!=''">
					<b-col>
						<div class="img-cont">
							<img v-bind:src="this.propsdata[this.idx].subImg" class="max" alt="">
						</div>
					</b-col>
				</b-row>
				<b-row v-if="this.propsdata[this.idx].link!=''">
					<b-col class="ta-c">
						<a v-bind:href="this.propsdata[this.idx].link" target="_blank" class="btn-go">GO</a>
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
		background-size:cover;
		background-position:center;
		background-repeat:no-repeat;
		background-attachment:fixed;
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
			font-weight:300;
			color:#fff;
			text-align:center;
			z-index:1;
		}
	}
	.view-cont{
		position:relative;
		padding:3rem 0;
		background:#fff;
		h3{
			padding:5rem 0 1.5rem;
			font-size:2.5rem;
			font-weight:200;
			text-align:left;
			letter-spacing:1rem;
		}
		p{
			line-height:1.5;
		}
	}
	.img-cont{
		margin-top:5rem;
		text-align:center;
	}
	.btn-go{
		display:inline-block;
		margin-top:3rem;
		padding:1rem 5rem;
		border:1px solid #000;
		font-size:1.5rem;
		font-weight:100;
		color:#000;
		background:#fff;
		&:hover{
			color:#fff;
			background:#000;
			text-decoration:none;
		}
	}
	.ta-c{
		text-align:center;
	}
	.max{
		max-width:100%;
	}
	@media screen and (max-width:768px) {
		.view-bg{
			h2{
				padding:10rem 0;
				font-size:3rem;
			}
		}
	}
</style>
