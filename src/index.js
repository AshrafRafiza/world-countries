import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Helmet} from "react-helmet";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <>
      <Helmet>
        <title>Country App</title>
        <meta name="World Countries" content="World countries application" />
      </Helmet>
      <App />
    </>
  </BrowserRouter>
);
