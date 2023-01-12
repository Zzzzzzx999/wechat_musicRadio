<template>
    <div class="myDownloads">
        <div class="down">
            <div class="downTitle">
                <div class="downLoaded downTitleItem" :class="{'downTitleActive':downloaded}" @click="changeLoading">
                    <span>已下载</span>
                </div>
                <div class="downLoading downTitleItem" :class="{'downTitleActive':!downloaded}" @click="changeLoaded">
                    <span>下载中</span>
                </div>
            </div>
            <div class="downLoadedContent downContent" v-if="downloaded">
                <div class="notContent">
                    <image src="../static/icon/下载管理实心.png"></image>
                </div>
                <div class="content">
                    <span>暂无已下载节目</span>
                </div>
            </div>
            <div class="downLoadingContent downContent" v-if="!downloaded">
                <div class="notContent">
                    <image src="../static/icon/下载管理实心.png"></image>
                </div>
                <div class="content">
                    <span>暂无下载目录</span>
                </div>
            </div>
        </div>
        <div class="popularRecommendations">
            <div class="title">
                <span>热门专辑推荐</span>
            </div>
            <div class="programs">
                <div class="programLeft">
                    <image mode="aspectFill" src="https://img1.baidu.com/it/u=601131707,207544092&fm=253&fmt=auto&app=138&f=JPEG?w=480&h=270"></image>
                </div>
                <div class="programRight">
                    <div class="programTitle">
                        <div class="boutique">
                            <span id="Title">精品</span>
                            <span id="Name">儿童经典300首</span>
                        </div>
                    </div>
                    <div class="programContent">
                        <span>搜素各国经典儿歌、民间儿歌、童谣，流行音乐，让天真可爱的婴儿听到12345</span>
                    </div>
                    <div class="programDetail">
                        <span>8.0分</span>
                        <span id="separate">|</span>
                        <span>亲亲小宝贝</span>
                    </div>
                </div>
                <div class="goDown">
                    <image src="../static/icon/下载.png"></image>
                </div>
            </div>
            <div class="programs">
                <div class="programLeft">
                    <image mode="aspectFill" src="https://t8.baidu.com/it/u=1033892166,634807032&fm=74&app=80&size=f256,256&n=0&f=PNG?sec=1658250000&t=b5f5a70ef45a5fc703595f4473cb051d"></image>
                </div>
                <div class="programRight">
                    <div class="programTitle">
                        <div class="boutique">
                            <span id="Title">热门</span>
                            <span id="Name">夜听</span>
                        </div>
                    </div>
                    <div class="programContent">
                        <span>夜听，让更多的家庭越来越幸福。微信同步收听，请关注公众号：夜听晚上听夜听</span>
                    </div>
                    <div class="programDetail">
                        <span>9.7分</span>
                        <span id="separate">|</span>
                        <span>播放2.7亿</span>
                        <span id="separate">|</span>
                        <span>刘筱</span>
                    </div>
                </div>
                <div class="goDown">
                    <image src="../static/icon/下载.png"></image>
                </div>
            </div>
            <div class="programs">
                <div class="programLeft">
                    <image mode="aspectFill" src="https://fm-image-1251316161.file.myqcloud.com/fm/photo/album/rmid_album_240/p/n/000aHZrt3i97pn.jpg?time=1581599266"></image>
                </div>
                <div class="programRight">
                    <div class="programTitle">
                        <div class="boutique">
                            <span id="Title">独家</span>
                            <span id="Name">素年锦时</span>
                        </div>
                    </div>
                    <div class="programContent">
                        <span>夜听，让更多的家庭越来越幸福。微信同步收听，请关注公众号：夜听晚上听夜听</span>
                    </div>
                    <div class="programDetail">
                        <span>9.7分</span>
                        <span id="separate">|</span>
                        <span>播放2.7亿</span>
                        <span id="separate">|</span>
                        <span>刘筱</span>
                    </div>
                </div>
                <div class="goDown">
                    <image src="../static/icon/下载.png"></image>
                </div>
            </div>
        </div>
        <player></player>
    </div>
</template>

<script>
import player from "../pages/player/player";
export default {
    name:"myDownloads",
    components:{player},
    data() {
        return {
            downloaded:true
        }
    },
    methods:{
        changeLoading(){
            this.downloaded=true
        },
        changeLoaded(){
            this.downloaded=false
        },
    }
}
</script>

