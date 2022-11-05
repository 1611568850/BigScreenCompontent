// 专门针对mock接口的axios二次封装

import axios from 'axios'


const instance  = new axios.create({
    baseURL:'/mock',
    timeout:2000
})
instance.interceptors.request.use(config=>{

    return config
})
// 响应拦截器
instance.interceptors.response.use(
    response=>{

        return response.data
    },
    error=>{
        return Promise.reject(error)
    },
)
export default instance