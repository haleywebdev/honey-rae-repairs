// Basic react component that allows us to start using all of the features that come with react library

import React from 'react';

import ReactDOM from 'react-dom';
import { CustomerList } from './components/customers/CustomerList';
import { EmployeeList } from './components/employees/EmployeeList';

// Rendering our first component to make it run. We invoke it on line 16 in JSX.
import { Repairs } from './components/Repairs';

import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Repairs />
    <CustomerList />
    <EmployeeList />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

