import http from './config.js'

export const getList = (params) => http.get('/admin/villageProduct/getVillageProductPage', { params })

export const creat = (data) => http.post('/admin/chatRecord/addChatRecord', data)

export const detail = (id) => http.get('/admin/villageProduct/getVillageProduct/' + id)



