import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import App from "./App";
import LandingPage from "./Views/LandingPage";
import UserLogin from "./Views/UserLogin";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<LandingPage/>} />
          <Route path="userlogin" element={<UserLogin/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

