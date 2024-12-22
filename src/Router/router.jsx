import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root';
import HomeLayout from '../Layout/HomeLayout';
import Service from '../Pages/Service';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import AddServicePage from '../Pages/AddServicePage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<HomeLayout></HomeLayout>
        },
        {
            path:'/service',
            element:<Service></Service>

        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>

        },
        {
            path:'/addService',
            element:<AddServicePage></AddServicePage>
        }
      ]
    },
  ]);

export default router;