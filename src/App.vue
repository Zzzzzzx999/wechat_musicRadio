<script>
// import {audio} from './mixin'
import {getDetail,getProgram} from "./service/djprogram";
	export default {
		// mixins:[audio],
		onLaunch: function() {
			let isLogin = !!(wx.getStorageSync('cookies')) && !!(wx.getStorageSync('userInfo'))
			this.globalData.isLogin = isLogin
			if(!isLogin) {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			}
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		/* methods: {
			goPlayPage(rid){
				getProgram(rid).then(res=>{
					console.log('节目详情',res)
					wx.navigateTo({url:'/pages/playPage?id='+res.programs[1].mainSong.id})
				})
			}
		}, */
		methods:{
			goPlayPage(rid){
				getProgram(rid).then(res=>{
					console.log('节目详情',res)
					wx.navigateTo({url:'/pages/playPage?id='+res.programs[1].mainSong.id})
					this.globalData.programsDetail = res.programs
				})
			},

			// console.log(121321231313);
			addSong(id) {
				if(this.globalData.id && this.globalData.id == id) {
					this.globalData.isSame = true
				} else {
					this.globalData.isSame = false
					this.globalData.backgroundAudioManager = {}
					this.globalData.id = id
				}
			},
			playList(arr) {
				this.globalData.playList = arr
			},
			getSong(type) {
				if(this.globalData.playList.length > 1) {
					if(type == 'next') {
						this.globalData.index >= this.globalData.playList.length -1? this.globalData.index = 0: this.globalData.index ++
					} else {
						this.globalData.index <= 0?this.globalData.index = this.globalData.playList.length -1: this.globalData.index --
					}
				} else {
					this.globalData.index = 0
				}
				let id = this.globalData.playList[this.globalData.index].id
				this.globalData.id = id
				return id
			},
		},
		globalData:{
			//是否登陆
			isLogin: false,
			// 播放列表
			playList: [],
			index: 0,
			state: false,
			isSame: false,
			id: '',
			pid: '',
			active: '',
			songTimeSeconds:'',
			backgroundAudioManager:{},
			playProgress:null,
			programsDetail:[], //节目详情
			previousId:'', //上条音乐id
			slider:{
               max:'100',
               value:'0',
            },
		}
	}
</script>

<style>
	/*每个页面公共css */
	image {
        image-rendering:-webkit-optimize-contrast;
	}
</style>
