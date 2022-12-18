import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginScreen from './authScreens/LoginScreen';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import LandingPage from './landingPage/LandingPage';
import SignupScreen from './authScreens/SignupScreen';
import SignupChoice from './authScreens/SignupChoice';
import SignupDriver from './authScreens/SignupDriver';
import ForgotPassword from './authScreens/ForgotPassword';
import ResetPassword from './authScreens/ResetPassword';
import CargoEstimate from './authScreens/CargoEstimate';
import DriverDetail from './authScreens/DriverDetail';
import DriversRequirement from './authScreens/DriversRequirement';
import UploadClient from './authScreens/UploadClient';
import UploadDriver from './authScreens/UploadDriver';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/login",
    element: <LoginScreen/>,
  },
  {
    path: "/signup",
    element: <SignupScreen/>,
  },
  {
    path: "/choice",
    element: <SignupChoice/>,
  },
  {
    path: "/driver",
    element: <SignupDriver/>,
  },
  {
    path: "/forgot",
    element: <ForgotPassword/>,
  },
  {
    path: "/reset",
    element: <ResetPassword/>,
  },
  {
    path: "/estimate",
    element: <CargoEstimate/>,
  },
  {
    path: "/driverdetail",
    element: <DriverDetail/>,
  },
  {
    path: "/uploadclient",
    element: <UploadClient/>,
  },
  {
    path: "/uploaddriver",
    element: <UploadDriver/>,
  },
  {
    path: "/terms",
    element: <DriversRequirement/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
