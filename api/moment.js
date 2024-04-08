import http from './config.js'

export const getList = (params) => http.get('/admin/dynamic/getDynamicPage', { params })

export const creat = (data) => http.post('/admin/dynamic/addDynamic', data)

export const detail = (id) => http.get('/admin/dynamic/getDynamic/' + id)



