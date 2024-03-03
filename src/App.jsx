import React from 'react'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RegisterSignUp from './registerSignupComponent/RegisterSignUp';
import RegisterLogin from './registerLoginComponent/RegisterLogin';
import Signup from './signupComponent/Signup';
import Login from './loginComponents/Login';
import LandingPage from './landingPageComponents/LandingPage';
import DashBoad from './dashBoardComponent/DashBoard';
import Testimony from './testimonyComponent/Testimony';
import Layout from './layoutComponent/Layout';
import ShopPage from './pagesComponent/ShopPage';
import OfferPage from './pagesComponent/OfferPage';
import OurOffer from './ourOfferComponent/OurOffer';
import PlanPage from './pagesComponent/PlanPage';
import AboutPage from './pagesComponent/AboutPage';
import ContactPage from './pagesComponent/ContactPage';
import DashboardLayout from './dashboardLayoutComponent/DashboardLayout';
import Order from './orderComponent/Order';
import Subscribe from './subscribeComponent/Subscribe';
import DashBoard from './dashBoardComponent/DashBoard';
import Plan from './signupComponent/planComponent/Plan';
// import BusinessPage from './modulesComponent/businessPage';
import BusinessP from './modulesComponent/Test';
import LoginModules from './LoginModules/LoginCard';
import Verify from './verifyPage/verify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />
      },
      {
        path: "/shopPage",
        element: <ShopPage />
      },
      {
        path: "/offer",
        element: <OfferPage />
      },
      {
        path: "/plans",
        element: <Plan />
      },
      {
        path: "/aboutPage",
        element: <AboutPage />
      },
      {
        path: "/contactPage",
        element: <ContactPage />
      },
    ]
  },
  {
    path: "/registerSignup",
    element: <RegisterSignUp />
  },


  {
    path: "/registerLogin",
    element: <RegisterLogin />
  },


  {
    path: "/signup",
    element: <Signup />
  },


  {
    path: "/login",
    element: <Login />
  },


  {
    path: "/verify",
    element: <Verify />
  },


  {
    path: "/businessPage",
    element: <BusinessP/>
  },

  {
    path: "*",
    element: <div>Page not found</div>
  },

 


  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboards",
        element: <DashBoard/>
      },
      {
        path: "/order",
        element: <Order/>
      },
      {
        path: "/subscribe",
        element: <Subscribe/>
      },

    ]
  },
]);



const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

