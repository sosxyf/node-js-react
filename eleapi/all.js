var https =require("http");
var querystring =require("querystring");
var request = require("request");
function all(path,callback) {

	var options = {
		hostname: 'iranshao.com',
		port: 80,
		path:path,
		method: 'POST',
			headers: {
				'Referer': 'http://m.iranshao.com/?code=2f74ffed0e803bb4730fdf08bd98f136&response_type=code&state=',
				'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
				'Host':'iranshao.com',
				'Origin':'http://m.iranshao.com',
				'Content-Type': 'application/x-www-form-urlencoded'
			}
	};



	var req = https.request(options, function(res) {

		var data = "";
		res.on("data", function(huilai) {
			data += huilai;
		})



		res.on('end', function() {
			// console.log(data);
			callback(data);
		})
	})
	var str = {"query":"query {\n  carousels: recommend_carousels {\n    title\n    url\n    cover\n  }\n  \n  races: recommend_races {\n    name\n    is_reging\n    start_date\n    location\n    has_certs\n    has_photos\n    has_results\n    reg_tag:reg_url\n    cover\n    id\n    follows_count\n  }\n  articles: recommend_articles {\n    id\n    slug\n    title\n    tag: category_name\n    cover(version: \"320x320\")\n    summary\n    url\n    created_at:published_at\n  }\n  me {\n    avatar_normal\n    id\n    nickname\n  }\n}"}


	var targetstr =querystring.stringify(str);

 
	req.write(targetstr);
	req.end();
}



module.exports = all;