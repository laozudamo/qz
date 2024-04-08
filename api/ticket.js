import http from './config.js'

export const getList = (params) => http.get('/admin/ticket/getTicketPage', { params })

export const creat = (data) => http.post('/admin/ticket/addTicket', data)

export const detail = (id) => http.get('/admin/ticket/getTicket/' + id)



