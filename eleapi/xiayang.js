var https =require("http");

function xiayang(path,callback) {
	var options = {
		hostname: 'iranshao.com',
		port: 80,
		path:path,
		method: 'GET',
			headers: {
				'Content-Type': 'applincation/x-www-form-urlencoded',
				'Content-Length': Buffer.byteLength(postData),
				"Referer":"http://iranshao.com/reg/shishenpao/frontend/reg_groups/6844/individual",
				"User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",
				'X-NewRelic-ID':'VwUPUVRSGwEAXFVaBAU=',
				'Cookie':'UM_distinctid=15da73b3b0a34a-051076f4e73bd-474a0521-fa000-15da73b3b0b37e; myTest=1502104683358; acnt=18641774784; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2237b4378dcf%22%7D; Hm_lvt_e1afc974687855fe8c7318ef56f0dbae=1502091415,1502091428,1502157472,1502239754; Hm_lpvt_e1afc974687855fe8c7318ef56f0dbae=1502276492; mp_f3037385c5037cd9ff8cf4e7271fd23b_mixpanel=%7B%22distinct_id%22%3A%20%2215da73b453c28a-0f6e354290a8d5-474a0521-fa000-15da73b453d142%22%2C%22%24initial_referrer%22%3A%20%22http%3A%2F%2Ftop.chinaz.com%2FHtml%2Fsite_iranshao.com.html%22%2C%22%24initial_referring_domain%22%3A%20%22top.chinaz.com%22%7D; CNZZDATA1000317233=302288452-1501745830-http%253A%252F%252Ftop.chinaz.com%252F%7C1502271270; _gat=1; mp_mixpanel__c=6; _ga=GA1.2.2027270780.1501749265; _gid=GA1.2.1819465245.1502091416; _iranshao_session=BAh7EEkiGXdhcmRlbi51c2VyLnVzZXIua2V5BjoGRVRbB1sGaQN8EghJIiIkMmEkMTAkTGN2enR4TGRhQ2RZVTdlSk9aWEpZTwY7AFRJIg9zZXNzaW9uX2lkBjsAVEkiJWMyNDY3NGM0YmIxOTA0OWRkZWNmYjNhNDZmZWYwMDgzBjsAVEkiEnByZXZpb3VzX3BhdGgGOwBGIjgvcmVnL3NoaXNoZW5wYW8vZnJvbnRlbmQvcmVnX2dyb3Vwcy82ODQ0L2luZGl2aWR1YWxJIhhwcmV2aW91c19jb250cm9sbGVyBjsARkkiDHZ1ZV9yZWcGOwBUSSIdcHJldmlvdXNfY29udHJvbGxlcl9wYXRoBjsARkkiDHZ1ZV9yZWcGOwBGSSIUcHJldmlvdXNfYWN0aW9uBjsARkkiCXNob3cGOwBUSSIXcHJldmlvdXNfcGFyYW1zX2lkBjsARkkiAAY7AEZJIhNndWVzdF9yZWdpc3RlcgY7AFRGSSIQX2NzcmZfdG9rZW4GOwBGSSIxSTI2OUxxaGtNZWFjUExCakM5SGk3L3dKVVdkWmZ5dStKM1hVUGl0NzIraz0GOwBGSSIJcmFjZQY7AEZJIhw5NDU5LVdFVOKAlFJVTua5v%2Bi6q%2Bi3kQY7AFRJIg1yZWdfcmFjZQY7AEZJIiEyMzIzLTIwMTcgV0VU4oCUUlVO5rm%2F6Lqr6LeRBjsAVA%3D%3D--75a2bf7bcd26d5d89ba2f7f3428a9763acd79740; irs_slug=37b4378dcf; sensorsdata2015session=%7B%22_session_referrer%22%3A%22https%3A%2F%2Fwww.baidu.com%2Flink%3Furl%3DDCW66PK-krmaZPgbUp0hjbjqs22UFUwzExEyfCFt5YtleMzBN6-8k9cgvmBL040J%26wd%3D%26eqid%3De2d55ae7000339e500000002598a5bbd%22%2C%22_session_referrer_domain%22%3A%22www.baidu.com%22%2C%22race%22%3A%229459-WET%E2%80%94RUN%E6%B9%BF%E8%BA%AB%E8%B7%91%22%2C%22user_logged_in%22%3Atrue%7D'
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



	req.end();
}



module.exports = xiayang;