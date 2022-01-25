import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js"; 

const voteModule = sdk.getVoteModule("0x6d84Bb5D4A5B3d5342B535E4ACdD91369F0b00f9");

const tokenModule = sdk.getTokenModule("0x1CB953bdf4d40C155C7Be110bf03D4E3De1C0ae6");

(async ()=> {
  try {
    tokenModule.grantRole("minter", voteModule.address);

    console.log("sucessfully gave vote module permissions to act on token module");
  } catch (err) {
    console.error("failed to give vote module permission to token module", error);
    process.exit(1); 
  }
 
  try {
    const ownedTokenBalance = await tokenModule.balanceOf(process.env.WALLET_ADDRESS);

    const ownedAmount = ethers.BigNumber.from(ownedTokenBalance.value);
    const percent90 = ownedAmount.div(100).mul(2);

    await tokenModule.transfer(voteModule.address, percent90); 

    console.log("successfully transferred tokens to vore module"); 
  } catch (err) {
    console.error("failed to transfer tokens to vote module", err);
  }

})(); 