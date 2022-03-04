import {
  post,
  patch,
  put
} from "./request.js"
import axios from 'axios'

// 报价库列表详情
export const getList = (data) => {
  return axios({
    method: "post",
    url: "/mechanical/list",
    data:data
  })
}
// 报价库列表
export const getDetailId = (id) => {
  return axios({
    method: "post",
    url: "/mechanical/getDetailId",
    id
  })
}

//获取分组
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
export const getPageDetails = (id) => {
  return axios({
    method: "post",
    url: "/mxInfo/getById",
    id
  })
}
