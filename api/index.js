import http from './config.js'

// login 
export const userLogin = (data) => http.post('/admin/login', data)

// 村庄
export const getList = (params) => http.get('/admin/village/getVillagePage', { params })



