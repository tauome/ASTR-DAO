import sdk from "./1-initialize-sdk.js";

const appModule = sdk.getAppModule("0x9F0AA45AaE7C5D2B94Cb78Cc8ca1bFb50fDD989f"); 

(async ()=> {
  try {

    const voteModule = await appModule.deployVoteModule({
      name: "Asteri DAO's Proposals",

      votingTokenAddress: "0x1CB953bdf4d40C155C7Be110bf03D4E3De1C0ae6",

      proposalStartWaitTimeInSeconds: 0,

      proposalVotingTimeInSeconds: 24 * 60 * 60,

      votingQuorumFraction: 0,

      minimumNumberOfTokensNeededToPropose: "0",


    });
    console.log("Successfully deployed vote module, address:", voteModule.address); 
  } catch (err) {
    console.error("failed to deploy vote module", error);
  }
})();

