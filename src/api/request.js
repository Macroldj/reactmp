import axios from 'axios';
import {Message} from 'element-react';
import 'element-theme-default';
import store from "../store";


let BaseURL
process.env.NODE_ENV === "develop" ? BaseURL = "" : BaseURL = ""

const $axios = axios.create({
  baseURL: BaseURL, timeout: 6000, retry: 4, retryDelay: 1000
});

$axios.interceptors.request.use(config => {
  // const token = 'FA2019';
  config.headers['X-Token'] = store.getState().user.token;
  return config;
}, error => {
  Message.error(error);
  return Promise.reject(error);
});

$axios.interceptors.response.use(response => {
  return Promise.resolve(response)
}, error => {
  console.log(error.response)
  Message.error(error);
  return Promise.reject(error)
});

export default function request(url, data = {}, method = 'POST') {
  return new Promise((resolve, reject) => {
    const options = method === 'POST' ? {
      url, method, data
    } : {
      url, method, params: data
    }
    $axios(options)
      .then(res => {
        const {data} = {...res}
        if (data.code !== 0) {
          Message.error(data.msg);
        } else {
          resolve(data.data)
        }
      })
      .catch(error => {
        reject()
      })
  })
}
