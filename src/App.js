import React from 'react';
import {Providers, TeamsProvider} from '@microsoft/mgt';

Providers.globalProvider = new TeamsProvider({
  clientId: 'a974dfa0-9f57-49b9-95db-90f04ce2111a',
  authPopupUrl: '/auth'
})

function App() {
  return (
    <div>
      <mgt-login></mgt-login>
      <mgt-person person-query="alex" show-name person-card="hover"></mgt-person>
      <mgt-teams-channel-picker></mgt-teams-channel-picker>
    </div>
  );
}

export default App;
