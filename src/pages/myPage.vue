<template>
    <div class="myPage">
        <div class="backGround1">
            <image src="https://img0.baidu.com/it/u=2128130726,3373992613&fm=253&fmt=auto&app=138&f=JPG?w=800&h=456"></image>
        </div>
        <div class="backGround2">
            <div class="myPageContent">
                <div class="headSculpture">
                    <image :src=userInfo.avatarUrl></image>
                </div>
                <div class="infoDetail">
                    <div class="name">
                        <span>{{userInfo.nickname}}</span>
                        <div class="grade">
                            <span>LV{{level.level}}</span>
                        </div>
                    </div>
                    <div class="myInfo">
                        <div class="myFans myInfoItem">
                            <span>粉丝</span>
                            <span id="fansAndGifts">{{userInfo.follows}}</span>
                        </div>
                        <div class="myGifts myInfoItem">
                            <span>礼物</span>
                            <span id="fansAndGifts">0</span>
                        </div>
                    </div>
                    <div class="myIntroduce">
                        <span v-if="user.signature">{{user.signature}}</span>
                        <span v-else>暂无介绍</span>
                    </div>
                    <div class="myInfluence">
                        <span>我的影响力超过</span>
                        <span>{{user.effect}}%</span>
                        <span>的小企鹅</span>
                        <image src="../static//icon/myPage/右箭头.png"></image>
                    </div>
                    <div class="level">
                        <div class="grade">
                            <div class="theGrade userGrades">
                                <image src="../static//Picture_material/gift.png"></image>
                                <span>LV{{level.level}}</span>
                            </div>
                            <div class="progressBar">
                                <slider class="slider" min="0" max="100" :value="sliderProgress" activeColor="#D3AB58" block-size="12"></slider>
                            </div>
                            <div class="nextGrade userGrades">
                                <image src="../static//Picture_material/gift.png"></image>
                                <span>LV{{level.level+1}}</span>
                            </div>
                        </div>
                        <div class="strategy">
                            <span>攻略</span>
                            <image src="../static/icon/myPage/右箭头.png"></image>
                        </div>
                    </div>
                </div>
                <div class="functionalArea">
                    <div class="functionalItem" :class="haveWork?'lookActive':''" @click="lookWork()">
                        <span>作 品</span>
                    </div>
                    <div class="functionalItem" :class="{'lookActive':haveGift}" @click="lookGift()">
                        <span>礼物榜</span>
                    </div>
                </div>
                <div class="notWork notItem" v-if="haveWork">
                    <image src="../static/icon/myPage/在线播放.png"></image>
                    <div class="detail1">
                        <span>暂无作品</span>
                    </div>
                    <div class="detail2">
                        <span>去精选中看看其他主播在作品吧</span>
                    </div>
                </div>
                <div class="notGift notItem" v-if="haveGift">
                    <image src="../static/icon/myPage/礼物.png"></image>
                    <div class="detail1">
                        <span>暂无礼物</span>
                    </div>
                    <div class="detail2">
                        <span>去直播一下试试吧</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 底部播放器 -->
        <player></player>
        <!-- 顶部返回或转发 -->
        <div class="topRibbon">
            <div class="back" @click="backPath('../pages/home')">
                <image src="../static/icon/myPage/3.1 返回1.png"></image>
            </div>
            <div class="share">
                <image src="../static/icon/myPage/转发.png"></image>
            </div>
        </div>
    </div>
</template>

<script>
import player from "../pages/player/player";
import {userDetail} from "../service/home";

export default {
    name:'myPage',
    components:{player},
    data() {
        return {
            haveWork:true,
            haveGift:false,
            user:{
                signature:'',
                effect:'0',
            },
            userInfo:{
                // 用户信息默认初始数据
                uid:'',
                nickname:'未登录',
                level:'1',  //等级
                avatarUrl:'', //头像
                follows:'0', //关注
                followeds:'0', //粉丝
            },
            level:{}
        }
    },
    onLoad(){
        let userInfo = wx.getStorageSync('userInfo')
        this.level = wx.getStorageSync('level')
        console.log(this.level);
        if(userInfo) {
            this.userInfo = JSON.parse(userInfo)
            this._userDetail(this.userInfo.userId)
        }
    },
    methods:{
        changePath(path){
            wx.redirectTo({url:path})
        },
        backPath(path){
            wx.navigateBack({url:path})
        },
        lookWork(){
            this.haveWork=true
            this.haveGift=false
        },
        lookGift(){
            this.haveWork=false
            this.haveGift=true
        },
        _userDetail(id){
            userDetail(id).then(res => {
                console.log('这是用户详情',res);
                this.user.signature = res.profile.signature
                this.user.effect = (res.listenSongs/150).toFixed(2)
            })
        }
    },
    computed:{
        sliderProgress(){
            return Math.round(this.level.progress*100)
        }
    }
}
</script>

