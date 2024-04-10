import http from './config.js'

export const getLine = (params) => http.get('/admin/routes/getRoutesPage', { params })

export const creat = (data) => http.post('/admin/ticket/addTicket', data)

export const detailLine = (id) => http.get('/admin/routes/getRoutes/' + id)



