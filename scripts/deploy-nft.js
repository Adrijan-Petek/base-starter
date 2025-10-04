const { ethers } = require("hardhat");

async function main() {
  console.log("Deploying MyNFT...");

  const MyNFT = await ethers.getContractFactory("MyNFT");
  const nft = await MyNFT.deploy("MyNFT", "MNFT"); // Name, Symbol

  await nft.waitForDeployment();
  const nftAddress = await nft.getAddress();

  console.log("MyNFT deployed to:", nftAddress);

  // Verify contract if on a live network
  if (network.name !== "hardhat") {
    console.log("Verifying contract...");
    try {
      await run("verify:verify", {
        address: nftAddress,
        constructorArguments: ["MyNFT", "MNFT"],
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