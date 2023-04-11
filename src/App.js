import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Views/NavBar.jsx';
import BusinessLogin from './Views/BusinessLoginView.jsx';
import UserRegistration from './Views/UserRegistration.jsx';
import UserFeed from "./Views/UserFeed.jsx";
import BusinessAnalytics from "./Views/BusinessAnalytics.jsx";
import BusinessRegistration from "./Views/BusinessRegistration.jsx";
import BusinessPageController from './View Controllers/BusinessPageController.js';
import RegistrationPage from "./Views/RegistrationPage.jsx";
import LandingPageViewController from './View Controllers/LandingPageViewController.js';
import UserLoginViewController from './View Controllers/UserLoginViewController.js';
import RegistrationSuccess from "./Views/RegistrationSuccess.jsx";
import OnBehalf from "./Views/OnBehalf.jsx"
import UnderReview from './Views/UnderReview.jsx';
import EmailConfirmationController from './View Controllers/EmailConfirmationController.js';
import UserRegistrationViewController from './View Controllers/UserRegistrationViewController.js';
import VerifyRegistrationViewController from './View Controllers/VerifyRegistrationViewController.js';
import NavPanel from './Views/NavPanel.jsx'
import ReviewPage from './Views/ReviewPage.jsx';

const App = () => (
  <React.StrictMode>
      <Routes>
        <Route path="/login" element={<UserLoginViewController/>} />
        <Route path="/registration" element={<RegistrationPage/>} />
        <Route path="/navbar" element={<NavBar/>} />
        <Route path="/navpanel" element={<NavPanel/>} />
        <Route path="/" element={<LandingPageViewController/>} />
        <Route path="/userfeed" element={<UserFeed/>} />
        <Route path="/businesslogin" element={<BusinessLogin/>} />
        <Route path="/businesses/:businessID" element={<BusinessPageController/>}
        <Route path="/categories/:categoryID" element={<BusinessPage/>} />
        <Route path="/businessanalytics" element={<BusinessAnalytics/>} />
        <Route path="/businessRegistration" element={<BusinessRegistration/>} />
        <Route path="/userregistration" element={<UserRegistrationViewController/>} />
        <Route path="/registrationsuccess" element={<RegistrationSuccess/>} />
        <Route path="/underreview" element={<UnderReview/>} />
        <Route path="/emailconfirmation/:username" element={<EmailConfirmationController/>} />
        <Route path="/onbehalf" element={<OnBehalf/>} />
        <Route path="/businesspage" element={<BusinessPage/>} />
        <Route path="/reviewpage" element={<ReviewPage/>} />
      </Routes>
    
  </React.StrictMode>
);

export default App;