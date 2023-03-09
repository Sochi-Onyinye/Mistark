import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Views/LandingPage';
import NavBar from './Views/NavBar';



const App = () => (
  <React.StrictMode>
      <NavBar/>
      <Routes>
        <Route path="/login" element={<UserLogin/>} />
        <Route path="/registration" element={<UserRegistration/>} />
        <Route path="/navbar" element={<NavBar/>} />
        <Route path="/landingpage" element={<LandingPage/>} />
      </Routes>
    
  </React.StrictMode>
);

export default App;