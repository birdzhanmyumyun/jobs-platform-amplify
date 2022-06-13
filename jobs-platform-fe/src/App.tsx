import React from 'react';
import logo from './logo.svg';
import { Amplify, API, graphqlOperation, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { SignUpPage } from './pages/SignUp/SignUpPage';
import { AppRoutes } from './routes/AppRoutes';
import './App.css';


import { signUp, UserSignUpDto } from './services/AuthService';

Amplify.configure(awsconfig);

function App() {
  const user: UserSignUpDto = { username: 'birdzhanmyumyun@gmail.com', password: 'asdfghjkl' }

  return (

      <div className="app">
        <AppRoutes />
      </div>
     

  );
}

export default App;
