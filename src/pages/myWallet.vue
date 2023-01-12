<template>
  <div class="myWallet">
    <div class="goldenBean moneyItem">
      <div class="header">
        <image src="../static/Picture_material/1657874235.png"></image>
		<span>金豆</span>
		<image id="detail" src="../static/icon/myWallet/详情.png"></image>
      </div>
      <div class="footer">
		<span>0</span>
		<div class="recharge">
			<span>充值</span>
		</div>
	  </div>
    </div>
    <div class="rose moneyItem">
      <div class="header">
        <image src="../static/Picture_material/1657874235.png"></image>
		<span>玫瑰</span>
      </div>
      <div class="footer">
		<span>0</span>
		<div class="recharge">
			<span>查看</span>
		</div>
	  </div>
    </div>
	<div class="automaticRenewalSettings settings">
		<span>专辑自动续购设置</span>
		<image src="../static/icon/右箭.png"></image>
	</div>
	<div class="history settings">
		<span>记录</span>
		<image src="../static/icon/右箭.png"></image>
	</div>
  </div>
</template>

<script>
export default {
  name:"myWallet",
  data() {
    return {
      property: 'value',
    };
  },
  methods:{

  }
}
</script>

<style lang="less">
.myWallet{
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-flow: column nowrap;
	.moneyItem{
		margin: 35rpx;
		display: flex;
		flex-flow: column nowrap;
		margin-bottom: 50rpx;
		.header{
			display: flex;
			align-items: center;
			font-weight: 500;
			image{
				width: 8rpx;
				height: 40rpx;
			}
			span{
				padding: 0 20rpx;
                font-weight: 500;
			}
			#detail{
				width: 30rpx;
				height: 30rpx;
			}
		}
		.footer{
			height: 100rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin: 15rpx 0;
			span{
				font-size: 100rpx;
				font-weight: 600;
			}
			.recharge{
				width: 100rpx;
				height: 50rpx;
				border-radius: 60rpx;
				background-color: #D3AB58;
				display: flex;
				align-items: center;
				justify-content: center;
				span{
					font-size: 24rpx;
					color: white;
				}
			}
		}
	}
	.settings{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 35rpx;
		span{
			font-size: 30rpx;
			font-weight: 500;
		}
		image{
			width: 33rpx;
			height: 33rpx;
		}
	}
}
</style>