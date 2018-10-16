var reciever = 'cb716131cd43471fbe2dded005588750'
var assets ={}
//get nodes
var request = require("request");
var chain

var options = { method: 'POST',
url: 'http://localhost:5004/nodes/register',
body: { nodes: [ 'http://0.0.0.0:5000', 'http://0.0.0.0:5001','http://0.0.0.0:5002']}, //ask three networks
    json: true };

//get nodes request
request(options, function (error, response, body) {
        if (error) throw new Error(error);
        
        //console.log(body);
        
        //resolve conflicts
        var request = require("request");
        
        var options = { method: 'GET',
        url: 'http://0.0.0.0:5004/nodes/resolve'}
        
        //resolve conflicts request
        request(options, function (error, response, body) {
                if (error) throw new Error(error);
                
                chain = JSON.parse(body);
                
                previous_hash = chain['chain'][chain['chain'].length-1]['previous_hash']
                //console.log(previous_hash)
                
                receiver_id = reciever+previous_hash
                var crypto = require('crypto');
                receiver_id = crypto.createHash('sha256').update(receiver_id).digest('hex'); //generate receiverid from private key and prev hash
                hash_new = ""
                for (i=0;i<32;i++){
                hash_new+=receiver_id[i]
                }
                receiver_id = hash_new;
                
                console.log(receiver_id)
                var request = require("request");
                
                k=[]
                //eg: node acknowledge.js AAPL ef716131cd43471fbe2dded005588789
                process.argv.forEach((val, index) => {
                                     //console.log(`${index}: ${val}`);
                                     k.push(`${val}`)
                                     });
                sender = k[k.length-1]
                stocksymbol = k[k.length-2]
                var options = { method: 'POST',
                url: 'http://localhost:5004/transactions/ack/new',
                headers:
                { 'Postman-Token': '0e2fd5c1-5b9d-43b2-b416-23cbaeadbd7d',
                'cache-control': 'no-cache',
                'Content-Type': 'application/json' },
                body:
                { sender: sender,
                recipient: receiver_id,
                stocksymbol: stocksymbol },
                json: true };
                
                request(options, function (error, response, body) {
                        if (error) throw new Error(error);
                        
                        console.log(body);
                        });

                });
        });


