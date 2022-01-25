import sdk from "./1-initialize-sdk.js"; 

const tokenModule = sdk.getTokenModule("0x1CB953bdf4d40C155C7Be110bf03D4E3De1C0ae6");

(async () => {
  try {
    console.log("Roles that exist right now:", await tokenModule.getAllRoleMembers());

    await tokenModule.revokeAllRolesFromAddress(process.env.WALLET_ADDRESS);

    console.log("Roles after revoking ourselves: ", await tokenModule.getAllRoleMembers());

    console.log("Successfully revoked our superpowers from ERC-20 contract");
  } catch (err) {
    console.error("Failed to revoke ourselves from DAO treasury", error);
  }
})(); 