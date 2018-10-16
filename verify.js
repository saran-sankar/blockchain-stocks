var request = require("request");

var options = { method: 'POST',
url: 'http://localhost:5000/nodes/register',
headers:
    { 'Postman-Token': 'cb606df5-3603-4bf3-90a6-c1ae17bfef77',
        'cache-control': 'no-cache',
        'Content-Type': 'application/json' },
body:
    { nodes:
        [ 'http://0.0.0.0:5001',
         'http://0.0.0.0:5002',
         'http://0.0.0.0:5003',
         'http://0.0.0.0:5004'] },
    json: true };

request(options, function (error, response, body) {
        if (error) throw new Error(error);
        
        //console.log(body);
        console.log("nodes registered")
        var request = require("request");
        
        var options = { method: 'GET',
        url: 'http://0.0.0.0:5000/nodes/resolve',
        headers:
        { 'Postman-Token': 'e31124ed-b423-4b81-ad81-d0519618795a',
        'cache-control': 'no-cache' } };
        
        request(options, function (error, response, body) {
                if (error) throw new Error(error);
                
                //console.log(body);
                console.log("resolved")
                
                var request = require("request");
                
                var options = { method: 'GET',
                url: 'http://localhost:5000/verify',
                headers:
                { 'Postman-Token': 'e49a83b2-4caa-40e5-af21-c4d42b08963e',
                'cache-control': 'no-cache' } };
                
                request(options, function (error, response, body) {
                        if (error) throw new Error(error);
                        
                        console.log("verified")
                        console.log(body);
                        

                        });

                });
        });
