import axios from 'axios'
import qs from 'qs'
// axios 配置
axios.defaults.timeout = 5000
axios.defaults.baseURL = 'https://cnodejs.org/api/v1'
// POST传参序列化
axios.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 返回状态判断
axios.interceptors.response.use(
  res => {
    if (res.data.success) {
      return res
    } else {
      return Promise.reject(res)
    }
  },
  error => {
    return Promise.reject(error)
  }
)
export default axios
