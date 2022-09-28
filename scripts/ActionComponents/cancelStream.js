const { ethers } = require("ethers");

// Initialize the provider
const sps = new ethers.Contract(sablierContractAddress, sablierABI ,signerOrProvider);
const streamId = 42;

// cancel stream
const cancelStreamTx = await sps.cancelStream(streamId);
await cancelStreamTx.wait();