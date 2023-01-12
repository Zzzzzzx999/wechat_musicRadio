import request from "./network"

export function getRecommendedStations() {
  return request({
    url: '/personalized/djprogram'
  })
}

// 个性推荐
export function getPersonalizeRecommend() {
  return request({
    url: '/dj/personalize/recommend',
    data: {
      limit:'6',
    }
  })
}

// 电台详情
export function getDetail(id) {
  return request({
    url: '/dj/detail',
    data: {
      rid: id,
    }
  })
}

// 电台节目
export function getProgram(id) {
  return request({
    url: '/dj/program',
    data: {
      rid: id,
      limit:40
    }
  })
}