<style lang="less">
.myDownloads{
    display: flex;
    flex-flow: column nowrap;
    position: relative;
    .down{
        display: flex;
        flex-flow: column nowrap;
        .downTitle{
            width: 100vw;
            height: 80rpx;
            background-color: whitesmoke;
            display: flex;
            align-items: center;
            padding: 0rpx 120rpx;
            box-sizing: border-box;
            justify-content: space-around;
            font-size: 28rpx;
            font-weight: 600;
            .downTitleItem{
                height: 80rpx;
                display: flex;
                align-items: center;
            }
        }
        .downTitleActive{
            color: #D3AB58;
            border-bottom: 5rpx solid #D3AB58;
        }
        .downContent{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-flow: column nowrap;
            height: 550rpx;
            image{
                width: 130rpx;
                height: 130rpx;
            }
            .content{
                margin-top: 10rpx;
                color: gray;
                font-size: 28rpx;
                font-weight: 500;
            }
        }
    }
    .popularRecommendations{
        display: flex;
        align-items: center;
        flex-flow: column nowrap;
        margin-bottom: 210rpx;
        .title{
            font-size: 37rpx;
            font-weight: 600;
            margin: 40rpx 0;
        }
    }
    /* .footer{
        width: 100vw;
        height: 210rpx;
        padding: 15rpx 0 60rpx;
        box-sizing: border-box;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        background-color: #F9F9F9;
        z-index: 3;
        position: fixed;
        left: 0;
        top: 86vh;
        .playBar{
            width: 100%;
            height: 130rpx;
            padding: 0 30rpx;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            .radioAvatar{
                image{
                    width: 100rpx;
                    height: 100rpx;
                    min-width: 100rpx;
                    min-height: 100rpx;
                    border-radius: 10rpx;
                }
            }
            .radioContent{
                height: 75%;
                display: flex;
                flex-flow: column nowrap;
                justify-content: space-around;
                flex-grow: 1;
                padding: 0 20rpx;
                .radioContentHeader{
                    font-size: 30rpx;
                    font-weight: 600;
                }
                .radioContentFooter{
                    font-size: 28rpx;
                    color: #D3AB58;
                    background-clip: text;
                    // -webkit-text-fill-color: #e7dabe;
                    // -webkit-animation: slideShine 5s infinite;
                }
            }
            .broadcast{
                padding-right: 40rpx;
                image{
                    width: 65rpx;
                    height: 65rpx;
                    min-width: 65rpx;
                    min-height: 65rpx;
                }
            }
            .text{
                image{
                    width: 65rpx;
                    height: 65rpx;
                    min-width: 65rpx;
                    min-height: 65rpx;
                }
            }
        }
        .progressBar{
            height: 30rpx;
            width: 100vw;
            display: flex;
            align-items: center;
            .slider{
                width: 100%;
                margin: 0;
                vertical-align: center;
            }
            .wx-slider-thumb {
                display: none;
            }
        }
    } */
// 节目
    .programs{
        display: flex;
        align-items: center;
        margin: 20rpx 40rpx;
        .programLeft{
            width: 29%;
            image{
                height: 180rpx;
                width: 180rpx;
                min-height: 180rpx;
                min-width: 180rpx;
                border-radius: 15rpx;
            }
        }
        .programRight{
            width: 59%;
            margin-left: 30rpx;
            display: flex;
            flex-flow: column nowrap;
            .programTitle{
                display: flex;
                flex-flow: row wrap;
                align-items: center;
                #Title{
                    font-size: 24rpx;
                    color: black;
                    border: 3rpx solid black;
                    border-radius: 8rpx;
                    font-weight: 500;
                    padding: 0 6rpx;
                }
                #Name{
                    margin-left: 20rpx;
                    font-size: 30rpx;
                    font-weight: 600;
                }
            }
            .programContent{
                height: 80rpx;
                line-height: 40rpx;
                font-size: 23rpx;
                margin: 15rpx 0;
                color: grey;
                overflow: hidden;
                white-space: wrap;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
            }
            .programDetail{
                color: grey;
                font-size: 23rpx;
                #separate{
                    padding: 0 12rpx;
                }
            }
        }
        .goDown{
            width: 12%;
            display: flex;
            align-items: center;
            justify-content: center;
            image{
                width: 45rpx;
                height: 45rpx;
            }
        }
    }
}

.wx-slider-thumb {
    display: none;
}
</style>