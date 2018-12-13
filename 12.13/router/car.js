const express = require("express");
const router = express.Router();
const carMd =require("../modules/carMd.js");
//写入数据接口
router.post("/add",carMd._add);

//获取数据接口
router.get("/huoqu",carMd._huoqu)

module.exports = router;