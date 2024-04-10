import http from './config.js'

export const villageSwiper = (params) => http.get('/admin/carouselImages/villageCarouselImagesPage', { params })
export const homeSwiper = (params) => http.get('/admin/carouselImages/indexCarouselImagesPage', { params })



