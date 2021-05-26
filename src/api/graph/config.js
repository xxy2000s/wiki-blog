// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// <msalConfigSnippet>

export const msalConfig = {
    auth: {
      clientId: "db576d9e-a6ca-4b99-af61-0741d4bcc8ed",
      redirectUri: "http://localhost:3000/todo",
      authority: "https://login.microsoftonline.com/consumers/"
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
      "Calendars.ReadWrite",
    ],
  };
  // </msalConfigSnippet>
  