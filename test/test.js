const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyToken", function () {
  let token;
  let owner;

  beforeEach(async function () {
    [owner] = await ethers.getSigners();
    const MyToken = await ethers.getContractFactory("MyToken");
    token = await MyToken.deploy("MyToken", "MTK", 1000000);
    await token.waitForDeployment();
  });

  it("Should deploy with correct initial supply", async function () {
    const totalSupply = await token.totalSupply();
    expect(totalSupply).to.equal(ethers.parseEther("1000000"));
  });

  it("Should assign initial supply to owner", async function () {
    const ownerBalance = await token.balanceOf(owner.address);
    expect(ownerBalance).to.equal(ethers.parseEther("1000000"));
  });
});

describe("MyNFT", function () {
  let nft;
  let owner;

  beforeEach(async function () {
    [owner] = await ethers.getSigners();
    const MyNFT = await ethers.getContractFactory("MyNFT");
    nft = await MyNFT.deploy("MyNFT", "MNFT");
    await nft.waitForDeployment();
  });

  it("Should mint NFT", async function () {
    await nft.safeMint(owner.address);
    const balance = await nft.balanceOf(owner.address);
    expect(balance).to.equal(1);
  });
});

describe("MyVault", function () {
  let vault, token;
  let owner, user;

  beforeEach(async function () {
    [owner, user] = await ethers.getSigners();
    const MyToken = await ethers.getContractFactory("MyToken");
    token = await MyToken.deploy("MyToken", "MTK", 1000000);
    await token.waitForDeployment();

    const MyVault = await ethers.getContractFactory("MyVault");
    vault = await MyVault.deploy(await token.getAddress());
    await vault.waitForDeployment();
  });

  it("Should deposit tokens", async function () {
    await token.transfer(user.address, ethers.parseEther("100"));
    await token.connect(user).approve(await vault.getAddress(), ethers.parseEther("50"));
    await vault.connect(user).deposit(ethers.parseEther("50"));

    const balance = await vault.balanceOf(user.address);
    expect(balance).to.equal(ethers.parseEther("50"));
  });
});