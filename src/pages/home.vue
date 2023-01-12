<template>
    <div class="home">
        <div class="top">
            <div class="search" @click="changePath('./search')">
                <image lazy-load src="../static/icon/search.png"></image>
            </div>
            <div class="regions">
                <!-- <span :class="regions.boutique?'select':''" @click="regionsChange">精品</span>
                <span :class="regions.classification?'select':''" @click="regionsChange">分类</span>
                <span :class="regions.my?'select':''" @click="regionsChange">我的</span> -->
                <span v-for="r in regions" :key="r.id" :class="r.select?'select':''" @click="regionsChange(r.id)">
                    {{r.title}}
                </span>
            </div>
            <div class="history">
                <image lazy-load src="../static/icon/countdown.png" @click="changePath('./recentlyListened')"></image>
            </div>
        </div>
        <div class="content">
            <boutique v-if="regions[0].select" :userInfo=userInfo :level=level></boutique>
            <classification v-else-if="regions[1].select" :userInfo=userInfo :level=level></classification>
            <my v-else :userInfo=userInfo :level=level></my>
        </div>
        <player></player>
    </div>
</template>

<script>
import player from "../pages/player/player";
import {getLevel} from "../service/home";
import {my} from '../components/home-my.vue'
import {boutique} from '../components/home-boutique.vue'
import {classification} from '../components/home-classification.vue'

export default {
    name:'home',
    components:{my,boutique,classification,player},
    data() {
        return {
            loginWay:'',
            works:'0', //作品
            regions:[
                {id:1,title:'精品',select:false},
                {id:2,title:'分类',select:false},
                {id:3,title:'我的',select:true},
            ],
            userInfo:{
                // 用户信息默认初始数据
                uid:'',
                nickname:'未登录',
                level:'1',  //等级
                avatarUrl:'', //头像
                follows:'0', //关注
                followeds:'0', //粉丝
            },
            userDetail:{
                
            },
            level:{}
        }
    },
    onLoad(query){
        console.log('1',query);
        if (query) {
            this.loginWay=wx.getStorageSync('loginWay')
        }
        let userInfo = wx.getStorageSync('userInfo')
        if(userInfo) {
            this.userInfo = JSON.parse(userInfo)
            console.log(this.userInfo,'userInfo');
            this.uid = this.userInfo.userId
            this._getLevel()
        }
    },
    methods: {
        regionsChange(id){
            for (let index = 0; index < this.regions.length; index++) {
                this.regions[index].select = false
            }
            for (let index = 0; index < this.regions.length; index++) {
                if (this.regions[index].id == id) {
                    this.regions[index].select = true
                }
            }
        },
        changePath(path){
            wx.navigateTo({url:path})
        },
        _getLevel() {
            getLevel().then(res => {
                this.level = res.data
                wx.setStorage({
                    data: this.level,
                    key: 'level',
                })
            })
        },
    },
}
</script>

<style lang="less">
.home{
    background-color: #F9F9F9;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-flow: column nowrap;
    .top{
        height: 75rpx;
        width: 100vw;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        .search{
            padding-left: 30rpx;
            height: 40rpx;
            width: 40rpx;
            image{
                height: 100%;
                width: 100%;
                min-height: 40rpx;
                min-width: 40rpx;
            }
        }
        .regions{
            height: 100%;
            flex-grow: 1;
            padding: 0 100rpx;
            display: flex;
            justify-content: space-around;
            align-items: center;
            font-size: 32rpx;
            font-weight: 500;
            color: rgba(77, 76, 76, 0.705);
            .select{
                color: black;
            }
        }
        .history{
            padding-right: 30rpx;
            height: 40rpx;
            width: 40rpx;
            image{
                height: 100%;
                width: 100%;
                min-height: 40rpx;
                min-width: 40rpx;
            }
        }
    }
    
    .wx-slider-thumb {
        display: none;
    }
}
/* .content{
    flex: 1;
    .myInfo{
        padding: 0 30rpx;   
        height: 250rpx;
        width: 100vw;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        .headSculpture{
            width: 25%;
            height: 150rpx;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .userHeadSculpture{
                position: relative;
                image{
                    height: 125rpx;
                    width: 125rpx;
                    border-radius: 50%;
                    z-index: 1;
                }
                #wechat{
                    height: 33rpx;
                    width: 33rpx;
                    position: absolute;
                    bottom: 5rpx;
                    right: 0rpx;
                    z-index: 2;
                }
            }
        }
        .infoDetail{
            width: 75%;
            height: 150rpx;
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-between;
            .infoDetailTop{
                height: 45%;
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .name{
                    height: 50rpx;
                    font-size: 35rpx;
                    font-weight: 400;
                    position: relative;
                    .grade{
                        width: 40rpx;
                        height: 16rpx;
                        font-size: 15rpx;
                        font-weight: 600;
                        position: absolute;
                        top: 10rpx;
                        right: -50rpx;
                        background-color: #D3AB58;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                }
                .recording{
                    width: 125rpx;
                    height: 40rpx;
                    border: 3rpx solid #D3AB58;
                    border-radius: 70rpx;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    image{
                        height: 30rpx;
                        width: 30rpx;
                        padding-right: 10rpx;
                    }
                    span{
                        color: #D3AB58;
                        font-size: 25rpx;
                    }
                }
            }
            .infoDetailBottom{
                height: 55%;
                display: flex;
                justify-content: space-between;
                .bottomItem{
                    width: 33%;
                    display: flex;
                    flex-flow: column nowrap;;
                    font-weight: 600;
                    font-size: 30rpx;
                    #infoType{
                        font-size: 24rpx;
                        font-weight: 400;
                        color: gray;
                    }
                }
            }
        }
    }
    .functionalDomain{
        padding: 0 30rpx;
        box-sizing: border-box;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        .areasMy{
            display: flex;
            flex-flow: column nowrap;
            width: 100%;
            border-bottom: 1rpx solid #f0f0f0;
            padding-bottom: 35rpx;
        }
        .areasCentre{
            display: flex;
            flex-flow: column nowrap;
            width: 100%;
            border-bottom: 1rpx solid #f0f0f0;
            padding: 35rpx 0;
        }
        .areasListen{
            display: flex;
            flex-flow: column nowrap;
            width: 100%;
            padding: 35rpx 0;
        }
        .functionalItem{
            height: 75rpx;
            width: 100%;
            display: flex;
            align-items: center;
            .functionalItemLeft{
                width: 50%;
                height: 100%;
                display: flex;
                align-items: center;
                image{
                    width: 40rpx;
                    height: 40rpx;
                    min-width: 40rpx;
                    min-height: 40rpx;
                    margin-right: 36rpx;
                }
                span{
                    font-size: 30rpx;
                }
            }
            .functionalItemRight{
                width: 50%;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                span{
                    color: #c0bfbf;
                    font-size: 27rpx;
                    padding: 0 10rpx;
                }
                .rightArrow{
                    width: 25rpx;
                    height: 25rpx;
                }
            }
        }
    }
} */
</style>