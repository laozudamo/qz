import http from './config.js'

export const getList = (params) => http.get('/admin/orders/getOrdersPage', { params })

export const creat = (data) => http.post('/admin/orders/addOrders', data)

export const detail = (id) => http.get('/admin/orders/getOrders/' + id)

export const del = (id) => http.put('/admin/orders/deleteOrders/' + id)

