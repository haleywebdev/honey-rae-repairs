// Basic react component that allows us to start using all of the features that come with react library

import React from 'react';
import ReactDOM from 'react-dom';
// Rendering our first component to make it run. We invoke it on line 16 in JSX.
import { Repairs } from './components/Repairs';
// Enable routing for your application. 
// In React, you will use something called a Router to handle the rendering of different components when the user clicks on navigation items. 
//This also allows users to bookmark specific places within a single page app.
import { BrowserRouter }from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Repairs />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

