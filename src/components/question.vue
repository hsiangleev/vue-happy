<template>
	<div id="que">
		<ul>
			<span>第{{ message }}题</span>
			<li v-for="(val,index) in queArr[num]" :class="{current: val.hasClass}" @click="addCurrent(index)">{{ val.text }}</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name: "que",
		props: ["message"],
		data() {
			return {
				corse: 0,
				num: 0,

				// hasClass和isCorrect同时为真，则正确
				queArr: [
					[
						{
							text: "A: 1+1=3",
							hasClass: false,
							isCorrect: false
						},
						{
							text: "B: 1+2=4",
							hasClass: false,
							isCorrect: false
						},
						{
							text: "C: 2+2=5",
							hasClass: false,
							isCorrect: false
						},
						{
							text: "D: 2+3=5",
							hasClass: false,
							isCorrect: true
						},
					],
					[
						{
							text: "A: 2>3",
							hasClass: false,
							isCorrect: false
						},
						{
							text: "B: 3>5",
							hasClass: false,
							isCorrect: false
						},
						{
							text: "C: 3<6",
							hasClass: false,
							isCorrect: true
						},
						{
							text: "D: 5<0",
							hasClass: false,
							isCorrect: false
						},
					],
					[
						{
							text: "A: 2*3=6",
							hasClass: false,
							isCorrect: true
						},
						{
							text: "B: 2*5=12",
							hasClass: false,
							isCorrect: false
						},
						{
							text: "C: 0*10=10",
							hasClass: false,
							isCorrect: false
						},
						{
							text: "D: 10+5=105",
							hasClass: false,
							isCorrect: false
						},
					],
					[
						{
							text: "A: 1+1=3",
							hasClass: false,
							isCorrect: false
						},
						{
							text: "B: 1+2=4",
							hasClass: false,
							isCorrect: false
						},
						{
							text: "C: 2+2=5",
							hasClass: false,
							isCorrect: false
						},
						{
							text: "D: 2+3=5",
							hasClass: false,
							isCorrect: true
						},
					],
					[
						{
							text: "A: 2>3",
							hasClass: false,
							isCorrect: false
						},
						{
							text: "B: 3>5",
							hasClass: false,
							isCorrect: false
						},
						{
							text: "C: 3<6",
							hasClass: false,
							isCorrect: true
						},
						{
							text: "D: 5<0",
							hasClass: false,
							isCorrect: false
						},
					],
					
				]
			}
		},
		methods: {
			addCurrent(index) {
				this.queArr[this.num].forEach(function (val,index){
					val.hasClass=false;
				},this)
				this.queArr[this.num][index].hasClass=true;
			}
		},
		watch: {
			message(value) {
				this.num=value-1;
			}
		}
	}
</script>

<style>
	#que{
		width: 100%;
		height: 70%;
		margin-top: 30%;
		background: url("./../images/2-1.png") no-repeat;
	    background-size: 80%;
	    background-position: 50% 0;
	    position: absolute;
	}
	#que ul{
		padding: 0;
		margin: 0;
		list-style: none;
		color: #fff;
		font-size: 18px;
		position: absolute;
		top: 50px;
		left: 120px;
	}
	#que li{
		margin: 5px 0;
	}
	li.current{
		background-color: #f69;
	}
</style>