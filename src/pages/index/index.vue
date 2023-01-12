<template>
	<div class="content">
		<div class="logo">
			<image src="../../static/Picture_material/qiE.jpg"></image>
			<div class="name">
				<span>企鹅FM</span>
			</div>
			<div class="detail">
				<span>最懂你的私人电台</span>
			</div>
		</div>
		<div class="login">
			<div class="loginMethods">
				<div class="qq loginItem" @click="login('../home?loginWay=qq')">
					<image src="../../static/icon/QQ.png"></image>
					<span>QQ登录</span>
				</div>
				<div class="wechat loginItem" @click="login('../home?loginWay=weixin')">
					<image src="../../static/icon/微信.png"></image>
					<span>微信登录</span>
				</div>
			</div>
			<div class="lookAround" @click="login('../home')">
				<span>随便看看</span>
				<image src="../../static/icon/右箭头.png"></image>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			login(path){
				wx.getUserProfile({
					desc:'请授权登录',
					success:(res)=>{
						let user = res.userInfo
						console.log('授权成功！',user);
						// wx.setStorageSync('nickName',user.nickName)
            			// wx.setStorageSync('avatarUrl',user.avatarUrl)
						wx.navigateTo({url:path})
					},
					fail:(res)=>{
						let user = res.userInfo
						console.log('授权失败！',user);						
					}
				})
				/* wx.request({
					method: 'GET',
					url: 'https://autumnfish.cn/login/cellphone',
					data: {
						"phone": "15559591562",
						"password": "zhou999"
					},
					success: function (res) {
						console.log('网易云登录成功',res);
					},
					fail: function () {
						console.log("获取失败");
					}
				}) */
			}
		},
		onLoad(){
			wx.cloud.database().collection('rewards').get()
			.then(res=>{
				console.log('这是云函数数据：',res.data);
			})
			.catch(err=>{
				console.log(err);
			})
			
		},
	}
	

	
</script>

<style lang="less">
	.content {
		height: 100vh;
		width: 100vw;
		background-color: #DBB76B;
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		justify-content: space-around;
		.logo{
			display: flex;
			flex-flow: column nowrap;
			justify-content: center;
			align-items: center;
			width: 375rpx;
			height: 650rpx;
			image{
				width: 300rpx;
				height: 300rpx;
			}
			.name{
				font-size: 75rpx;
				font-weight: 500;
				font-family: emoji;
				letter-spacing: 5rpx;
			}
			.detail{
				font-size: 26rpx;
				font-weight: 500;
				letter-spacing: 8rpx;
			}
		}
		.login{
			width: 630rpx;
			height: 250rpx;
			display: flex;
			flex-flow: column nowrap;
			justify-content: center;
			align-items: center;
			.loginMethods{
				height: 100%;
				width: 100%;
				display: flex;
				flex-flow: row nowrap;
				justify-content: space-around;
				align-items: center;
				.loginItem{
					height: 90rpx;
					width: 100%;
					width: 260rpx;
					border-radius: 50rpx;
					background-color: #8E7746;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 30rpx;
					font-weight: 300;
					image{
						width: 45rpx;
						height: 45rpx;
						padding-right: 10rpx;
					}
					span{
						color: white;
					}
				}
			}
			.lookAround{
				height: 100%;
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 30rpx;
				font-weight: 300;
				image{
					height: 35rpx;
					width: 35rpx;
					padding-left: 5rpx;
				}
				span{
					color: white;
				}
			}
		}
	}

</style>
