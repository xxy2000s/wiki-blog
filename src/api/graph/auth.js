import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig,msalRequest } from "./config.js";
import * as msal from '@azure/msal-browser'
import { Client } from "@microsoft/microsoft-graph-client/lib/src/Client";
export const msalInstance = new PublicClientApplication(msalConfig);
const accounts = msalInstance.getAllAccounts();
console.log(accounts);
export const LoginPop = async function() {
  await msalInstance
    .loginPopup({})
    .then(() => {
      const myAccounts = msalInstance.getAllAccounts();
      let account = myAccounts[0];
      console.log(account);
      sessionStorage.setItem('msalAccount', account.username);
    //   this.$emitter.emit("login", this.account);
    })
    .catch((error) => {
      console.error(`error during authentication: ${error}`);
    });
};

export const LogoutPop = async function() {
  await msalInstance
    .logoutPopup({})
    .then(() => {
    //   this.$emitter.emit("logout", "logging out");
    sessionStorage.removeItem('msalAccount')
    })
    .catch((error) => {
      console.error(error);
    });
};

export const GetToken=async (accountName)=>{  
    let account = sessionStorage.getItem('msalAccount');
    if (!account){
      throw new Error(
        'User account missing from session. Please sign out and sign in again.');
    }
  
    try {
      // First, attempt to get the token silently
      const silentRequest = {
        scopes: msalRequest.scopes,
        account: msalInstance.getAccountByUsername(accountName)
      };
  
      const silentResult = await msalInstance.acquireTokenSilent(silentRequest);
      return silentResult.accessToken;
    } catch (silentError) {
      // If silent requests fails with InteractionRequiredAuthError,
      // attempt to get the token interactively
      if (silentError instanceof msal.InteractionRequiredAuthError) {
        const interactiveResult = await msalInstance.acquireTokenPopup(msalRequest);
        return interactiveResult.accessToken;
      } else {
        throw silentError;
      }
    }
}

 const authProvider = {
    getAccessToken: async () => {
        let account = sessionStorage.getItem('msalAccount');
      // Call getToken in auth.js
      return await GetToken(account);
    }
  };

  export  const graphClient = Client.initWithMiddleware({authProvider});