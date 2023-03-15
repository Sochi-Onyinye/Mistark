import React from "react";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import App from "./App";
import { Amplify } from 'aws-amplify';
import config from './aws-exports.js';

Amplify.configure(config)

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

