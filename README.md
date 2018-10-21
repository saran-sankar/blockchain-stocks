# CryptoStock
A model of blockchain that can be used for stock trading and can replace stock exchanges

Based on: https://github.com/dvf/blockchain

Supports MacOS and Linux

Requirements:
Python 3.6+
Flask (pip install flask)
Node.js and npm

Create a virtual environment ($python3 -m venv env)

$sudo npm install -g ttab (optional) for automatically configuring the network (change the virtual environment directory path inside the shell script)
$chmod +x config_network.sh
$./config_network.sh 

Or run $python blockchain.py -p <port (default:5000)> to configure required ports manually
(default is 5000,5001 and 5002 for miners,
5003 for a trader
and 5004 for a company. You can add more ports and change the files accordingly)

For adding the required node modules, run $npm install 

Transaction procedure: trader gets receiving address from the company side (receiving_address.js) -> trader requests to buy stocks (trade.js) -> trader pays the company with their newly generated signature sender address (not the private key) -> company acknowledges the payment by signing with their secret key (acknowledge.js) -> miner verifies the transaction (verify.js) -> miner forges a new block with all verified transactions (mine.js) -> trader gets the ownership of the stocks and the right to claim using thier private key 

(Since the companies will have an automated payment system, acknowledgement from the trader for receiving payment is not included. Instead, companies themselves send an automatic acknowledgement to the miners to complete the transaction when the trader sells stocks)

Execution of trade.js and acknowledge.js: 

$node trade.js <qty> <stock symbol(eg:NKE)> <sender address(eg: a0bdbb8fa08647108cfbf6478bbfe09c)>
  
$node acknowledge.js <stock symbol(eg:NKE)> <sender address(eg: ef716131cd43471fbe2dded005588789)>
