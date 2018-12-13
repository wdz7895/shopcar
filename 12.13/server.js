const express = require("express");
const bodyParser = require("body-parser")

const produceRouter = require("./router/produce.js")
const carRouter = require("./router/car.js")
const http = express();


http.listen(8080,()=>{
	console.log("run")
})

http.use(bodyParser.urlencoded({extended:false}));

http.use(express.static("./public"));


http.use("/produce",produceRouter)
http.use("/car",carRouter)
