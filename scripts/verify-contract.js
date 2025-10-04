const { run } = require("hardhat");

async function main() {
  const contractAddress = process.argv[2];
  const constructorArgs = process.argv.slice(3);

  if (!contractAddress) {
    console.error("Usage: npx hardhat run scripts/verify-contract.js --network <network> <contractAddress> [constructorArgs...]");
    process.exit(1);
  }

  console.log("Verifying contract at:", contractAddress);
  console.log("Constructor arguments:", constructorArgs);

  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: constructorArgs,
    });
    console.log("Contract verified successfully!");
  } catch (error) {
    console.error("Verification failed:", error.message);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });