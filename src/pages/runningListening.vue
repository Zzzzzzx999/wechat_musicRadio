<template>
    <div class="runningListening">
        <div class="header">
            <div div class="cumulativeTime">
                <span>累计运动时长</span>
             </div>
            <div class="time">
                <span>0</span>
                <span>min</span>
            </div>
            <div class="cumulativeKm">
                <span>共计里程</span>
                <span>0.00</span>
                <span>km</span>
            </div>
        </div>
        <div class="content" @click="changePath('./runningKnack')">
            <div class="contentImage">
                <image mode="aspectFill" src="https://img0.baidu.com/it/u=232630015,4067357132&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500"></image>
                <div class="play">
                    <image src="../static/icon/run/24gf-play.png"></image>
                </div>
            </div>
            <div class="contentCard">
                <div class="speed">
                    <span>慢速</span>
                    <image src="../static/icon/run/闪电（快速）.png"></image>
                </div>
                <div class="detail">
                    <div class="title">
                        <span>晚间跑步的小诀窍</span>
                    </div>
                    <div class="details">
                        <span id="score">8.4分</span>|<span>30:23</span>|<span>Finn</span>
                    </div>
                    <div class="matchingDegree">
                        <span>最高匹配度0%</span>
                    </div>
                </div>
                <div class="functionalAreas" @click.stop>
                    <image src="../static/icon/run/下载.png"></image>
                    <image src="../static/icon/run/收藏.png"></image>
                    <image src="../static/icon/run/详情.png"></image>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"runningListening",
    data() {
        return {
            
        }
    },
    methods:{
        changePath(path){
            wx.navigateTo({url:path})
        }
    }
}
</script>

<style lang="less">
.runningListening{
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 0 70rpx;
    box-sizing: border-box;
    background-color: #232323;
    height: 100vh;
    width: 100vw;
    color: #797879;
    font-size: 33rpx;
    font-weight: 500;
    .header{
        height: 25%;
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        .cumulativeTime{

        }
        .time{
            color: #DCB769;
            span:first-child{
                font-size: 110rpx;
            }
            span{
                font-size: 25rpx;
            }
        }
    }
    .content{
        width: 100%;
        height: 70%;
        position: relative;
        display: flex;
        justify-content: center;
        .contentImage{
            position: relative;
            height: 600rpx;
            width: 100%;
            image{
                height: 600rpx;
                width: 100%;
                border-radius: 15rpx;
                z-index: 1;
            }
            .play{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                z-index: 3;
                image{
                    height: 75rpx;
                    width: 75rpx;
                }
            }
        }
        
        .contentCard{
            height: 950rpx;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            background-image: linear-gradient(rgba(0,0,0,0), #1B1B1B);
            .speed{
                height: 30rpx;
                padding: 18rpx;
                color: #DCB769;
                font-weight: 500;
                display: flex;
                align-items: center;
                image{
                    height: 35rpx;
                    width: 35rpx;
                    padding-left: 5rpx;
                }
            }
            .detail{
                display: flex;
                flex-flow: column nowrap;
                align-items: flex-start;
                margin-top: 570rpx;
                padding: 0 50rpx;
                color: whitesmoke;
               .title{
                   font-size: 36rpx;
               }
               .details{
                   font-size: 25rpx;
                   color: gray;
                   margin: 15rpx 0;
                   span{
                       padding: 0 20rpx;
                   }
                   #score{
                       padding-left: 0;
                   }
                }
                .matchingDegree{
                    color: gray;
                    font-size: 25rpx;
                }
            }
            .functionalAreas{
                display: flex;
                width: 100%;
                height: 100rpx;
                justify-content: space-around;
                align-items: center;
                margin-top: 65rpx;
                image{
                    width: 50rpx;
                    height: 50rpx;
                }
            }
        }
    }
}
</style>