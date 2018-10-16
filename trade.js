var sender = 'c8adbb86a08647108cfbf6478bbfe08a'
var assets ={}
//get nodes
var request = require("request");
var chain

var options = { method: 'POST',
url: 'http://localhost:5003/nodes/register',
body: { nodes: [ 'http://0.0.0.0:5000', 'http://0.0.0.0:5001','http://0.0.0.0:5002']}, //ask three networks
    json: true };

//get nodes request
request(options, function (error, response, body) {
        if (error) throw new Error(error);
        
        //console.log(body);
        
        //resolve conflicts
        var request = require("request");
        
        var options = { method: 'GET',
        url: 'http://0.0.0.0:5003/nodes/resolve'}
        
        //resolve conflicts request
        request(options, function (error, response, body) {
                if (error) throw new Error(error);
                
                chain = JSON.parse(body);
                
                //for finding the assets (for loop)
                for (block in chain['chain']){
                if(chain['chain'][block]['transactions'].length!=0){
                
                //find senderid for the block
                public_key = (chain['chain'][blockd]['previous_hash'])
                public_code = sender+public_key
                var crypto = require('crypto');
                var hash = crypto.createHash('sha256').update(public_code).digest('hex');
                var i;
                var hash_new = ""
                for (i=0;i<32;i++){
                hash_new+=hash[i]
                }
                hash = hash_new; //senderid for the block
                //console.log(hash)
                
                for(transaction in chain['chain'][block]['transactions']){
                //get senderid from the chain
                sender_id=(chain['chain'][block]['transactions'][transaction]['sender']);
                //console.log(sender_id)
                
                if(hash==sender_id){
                keys = Object.keys(assets)
                if(keys.includes(chain['chain'][block]['transactions'][transaction]['stocksymbol'])){
                assets[chain['chain'][block]['transactions'][transaction]['stocksymbol']]+=chain['chain'][block]['transactions'][transaction]['amount']
                }
                else{
                assets[chain['chain'][block]['transactions'][transaction]['stocksymbol']]=chain['chain'][block]['transactions'][transaction]['amount']
                }
                }
                }
                }
                blockd = block
                }
                console.log(assets)
                
                
                //buy stocks
                var request = require("request");
                var k = []
                // eg: node trade.js 200 AAPL a0bdbb8fa08647108cfbf6478bbfe09c
                process.argv.forEach((val, index) => {
                                     //console.log(`${index}: ${val}`);
                                     k.push(`${val}`)
                                     });
                stocksymbol = k[k.length-2]
                amount = parseInt(k[k.length-3], 10)
                recipient = k[k.length-1]
                previous_hash = chain['chain'][chain['chain'].length-1]['previous_hash']
                console.log(stocksymbol,amount,recipient)
                
                sender_id = sender+previous_hash
                var crypto = require('crypto');
                sender_id = crypto.createHash('sha256').update(sender_id).digest('hex'); //generate senderid from private key and prev hash
                hash_new = ""
                for (i=0;i<32;i++){
                hash_new+=sender_id[i]
                }
                sender_id = hash_new;
                console.log("sender address:",sender_id)
                var options = { method: 'POST',
                url: 'http://0.0.0.0:5003/transactions/new',
                headers:
                { 'Postman-Token': '9683322f-8488-4a84-8aad-3803a14dc478',
                'cache-control': 'no-cache',
                'Content-Type': 'application/json' },
                body:
                { sender: sender_id,
                stocksymbol: stocksymbol,
                recipient: recipient,
                amount: amount },
                json: true };
                //console.log(options)
                //buy stocks request
                flag = -1
                if(amount>=0){
                flag = 0
                }
                if(amount<0){
                //console.log(-1*amount)
                if(assets[stocksymbol]>=-1*amount){flag = 0
                }
                else{
                console.log("Don't own enough shares to sell")
                }
                }
                if(flag==0){
                request(options, function (error, response, body) {
                        if (error) throw new Error(error);
                        
                        //console.log(body);
                        });
                }
                });
        });


