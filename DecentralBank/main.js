const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const DecentralBank = require('./blockchain');
const Transaction = require('./transaction');

// Create keys
const myKey = ec.genKeyPair();
const myWalletAddress = myKey.getPublic('hex');

const otherKey = ec.genKeyPair();
const otherWalletAddress = otherKey.getPublic('hex');

// Create blockchain instance
const bank = new DecentralBank();

console.log('=== DecentralBank Demo ===\n');

// Mine first block to get rewards
console.log('Mining initial block...');
bank.minePendingTransactions(myWalletAddress);

console.log(`\nBalance of my wallet: ${bank.getBalanceOfAddress(myWalletAddress)}`);

// Create transaction
console.log('\nCreating transaction...');
const tx1 = new Transaction(myWalletAddress, otherWalletAddress, 50);
tx1.signTransaction(myKey);
bank.addTransaction(tx1);

// Mine block
console.log('\nMining block...');
bank.minePendingTransactions(myWalletAddress);

console.log(`\nBalance of my wallet: ${bank.getBalanceOfAddress(myWalletAddress)}`);
console.log(`Balance of other wallet: ${bank.getBalanceOfAddress(otherWalletAddress)}`);

// Create another transaction
console.log('\nCreating another transaction...');
const tx2 = new Transaction(myWalletAddress, otherWalletAddress, 25);
tx2.signTransaction(myKey);
bank.addTransaction(tx2);

console.log('\nMining block...');
bank.minePendingTransactions(myWalletAddress);

console.log(`\nBalance of my wallet: ${bank.getBalanceOfAddress(myWalletAddress)}`);
console.log(`Balance of other wallet: ${bank.getBalanceOfAddress(otherWalletAddress)}`);

console.log('\n=== Blockchain Validation ===');
console.log('Is blockchain valid?', bank.isChainValid());

console.log('\n=== Transaction History ===');
const myTxs = bank.getAllTransactionsForWallet(myWalletAddress);
console.log(`Total transactions for my wallet: ${myTxs.length}`);

// Add demo script