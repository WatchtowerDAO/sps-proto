const { ethers } = require("ethers");

// Initialize the provider
const sps = new ethers.Contract(sablierContractAddress, sablierABI ,signerOrProvider);
const streamId = 42;

// view stream amount changes
const delta = await sps.deltaOf(streamId);