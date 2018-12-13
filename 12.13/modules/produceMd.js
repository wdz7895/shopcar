const dbPlugin = require("./db.js")
const db = new dbPlugin("1213")

module.exports = {
	_add(req,res){
		let data = req.body;
		console.log(data)
		db.insertOne("produce",data,(err,data)=>{
			if(err) throw err
			res.send({
				status:"1",
				statusText:"添加成功",
			})
		})
	},
	_huoqu(req,res){
		db.find("produce",{},(err,data)=>{
			if(err) throw err
//			db.find("produce",{},(err,data2)=>{
//				var zj = 0
//				for (var i = 0; i < data2.length; i++) {
//					console.log(data2[i])
//					zj += data2[i].price * data2[i].num
//				}
//				console.log(zj)
//				data.zj = zj
//				res.send({zj:zj})
//			})
			res.send(data)
		})
	},
	_jiafa(req,res){
		let data = req.body
		let id = data.y
		console.log(id)
		db.findById("produce",id,(err,data)=>{
			if(err) throw Error
			console.log(data)
			let data1 = {}
			data1.name = data.name
			data1.price = data.price
			data1.num = data.num*1+1
			db.updateById("produce",id,data1,(err,data)=>{
				if(err) throw err
				db.find("produce",{},(err,data2)=>{
					//计算总价
					var zj = 0
					for (var i = 0; i < data2.length; i++) {
						console.log(data2[i])
						zj += data2[i].price * data2[i].num
					}
					console.log(zj)
					res.send({zj:zj})
				})
			})
		})
	},
	_jianfa(req,res){
		let data = req.body
		let id = data.y
		console.log(id)
		db.findById("produce",id,(err,data)=>{
			if(err) throw Error
			console.log(data)
			let data1 = {}
			data1.name = data.name
			data1.price = data.price
			data1.num = data.num*1-1
			db.updateById("produce",id,data1,(err,data)=>{
				if(err) throw err
				db.find("produce",{},(err,data2)=>{
					var zj = 0
					for (var i = 0; i < data2.length; i++) {
						console.log(data2[i])
						zj += data2[i].price * data2[i].num
					}
					console.log(zj)
					data.zj = zj
					res.send({zj:zj})
				})
			})
		})
	},
	_huoqu1(req,res){
		db.find("produce",{},(err,data2)=>{
			//计算总价
			var zj = 0
			for (var i = 0; i < data2.length; i++) {
				console.log(data2[i])
				zj += data2[i].price * data2[i].num
			}
			console.log(zj)
			res.send({zj:zj})
		})
	}
}

