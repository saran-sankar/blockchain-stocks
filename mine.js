var request = require("request");

var options = { method: 'GET',
url: 'http://0.0.0.0:5000/mine',
headers:
    { 'Postman-Token': '7d4a9182-c74f-43b3-99f2-d71e1aa5fbd1',
        'cache-control': 'no-cache' } };

request(options, function (error, response, body) {
        if (error) throw new Error(error);
        
        console.log("new block mined")
        console.log(body);
        });
