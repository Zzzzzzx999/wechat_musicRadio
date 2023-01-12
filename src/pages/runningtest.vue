<template>
	<div class="runningTest">
        <button @click="test2">点击测试</button>
	</div>
</template>

<script>
export default {
	name:'runningTest',
	data() {
		return {
			 
		};
	},
	methods: {
        showHelp(help) {
            console.log('输出',help);
        },
		test(){
			/* const user1={id:7,name:'周'}
			const user2={id:10,age:22}
			const all_user={...user1,...user2}
			console.log(all_user); */
            var helpText = [
                {'id': 'email', 'help': 'Your e-mail address'},
                {'id': 'name', 'help': 'Your full name'},
                {'id': 'age', 'help': 'Your age (you must be over 16)'}
            ]
            for (var i = 0; i < helpText.length; i++) {
                var item = helpText[i];
                setTimeout(() => {
                    this.showHelp(item.help);
                }, 0);
                console.log('@',item.help);
                this.test2(item.id)
            }
		},
        test2(){
            var arr_text = [
                {'id': '1', 'name': 'zhou'},
                {'id': '2', 'name': 'huang'},
                {'id': '3', 'name': 'lou)'}
            ]
            setTimeout(() => {
                arr_text[2].name = 'zhang'
                console.log('arr_text=',arr_text);
            }, 0);
        },
        // 防抖
        debounce(fn,time){
            let timer = null;

            return function(){
                let args = arguments;
                if (timer) {
                    clearTimeout(timer);
                    timer = null;
                }
                // 设置定时器，使事件间隔制定时间后执行
                timer = setTimeout(() => {
                    fn.applya(this,args)
                }, time);
            }
        },
        // 节流
        throttle(fn,delay) {
            let curTime = Date.now();
            
            return function(){
                let args = arguments;
                let nowTime = Date.now();

                if (nowTime - curTime >= delay) {
                    curTime = Date.now();
                    return fn.apply(this,args)                    
                }
            }
        }
	}
	
}
</script>

<style lang="less">
.runningTest{
	height: 60vh;
	display: flex;
	justify-content: center;
	align-items: center;
	button{
		border-radius: 20rpx;
		background-color: antiquewhite;
	}
}
</style>