import Request from './luch-request/luch-request/index.js' // 下载的插件

const http = new Request();

// uni.setStorageSync("token", token);
const token = uni.getStorageSync('token')

http.setConfig((config) => { /* config 为默认全局配置*/
  config.baseURL = 'http://175.178.245.37:8888/api/'; /* 根域名 */

  config.header = {
    "Authorization": token
  }
  return config
})

http.interceptors.response.use((response) => { /* 对响应成功做点什么 可使用async await 做异步操作*/
  //  if (response.data.code !== 200) { // 服务端返回的状态码不等于200，则reject()
  //    return Promise.reject(response) // return Promise.reject 可使promise状态进入catch
  // if (response.config.custom.verification) { // 演示自定义参数的作用
  //   return response.data
  // }
  if (response.data.code !== 200) {
    return Promise.reject(response)
  }

  return response.data.data
}, (response) => { /*  对响应错误做点什么 （statusCode !== 200）*/
  console.log(response)
  return Promise.reject(response)
})


export default http