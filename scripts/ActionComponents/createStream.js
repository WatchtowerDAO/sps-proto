const { ethers } = require("ethers");

// Initialize the provider
const sps = new ethers.Contract(sablierContractAddress, sablierABI ,signerOrProvider);
const receipientSat = 0xB1eDf7b2b5EA6dAf5e2E25CcF139f4c780ea9fc6;   // test-acct-1 address
const streamDeposit = "2999999999999998944000";

// timestamp in seconds
const currentTime = Math.round(new Date().getTime() / 1000); // get seconds since unix epoch
const startTime = currentTime + 3600; // 1 hour from now
const stopTime = currentTime + 2592000 + 3600; // 30 days and 1 hour from now

// streamToken
const streamToken = new ethers.Contract(streamTokenAddress, streamTokenABI, signerOrProvider); 
const approveTx = await streamToken.approve(sps.address, streamDeposit); // approve the transfer
await approveTx.wait();

// create stream
const createStreamTx = await sps.createStream(receipientSat, streamDeposit, streamToken.address, startTime, stopTime);
await createStreamTx.wait();