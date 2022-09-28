const { ethers } = require("ethers");

// Initialize the provider
const sps = new ethers.Contract(sablierContractAddress, sablierABI ,signerOrProvider);
const streamId = 42;
const senderSatAddress = 0x55806B121F85f88175627b962137Adc2e4320803;

// view stream balance
const balance = await sps.balanceOf(streamId, senderSatAddress);