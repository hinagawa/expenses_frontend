import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import Target from "./pages/Target";
import Statistic from "./pages/Statistic";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/target",
    element: <Target />,
  },
  {
    path: "/statistic",
    element: <Statistic />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
