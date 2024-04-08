import http from './config.js'

export const getList = (params) => http.get('/admin/homestay/getHomestayPage', { params })

export const creat = (data) => http.post('/admin/chatRecord/addChatRecord', data)

export const detail = (id) => http.get('/admin/homestay/getHomestayPage/' + id)



