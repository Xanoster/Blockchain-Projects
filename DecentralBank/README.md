# DecentralBank

A decentralized banking system built on blockchain with cryptographic signatures and wallet management.

## Features

- **Elliptic Curve Cryptography**: Secure transaction signing using secp256k1
- **Digital Wallets**: Public/private key pairs for wallet management
- **Signed Transactions**: All transactions must be cryptographically signed
- **Balance Validation**: Prevents spending more than available balance
- **Transaction History**: Track all transactions for any wallet
- **Mining Rewards**: Incentivize miners with block rewards
- **Chain Validation**: Comprehensive blockchain integrity checks

## Installation

```bash
npm install
```

## Usage

```bash
node main.js
```

## How It Works

### Wallet Creation
Each user generates a key pair (public and private keys). The public key serves as the wallet address.

### Transactions
1. Create a transaction specifying sender, receiver, and amount
2. Sign the transaction with your private key
3. Add the signed transaction to the pending pool
4. Miners collect pending transactions and mine a new block

### Security
- Transactions are signed with elliptic curve cryptography
- Only the wallet owner can sign transactions from their address
- Balance is validated before accepting transactions
- All transactions are verified before being added to blocks

## Example

```javascript
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

// Create wallet
const myKey = ec.genKeyPair();
const myWalletAddress = myKey.getPublic('hex');

// Create and sign transaction
const tx = new Transaction(myWalletAddress, recipientAddress, 100);
tx.signTransaction(myKey);

// Add to blockchain
bank.addTransaction(tx);
bank.minePendingTransactions(minerAddress);
```

## Architecture

- `transaction.js` - Transaction class with signature verification
- `block.js` - Block structure with transaction validation
- `blockchain.js` - Main blockchain with wallet features
- `main.js` - Demo application

## Security Features

- ✅ Cryptographic signatures (ECDSA)
- ✅ Balance verification
- ✅ Transaction validation
- ✅ Chain integrity checks
- ✅ Tamper-proof blocks

// Update documentation
// Add usage examples
// Add security features