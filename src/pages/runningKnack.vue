<template>
    <div class="runningKnack">
        <div class="circle_process">
            <div class="wrapper">
                <div class="circle rightcircle">
                    <span>0</span>
                </div>
            </div>
        </div>
        <div class="runnignDetail">
            <div class="pace detailItem">
                <span id="detailData">0'00</span>
                <span id="detailTitle">配速</span>
            </div>
            <div class="timeUse detailItem">
                <span id="detailData">0:03</span>
                <span id="detailTitle">用时</span>
            </div>
            <div class="distanceAndKm detailItem">
                <span id="detailData">0.00</span>
                <span id="detailTitle">距离/千米</span>
            </div>
        </div>
        <!-- 进度条 -->
        <div class="progressBar">
            <slider class="slider" min="0" max="100" value="1" activeColor="whitesmoke" block-size="12" backgroundColor="rgb(54, 53, 53)"></slider>
            <div class="sliderTime">
                <span>00:04</span>
                <span>07:55</span>
            </div>
        </div>
        <div class="runningTips">
            <div class="text">
                <span id="textTop">晚间跑步小诀窍 V001-130</span>
                <span id="textBottom">晚间跑步的小诀窍</span>
            </div>
            <div class="functional">
                <div class="suspend smallItem">
                    <image src="../static/icon/run/正方形.png"></image>
                </div>
                <div class="play">
                    <image src="../static/icon/run/暂停.png"></image>
                </div>
                <div class="nextSong smallItem">
                    <image src="../static/icon/run/下一首未点击.png"></image>
                </div>
            </div>
            <div class="functionalAreas" @click.stop>
                <image src="../static/icon/run/下载.png"></image>
                <image src="../static/icon/run/收藏.png"></image>
                <image src="../static/icon/run/详情.png"></image>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name:'runningKnack',
  data() {
    return {
      property: 'value',
    };
  },
}
</script>

<style lang="less">
.runningKnack{
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    background-color: #222222;
    .circle_process {
        position: relative;
        width: 550rpx;
        height: 550rpx;
        margin-top: 30rpx;
        .wrapper {
            width: 100%;
            height: 80%;
            position: absolute;
            top: 0;
            left: 0;
            overflow: hidden;
            .circle{
                width: 550rpx;
                height: 550rpx;
                border: 30rpx solid transparent;
                border-radius: 50%;
                position: absolute;
                top: 0;
                box-sizing: border-box;
                // border-top: 30rpx solid #383838;
                // border-right: 30rpx solid #383838;
                // border-left: 30rpx solid #383838;
                // border-bottom: 30rpx solid #383838;
                border: 30rpx solid #383838;
                left: 0;
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 120rpx;
            }
        }
    }
    .runnignDetail{
        height: 120rpx;
        width: 100%;
        display: flex;
        justify-content: space-around;
        color: white;
        padding: 0 100rpx;
        box-sizing: border-box;
        .detailItem{
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-items: center;
            #detailData{
                font-size: 45rpx;
                font-weight: 600;
            }
            #detailTitle{
                margin-top: 20rpx;
                font-size: 24rpx;
                color: rgba(245, 245, 245, 0.829);
            }
        }
    }
    .progressBar{
        height: 30rpx;
        width: 90vw;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        margin-top: 100rpx;
        .slider{
            width: 100%;
            margin: 0;
            vertical-align: center;
        }
        .wx-slider-thumb {
            display: none;
        }
        .sliderTime{
            display: flex;
            justify-content: space-between;
            font-size: 20rpx;
            padding: 0 10rpx;
            color: grey;
        }
    }
    .runningTips{
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        margin-top: 50rpx;
        width: 100vw;
        .text{
            height: 150rpx;
            width: 100%;
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-items: center;
            color: rgb(185, 182, 182);
            #textTop{
                font-size: 32rpx;
            }
            #textBottom{
                margin-top: 20rpx;
                font-size: 28rpx;
                color: gray;
            }
        }
        .functional{
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            padding: 50rpx;
            box-sizing: border-box;
            .smallItem{
                height: 80rpx;
                width: 80rpx;
                border-radius: 50%;
                background-color: #494848c0;
                display: flex;
                justify-content: space-around;
                align-items: center;
                image{
                    height: 25rpx;
                    width: 25rpx;
                }
            }
            .play{
                height: 120rpx;
                width: 120rpx;
                border-radius: 50%;
                background-color: #494848c0;
                display: flex;
                justify-content: space-around;
                align-items: center;
                image{
                    height: 40rpx;
                    width: 40rpx;
                }
            }
        }
        .functionalAreas{
            display: flex;
            width: 100%;
            height: 130rpx;
            justify-content: space-evenly;
            align-items: center;
            margin-top: 65rpx;
            background-color: #202020;
            image{
                width: 50rpx;
                height: 50rpx;
            }
        }
    }
}
</style>