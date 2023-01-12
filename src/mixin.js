import {getSongUrl,getSongLyric,getSonglist,getSongDetail,activeList} from "./service/songs";
export const audio={
    data() {
        return {
            playClick:true,     //是否播放
            backgroundAudioManager: '',  //播放器
            speedNow:1,     //当前倍速
            audio:{
                src:'http://m7.music.126.net/20230111231702/116fba259b39ecea7b63a54bfe2d8385/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/2949327100/d639/cdf0/4d82/4c6377d52938fe3ffe5071a7ac202ece.mp3',
            },


            //播放进度控制
            progress: 0,
            ct: '00:00',
            dt: '00:00',
        }
    },
    onLoad(query) {
        if (query) {
            console.log('query',query);
            this._getSongUrl(query.id)
        }
        if (!this.backgroundAudioManager) {
            this.backgroundAudioManager = wx.getBackgroundAudioManager();
        }
        this.backgroundAudioManager.title = '此时此刻'
        this.backgroundAudioManager.autoplay = true
        // this.backgroundAudioManager.epname = '此时此刻'
        // this.backgroundAudioManager.singer = '许巍'
        this.backgroundAudioManager.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
        // 设置了 src 之后会自动播放
        // this.backgroundAudioManager.src = 'https://www.cambridgeenglish.org/images/506891-a2-key-for-schools-listening-sample-test.mp3'
        this.backgroundAudioManager.src = this.audio.src
        setTimeout(() => {
            this.backgroundAudioManager.onPlay((res) => {
                console.log('onplay', res)
            })
        }, 100);
    },
    onUnload() {
        if (this.backgroundAudioManager) {
            // this.backgroundAudioManager.destroy()
        }
    },
    methods: {
        _getSongUrl(id){
            getSongUrl(id).then(res=>{
                console.log('音乐详情',res);
                this.audio.src = res.data[0].url
            })
        },
        btnPlayAudio() {
            if (this.playClick) {
                this.backgroundAudioManager.play() // 播放
            }else{
                this.backgroundAudioManager.pause() // 暂停
            }
        },
        changePlayClick(){
            this.playClick = !this.playClick
            console.log('aa',this.backgroundAudioManager);
            if (this.playClick) {
                this.backgroundAudioManager.play() // 播放
            }else{
                this.backgroundAudioManager.pause() // 暂停
            }
        },
        // 调节倍速
        speedAudio(dataNow){
            this.speedNow = dataNow
            this.backgroundAudioManager.playbackRate = this.speedNow
        },
    }
}

