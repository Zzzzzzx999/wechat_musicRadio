<template>
    <div class="myTodayBest">
		<div class="notTodayBest" v-if="!collectRadioStations">
			<image mode="aspectFill" src="../static/icon/取消收藏.png"></image>
			<div class="text">
				<span>暂无今日推荐电台</span>
			</div>
			<div class="more">
				<span>去看看更多精彩内容</span>
			</div>
		</div>
        <div class="recentPrograms" v-if="collectRadioStations">
            <div class="programs">
                <div class="programLeft">
                    <image mode="aspectFill" src="https://img2.baidu.com/it/u=1719968675,2457840328&fm=253&fmt=auto&app=138&f=JPEG?w=998&h=500"></image>
                </div>
                <div class="programRight programsHeader" style="justify-content: center;">
                    <div class="programTitle">
                        <span>订阅的节目</span>
                        <div class="empty" @click="collectRadioStations=false">
                            <span>清空</span>
                        </div>
                    </div>
                    <div class="programContent">
                        <span>共4集</span>
                    </div>
                </div>
            </div>
            <div class="programs" v-for="item in myTodayBestDT" :key="item.id" @tap="goPlayPage(item.id)">
                <div class="programLeft">
                    <image mode="aspectFill" :src="item.picUrl"></image>
                </div>
                <div class="programRight">
                    <div class="programTitle">
                        <div class="boutique">
                            <span id="Title">{{item.category}}</span>
                            <span id="Name">{{item.name}}</span>
                        </div>
                    </div>
                    <div class="programContent">
                        <span>{{item.desc}}</span>
                    </div>
                    <!-- <div class="programDetail">
                        <span>侯杨方</span>
                    </div> -->
                </div>
            </div>
        </div>
        <player></player>
    </div>
</template>

<script>
import player from "../pages/player/player";
import {getPersonalizeRecommend,getDetail,getProgram} from "../service/djprogram";
import {getSongUrl} from "../service/songs";
const app = getApp()

export default {
    name:"today-Best",
    components:{player},
	data() {
		return {
			collectRadioStations: 'true',
            myTodayBestDT:[],
		};
	},
    onLoad() {
        var rid = '792734685'
        this._getPersonalizeRecommend()
        // this._getDetail(rid)
        // this._getProgramDetail(rid)
    },
    methods: {
        _getPersonalizeRecommend(){
            getPersonalizeRecommend().then(res=>{
                console.log('电台个性推荐电台列表',res);
                this.myTodayBestDT = res.data
                console.log('getPersonalizeRecommend...',this.myTodayBestDT);
            })
        },
        /* _getDetail(rid){
            console.log('123123123',rid);
            getProgram(rid).then(res=>{
                console.log('节目详情',res);
                getSongUrl(res.programs[1].mainSong.id).then(res=>{
                    console.log('音乐详情',res);
                })
            })
        }, */
        goPlayPage(rid){
            console.log(rid);
            app.goPlayPage(rid)
            app.globalData.id=rid
            // console.log(app);
        },
    },
}
</script>

<style lang="less">
.myTodayBest{
	height: 100vh;
	width: 100vw;
	position: relative;
    display: flex;
    justify-content: center;
	.notTodayBest{
		height: 250rpx;
		width: 250rpx;
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		justify-content: space-between;
		font-size: 26rpx;
        margin-top: 500rpx;
		image{
			height: 175rpx;
			width: 175rpx;
		}
		.text{
			color: gray;
		}
		.more{
			color: #D3AB58;
		}
	}
    .recentPrograms{
        height: 85vh;
        // margin: 40rpx 0;
        overflow: scroll;
        .programs{
            display: flex;
            align-items: center;
            margin: 20rpx 40rpx;
            .programLeft{
                width: 29%;
                image{
                    height: 180rpx;
                    width: 180rpx;
                    border-radius: 15rpx;
                }
            }
            .programRight{
                height: 180rpx;
                width: 71%;
                margin-left: 30rpx;
                display: flex;
                flex-flow: column nowrap;
                .programTitle{
                    display: flex;
                    flex-flow: row wrap;
                    align-items: flex-start;
                    .boutique{
                        font-size: 28rpx;
                        color: black;
                        font-weight: 300;
                    }
                    .programName{
                        margin-left: 20rpx;
                        font-size: 35rpx;
                        font-weight: 500;
                    }
                    #Title{
                        font-size: 24rpx;
                        color: black;
                        border: 3rpx solid black;
                        border-radius: 8rpx;
                        font-weight: 300;
                        padding: 0 6rpx;
                    }
                    #Name{
                        margin-left: 20rpx;
                        font-size: 30rpx;
                        font-weight: 600;
                    }
                    .empty{
                        margin-left: 100rpx;
                        color: #D3AB58;
                        border: 1rpx solid #a78034;
                        border-radius: 10rpx;
                        padding: 5rpx 10rpx;
                        font-size: 28rpx;
                    }
                }
                .programContent{
                    font-size: 25rpx;
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
                    font-size: 25rpx;
                }
            }
            .programsHeader{
                margin-bottom: 40rpx;
            }
        }
    }
}

.wx-slider-thumb {
    display: none;
}
</style>