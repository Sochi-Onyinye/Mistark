import React from 'react';
import * as icon from 'react-bootstrap-icons';
import LandingPage from './Views/LandingPage';
import NavBar from './Views/NavBar';

const App = () => (
  <React.StrictMode>
    <div>
      <NavBar/>
      <LandingPage/>
    </div>
    
  </React.StrictMode>
);

export default App;