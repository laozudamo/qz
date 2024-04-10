import http from './config.js'


export const updateInfo = (data) => http.post('/admin/sysUser/updateProfile', data)

export const updateName = (data) => http.post('/app/user/updateNickname', data)

export const userInfo = () => http.post('/admin/sysUser/getProfile')







