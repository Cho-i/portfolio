<template>
	<div class="contents">
		<div class="view-bg">
			<img src="//scontent.cdninstagram.com/vp/911ee108e2dd172239f06b7955fc12e5/5C91E4D1/t51.2885-15/sh0.08/e35/s640x640/44257867_331718630744405_4354345094833049529_n.jpg" alt="">
			<h2>Programs</h2>
		</div>
		<div class="view-cont">
			<b-container>
				<b-row>
					<b-col>
						<p>We offer classes for all ages throughout the year. If you don't see the perfect class, we'll start one!</p>
					</b-col>
				</b-row>
			</b-container>
			<!--<ul class="list-skills">
				<li v-if="this.propsdata[this.selectedItem].htmlSkill!=''"><i class="icon-html">HTML</i></li>
				<li v-if="this.propsdata[this.selectedItem].cssSkill!=''"><i class="icon-css">CSS</i></li>
				<li v-if="this.propsdata[this.selectedItem].sassSkill!=''"><i class="icon-sass">Sass</i></li>
				<li v-if="this.propsdata[this.selectedItem].jquerySkill!=''"><i class="icon-jquery">jquery</i></li>
				<li v-if="this.propsdata[this.selectedItem].vueSkill!=''"><i class="icon-vue">Vue.js</i></li>
			</ul>-->
		</div>

	</div>
</template>

<script>
	export default {
		/*name:'view',
	  props: ['propsdata', 'selectedItem']*/
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