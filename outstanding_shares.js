var express = require('express');
var app = express();


var request = require("request");
var chain
var http = require("http")

var options = { method: 'POST',
url: 'http://localhost:5003/nodes/register',
body: { nodes: [ 'http://0.0.0.0:5000', 'http://0.0.0.0:5001','http://0.0.0.0:5002']}, //ask three networks
    json: true };

//request nodes
outstanding_shares={}
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
                //console.log(chain)
                
                for (block in chain['chain']){
                if(chain['chain'][block]['transactions'].length!=0){
                for(transaction in chain['chain'][block]['transactions']){
                //find the outstanding shares of the company
                keys = Object.keys(outstanding_shares)
                if(keys.includes(chain['chain'][block]['transactions'][transaction]['stocksymbol'])){
                outstanding_shares[chain['chain'][block]['transactions'][transaction]['stocksymbol']]+=chain['chain'][block]['transactions'][transaction]['amount']
                }
                else{
                outstanding_shares[chain['chain'][block]['transactions'][transaction]['stocksymbol']]=chain['chain'][block]['transactions'][transaction]['amount']
                }
                //console.log(stocksymbol)
                }
                }
                }
                console.log(outstanding_shares)
                })
        })

