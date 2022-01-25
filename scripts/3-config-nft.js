import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule("0xA46b8Fee10d4E5FDE58a77ef702F8f6B3a9dc7d5");

(async ()=> {
  try {
    await bundleDrop.createBatch([
      {
        name: "Asteri Card",
        description: "This NFT will give you access to Asteri DAO",
        image: readFileSync("scripts/assets/Ninja.jpeg"),   
      },
    ]);
    console.log("Successfully created a new NFT in the drop!");
  } catch (error) {
      console.log("failed to create the new NFT", error); 
  }
})()


