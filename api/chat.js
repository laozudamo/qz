import http from './config.js'

export const getList = (params) => http.get('/admin/chatRecord/getChatRecordPage', { params })

export const creat = (data) => http.post('/admin/chatRecord/addChatRecord', data)



