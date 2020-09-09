import request from '@/utils/request'

export function fetchParamList(query) {
  return request({//获取参数
    url: '/admin/params',
    method: 'get'
  })
}

export function updateParam(id,data) {
  return request({//修改参数
    url: '/admin/params/'+id,
    method: 'put',
    params: data
  })
}

export function fetchWords(status) {
  return request({
    url: '/admin/hotwords/'+status,
    method: 'get'
  })
}

export function addWords(data) {
  return request({
    url: '/admin/hotwords',
    method: 'post',
    params: data
  })
}

export function updateWords(data) {
  return request({
    url: '/admin/hotwords',
    method: 'put',
    params: data
  })
}

export function searchWord(data) {
  return request({
    url: '/search/'+data,
    method: 'get'
  })
}

export function getHotWords() {
  return request({
    url: '/search',
    method: 'get'
  })
}

export function createHotWords() {
  return request({
    url: '/admin/createHotwords',
    method: 'get'
  })
}
