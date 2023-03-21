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
import LandingPageViewController from './View Controllers/LandingPageViewController.js';
import RegistrationSuccess from "./Views/RegistrationSuccess";
import OnBehalf from "./Views/OnBehalf"
import UnderReview from './Views/UnderReview';
import EmailConfirmation from './Views/EmailConfirmation';



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
        <Route path="/registrationsuccess" element={<RegistrationSuccess/>} />
        <Route path="/underreview" element={<UnderReview/>} />
        <Route path="/emailconfirmation" element={<EmailConfirmation/>} />
      </Routes>
    
  </React.StrictMode>
);

export default App;