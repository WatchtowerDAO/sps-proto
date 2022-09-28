const { ethers } = require("ethers");

// Initialize the provider
‌const sps = new ethers.Contract(sablierContractAddress, sablierABI ,signerOrProvider);
const streamId = 42;
const withdrawAmount = 1729;

// withdraw from stream
const withdrawFromStreamTx = await sps.withdrawFromStream(streamId, withdrawAmount);
await withdrawFromStreamTx.wait();