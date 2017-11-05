<template>
    <div id="app">
        <div class="week" v-if="isHome || isQue"><span>{{ msgArr[index] }}</span></div>
        <div class="content">
            <router-view :message="index" ref="oMsg" :msg="msg"></router-view>
            <router-link to="/que" v-if="isHome"><button @click="alink"></button></router-link>
            <button :class="{next: isTrue,over: !isTrue}" v-if="isQue" @click="addOne"></button>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
            msgArr: ["第一周","题目1","题目2","题目3","题目4","题目5"],
            index: 0,
            isHome: true,
            isQue: false,
            isTrue: true,
            msg: []
        }
    },
    methods: {
        init() {
            if(this.$route.path=="/"){
                this.index=0;
                this.isHome=true;
                this.isQue=false;
                this.isTrue=true;
            }
            if(this.$route.path=="/que"){
                this.isHome=false;
                this.isQue=true;
            }
        },
        alink() {
            this.isHome=false;
            this.isQue=true;
            this.index=1;
        },
        addOne() {
            this.init();

            if(this.index===this.msgArr.length-2){
                this.isTrue=false;
            }

            if(this.index<this.msgArr.length-1){
                this.index++;
            }else{
                this.$router.push('/score');
                this.isQue=false;

                this.msg=this.$refs["oMsg"].queArr;

            }
        }
    },
    mounted() {
        this.$router.push('/');
    },
    beforeUpdate() {
        this.init();
    }
}
</script>

<style>
html,body{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    height: 100%;
    background: url("./images/1-1.jpg") no-repeat;
    background-size: 100%;
    position: relative;
}
.week{
    width: 80px;
    height: 160px;
    background: url("./images/WechatIMG2.png") no-repeat;
    background-size: 100%;
    position: absolute;
    top: 0;
    right: 10%;
}
.week span{
    position: absolute;
    bottom: 20px;
    left: 20px;
    font-size: 14px;
    color: #c63;
}
.content{
    width: 100%;
    height: 100%;
    position: absolute;
}
button{
    width: 140px;
    height: 60px;
    background: url("./images/1-4.png") no-repeat;
    background-size: 100%;
    border: none;
    outline: none;
    position: absolute;
    top: 55%;
    left: 50%;
    margin-left: -70px;
}
button.next{
    background: url("./images/2-2.png") no-repeat;
    background-size: 100%;
}
button.over{
    background: url("./images/3-1.png") no-repeat;
    background-size: 100%;
}

</style>