<style lang="less">
.myPage{
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    height: 100vh;
    width: 100vw;
    position: relative;
    .backGround1{
        height: 16%;
        width: 100%;
        background-color: antiquewhite;
        z-index: -666;
        image{
            width: 100%;
            height: 100%;
        }
    }
    .backGround2{
        background-color: whitesmoke;
        height: 84%;
        width: 100%;
        z-index: 1;
        position: relative;
        .myPageContent{
            height: 1280rpx;
            width: 100%;
            position: absolute;
            top: -75rpx;
            left: 0rpx;
            z-index: 1;
            display: flex;
            flex-flow: column nowrap;
            .headSculpture{
                height: 150rpx;
                width: 100%;
                padding-left: 40rpx;
                box-sizing: border-box;
                image{
                    height: 150rpx;
                    width: 150rpx;
                    border-radius: 50%;
                }
            }
            .infoDetail{
                height: 300rpx;
                width: 100%;
                padding: 5rpx 40rpx;
                font-size: 25rpx;
                font-weight: 500;
                box-sizing: border-box;
                .name{
                    display: inline-block;
                    height: 50rpx;
                    width: auto;
                    font-size: 36rpx;
                    font-weight: 500;
                    position: relative;
                    margin-top: 10rpx;
                    .grade{
                        width: 40rpx;
                        height: 16rpx;
                        font-size: 15rpx;
                        font-weight: 600;
                        position: absolute;
                        top: 14rpx;
                        right: -50rpx;
                        background-color: #D3AB58;
                        line-height: 16rpx;
                        text-align: center;
                    }
                }
                .myInfo{
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    margin-top: 10rpx;
                    .myInfoItem{
                        margin-right: 50rpx;
                        #fansAndGifts{
                            font-size: 33rpx;
                            font-weight: 600;
                            padding-left: 10rpx;
                        }
                    }
                }
                .myIntroduce{
                    margin-top: 10rpx;
                }
                .myInfluence{
                    margin-top: 25rpx;
                    display: flex;
                    align-items: center;
                    image{
                        padding-left: 10rpx;
                        width: 25rpx;
                        height: 25rpx;
                    }
                }
                .level{
                    display: flex;
                    justify-content: center;
                    align-items: flex-end;
                    // align-self: flex-end;
                    height: 60rpx;
                    width: 100%;
                    margin-top: 20rpx;
                    .grade{
                        width: 70%;
                        display: flex;
                        align-items: flex-end;
                        height: 55rpx;
                        width: 100%;
                        .userGrades{
                            display: flex;
                            flex-flow: column nowrap;
                            justify-content: center;
                            align-items: center;
                            font-size: 19rpx;
                            image{
                                width: 35rpx;
                                height: 35rpx;
                            }
                        }
                        .progressBar{
                            flex-grow: 1;
                            height: 50rpx;
                        }
                        .wx-slider-thumb {
                            display: none;
                        }
                    }
                    .strategy{
                        width: 30%;
                        padding-left: 30rpx;
                        image{
                            padding-left: 10rpx;
                            width: 20rpx;
                            height: 20rpx;
                        }
                    }
                }
            }
            .functionalArea{
                margin-top: 20rpx;
                padding: 5rpx 120rpx;
                box-sizing: border-box;
                height: 75rpx;
                width: 100%;
                display: flex;
                justify-content: space-around;
                align-items: center;
                font-size: 30rpx;
                font-weight: 600;
                .functionalItem{
                    text-align: center;
                    height: 75rpx;
                    line-height: 75rpx;
                }
                .lookActive{
                    height: 100%;
                    color: #D3AB58;
                    border-bottom: 5rpx solid #D3AB58;
                    font-size: 30rpx;
                    font-weight: 600;
                }
            }
            .notItem{
                // height: 735rpx;
                height: 550rpx;
                width: 100%;
                display: flex;
                flex-flow: column nowrap;
                justify-content: center;
                align-items: center;
                font-size: 23rpx;
                color: gray;
                background-color: white;
                image{
                    height: 150rpx;
                    width: 150rpx;
                    margin-bottom: 10rpx;
                }
            }
        }

    }
    .topRibbon{
        position: fixed;
        height: 100rpx;
        width: 100vw;
        padding: 0 40rpx;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        image{
            height: 40rpx;
            width: 40rpx;
        }
    }
}


.wx-slider-thumb {
    display: none;
}
</style>