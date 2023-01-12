import { baseURL, timeout} from "./config"

/* const cookie = '9d89ce1eae3d3e2b19be57c8952325a0=2c2031bf-1ea9-4e13-95b2-92484a027d34.7Gy7ZchFj-UO2zUyp9t7c02AHJY; order=id%20desc; serverType=nginx; pro_end=-1; ltd_end=-1; memSize=1998; bt_user_info=%7B%22status%22%3Atrue%2C%22msg%22%3A%22%u83B7%u53D6%u6210%u529F%21%22%2C%22data%22%3A%7B%22username%22%3A%22150****2797%22%7D%7D; SetName=; ChangePath=10; sites_path=/www/wwwroot; site_model=php; rank=list; Path=/www/wwwroot; file_recycle_status=true; record_paste_type=1; 2960fc2d6b4dcc284ebdc9f9c7152a8e=fe986542-e123-4711-8f28-b9831ed1368f.m8tBDL5hClgqdn1saSugCHrIR28; request_token=7WZXvunZ1PPL1g32EV0FmSgjvpxwmcm1ILzewTIFJGQN9h0m; backup_path=/www/backup; config-tab=0; network-unitType=KB/s; disk-unitType=KB/s; loginState=false; NMTID=00OSmkDYf3dRDa4iEuilZaxB7ffow0AAAGCixxa6Q'
uni.setStorage({
  data: cookie,
  key: 'cookies',
}) */

function request(options, method='GET') {
  return new Promise((resolve, reject) => {
    wx.request({
			// #ifdef H5
      // url: '/lmusic' + options.url,
			// #endif
			// #ifdef MP-WEIXIN
			url: baseURL + options.url,
			// #endif
      timeout: timeout,
      data: {
        ...options.data,
        cookie: uni.getStorageSync('cookies')
	    },
      method: method,
      header: {
				'content-type': 'application/x-www-form-urlencoded;application/json;charset=UTF-8', 
				// cookies: uni.getStorageSync('cookies')
        cookie:uni.getStorageSync('cookies')?uni.getStorageSync('cookies').toString():''
      },
      success: function(res) {
        if(options.data && options.data.islogin) {
          uni.setStorage({
						data:res.data.cookie,
            key: 'cookies',
          })
        }
        resolve(res.data)
      },
      fail: reject,
      complete: res => {
      }
    })
  })
}

export default request;