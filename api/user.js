import http from './config.js'


export const uodateInfo = (data) => http.post('/admin/sysUser/updateProfile', data)

export const userInfo = () => http.post('/admin/sysUser/getProfile')







