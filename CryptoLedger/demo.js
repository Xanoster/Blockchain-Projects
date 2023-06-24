const { CryptoLedger, Transaction } = require('./ledger');

let myCoin = new CryptoLedger();

console.log('Creating transactions...');
myCoin.createTransaction(new Transaction('address1', 'address2', 100));
myCoin.createTransaction(new Transaction('address2', 'address1', 50));

console.log('\nStarting the miner...');
myCoin.minePendingTransactions('miner-address');

console.log('\nBalance of miner:', myCoin.getBalanceOfAddress('miner-address'));

console.log('\nCreating more transactions...');
myCoin.createTransaction(new Transaction('address1', 'address2', 25));

console.log('\nStarting the miner again...');
myCoin.minePendingTransactions('miner-address');

console.log('\nBalance of miner:', myCoin.getBalanceOfAddress('miner-address'));
console.log('Balance of address1:', myCoin.getBalanceOfAddress('address1'));
console.log('Balance of address2:', myCoin.getBalanceOfAddress('address2'));

console.log('\nIs blockchain valid?', myCoin.isChainValid());

// Add demo script
// Update demo with transactions
// Add balance checking
// Add more examples