const app = getApp()
import moment from 'moment'
let time = null
export const abc = {
    data() {
        return {
            h: '',
            pid: '',
            //播放列表
            playList: [],
            isShow: false,
            songInfo: {},
            index:'',
            isPlay: true,
            musicSrc: '',
            //播放进度控制
            progress: 0,
            ct: '00:00',
            dt: '00:00',
            // 播放进度跳转
            width: 0,
            offsetLeft: 0,
            // 循环播放
            circleType: 'icon-xunhuan', 
            //歌词
            lyric: [],
            marginTop: 0,
            currentIndex: 0,
        }
    },
    onLoad(option) {
        console.log('option',option);
        this.h = wx.getSystemInfoSync().statusBarHeight
        this.pid = option.pid || ''
        if(option.active == '1') {
            this.circleType = 'icon-B'
        }
        if(app.globalData.isSame) {
            if(app.globalData.backgroundAudioManager.src && app.globalData.backgroundAudioManager.title) {
                getSongDetail(option.id).then(res => {
                    this.dt = moment(res.songs[0].dt).format('mm:ss')
                    this.songInfo = res.songs[0]
                    this.playList = app.globalData.playList
                })
                app.globalData.backgroundAudioManager.play()
            } else {
                getSongDetail(option.id).then(res => {
                    this.dt = moment(res.songs[0].dt).format('mm:ss')
                    this.songInfo = res.songs[0]
                    this.playList = app.globalData.playList
                    this._getUrl(option.id)
                })
            }
        } else {
            app.globalData.backgroundAudioManager = wx.getBackgroundAudioManager()
            getSongDetail(option.id).then(res => {
                console.log('@@@@@@@444',res);
                this.dt = moment(res.songs[0].dt).format('mm:ss')
                // 转换成秒传回App
                const s = 0
                // console.log('时间戳转化为秒：',moment(res.songs[0].dt).diff(s,'seconds'));
                app.globalData.songTimeSeconds = moment(res.songs[0].dt).diff(s,'seconds')
                this.songInfo = res.songs[0]
                this.playList = app.globalData.playList
                this._getUrl(option.id)
            })
        }
        // 获取歌词
        this._getSongLyric(option.id)
        app.globalData.backgroundAudioManager.onPrev(() => {
            this.changeSong('pre')
        })
        app.globalData.backgroundAudioManager.onNext(() => {
            this.changeSong('next')
        })
        app.globalData.backgroundAudioManager.onEnded(() => {
            this.circlePlay()
        })
        app.globalData.backgroundAudioManager.onPlay(()=>{
            this.isPlay =true
            app.globalData.backgroundAudioManager.play()
        })
        app.globalData.backgroundAudioManager.onPause(()=>{
            this.isPlay = false
            app.globalData.backgroundAudioManager.pause()
        })
        app.globalData.backgroundAudioManager.onStop(()=>{
            this.isPlay = false
            app.globalData.backgroundAudioManager.stop()
            app.globalData.backgroundAudioManager.currentTime = 0
            app.globalData.backgroundAudioManager.duration = 0
        })
        //播放音乐
        app.globalData.backgroundAudioManager.onTimeUpdate((e)=> {
            let self = this
            let ct = moment(app.globalData.backgroundAudioManager.currentTime * 1000).format('mm:ss')
            let index = 1
            if(self.currentIndex >= index) {
                self.marginTop = (self.currentIndex - index) * 28
            }
            if(ct !== self.ct) {
                let progress = ((app.globalData.backgroundAudioManager.currentTime) / (self.songInfo.dt/1000))*100
                self.ct = ct
                this.progress = progress
                if(self.lyric.length !== 0 && self.songInfo.fee !== 1) {
                    self.lyricProgressUpdate()
                }
            }
        })
    },
    methods: {
        backTo() {
            wx.navigateBack()
        },
        //获取歌词
        _getSongLyric(id) {
            getSongLyric(id).then(res => {
                if(res.lrc && res.lrc.lyric) {
                    this.lyric = this.sliceNull(this.parseLyric(res.lrc.lyric))
                }
            })
        },
        //歌词处理
        parseLyric(text) {
            let result = []
            let lines = text.split('\n')
            let pattern = /\[\d{2}:\d{2}.\d+\]/g
            if(!pattern.test(lines[0])) {
                lines = lines.slice(1);
            }
            lines[lines.length - 1].length === 0 && lines.pop();
            lines.forEach((ele, index, arr) => {
                var time = ele.match(pattern)
                var value = ele.replace(pattern, '');
                time.forEach((e,i,a) => {
                    var t = e.slice(1, -1).split(':');
                    result.push([parseInt(t[0], 10) * 60 + parseFloat(t[1]), value]);
                })
            })
            result.sort(function (a, b) {
                return a[0] - b[0];
            });
            return result;
        },
        sliceNull(lrc) {
            var result = []
            for (var i = 0; i < lrc.length; i++) {
                if (lrc[i][1] == "") {
                } else {
                    result.push(lrc[i]);
                }
            }
            return result
        },
        //歌词进度更新处理
        lyricProgressUpdate() {
            let self = this
            if(self.currentIndex != self.lyric.length - 1) {
                for(let j = self.currentIndex; j< self.lyric.length - 1; j++) {
                    if(self.currentIndex == self.lyric.length - 2) {
                        if (parseFloat(app.globalData.backgroundAudioManager.currentTime + 1) > parseFloat(self.lyric[self.lyric.length - 1][0])) {
                            self.currentIndex = self.lyric.length - 1
                            return;
                        }
                    } else {
                        if (parseFloat(app.globalData.backgroundAudioManager.currentTime + 1) >= parseFloat(self.lyric[j][0]) && parseFloat(app.globalData.backgroundAudioManager.currentTime + 1) < parseFloat(self.lyric[j + 1][0])) {
                            self.currentIndex = j
                            return;
                        }
                    }
                }
            }
        },
        _getUrl(id) {
            getSongUrl(id).then(res => {
                const musicSrc = res.data[0].url
                if(musicSrc) {
                    this.musicSrc = musicSrc
                    app.globalData.backgroundAudioManager = wx.getBackgroundAudioManager()
                    // app.globalData.backgroundAudioManager = wx.createInnerAudioContext()
                    app.globalData.backgroundAudioManager.autoplay = true
                    app.globalData.backgroundAudioManager.coverImgUrl = this.songInfo.al.picUrl
                    app.globalData.backgroundAudioManager.title = this.songInfo.name
                    app.globalData.backgroundAudioManager.src = this.musicSrc
                    app.globalData.backgroundAudioManager.play()
                } else {
                    this.musicSrc = ''
                    time = setTimeout(() => {
                        this.changeSong('next')
                    }, 3000)
                }
            })
        },
        circlePlay() {
            if(this.circleType == 'icon-xunhuan' || this.circleType == 'icon-B') {
                this.changeSong('next')
            } else {
                app.globalData.backgroundAudioManager.src = this.musicSrc
                app.globalData.backgroundAudioManager.title = this.songInfo.name
            }
        },
        play() {
            this.isPlay = !this.isPlay
            this.musicControl(this.isPlay)
        },
        musicControl(isPlay) {
            if(isPlay) {
                if(app.globalData.backgroundAudioManager.src) {
                    app.globalData.backgroundAudioManager.play()
                } else {
                    app.globalData.backgroundAudioManager.src = this.musicSrc
                    app.globalData.backgroundAudioManager.title = this.songInfo.name
                }
            } else {
                app.globalData.backgroundAudioManager.pause()
            }
        },
        //切换歌曲
        changeSong(type) {
            clearTimeout(time)
            getSongDetail(app.getSong(type)).then(res => {
                this.getSongInfo(res.songs[0])
            })
        },
        //歌曲播放函数
        async getSongInfo(info) {
            await this._getSongLyric(info.id)
            await this._getUrl(info.id)
            console.log('@@@@@@@@555');
            this.dt = moment(info.dt).format( 'mm:ss')
            this.songInfo = info
            this.marginTop = 0
            this.currentIndex = 0
            this.lyric = []
        },
        switchSong (e) {
            let type = e.currentTarget.id 
            this.changeSong(type)
        },
        // 点击改变进度条
        changeProgress(e) {
            console.log('changeProgress',e);
            let self = this
            let current = e.changedTouches[0].pageX - this.offsetLeft
            if(current > 0 && current < this.width) {
                let progress = current / this.width
                let currentTime = app.globalData.backgroundAudioManager.duration * progress
                for(let i = 0; i < self.lyric.length - 1; i++) {
                    if(currentTime >= parseFloat(self.lyric[i][0]) && currentTime < parseFloat(self.lyric[i + 1][0])) {
                        self.currentIndex = i,
                        self.progress= progress * 100,
                        self.isPlay= true
                        break
                    }
                }
                app.globalData.backgroundAudioManager.seek(currentTime)
                app.globalData.backgroundAudioManager.play()
            }
        },
    
        // 播放列表
        openList() {
            this.isShow = true
            this.index = app.globalData.index > 4? app.globalData.index-4:0
        },
        closeList() {
            this.isShow = false
        },
        // 选择某一首歌
        chooseSong(e) {
            app.globalData.index = e.currentTarget.id
            let id = e.currentTarget.dataset.info
            getSongDetail(id).then(res => {
                this.getSongInfo(res.songs[0])
            })
        },
    },
    onShow: function() {
        this.marginTop = 0
        this.currentIndex = 0
    },
    onUnload: function() {
        if(this.circleType == 'icon-B') {
            app.globalData.active = '1'
        } else {
            app.globalData.active = '0'
        }
        app.globalData.pid = this.pid
        app.globalData.state = this.isPlay
        option.id = this.songInfo.id
    }
}
