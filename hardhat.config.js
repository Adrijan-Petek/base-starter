require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("dotenv").config();

const { PRIVATE_KEY, BASESCAN_API_KEY } = process.env;

module.exports = {
  solidity: "0.8.20",
  networks: {
    hardhat: {},
    baseSepolia: {
      url: "https://sepolia.base.org",
      chainId: 84532,
      accounts: PRIVATE_KEY ? [`0x${PRIVATE_KEY}`] : [],
    },
    baseMainnet: {
      url: "https://mainnet.base.org",
      chainId: 8453,
      accounts: PRIVATE_KEY ? [`0x${PRIVATE_KEY}`] : [],
    },
  },
  etherscan: {
    apiKey: {
      baseSepolia: BASESCAN_API_KEY,
      baseMainnet: BASESCAN_API_KEY,
    },
    customChains: [
      {
        network: "baseSepolia",
        chainId: 84532,
        urls: {
          apiURL: "https://api-sepolia.basescan.org/api",
          browserURL: "https://sepolia.basescan.org",
        },
      },
      {
        network: "baseMainnet",
        chainId: 8453,
        urls: {
          apiURL: "https://api.basescan.org/api",
          browserURL: "https://basescan.org",
        },
      },
    ],
  },
};