const { ethers } = require("hardhat");

async function main() {
  console.log("🔑 Generating new Ethereum wallet...\n");

  // Generate a random wallet
  const wallet = ethers.Wallet.createRandom();

  console.log("📋 New Wallet Details:");
  console.log("========================");
  console.log(`Address: ${wallet.address}`);
  console.log(`Private Key: ${wallet.privateKey}`);
  console.log(`Mnemonic: ${wallet.mnemonic?.phrase}`);
  console.log("========================");
  console.log("\n⚠️  IMPORTANT SECURITY NOTES:");
  console.log("• Save your private key and mnemonic securely");
  console.log("• Never share your private key with anyone");
  console.log("• Use this only for testing - fund with testnet ETH first");
  console.log("• For mainnet deployment, use a hardware wallet or secure key management");
  console.log("\n💡 Next steps:");
  console.log("1. Copy the private key to your .env file (without 0x prefix)");
  console.log("2. Get testnet ETH from https://sepoliafaucet.com/ or https://faucet.quicknode.com/base/sepolia");
  console.log("3. Test deployment: npx hardhat run scripts/deploy-erc20.js --network baseSepolia");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });