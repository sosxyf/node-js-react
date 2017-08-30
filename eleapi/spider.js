var https =require("http");
var querystring =require("querystring");
var request = require("request");
var api = require("./api");
// function spider(path,callback) {

// 	var options = {
// 		hostname: 'iranshao.com',
// 		port: 80,
// 		path:path,
// 		method: 'POST',
// 			headers: {
// 				'Referer': 'http://m.iranshao.com/?code=2f74ffed0e803bb4730fdf08bd98f136&response_type=code&state=',
// 				'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
// 				'Host':'iranshao.com',
// 				'Origin':'http://m.iranshao.com',
// 				'Content-Type': 'application/x-www-form-urlencoded'
// 			}
// 	};



// 	var req = https.request(options, function(res) {

// 		var data = "";
// 		res.on("data", function(huilai) {
// 			data += huilai;
// 		})



// 		res.on('end', function() {
// 			// console.log(data);
// 			callback(data);
// 		})
// 	})
// 	var str = {"query":"query {\n  carousels: recommend_carousels {\n    title\n    url\n    cover\n  }\n  \n  races: recommend_races {\n    name\n    is_reging\n    start_date\n    location\n    has_certs\n    has_photos\n    has_results\n    reg_tag:reg_url\n    cover\n    id\n    follows_count\n  }\n  articles: recommend_articles {\n    id\n    slug\n    title\n    tag: category_name\n    cover(version: \"320x320\")\n    summary\n    url\n    created_at:published_at\n  }\n  me {\n    avatar_normal\n    id\n    nickname\n  }\n}"}


// 	var targetstr =querystring.stringify(str);

 
// 	req.write(targetstr);
// 	req.end();
// }

function testrequest(obj,callback){
	// var id = req.query.race.id;
	// var detailid = api.listid;
	// var targetstr =querystring.stringify(detailid);
	// var obj = {"query":"query race($id: ID!){\n  race(id: $id) {\n    id\n    is_bundle\n    name\n    category\n    url\n    detail\n    bundle {\n      id\n    }\n    cover(version: \"320x320\")\n    start_date\n    reg_start_date\n    reg_end_date\n    reg_url\n    location\n    estimate\n    follows_count\n    followed_by_me\n    passed_participations_count\n    upcoming_participations_count\n    is_reging\n    score\n    recent_child {\n      id\n      participated_by_me\n      reg_start_date\n      reg_end_date\n      start_date\n      posts {\n        prefix\n        body\n      }\n      posts_count\n    }\n    race_groups {\n      id\n      name\n    }\n    posts_count\n    posts {\n      prefix\n      body\n    }\n    race_reviews_count\n    race_reviews(page: 1, per_page: 3) {\n      id\n      body\n      created_at\n      env_rating\n      org_rating\n      path_rating\n      likes_count\n      liked_by_me\n      race {\n\t\t\t\tstart_date\n        name\n      }\n      participated\n      participation{\n        race_group {\n          name\n        }\n        actual_duration\n      }\n      user{\n        avatar_normal\n        nickname\n        slug\n      }\n    }\n    diaries_count\n    diaries(page: 1, per_page: 2) {\n      title\n      id\n      cover(version: \"320x320\")\n      liked_by_me\n      created_at\n      summary\n      likes_count\n      replies_count\n      url\n      year\n      user {\n        avatar_normal\n        nickname\n      }\n    }\n    albums_count\n    albums {\n      id\n      cover(version: \"320x320\")\n      photos_count\n    }\n    children {\n      id\n      name\n      start_date\n      race_groups {\n        id\n      }\n    }\n    result_entry_url\n    result_events {\n      id\n      name\n    }\n  }\n}","variables":{"id":"9623"}}
	request({
	    url: "http://iranshao.com/api/executions",
	    method: "POST",
	    json: true,   // <--Very important!!!
	    body: obj
	}, function (error, response, body){
	    callback(body);
	});

}

module.exports = testrequest;