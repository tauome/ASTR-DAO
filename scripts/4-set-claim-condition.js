import sdk from "./1-initialize-sdk.js";

const bundleDrop = sdk.getBundleDropModule("0xA46b8Fee10d4E5FDE58a77ef702F8f6B3a9dc7d5");

(async () => {
  try {
    const claimConditionFactory = bundleDrop.getClaimConditionFactory(); 

    claimConditionFactory.newClaimPhase({
    startTime: new Date(), 
    maxQuantity: 100,
    maxQuantityPerTransaction: 1,
    });

    await bundleDrop.setClaimCondition(0, claimConditionFactory); 
    console.log("Successfully set claim condition on bundleDrop", bundleDrop.address);
  } catch (error) {
    console.error("failed to set claim condition", error)
  }
})()