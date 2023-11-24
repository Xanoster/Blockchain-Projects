const MyCoin = require('./coin');

let myCoin = new MyCoin();

console.log('=== MyCoin Cryptocurrency ===\n');

// Create some transactions
console.log('Creating transactions...');
myCoin.createTransaction({ from: 'address1', to: 'address2', amount: 100 });
myCoin.createTransaction({ from: 'address2', to: 'address1', amount: 50 });

// Mine block
console.log('\nStarting the miner...');
myCoin.minePendingTransactions('miner-address');

console.log('\nBalance of miner:', myCoin.getBalanceOfAddress('miner-address'));

// Create more transactions
console.log('\nCreating more transactions...');
myCoin.createTransaction({ from: 'address1', to: 'address2', amount: 10 });

// Mine another block
console.log('\nStarting the miner again...');
myCoin.minePendingTransactions('miner-address');

console.log('\nBalance of miner:', myCoin.getBalanceOfAddress('miner-address'));
console.log('Balance of address1:', myCoin.getBalanceOfAddress('address1'));
console.log('Balance of address2:', myCoin.getBalanceOfAddress('address2'));

console.log('\n=== Blockchain Info ===');
console.log('Total blocks:', myCoin.chain.length);
console.log('Is blockchain valid?', myCoin.isChainValid());

console.log('\n=== Blockchain ===');
console.log(JSON.stringify(myCoin, null, 2));

// Add demo script
// Add transaction examples
// Add balance display