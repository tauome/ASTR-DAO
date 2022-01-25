import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0x9F0AA45AaE7C5D2B94Cb78Cc8ca1bFb50fDD989f"); 

(async ()=> {
  try {
    
    const tokenModule = await app.deployTokenModule({

      name: "Asteri Dao governance token",

      symbol: "ASTR",


    });
    console.log("Sucessfully deployed token Module, address:", tokenModule.address);

  } catch (error) {
      console.log("failed to deploy token module", error);
  }
})();

