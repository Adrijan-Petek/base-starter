const { ethers } = require("hardhat");

async function main() {
  console.log("Deploying MyToken...");

  const MyToken = await ethers.getContractFactory("MyToken");
  const token = await MyToken.deploy("MyToken", "MTK", 1000000); // Name, Symbol, Initial Supply

  await token.waitForDeployment();
  const tokenAddress = await token.getAddress();

  console.log("MyToken deployed to:", tokenAddress);

  // Verify contract if on a live network
  if (network.name !== "hardhat") {
    console.log("Verifying contract...");
    try {
      await run("verify:verify", {
        address: tokenAddress,
        constructorArguments: ["MyToken", "MTK", 1000000],
      });
      console.log("Contract verified!");
    } catch (error) {
      console.error("Verification failed:", error);
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });