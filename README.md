# CryptoStock
A model of blockchain for stock trading

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
(5000,5001 and 5002 -miners
5003 -trader)

PS: Payment verification is incomplete: acknoledgement from the company is not included

