import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Views/Navbar.jsx';
import UserLogin from './Views/UserLoginView.jsx';
import BusinessLogin from './Views/BusinessLogin.jsx';
import UserRegistration from './Views/UserRegistration.jsx';
import UserFeed from "./Views/UserFeed.jsx";
import BusinessAnalytics from "./Views/BusinessAnalytics.jsx";
import BusinessRegistration from "./Views/BusinessRegistration.jsx";
import BusinessPage from "./Views/BusinessPage.jsx";
import RegistrationPage from "./Views/RegistrationPage.jsx";
import LandingPageViewController from './View Controllers/LandingPageViewController.js';



const App = () => (
  <React.StrictMode>
      <NavBar/>
      <Routes>
        <Route path="/login" element={<UserLogin/>} />
        <Route path="/registration" element={<RegistrationPage/>} />
        <Route path="/navbar" element={<NavBar/>} />
        <Route path="/" element={<LandingPageViewController/>} />
        <Route path="/userfeed" element={<UserFeed/>} />
        <Route path="/businesslogin" element={<BusinessLogin/>} />
        <Route path="/businesses/:businessID" element={<BusinessPage/>} />
        <Route path="/categories/:categoryID" element={<BusinessPage/>} />
        <Route path="/businessanalytics" element={<BusinessAnalytics/>} />
        <Route path="/businessRegistration" element={<BusinessRegistration/>} />
        <Route path="/userregistration" element={<UserRegistration/>} />
      </Routes>
    
  </React.StrictMode>
);

export default App;