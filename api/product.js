import http from './config.js'

export const getList = (params) => http.get('/admin/agriculturalProduct/getAgriculturalProductPage', { params })

export const detail = (id) => http.post('/admin/agriculturalProduct/getAgriculturalProduct/' + id)

