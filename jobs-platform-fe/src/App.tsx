import React from 'react';
import logo from './logo.svg';
import { Amplify, API, graphqlOperation, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { SignUp } from './pages/SignUp/SignUp';
import './App.css';

import { signUp, UserSignUpDto } from './services/AuthService';

Amplify.configure(awsconfig);

function App() {
  const user: UserSignUpDto = { username: 'birdzhanmyumyun@gmail.com', password: 'asdfghjkl' }

  return (

      <div className="contentPage">
        <SignUp />
      </div>
     

  );
}

export default App;
