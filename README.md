# CryptoStock
A model of blockchain that can be used for stock trading and can replace stock exchanges

Based on: https://github.com/dvf/blockchain

Supports MacOS and Linux

Requirements:
Python 3.6+
Flask (pip install flask)
Node.js and npm

create a virtual environment ($python3 -m venv env)

$sudo npm install -g ttab (optional) for automatically configuring the network (change the virtual environment directory path)
$chmod +x config_network.sh
$./config_network.sh 

Or use $python blockchain.py -p <port (default:5000)> to configure required ports manually
(5000,5001 and 5002 :miners
5003 :trader
5004 :company)

For adding the required node modules, run $npm install 

Transaction procedure: trader gets receiving address from the company side (receiving_address.js) -> trader requests to buy stocks (trade.js) -> trader pays the company with their newly generated signature sender address (not the private key) -> company acknowledges the payment by signing with their secret key (acknowledge.js) -> miner verifies the transaction (verify.js) -> miner forges a new block with all verified transactions (mine.js) -> trader gets the ownership of the stocks and the right to claim using thier private key 

(since the companies will have an automated payment system, acknowledgement from the trader for receiving payment is not included. Instead, companies themselves send an automatic acknoledgement to the miners to complete the transaction)

Execution of trade.js and acknowledge.js

node trade.js <amount> <stock symbol(eg:NKE)> <sender address(eg: a0bdbb8fa08647108cfbf6478bbfe09c)>
node acknowledge.js <stock symbol(eg:NKE)> <sender address(eg: ef716131cd43471fbe2dded005588789)>
