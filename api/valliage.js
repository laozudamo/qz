import http from './config.js'

// 村庄
export const getList = (params) => http.get('/admin/village/getVillagePage', { params })



