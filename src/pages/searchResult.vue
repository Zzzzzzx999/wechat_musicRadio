<template>
    <div class="searchResult">
        <div class="top">
            <div class="searchInput">
                <input type="text" v-model="searchValue" @confirm="beginSearch" placeholder="搜索节目/音乐/主播/广播">
                <image v-if="searchValue!=''" src="../static//icon/取消.png" @click="searchValue=''"></image>
            </div>
            <div class="cancel" @click="changePath('./home')">取消</div>
        </div>
        <div class="content">
            <div class="total">
                <div class="programs">
                    <div class="programLeft">
                        <image mode="aspectFill" src="https://t7.baidu.com/it/u=2818467960,4233940597&fm=74&app=80&size=f256,256&n=0&f=JPEG&fmt=auto?sec=1658336400&t=d8297d3f988e0ab54e32dd257f08926d"></image>
                    </div>
                    <div class="programRight">
                        <div class="programTitle">
                            <div class="boutique">
                                <span id="titleName">爱情公寓</span>
                            </div>
                        </div>
                        <div class="programContent">
                            <span>共4部</span>
                        </div>
                        <div class="programDetail">
                            <span>你的月亮我的心FM</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="totalContent">
                <div class="contentType">
                    <div class="program typeItem" :class="{'typeActive':contentType.program}" @click="changeProgramType">
                        <span>节目</span>
                    </div>
                    <div class="album typeItem" :class="{'typeActive':contentType.album}" @click="changeAlbumType">
                        <span>专辑</span>
                    </div>
                    <div class="anchor typeItem" :class="{'typeActive':contentType.anchor}" @click="changeAnchorType">
                        <span>主播</span>
                    </div>
                    <div class="square typeItem" :class="{'typeActive':contentType.square}" @click="changeSquareType">
                        <span>广场</span>
                    </div>
                </div>
                <div class="sort">
                    <image src="../static/icon/沙漏.png"></image>
                </div>
            </div>
            <div class="funtionalAreas" v-if="contentType.album">
                <div class="programs">
                    <div class="programLeft">
                        <image mode="aspectFill" src="https://t13.baidu.com/it/u=415708262,3952162112&fm=58&app=83&size=w931&n=0&f=JPEG&fmt=auto?sec=1658336400&t=7407e24cf33fd77eeed22d041fe5ffa8o"></image>
                    </div>
                    <div class="programRight">
                        <div class="programTitle">
                            <div class="boutique">
                                <span id="Title">精品</span>
                                <span id="titleName">爱情公寓</span>
                                <span id="Name">第3季</span>
                            </div>
                        </div>
                        <div class="programContent">
                            <span>已完结:24集全《爱情公寓3》是都市爱情......</span>
                        </div>
                        <div class="programDetail">
                            <span>9.7分</span>
                            <span id="separate">|</span>
                            <span>你的月亮我的心FM</span>
                        </div>
                    </div>
                </div>
                <div class="programs">
                    <div class="programLeft">
                        <image mode="aspectFill" src="https://t7.baidu.com/it/u=2818467960,4233940597&fm=74&app=80&size=f256,256&n=0&f=JPEG&fmt=auto?sec=1658336400&t=d8297d3f988e0ab54e32dd257f08926d"></image>
                    </div>
                    <div class="programRight">
                        <div class="programTitle">
                            <div class="boutique">
                                <span id="Title">精品</span>
                                <span id="titleName">爱情公寓</span>
                                <span id="Name">第1季</span>
                            </div>
                        </div>
                        <div class="programContent">
                            <span>已完结:20集全《爱情公寓 第一季》是由韦......</span>
                        </div>
                        <div class="programDetail">
                            <span>9.6分</span>
                            <span id="separate">|</span>
                            <span>你的月亮我的心FM</span>
                        </div>
                    </div>
                </div>
                <div class="programs">
                    <div class="programLeft">
                        <image mode="aspectFill" src="https://t15.baidu.com/it/u=4050684757,4196857353&fm=58&app=83&size=w931&n=0&f=JPEG&fmt=auto?sec=1658336400&t=882029558f805c8670d32c0f83af2a45"></image>
                    </div>
                    <div class="programRight">
                        <div class="programTitle">
                            <div class="boutique">
                                <span id="Title">精品</span>
                                <span id="titleName">爱情公寓</span>
                                <span id="Name">第2季</span>
                            </div>
                        </div>
                        <div class="programContent">
                            <span>已完结:20集全《爱情公寓 第二季》，是都市爱情......</span>
                        </div>
                        <div class="programDetail">
                            <span>9.5分</span>
                            <span id="separate">|</span>
                            <span>你的月亮我的心FM</span>
                        </div>
                    </div>
                </div>
                <div class="programs">
                    <div class="programLeft">
                        <image mode="aspectFill" src="https://fm-image-1251316161.file.myqcloud.com/fm/photo/album/rmid_album_240/w/u/002wJLA52Cr0wu.jpg?time=1589879312"></image>
                    </div>
                    <div class="programRight">
                        <div class="programTitle">
                            <div class="boutique">
                                <span id="titleName">爱情公寓</span>
                                <span id="Name">(4部合集)</span>
                            </div>
                        </div>
                        <div class="programContent">
                            <span>已完结:88集全 欢迎大家来到企鹅FM收听...</span>
                        </div>
                        <div class="programDetail">
                            <span>9.6分</span>
                            <span id="separate">|</span>
                            <span>金长美</span>
                        </div>
                    </div>
                </div>
                <div class="programs">
                    <div class="programLeft">
                        <image mode="aspectFill" src="https://gimg4.baidu.com/poster/src=http%3A%2F%2Ft13.baidu.com%2Fit%2Fu%3D46224441%2C3969877682%26fm%3D225%26app%3D113%26f%3DJPEG%3Fw%3D2847%26h%3D1780%26s%3D88A7DF14787B099EE8AC788D0300E0C2&refer=http%3A%2F%2Fwww.baidu.com&app=2004&size=f242,182&n=0&g=0n&q=100?sec=1658298567&t=1972d4bfd0c36d32022912eb0ba98d2e"></image>
                    </div>
                    <div class="programRight">
                        <div class="programTitle">
                            <div class="boutique">
                                <span id="titleName">爱情公寓</span>
                                <span id="Name2">鬼畜集合</span>
                            </div>
                        </div>
                        <div class="programContent">
                            <span>更新至:有毒！你有见过这么魔性的爱情公寓吗......</span>
                        </div>
                        <div class="programDetail">
                            <span>8.9分</span>
                            <span id="separate">|</span>
                            <span>精神污染</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="footer" @click="goPlayer()">
            <div class="playBar">
                <div class="radioAvatar">
                    <image mode="aspectFill" src="https://img0.baidu.com/it/u=1303479120,3193737549&fm=253&fmt=auto&app=138&f=JPEG?w=689&h=500"></image>
                </div>
                <div class="radioContent">
                    <div class="radioContentHeader">
                        <span>62从婴儿囚犯到皇帝</span>
                    </div>
                    <div class="radioContentFooter">
                        <span>左右滑动切换节目</span>
                    </div>
                </div>
                <div class="broadcast">
                    <image src="../static/icon/24gf-pauseCircle.png"></image>
                </div>
                <div class="text">
                    <image src="../static/icon/文件.png"></image>
                </div>
            </div>
            <div class="progressBar" @click.stop>
                <slider class="slider" min="0" max="100" value="30" activeColor="#D3AB58" block-size="12"></slider>
            </div>
        </div> -->
        <player></player>
    </div>
