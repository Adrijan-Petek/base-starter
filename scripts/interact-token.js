const { ethers } = require("hardhat");

async function main() {
  const tokenAddress = process.argv[2];
  const action = process.argv[3];

  if (!tokenAddress || !action) {
    console.error("Usage: npx hardhat run scripts/interact-token.js --network <network> <tokenAddress> <action> [args...]");
    console.error("Actions: balance <address>, transfer <to> <amount>, totalSupply");
    process.exit(1);
  }

  const [signer] = await ethers.getSigners();
  const token = await ethers.getContractAt("MyToken", tokenAddress);

  switch (action) {
    case "balance":
      const address = process.argv[4] || signer.address;
      const balance = await token.balanceOf(address);
      console.log(`Balance of ${address}: ${ethers.formatEther(balance)} MTK`);
      break;
    case "transfer":
      const to = process.argv[4];
      const amount = ethers.parseEther(process.argv[5]);
      const tx = await token.transfer(to, amount);
      await tx.wait();
      console.log(`Transferred ${ethers.formatEther(amount)} MTK to ${to}`);
      break;
    case "totalSupply":
      const supply = await token.totalSupply();
      console.log(`Total supply: ${ethers.formatEther(supply)} MTK`);
      break;
    default:
      console.error("Unknown action");
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });