const express = require("express");
const router = express.Router();
const produceMd =require("../modules/produceMd.js");
//写入数据接口
router.post("/add",produceMd._add);

//获取数据接口
router.get("/huoqu",produceMd._huoqu)

//修改数据接口+1
router.post("/jiafa",produceMd._jiafa)
//修改数据接口-1
router.post("/jianfa",produceMd._jianfa)

//页面初始获取总价
router.get("/huoqu1",produceMd._huoqu1)
module.exports = router;