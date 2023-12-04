# MyCoin

A simple cryptocurrency built on blockchain technology with mining and transaction features.

## Overview

MyCoin is a basic cryptocurrency implementation that demonstrates the fundamental concepts of blockchain technology, including mining, transactions, and proof of work.

## Features

- **Blockchain**: Immutable chain of blocks
- **Mining**: Proof of work consensus mechanism
- **Transactions**: Send coins between addresses
- **Mining Rewards**: Miners earn coins for adding blocks
- **Balance Tracking**: Check balance of any address
- **Validation**: Verify blockchain integrity

## Installation

```bash
npm install
```

## Usage

```bash
node index.js
```

## How It Works

### Transactions
Users create transactions to send coins from one address to another. Transactions are added to a pending pool.

### Mining
Miners collect pending transactions and create a new block. They must solve a computational puzzle (proof of work) to add the block to the chain.

### Rewards
When a miner successfully mines a block, they receive a reward in MyCoin.

### Validation
The blockchain validates all blocks to ensure integrity and prevent tampering.

## Example

```javascript
const MyCoin = require('./coin');

let myCoin = new MyCoin();

// Create transaction
myCoin.createTransaction({ 
    from: 'alice', 
    to: 'bob', 
    amount: 100 
});

// Mine block
myCoin.minePendingTransactions('miner1');

// Check balance
console.log(myCoin.getBalanceOfAddress('miner1'));
```

## Concepts Demonstrated

- **Hashing**: SHA-256 for block hashing
- **Proof of Work**: Mining difficulty adjustment
- **Chain Validation**: Integrity checks
- **Transaction Pool**: Pending transactions
- **Mining Rewards**: Incentive mechanism

## Project Structure

- `coin.js` - Main MyCoin blockchain class
- `index.js` - Demo and usage examples

// Update documentation
// Add usage examples