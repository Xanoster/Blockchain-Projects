# SimpleChain

A basic blockchain implementation in Node.js demonstrating core blockchain concepts.

## Features

- Block creation with SHA-256 hashing
- Proof of Work mining
- Chain validation
- Genesis block

## Installation

```bash
npm install
```

## Usage

```bash
node index.js
```

## How it works

Each block contains:
- Index
- Timestamp
- Data
- Previous block hash
- Current block hash
- Nonce (for mining)

The blockchain validates itself by checking that each block's hash matches and links correctly to the previous block.

// Update documentation