const dbPlugin = require("./db.js")
const db = new dbPlugin("1213")

module.exports = {
	_add(req,res){
		let data = req.body;
		console.log(data)
		db.insertOne("car",data,(err,data)=>{
			if(err) throw err
			res.send({
				status:"1",
				statusText:"添加成功",
			})
		})
	},
	_huoqu(req,res){
		db.find("car",{},(err,data)=>{
			if(err) throw err
			res.send(data)
		})
	}
}
