# 🧱 Base Deploy Starter

🚀 **Overview**

A developer-f### Generate Test Wallet

```bash
npm run generate-wallet
```

### Deploy ERC20 Tokenndly Hardhat starter kit optimized for Base Network deployments.
Includes everything you need to deploy, verify, and interact with smart contracts on Base Mainnet and Base Sepolia out of the box.

## 📂 Folder Structure

```
base-deploy-starter/
│
├── contracts/
│   ├── MyToken.sol              # Sample ERC20
│   ├── MyNFT.sol                # Sample ERC721
│   └── MyVault.sol              # Example staking or vault contract
│
├── scripts/
│   ├── deploy-erc20.js          # Deploys ERC20 token
│   ├── deploy-nft.js            # Deploys ERC721 NFT
│   ├── verify-contract.js       # Verifies contract on Basescan
│   ├── interact-token.js        # Read/write token data
│   └── utils/                   # Helper scripts (funding, gas check, etc.)
│
├── .env.example                 # Example environment config
├── hardhat.config.js            # Pre-configured for Base
├── package.json                 # Hardhat + dependencies
├── README.md                    # Full documentation
└── .github/
    └── workflows/
        └── deploy.yml           # Auto deploy/test workflow
```

## ⚙️ Preconfigured Networks

The `hardhat.config.js` is pre-configured for Base Mainnet and Base Sepolia.

## 🧩 Environment Setup

1. Copy `.env.example` to `.env`:
   ```
   cp .env.example .env
   ```

2. Fill in your private key and Basescan API key in `.env`.

## � Generate Test Wallet

If you don't have a wallet yet, generate a new test wallet:

```bash
npm run generate-wallet
```

This will create a new Ethereum wallet with address and private key. **⚠️ Use only for testing!**

For testnet ETH, visit:
- [Base Sepolia Faucet](https://faucet.quicknode.com/base/sepolia)
- [Sepolia Faucet](https://sepoliafaucet.com/)

## �🛠️ Scripts

### Deploy ERC20 Token

```bash
npx hardhat run scripts/deploy-erc20.js --network baseSepolia
```

### Deploy NFT

```bash
npx hardhat run scripts/deploy-nft.js --network baseSepolia
```

### Verify Contract

```bash
npx hardhat verify --network baseSepolia <deployed_address> "TokenName" "SYMBOL" 18
```

Or use the custom script:

```bash
npx hardhat run scripts/verify-contract.js --network baseSepolia <deployed_address> [constructorArgs...]
```

### Interact with Token

Check balance:
```bash
npx hardhat run scripts/interact-token.js --network baseSepolia <tokenAddress> balance [address]
```

Transfer tokens:
```bash
npx hardhat run scripts/interact-token.js --network baseSepolia <tokenAddress> transfer <to> <amount>
```

Check total supply:
```bash
npx hardhat run scripts/interact-token.js --network baseSepolia <tokenAddress> totalSupply
```

### Check Gas Prices

```bash
npx hardhat run scripts/utils/gas-check.js --network baseSepolia
```

## 🧰 Included Features

✅ Base Mainnet & Sepolia support  
✅ Preloaded sample contracts (ERC20, ERC721, Vault)  
✅ Auto verification on Basescan  
✅ GitHub Actions CI/CD deploy pipeline  
✅ Built-in gas reporter + etherscan integration  
✅ .env template for private keys and API keys  

## 🔮 Optional Add-ons

You can expand this Base Starter with:

- Airdrop distribution script
- Staking and reward system
- Token claim frontend using Next.js or React
- Contract auto-verification and tagging

## 📦 Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Compile contracts:
   ```bash
   npm run compile
   ```

3. Run tests:
   ```bash
   npm test
   ```

4. Deploy to testnet:
   ```bash
   npm run deploy-sepolia
   ```

5. Deploy to mainnet:
   ```bash
   npm run deploy-mainnet
   ```

## 📄 License

MIT