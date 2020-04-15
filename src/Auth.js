import React from 'react';
import {TeamsProvider} from '@microsoft/mgt';

function Auth() {

  TeamsProvider.handleAuth();

  return (
    <div>
      Signing you in!
    </div>
  );
}

export default Auth;
