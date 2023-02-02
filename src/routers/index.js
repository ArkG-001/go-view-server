'use strict'

const { Router } = require('express')
const router = Router()
const led = require('../controllers/led')

var multer = require('multer')
var upload = multer()
module.exports = app => {
  router.get('/api/goview/sys/getOssInfo', led.getOssInfo)
  router.post('/api/goview/sys/login', led.login)
  router.get('/api/goview/sys/Logout', led.logout)
  router.get('/api/goview/project/list', led.project_list)
  router.get('/api/goview/project/getData', led.project_by_id)
  router.post('/api/goview/project/create', led.project_create)
  router.post('/api/goview/project/edit', led.project_edit)
  router.delete('/api/goview/project/delete', led.project_delete)
  router.put('/api/goview/project/publish', led.project_publish)
  // 在此特别注意，由于goview前端采用的是 Content-Type: multipart/form-data; 所在在此必须要使用multer的中间件，否则，无法从req.body中获取到相关的数据
  router.post('/api/goview/project/save/data', upload.array(), led.project_data_save)
  // 以下方法不可用
  // router.post('/api/goview/project/save/data', require('body-parser').urlencoded({ extended: true }), led.project_data_save)
  router.post('/api/goview/project/upload', led.project_upload)
  router.get('/api/goview/project/getImages/:id', led.project_get_images)
  app.use('/', router)
}
