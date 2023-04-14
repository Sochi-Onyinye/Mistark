import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './Views/NavBar.jsx';
import BusinessLogin from './Views/BusinessLoginView.jsx';
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
import ReviewSuccess from './Views/ReviewSuccess.jsx';
import AboutPage from './Views/AboutPage.jsx';
import HelpPage from './Views/HelpPage.jsx';
import BusinessPageBController from './View Controllers/BusinessPageBController.js';
import AddService from './Views/AddService.jsx';
import BusinessPage from './Views/BusinessPage.jsx';
import { AwsRum, AwsRumConfig} from 'aws-rum-web'
import UserFeedViewController from './View Controllers/UserFeedViewController.js';
import BusinessLoginViewController from './View Controllers/BusinessLoginViewController.js';

try {
  const config: AwsRumConfig = {
    sessionSampleRate: 1,
    guestRoleArn: "arn:aws:iam::329546288013:role/RUM-Monitor-eu-west-1-329546288013-0610979321861-Unauth",
    identityPoolId: "eu-west-1:943b3ccb-059d-4805-9930-37008ed144e3",
    endpoint: "https://dataplane.rum.eu-west-1.amazonaws.com",
    telemetries: ["performance","errors","http"],
    allowCookies: true,
    enableXRay: false,
    disableAutoPageView: true
  };

  const APPLICATION_ID: string = '951b34ed-3c55-45aa-b885-383cc312925d';
  const APPLICATION_VERSION: string = '1.0.0';
  const APPLICATION_REGION: string = 'eu-west-1';

  awsRum: AwsRum = new AwsRum(
    APPLICATION_ID,
    APPLICATION_VERSION,
    APPLICATION_REGION,
    config
  );
} catch (error) {
  // Ignore errors thrown during CloudWatch RUM web client initialization
}


function RecordPageView() {
  let location = useLocation();
  React.useEffect(() => {
    console.log('logging pageview to cwr: ' + location.pathname);
    AwsRum.recordPageView(location.pathname);
  }, [location]);
}

function RecordPageViewWithoutUserId() {
  let location = useLocation();
  let baseLocation = location.pathname.split('/');
  baseLocation.pop();
  const baseLocationPath = baseLocation.join('/')
  React.useEffect(() => {
    console.log(baseLocationPath);
    AwsRum.recordPageView(baseLocationPath);
  }, [baseLocationPath]);
}


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log('recordingError: ' + error)
    AwsRum.recordError(error);
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h1>Something went wrong.</h1>
          <button onClick={() => {window.location.href = '/'}}>Clear Error</button>
        </div>
      );
    }
    return this.props.children; 
  }
}


const App = () => (
  <React.StrictMode>
    <ErrorBoundary>
      <Routes>
        <Route path="/login" element={<UserLoginViewController/>} />
        <Route path="/registration" element={<RegistrationPage/>} />
        <Route path="/navbar" element={<NavBar/>} />
        <Route path="/navpanel" element={<NavPanel/>} />
        <Route path="/" element={<LandingPageViewController/>} />
        <Route path="/userfeed" element={<UserFeedViewController/>} />
        <Route path="/businesslogin" element={<BusinessLoginViewController/>} />
        <Route path="/business/:businessID" element={<BusinessPageController/>}/>
        <Route path="/business/:businessID" element={<BusinessPageBController/>}/>
        {/* <Route path="/categories/:categoryID" element={<BusinessPage/>} /> */}
        <Route path="/businessanalytics" element={<BusinessAnalytics/>} />
        <Route path="/businessRegistration" element={<BusinessRegistration/>} />
        <Route path="/userregistration" element={<UserRegistrationViewController/>} />
        <Route path="/registrationsuccess" element={<RegistrationSuccess/>} />
        <Route path="/underreview" element={<UnderReview/>} />
        <Route path="/emailconfirmation/:username" element={<EmailConfirmationController/>} />
        <Route path="/onbehalf" element={<OnBehalf/>} />
        <Route path="/reviewpage" element={<ReviewPage/>} />
        <Route path="/reviewsuccess" element={<ReviewSuccess/>} />
        <Route path="/aboutpage" element={<AboutPage/>} />
        <Route path="/helppage" element={<HelpPage/>} />
        <Route path="/addservice" element={<AddService/>} />
      </Routes>
    </ErrorBoundary>
    
  </React.StrictMode>
);

export default App;