import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "./Fonts/Geliat-ExtraBold.otf"
import "./Fonts/Geliat-ExtraLight.otf"
import "./index.css";
import App from "./App.js";
import { Amplify } from 'aws-amplify';
import config  from './aws-exports.js';

Amplify.configure(config)


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
)
