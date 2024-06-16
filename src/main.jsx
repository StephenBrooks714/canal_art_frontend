// dependencies
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { AuthProvider } from '@descope/react-sdk';

// pages
import App from './App.jsx'
import About from "./pages/AboutPage.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Artportunity from "./pages/Artportunity.jsx";
import Programs from "./pages/Programs.jsx";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

// react router
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/about",
        element: <About/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/artportunity",
        element: <Artportunity/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/programs",
        element: <Programs/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/login",
        element: <Login/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/register",
        element: <Register/>,
        errorElement: <ErrorPage />,
    }
]);

// app mounting
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider
            projectId='P2hwIdyL38KIgwdClKN9PiPfzF9g'
        >
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);
