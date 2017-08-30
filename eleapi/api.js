var express = require('express');
var router = express.Router();
var https =require("http");
var spider = require("./spider");
var User = require('../modules/UserM');
var mongoose = require('mongoose');
var all = require("./all");
var listapi = require("./listapi");
var photo = require("./photo");
var querystring =require("querystring");
var xiayang = require("./xiayang");



var md5 = require('md5');

//主页，热搜
router.get("/all",function(req,res){
	all("/api/executions",function(data){
		res.send(data);
	})
	// res.send('饿了么');
})


//详情
router.get("/detail",function(req,res){
	var listid = req.query.id;
	console.log(listid);
	// var targetstr =querystring.stringify(listid);
	spider({"query":"query race($id: ID!){\n  race(id: $id) {\n    id\n    is_bundle\n    name\n    category\n    url\n    detail\n    bundle {\n      id\n    }\n    cover(version: \"320x320\")\n    start_date\n    reg_start_date\n    reg_end_date\n    reg_url\n    location\n    estimate\n    follows_count\n    followed_by_me\n    passed_participations_count\n    upcoming_participations_count\n    is_reging\n    score\n    recent_child {\n      id\n      participated_by_me\n      reg_start_date\n      reg_end_date\n      start_date\n      posts {\n        prefix\n        body\n      }\n      posts_count\n    }\n    race_groups {\n      id\n      name\n    }\n    posts_count\n    posts {\n      prefix\n      body\n    }\n    race_reviews_count\n    race_reviews(page: 1, per_page: 3) {\n      id\n      body\n      created_at\n      env_rating\n      org_rating\n      path_rating\n      likes_count\n      liked_by_me\n      race {\n\t\t\t\tstart_date\n        name\n      }\n      participated\n      participation{\n        race_group {\n          name\n        }\n        actual_duration\n      }\n      user{\n        avatar_normal\n        nickname\n        slug\n      }\n    }\n    diaries_count\n    diaries(page: 1, per_page: 2) {\n      title\n      id\n      cover(version: \"320x320\")\n      liked_by_me\n      created_at\n      summary\n      likes_count\n      replies_count\n      url\n      year\n      user {\n        avatar_normal\n        nickname\n      }\n    }\n    albums_count\n    albums {\n      id\n      cover(version: \"320x320\")\n      photos_count\n    }\n    children {\n      id\n      name\n      start_date\n      race_groups {\n        id\n      }\n    }\n    result_entry_url\n    result_events {\n      id\n      name\n    }\n  }\n}","variables":{"id":listid}},
function(data){
		res.send(data);
	});
})


//列表页,地区
router.get("/listadd",function(req,res){
	listapi("/m/regions.json",function(data){
		res.send(data);
	})
	// res.send('饿了么');
})

//列表页，详情
router.get("/listxiangqing",function(req,res){
	listapi("/m/races.json?page=1&region_scope=&screen=&code=7de6a6fa64ba48e203e07bd40161f9a5&date=&q=&state=&region=&response_type=code&type=&sort=",function(data){
		res.send(data);
	})
	// res.send('饿了么');
})


//照片，名次
router.get("/photo",function(req,res){
	photo("/api/executions",function(data){
		res.send(data);
	})
	// res.send('饿了么');
})




//列表页,地区
router.get("/individual",function(req,res){
	var inid = req.query.id;
	console.log(inid);
	listapi("/api/reg/reg_groups/6844.json",function(data){
		res.send(data);
	})
	// res.send('饿了么');
})

















// //详情页，中国妈妈菜
// router.get('/detail1',function(req,res){
// 	var id = req.query.id;
// 	spider("/shopping/restaurant/" + id + "?extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification&latitude=38.88889&longitude=121.53827",function(data){
// 		res.send(data);
// 	})
// 	// res.send('饿了么');
// })





// router.post('/login', function(req, res, next) {
// 	//接收数据
// 	console.log("2222");         
// 	let username = req.body.username;
// 	let password = md5(req.body.password);

// 	//生成model对象 
// 	var UserModel = mongoose.model('user',User);
// 	UserModel.findOne({username:username,password:password},function(err,userItem){
// 		if (err) {

// 			var result = {
// 				code:0,
// 				msg:"登录失败"
// 			}

// 			console.log(err);
// 			res.send(JSON.stringify(result));
// 			return;
// 		};

// 		if(userItem){
// 			var result = {
// 				code:1,
// 				msg:"登录成功"
// 			}
			
// 			res.cookie("username",username);
// 			res.cookie("sign",md5(username));

// 			res.send(JSON.stringify(result));
// 		}else{
// 			var result = {
// 				code:0,
// 				msg:"您的账号存在风险，未保护账户安全，请进行短信验证"
// 			}
// 			res.send(JSON.stringify(result));
// 		}
// 	})
// });

module.exports = router;


