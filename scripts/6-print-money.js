import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule("0x1CB953bdf4d40C155C7Be110bf03D4E3De1C0ae6");

(async () => {
  try {

    const amount = 30_000_000;

    const amountWith18Decimals = ethers.utils.parseUnits(amount.toString(), 18);

    await tokenModule.mint(amountWith18Decimals); 
    const totalSupply = await tokenModule.totalSupply(); 
    console.log("There now is",
      ethers.utils.formatUnits(totalSupply, 18),
      "ASTR in circulation");  

  } catch (error) {
      console.log("failed to print money", error);
  }
})();

