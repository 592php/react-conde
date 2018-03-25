import axios from './api'
import qs from 'qs'
// 登录
export function login (data) {
  return axios.post('/accesstoken', {...data})
   .then(res => res.data)
}
// 获取未读消息
export function getMessages (data) {
  return axios.get('/message/count?' + qs.stringify(data))
   .then(res => res.data)
}
// 获取个人信息
export function getUser (data) {
  return axios.get('/user/' + data)
   .then(res => res.data)
}
// 获取主题列表
export function getList (data) {
  return axios.get('/topics?' + qs.stringify(data))
   .then(res => res.data)
}
// 发布主题
export function postArticle (data) {
  return axios.post('/topics?', {...data})
   .then(res => res.data)
}
// 主题详情
export function detailes (data) {
  return axios.get('/topic/' + data)
   .then(res => res.data)
}
// 收藏的主题
export function userCollect (data) {
  return axios.get('/topic_collect/' + data)
   .then(res => res.data)
}
// 新建评论
export function replies (data) {
  return axios.post('/topic/' + data.topic_id + '/replies', {...data})
   .then(res => res.data)
}

// 为评论点赞，取消赞
export function replyUps (data) {
  return axios.post('/reply/' + data.id + '/ups', {...data})
   .then(res => res.data)
}

// 获取已读和未读消息
export function messages (data) {
  return axios.get('/messages/?' + qs.stringify(data))
   .then(res => res.data)
}
