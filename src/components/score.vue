<template>
	<div id="score">
		<div class="bg">
			<div class="score">
				<h4><span>{{ score }}</span>分</h4>
				<p>{{ article[num] }}</p>
			</div>
			<div class="share" @click="share"></div>
			<div class="follow">
				关注我获取答案
			</div>
		</div>
		<div class="showShare" v-if="show" @click="oshare"></div>
	</div>
		
</template>

<script>
	export default {
		name: "score",
		props: ["msg"],
		data() {
			return {
				num: 0,
				score: 0,
				article: ['怎么运气这么差，一题都没对','你说，是不是把知识都还给小学老师了？','还不错，但还需要继续加油哦！','不要嘚瑟还有进步的空间！','智商离爆表只差一步了！','哇哦，好聪明啊，快去抽大奖'],
				show: false
			}
		},
		methods: {
			share() {
				this.show=true;
			},
			oshare() {
				this.show=false;
			}
		},
		mounted() {
			this.msg.forEach(function (val,index){
				for (var i = 0,len=val.length; i < len; i++) {
					if(val[i].hasClass && val[i].isCorrect){
						this.num++;
					}
				}
			},this)
			this.score=this.num*20;
		}
	}
</script>

<style>
	#score{
		background: url("./../images/4-1.jpg") no-repeat;
	    background-size: 100%;
	    width: 100%;
	    height: 100%;
	}
	.bg{
		width: 230px;
		margin: 0px auto;
		padding-top: 50px;
	}
	.score{
		width: 100%;
		height: 240px;
		background: url("./../images/4-2.png") no-repeat;
	    background-size: 100%;
	    position: relative;
	}
	.score h4,
	.score p{
		position: absolute;
		width: 80%;
		text-align: center;
		top: 141px;
		left: 10%;
	}
	.score h4{
		font-size: 28px;
		color: #a51d31;
		top: 70px;
	}
	.share{
		width: 70%;
		height: 76px;
		background: url("./../images/4-3.png") no-repeat;
	    background-size: 100%;
	    margin-left: 43px;
	}
	.follow{
		width: 100%;
		height: 150px;
		background: url("./../images/ewm.png") no-repeat;
	    background-size: 60%;
	    background-position: 50px 25px;
	    text-align: center;
	}
	.showShare{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: url("./../images/5-2.png") no-repeat,url("./../images/5-1.png") no-repeat;
	    background-size: 80%,100%;
	    background-position: 50% 0,0 0;
	    opacity: 0.9;
	}
</style>