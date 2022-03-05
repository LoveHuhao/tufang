import {
  post,
  patch,
  put
} from "./request.js"
import axios from 'axios'

// 类别列表
export const getList = (data) => {
  return axios({
    method: "post",
    url: "/mechanical/list",
    data
  })
}
// 类别列表详情
export const getDetailId = (id) => {
  return axios({
    method: "post",
    url: "/mechanical/getDetailId",
    params:{
      id
    }
  })
}

// 报价库
export const queryMechanicalGroup = (data) => {
  return axios({
    method: "post",
    url: "/mechanical/queryMechanicalGroup",
    data
  })
}
// 资讯列表
export const getMxInFoPage = (data) => {
  return axios({
    method: "post",
    url: "/mxInfo/page",
    data
  })
}

// 资讯列表详情
export const getPageDetailsId = (id) => {
  return axios({
    method: "post",
    url: "/mxInfo/getById",
    params:{
      id
    }
  })
}
