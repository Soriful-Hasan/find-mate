import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "../Home/Root";
import Home from "../Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
