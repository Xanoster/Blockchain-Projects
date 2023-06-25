# CryptoLedger

A blockchain-based cryptocurrency ledger with transaction support and mining rewards.

## Features

- **Transaction System**: Send and receive coins between addresses
- **Mining Rewards**: Miners receive rewards for adding blocks
- **Pending Transactions**: Transaction pool before mining
- **Balance Tracking**: Check balance of any address
- **Proof of Work**: Secure mining with adjustable difficulty
- **Chain Validation**: Verify blockchain integrity

## Installation

```bash
npm install
```

## Usage

```bash
node demo.js
```

## How It Works

1. **Create Transactions**: Users create transactions to send coins
2. **Mining**: Miners collect pending transactions into a block
3. **Rewards**: Miners receive a reward for successfully mining a block
4. **Validation**: The blockchain validates all transactions and blocks

## Example

```javascript
const { CryptoLedger, Transaction } = require('./ledger');

let myCoin = new CryptoLedger();

// Create transaction
myCoin.createTransaction(new Transaction('alice', 'bob', 100));

// Mine pending transactions
myCoin.minePendingTransactions('miner1');

// Check balance
console.log(myCoin.getBalanceOfAddress('miner1'));
```

## Architecture

- `ledger.js` - Core blockchain, transaction, and block classes
- `demo.js` - Example usage and demonstration

// Update documentation
// Add usage examples