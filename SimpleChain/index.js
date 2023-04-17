const { Blockchain, Block } = require('./blockchain');

console.log('=== SimpleChain Demo ===\n');

let myChain = new Blockchain();

console.log('Mining block 1...');
myChain.addBlock(new Block(1, "05/03/2023", { amount: 10 }));

console.log('Mining block 2...');
myChain.addBlock(new Block(2, "10/03/2023", { amount: 25 }));

console.log('\nBlockchain valid?', myChain.isChainValid());

console.log('\nBlockchain:');
console.log(JSON.stringify(myChain, null, 2));

// Add demo script