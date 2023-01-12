<template>
	<view class="container">
	  <view class="wrapper">
	    <view class="left-top-sign">LOGIN</view>
	    <view class="welcome">
	      欢迎回来！
	    </view>
	    <view class="input-content">
	      <view class="input-item">
	        <text class="tit">手机号码</text>
	        <input v-model="phone" type="text" placeholder="请输入手机号码"/>
	      </view>
	      <view v-if="!change" class="input-item">
	        <text class="tit">密码</text>
	        <input v-model="pwd" type="password" placeholder="请输入密码"/>
	      </view>
		  <view v-else class="input-item">
				<text class="tit">验证码</text>
				<view style="width:100%">
					<input style="width: 60%;display: inline-block;" v-model="captcha" maxlength="4" type="number" placeholder="请输入验证码"/>
					<button class="confim-num" @tap="getConfimNum">{{count>0?'('+count+'s)':'获取验证码'}}</button>
				</view>
		  </view>
	    </view>
	    <button class="confirm-btn" @tap="login">登录</button>
	    <view class="forget-section" @tap="changeLoginType">
	      {{change?'切换手机密码登陆':'切换成手机验证码登录'}}
	    </view>
	  </view>
	  <view class="register-section">
	    还没有账号?
	    <text >马上注册</text>
	  </view>
	</view>
</template>

<script>
	import {login, sendCaptcha} from '../../service/home'
	export default {
		data() {
			return {
				phone: '',
				pwd: '',
				captcha: '',
				change: true,
				count: 0
			}
		},
		methods: {
			changeLoginType() {
				this.change = !this.change
				this.captcha = ''
				this.pwd = ''
			},
			getConfimNum() {
				if(!this.phone) {
					wx.showToast({
						title: '请输入手机号',
						icon: 'none'
					})
					return
				}
				this.count = 60
				let self = this
				let timer = setInterval(() => {
					if(self.count == 0) {
						clearInterval(timer)
					}
					self.count = --self.count
				}, 1000)
				sendCaptcha({phone:this.phone}).then(res => {
					wx.showToast({
						title: '已发送验证码',
						icon: 'none'
					})
				})
			},
			login() {
				let {phone, pwd, captcha} = this
				if(!phone) {
					wx.showToast({
						title: '请输入手机号',
						icon: 'none'
					})
					return
				} else {
					let phoneReg = /^1(3|4|5|6|7|8|9)\d{9}$/
					if (!phoneReg.test(phone)) {
						wx.showToast({	
							title: '请输入正确的手机号',
							icon: 'none'
						})
						return
					} else {
						if(!pwd && !this.change) {
							wx.showToast({
								title: '请输入密码',
								icon: 'none'
							})
							return
						} else if(!captcha && this.change) {
							wx.showToast({
								title: '请输入验证码',
								icon: 'none'
							})
						} else {
							let params = {}
							if(this.change) {
								params = {
									phone,
									captcha,
									islogin: true
								}
							} else {
								params = {
									phone,
									password: pwd,
									islogin: true
								}
							}
							login(params).then(res => {
								if(res.code === 502) {
									wx.showToast({
										title: res.msg,
										icon: 'none'
									})
								} else if(res.code === 400) {
									wx.showToast({
										title: '手机号不存在',
										icon: 'none'
									})
								} else if(res.code ===200){
									wx.setStorage({
										data: JSON.stringify(res.profile),
										key: 'userInfo',
									})
									wx.redirectTo({
										url: '/pages/home',
									})
								}
							})
						}
					}
				}
			},
		}
	}
</script>

<style>
/* pages/login/login.wxss */.wrapper{
  position:relative;
  z-index: 90;
  padding-bottom: 40rpx;
}

.left-top-sign{
  font-size: 120rpx;
  color: #f8f8f8;
  position:relative;
  left: -16rpx;
}

.welcome{
  position:relative;
  left: 50rpx;
  top: -90rpx;
  font-size: 46rpx;
  color: #555;
}


.input-content{
  padding: 0 60rpx;
}
.input-item{
  display:flex;
  flex-direction: column;
  align-items:flex-start;
  justify-content: center;
  padding: 0 30rpx;
  background:#f8f6fc;
  height: 120rpx;
  border-radius: 4px;
  margin-bottom: 50rpx;

}

.input-item:last-child{
  margin-bottom: 0;
}
.input-item .tit{
  height: 50rpx;
  line-height: 56rpx;
  font-size: 30rpx;
  color: #606266;
}
.input-item input{
  height: 60rpx;
  font-size: 30rpx;
  color: #303133;
  width: 100%;
}
.confirm-btn{
  width: 630rpx!important;
  height: 76rpx;
  line-height: 76rpx;
  border-radius: 50rpx;
  margin-top: 70rpx;
  background: #d43c33;
  color: #fff;
  font-size: 32rpx;
  padding: 0;
}
.confirm-btn2:after{
  border-radius: 100px;
}

.forget-section{
  font-size: 28rpx;
  color: #4399fc;
  text-align: center;
  margin-top: 40rpx;
}

.register-section{
  position:absolute;
  left: 0;
  bottom: 50rpx;
  width: 100%;
  font-size: 28rpx;
  color: #606266;
  text-align: center;

}
.register-section text{
  color: #4399fc;
  margin-left: 10rpx;
}

.confim-num {
	display: inline-block;
	width: 40%;
	font-size: 24rpx;
}

</style>
