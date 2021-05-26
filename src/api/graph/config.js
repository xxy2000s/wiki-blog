// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// <msalConfigSnippet>

export const msalConfig = {
    auth: {
      clientId: "4e32a383-f87b-4dc9-9fd3-5c55856509dc",
      redirectUri: "http://localhost:3000 /todo",
      authority: "https://login.microsoftonline.com/consumers/",
    },
    cache: {
      cacheLocation: "localStorage",
    },
  };
  
  export const msalRequest = {
    scopes: [
      "user.read",
      "mailboxsettings.read",
      "calendars.readwrite",
      "tasks.readwrite",
    ],
  };
  // </msalConfigSnippet>
  