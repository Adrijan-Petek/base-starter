const { ethers } = require("hardhat");

async function main() {
  const provider = ethers.provider;
  const feeData = await provider.getFeeData();

  console.log("Current gas prices:");
  console.log(`Gas price: ${ethers.formatUnits(feeData.gasPrice, "gwei")} gwei`);
  if (feeData.maxFeePerGas) {
    console.log(`Max fee per gas: ${ethers.formatUnits(feeData.maxFeePerGas, "gwei")} gwei`);
  }
  if (feeData.maxPriorityFeePerGas) {
    console.log(`Max priority fee per gas: ${ethers.formatUnits(feeData.maxPriorityFeePerGas, "gwei")} gwei`);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });