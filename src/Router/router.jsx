import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root';
import HomeLayout from '../Layout/HomeLayout';
import Service from '../Pages/Service';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import AddServicePage from '../Pages/AddServicePage';
import ServiceDetails from '../Pages/ServiceDetails';
import MyService from '../Pages/MyService';
import MyReview from '../Pages/MyReview';

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
            path:'/details/:id',
            element:<ServiceDetails></ServiceDetails>,
            loader:({params})=>fetch(`http://localhost:5000/service/${params.id}`)
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
        },
        {
            path:'/myService',
            element:<MyService></MyService>

        },
        {
            path:'/myReview',
            element:<MyReview></MyReview>
        }
      ]
    },
  ]);

export default router;