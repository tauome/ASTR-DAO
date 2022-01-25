import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const bundleDropModule = sdk.getBundleDropModule("0xA46b8Fee10d4E5FDE58a77ef702F8f6B3a9dc7d5");

const tokenModule = sdk.getTokenModule("0x1CB953bdf4d40C155C7Be110bf03D4E3De1C0ae6");

(async ()=> {

  try {
    const walletAddresses = await bundleDropModule.getAllClaimerAddresses("0");

      if (walletAddresses === 0) {
        console.log(
          "No NFT have been claimed yet. Get members to claim membership NFTs"
          ); 
        process.exit(0);
      }

      const airdropTargets = walletAddresses.map((address)=> {
        const randomAmount = Math.floor(Math.random()*(10000 - 1000 + 1) + 1000);
        console.log("going to airdrop", randomAmount, "token to", address); 

        const airdropTarget = {
          address, 

          amount: ethers.utils.parseUnits(randomAmount.toString(), 18),
        };

        return airdropTarget;
      });
        console.log("starting airdrop");
        await tokenModule.transferBatch(airdropTargets);
        console.log("Sucessfully airdropped tokens to all holders of the NFT!");
      } catch (err) {
        console.error("Failed to airdrop tokens", err);
      }

})();