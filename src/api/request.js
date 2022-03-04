import axios from "axios"
import Vue from 'vue'
axios.defaults.timeout = 5000 //请求超时5秒
axios.defaults.baseURL = '/api' //请求base url
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded' //设置post请求是的header信息
// axios.defaults.withCredentials = true
Vue.prototype.$axios = axios



axios.interceptors.response.use(
  response => {
    if (response.data.code === 4003) {
      Toast({
        mes: '您没有权限操作！',
        timeout: 1500,
        callback: () => {
          router.go(-1);
        }
      });

      return false;
    }
    if (response.data.code === -1) {
      localStorage.removeItem('token')
      router.push({
        path: "/login",
        querry: {
          redirect: router.currentRoute.fullPath
        } //从哪个页面跳转
      })
    }
    return response
  },
  err => {
    if (err.code === 'ECONNABORTED' && err.message.indexOf('timeout') !== -1) {
      Toast({
        mes: '网络异常，连接超时...',
        timeout: 1500
      });
    }
    return Promise.reject(err)
  }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function get(url, params = {}, headers = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: params,
        headers: headers
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(response => {
      resolve(response.data);
    }, err => {
      reject(err)
    })
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data).then(response => {
      resolve(response.data);
    }, err => {
      reject(err)
    })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data).then(response => {
      resolve(response.data);
    }, err => {
      reject(err)
    })
  })
}
