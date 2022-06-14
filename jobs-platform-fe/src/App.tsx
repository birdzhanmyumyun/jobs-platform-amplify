import React from 'react';
import logo from './logo.svg';
import { Amplify, API, graphqlOperation, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { SignUpPage } from './pages/SignUp/SignUpPage';
import { AppRoutes } from './routes/AppRoutes';
import './App.css';

Amplify.configure(awsconfig);

function App() {

  return (

      <div className="app">
        <AppRoutes />
      </div>
     

  );
}

export default App;
