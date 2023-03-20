import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Views/LandingPage';
import NavBar from './Views/NavBar';
import UserLogin from './Views/UserLogin';
import BusinessLogin from './Views/BusinessLogin';
import UserRegistration from './Views/UserRegistration';
import UserFeed from "./Views/UserFeed";
import BusinessAnalytics from "./Views/BusinessAnalytics";
import BusinessRegistration from "./Views/BusinessRegistration";
import RegistrationPage from "./Views/RegistrationPage";
import RegistrationSuccess from "./Views/RegistrationSuccess";
import OnBehalf from "./Views/OnBehalf"



const App = () => (
  <React.StrictMode>
      <NavBar/>
      <Routes>
        <Route path="/login" element={<UserLogin/>} />
        <Route path="/registration" element={<RegistrationPage/>} />
        <Route path="/navbar" element={<NavBar/>} />
        <Route path="/" element={<LandingPage/>} />
        <Route path="/onbehalf" element={<OnBehalf/>} />
  
        <Route path="/userfeed" element={<UserFeed/>} />
        <Route path="/businesslogin" element={<BusinessLogin/>} />
        <Route path="/businessanalytics" element={<BusinessAnalytics/>} />
        <Route path="/businessRegistration" element={<BusinessRegistration/>} />
        <Route path="/userregistration" element={<UserRegistration/>} />
        <Route path="/registrationsuccess" element={<RegistrationSuccess/>} />
      </Routes>
    
  </React.StrictMode>
);

export default App;