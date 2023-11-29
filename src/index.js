import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ForgotPassword from "./Pages/ForgotPassword";
import Dashboard from "./Pages/Dashboard";
import Course from "./Pages/Course";
import CourseTable from "./Pages/CourseTable";
import Module from "./Pages/Module";
import AddModule from "./Pages/AddModule";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/Course",
    element: <Course />,
  },
  {
    path: "/CourseTable",
    element: <CourseTable />,
  },
  {
    path: "/Module",
    element: <Module />,
  },
  {
    path: "/AddModule",
    element: <AddModule />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
