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
import PrivateRouter from '../Provider/PrivateRouter';

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
            element:<PrivateRouter><ServiceDetails></ServiceDetails></PrivateRouter>,
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
            element:<PrivateRouter><AddServicePage></AddServicePage></PrivateRouter>
        },
        {
            path:'/myService',
            element:<PrivateRouter><MyService></MyService></PrivateRouter>

        },
        {
            path:'/myReview',
            element:<PrivateRouter><MyReview></MyReview></PrivateRouter>
        }
      ]
    },
  ]);

export default router;