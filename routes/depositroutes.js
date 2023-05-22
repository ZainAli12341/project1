const express =require('express')
const router =express.Router()
const {deposits}=require('../controllers/depositcontrolers')

router.post('/',deposits)

module.exports=router
