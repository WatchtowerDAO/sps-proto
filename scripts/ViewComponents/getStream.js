const { ethers } = require("ethers");

// Initialize the provider
const sps = new ethers.Contract(sablierContractAddress, sablierABI ,signerOrProvider);
const streamId = 42;

// view stream data
const stream = await sps.getStream(streamId);