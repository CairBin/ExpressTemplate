const router = require('express').Router()
const indexCtrl = require('./../controllers/indexCtrl')
router.get('/',(req,res,next)=>{
    indexCtrl.indexPage(req,res,next)
})

module.exports = router