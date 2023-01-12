<template>
    <div class="myCollection">
		<div class="notCollection" v-if="!collectRadioStations">
			<image mode="aspectFill" src="../static/icon/取消收藏.png"></image>
			<div class="text">
				<span>暂无收藏专辑</span>
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
            <div class="programs" v-for="item in myCollectionDT" :key="item.id">
                <div class="programLeft">
                    <image mode="aspectFill" :src="item.program.radio.picUrl"></image>
                </div>
                <div class="programRight">
                    <div class="programTitle">
                        <div class="boutique">
                            <span id="Title">{{item.program.radio.category}}</span>
                            <span id="Name">{{item.program.radio.name}}</span>
                        </div>
                    </div>
                    <div class="programContent">
                        <span>{{item.program.radio.desc}}</span>
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
import {getRecommendedStations} from "../service/djprogram";

export default {
    name:"myCollection",
    components:{player},
	data() {
		return {
			collectRadioStations: 'true',
            myCollectionDT:[],
		};
	},
    onLoad() {
        var that = this
        // this.subscribe('音乐推荐','910185106','1')
        // this.subscribe('904030771','1')
        // this.subscribe('903513756','1')
        wx.request({
            method: 'GET',
            url: 'https://autumnfish.cn/dj/sublist',
            data: {
                // "id":rid,
            },
            success: function (res) {
                console.log('电台订阅列表',res);
            },
            fail: function () {
                console.log("获取失败");
            }
        })
        
        this._getRecommendedStations()
        // wx.request({
        //     method: 'GET',
        //     url: 'https://autumnfish.cn/personalized/djprogram',
        //     data: {
        //         // "id":rid,
        //     },
        //     success: function (res) {
        //         console.log('推荐电台列表',res);
        //         that.myCollectionDT = res.data.result
        //         console.log('myCollectionDT...',that.myCollectionDT);
        //     },
        //     fail: function () {
        //         console.log("获取失败");
        //     }
        // })
        wx.request({
            method: 'GET',
            url: 'https://autumnfish.cn/search',
            data: {
                // "id":rid,
                "keywords":"暴雨",
            },
            success: function (res) {
                console.log('搜索结果',res);
                // that.myCollectionDT = res.data.result
                // console.log('myCollectionDT...',that.myCollectionDT);
            },
            fail: function () {
                console.log("获取失败111");
            }
        })
    },
    methods: {
        /* subscribe(keywords,type,code){
            var rid = null
            wx.request({
                method: 'GET',
                url: 'https://autumnfish.cn/search',
                data: {
                    "keywords":keywords,
                    "type":type
                },
                success: function (res) {
                    console.log('电台订阅成功！',res);
                    rid = res
                },
                fail: function () {
                    console.log("订阅失败");
                }
            })
            wx.request({
                method: 'GET',
                url: 'https://autumnfish.cn/dj/sub',
                data: {
                    // "openid": "aaaaaa"
                    // "id":"910185106",
                    "rid":rid,
                    "t":code
                },
                success: function (res) {
                    console.log('电台订阅成功！',res);
                },
                fail: function () {
                    console.log("订阅失败");
                }
            })
        }, */
        /* subscribe(rid,code){
            wx.request({
                method: 'GET',
                url: 'https://autumnfish.cn/dj/sub',
                data: {
                    "rid":rid,
                    "t":code
                },
                success: function (res) {
                    console.log('电台订阅成功！',res);
                },
                fail: function () {
                    console.log("订阅失败");
                }
            })
        }, */
        _getRecommendedStations(){
            getRecommendedStations().then(res=>{
                console.log('推荐电台列表',res);
                this.myCollectionDT = res.result
                console.log('myCollectionDT...',this.myCollectionDT);
            })
        }
    },
}
</script>

<style lang="less">
.myCollection{
	height: 100vh;
	width: 100vw;
	position: relative;
    display: flex;
    justify-content: center;
	.notCollection{
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