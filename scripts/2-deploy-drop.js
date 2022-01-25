import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";  
import { readFileSync } from "fs"; 


const app = sdk.getAppModule("0x9F0AA45AaE7C5D2B94Cb78Cc8ca1bFb50fDD989f");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      
      name: "Asteri DAO Membership",
      description: "A Dao for Defi Ninjas",
      image: readFileSync("scripts/assets/Ninja.jpeg"),
      primarySaleRecipientAddress: ethers.constants.AddressZero,

    });
      console.log("Successfully deployed bundleDrop Module, Address:", bundleDropModule.address); 

      console.log("bundleDrop MetaData:", await bundleDropModule.getMetadata()); 
  }


  catch (error) {
    console.log("failed to deploy bundleDrop Module", error);
  }
})()


