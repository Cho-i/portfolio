<template>
	<b-container>
		<b-row>
			<b-col>
				<h3>About Me</h3>
			</b-col>
		</b-row>
		<b-row>
			<b-col>
				<p>
					안녕하세요. 이초이입니다 :)<br><br>
					웹 표준/접근성에 맞춰 의미에 맞게 마크업하고,<br>다양한 환경에서 사용가능한 UX를 구현하기를 추구합니다.<br><br>
					또한, 기획자, 디자이너, 개발자와의 협업을 중요시하고 <br>항상 새로운 기술에 대한 관심이 많아 많은 기술들을 배우기 위해 노력하고 있습니다.
				</p>
			</b-col>
		</b-row>
		<b-row>
			<b-col>
				<h4>Career</h4>
			</b-col>
		</b-row>
		<b-row>
			<b-col>
				<dl>
					<dt>웹 에이전시 인스팟 웹 퍼블리셔</dt>
					<dd class="date">2015.05 – 2017.01</dd>
					<dt>해커스 교육 그룹 웹 퍼블리셔</dt>
					<dd class="date">2017.11 – 현재</dd>
				</dl>
			</b-col>
		</b-row>
		<b-row>
			<b-col>
				<h4>Education</h4>
			</b-col>
		</b-row>
		<b-row>
			<b-col>
				<dl>
					<dt>성결대학교 멀티미디어 공학과 학사</dt>
					<dd class="date">2011.03 – 2015.02</dd>
					<dt>스마트콘텐츠 JAVA 멀티미디어개발자 과정</dt>
					<dd class="date">2014.06 - 2014.11</dd>
					<dd>교육내용 : JAVA & HTML & CSS & JSP & PHP</dd>
					<dt>하이미디어 컴퓨터학원 디지털디자인A</dt>
					<dd class="date">2015.02 - 2015.05</dd>
					<dd>교육내용 : Photoshop, Illustration등 디자인 기획 및 설계, HTML & CSS 기본파악, 크로스 브라우징을 통한 웹 표준 기술의 이해</dd>
					<dt>(주)인스웨이브 시스템즈</dt>
					<dd class="date">2016.05</dd>
					<dd>교육내용 : 웹스퀘어 디자인/퍼블리싱 이론</dd>
				</dl>
			</b-col>
		</b-row>
		<b-row>
			<b-col>
				<h4>Certificate</h4>
			</b-col>
		</b-row>
		<b-row>
			<b-col>
				<dl>
					<dt>컴퓨터그래픽스운용기능사</dt>
					<dd class="date">2013.06</dd>
					<dt>그래픽기술자격(GTQ) 1급</dt>
					<dd class="date">2015.05</dd>
				</dl>
			</b-col>
		</b-row>
		<b-row>
			<b-col>
				<h4>Skill</h4>
			</b-col>
		</b-row>
		<b-row>
			<b-col>
				<p class="skill">HTML/CSS/SCSS/Jquery/Vue.js</p>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
	export default {

	}
</script>

<style lang="scss" scoped>
	h3{
		margin:5rem 0;
    	font-size:5rem;
    	font-weight:200;
		text-align:left;
	}
	h4{
		margin:3rem 0;
		font-size:3rem;
		font-weight:100;
		text-align:left;
		color:#498fd6;
	}
	dl{
		dt{
			margin-top:3rem;
			font-size:1.5rem;
		}
		dd{
		    line-height:1.5;
			&.date{
				color:#b2b2b2;
			}
		}
	}
	p{
		font-weight:100;
		line-height:1.5;
		&.skill{
			margin-bottom:3rem;
			font-size:1.5rem;
			font-weight:600;
		}

	}
</style>
