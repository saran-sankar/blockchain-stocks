# Blockchain for Stock Trading
A simple blockchain that can be used for stock trading and can replace stock exchanges

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
5003 for a trader/investor
and 5004 for a company (for IPO). You can add more ports after making changes in the code accordingly)

For adding the required node modules, run $npm install 

Initial public offering procedure: investor gets receiving address from the company side (receiving_address.js) -> investor requests to buy stocks (trade.js) -> investor pays the company with their newly generated signature sender address (not the private key) -> company acknowledges the payment by signing with their secret key (acknowledge.js) -> miner verifies the transaction (verify.js) -> miner forges a new block with all verified transactions (mine.js) -> investor gets the ownership of the stocks and the right to claim using thier private key 

The trading process between buyers and sellers, which is not simulated here, should also follow the same protocols.

Execution of trade.js and acknowledge.js: 

$node trade.js <qty(eg:100)> <stock symbol(eg:NKE)> <sender address(eg: a0bdbb8fa08647108cfbf6478bbfe09c)>
  
$node acknowledge.js <stock symbol(eg:NKE)> <sender address(eg: ef716131cd43471fbe2dded005588789)>

A web exchance to go with this: https://github.com/saran-sankar/cryptoStockExchange
