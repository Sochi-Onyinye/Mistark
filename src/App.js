import React from 'react';
import LandingPage from './Views/LandingPage';
import NavBar from './Views/NavBar';
import BusinessLogin from './Views/BusinessLogin';


const App = () => (
  <React.StrictMode>
      <div>
        <NavBar/>
        <LandingPage/>
        <BusinessLogin/>
      </div>
  </React.StrictMode>
);

export default App;