</template>

<script>
import player from "../pages/player/player";
export default {
    name:'searchResult',
    components:{player},
    data() {
        return {
            searchValue: '',
            contentType:{
                program:false,
                album:true,
                anchor:false,
                square:false
            }
        };
    },
    onShow(){
        if(wx.getStorageSync('inputValue')){
            this.searchValue = wx.getStorageSync('inputValue')
            wx.setNavigationBarTitle({title:this.searchValue})
            wx.removeStorageSync('inputValue')
        }
    },
    onLoad(query){
        if (query.keyword) {
            console.log(query.keyword);
            wx.setNavigationBarTitle({title:query.keyword})
            this.searchValue = query.keyword
        }
    },
    methods: {
        changePath(path){
            wx.redirectTo({url:path})
        },
        changeType(){
            for(let a in this.contentType){
                this.contentType[a] = false
            }
        },
        changeProgramType(){
            this.changeType()
            this.contentType.program=true
        },
        changeAlbumType(){
            this.changeType()
            this.contentType.album=true
        },
        changeAnchorType(){
            this.changeType()
            this.contentType.anchor=true
        },
        changeSquareType(){
            this.changeType()
            this.contentType.square=true
        },
        goPlayer(){
            // const backgroundAudioManager = wx.getBackgroundAudioManager()
            // backgroundAudioManager.title =  '西汉盛世的启示'
            // backgroundAudioManager.singer = '侯杨方'
            // backgroundAudioManager.src = 'http://music.163.com/song/media/outer/url?id=447925558.mp3'
            // backgroundAudioManager.coverImgUrl = 'https://i0.hdslb.com/bfs/music/3e0cfc04de84ce6176c18bb92394a1b5efa57978.jpg@370w_370h.webp'
            wx.navigateTo({url:'../pages/playPage'})
        }
    }
}
</script>

