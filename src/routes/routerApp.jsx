import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/registro", element: <Register /> },
  { path: "/dashboard", element: <Dashboard /> },
]);

function RouterApp() {
  return <RouterProvider router={router} />;
}

export default RouterApp;