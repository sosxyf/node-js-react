var https =require("http");
var querystring =require("querystring");
var request = require("request");
function photo(path,callback) {

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
	var str = {"query":"query ResultAlbumStatus{\n  me {\n    count: related_race_statuses_count\n    status: related_race_statuses(page: 1, per_page: 3) {\n      id\n      act\n      updated_at\n      race {\n        name\n        id\n        bundle {\n          id\n        }\n      }\n    }\n  }\n  \n  albums_count\n  albums(page: 1, per_page: 5){\n    id\n    updated_at: uploaded_at\n    photos(first: 5) {\n      image_url(version: \"320x320\")\n    }\n    race{\n      name\n      bundle {\n        id\n      }\n    }\n  }\n  \n  races: result_events(page: 1, per_page: 15) {\n    name\n    race {\n      id\n      bundle {\n        id\n      }\n    }\n    location\n    has_cert\n    has_photos\n    start_at\n    result_athletes_count\n    cover(version: \"320x320\")\n  }\n}"}
              
	var targetstr =querystring.stringify(str);

 
	req.write(targetstr);
	req.end();
}



module.exports = photo;