<style lang="less">
body{
    background-color: #f9f9f9;
}
.searchResult{
    display: flex;
    flex-flow: column nowrap;
    position: relative;
    .top{
        height: 60rpx;
        display: flex;
        align-items: center;
        margin:20rpx 0 20rpx 40rpx;
        .searchInput{
            height: 100%;
            flex-grow: 1;
            display: flex;
            align-items: center;
            padding: 0 30rpx;
            background-color: #e4e3e3;
            border-radius: 30rpx;
            input{
                flex: 1;
                height: 100%;
                font-size: 27rpx;
                font-weight: 600;
            }
            image{
                height: 40rpx;
                width: 40rpx;
                min-width: 40rpx;
                min-height: 40rpx;
            }
        }
        .cancel{
            padding: 0 30rpx;
            color: gray;
            font-size: 32rpx;
            font-weight: 500;
            vertical-align: center;
            line-height: 60rpx;
        }
    }
    .content{
        display: flex;
        flex-flow: column nowrap;
        .total{
            display: flex;
            flex-flow: column nowrap;
            background-color: #f8f8f8;
            
        }
        .totalContent{
            height: 75rpx;
            background-color: #f4f4f4;
            display: flex;
            align-items: center;
            font-size: 30rpx;
            font-weight: 500;
            .contentType{
                flex-grow: 1;
                height: 75rpx;
                display: flex;
                align-items: center;
                justify-content: space-evenly;
                margin-left: 100rpx;
                .typeItem{
                    height: 95%;
                    display: flex;
                    align-items: center;
                }
                .typeActive{
                    color: #D3AB58;
                    border-bottom: 5rpx solid #D3AB58;
                }
            }
            .sort{
                height: 95%;
                width: 100rpx;
                display: flex;
                align-items: center;
                image{
                    width: 42rpx;
                    height: 42rpx;
                    min-width: 42rpx;
                    min-height: 42rpx;
                }
            }
        }
        .funtionalAreas{
            background-color: #f9f9f9;
            display: flex;
            flex-flow: column nowrap;
            margin: 10rpx 0 220rpx;
        }
        .programs{
            display: flex;
            align-items: center;
            margin: 10rpx 40rpx;
            .programLeft{
                width: 29%;
                image{
                    height: 160rpx;
                    width: 160rpx;
                    border-radius: 15rpx;
                }
            }
            .programRight{
                width: 71%;
                margin-left: 10rpx;
                display: flex;
                flex-flow: column nowrap;
                .programTitle{
                    display: flex;
                    flex-flow: row wrap;
                    align-items: center;
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
                        font-weight: 500;
                        padding: 0 6rpx;
                        margin-right: 15rpx;
                    }
                    #Name{
                        margin-left: 15rpx;
                        font-size: 30rpx;
                        font-weight: 500;
                    }
                    #Name2{
                        font-size: 30rpx;
                        font-weight: 500;
                    }
                    #titleName{
                        font-size: 30rpx;
                        color: #D3AB58;
                    }
                    .empty{
                        margin-left: 50rpx;
                        color: #D3AB58;
                        border: 1rpx solid #a78034;
                        border-radius: 10rpx;
                        padding: 5rpx 10rpx;
                    }
                }
                .programContent{
                    height: 40rpx;
                    line-height: 40rpx;
                    font-size: 25rpx;
                    margin: 15rpx 0;
                    color: grey;
                    overflow: hidden;
                    white-space: wrap;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                }
                .programDetail{
                    color: grey;
                    font-size: 25rpx;
                    #separate{
                        padding: 0 12rpx;
                    }
                }
            }
            .programsHeader{
                margin-bottom: 40rpx;
            }
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
}
.wx-slider-thumb {
    display: none;
}
</style>