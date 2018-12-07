<template>
	<div id="list">
		<b-container>
			<b-row>
				<b-col>
					<h3>{{this.propsdata[this.sitem].name}}</h3>
				</b-col>
			</b-row>
			<b-row>
				<!--<b-col md="4">
					<router-link to="/view">
						<img src="//scontent.cdninstagram.com/vp/911ee108e2dd172239f06b7955fc12e5/5C91E4D1/t51.2885-15/sh0.08/e35/s640x640/44257867_331718630744405_4354345094833049529_n.jpg" alt="">
						<span>Events</span>
					</router-link>
				</b-col>-->

				<b-col md="4" v-for="(value) in this.propsdata[this.sitem].data" v-bind:key="value.id">
					<router-link :to="{name:'view',params:{id:value.id}}" >
						<img v-bind:src="value.img" alt="">
						<span>{{value.title}}</span>
					</router-link>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
	export default {
		props:['propsdata','sitem'],
		data(){
			return{
			    //item:0
			}
		},
		created(){
			//this.fetchData();
		},
		watch:{
		  //'$route':'fetchData'
		},
		methods:{
			/*fetchData(){
				this.item = this.$route.params.id;
			}*/
		}
	}
</script>

<style scoped>

</style>
