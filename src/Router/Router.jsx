import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "../Home/Root";
import Home from "../Home/Home";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import FindRoommate from "../Page/FindRoommate";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import BrowseListing from "../Page/BrowseListing";
import MyListing from "../Page/MyListing";
import Error from "../Components/Error";
import DetailsRoommate from "../Components/RouteComponents/DetailsRoommate";
import UpdateDetails from "../Page/UpdateListing";
import Loader from "../Components/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/roommateDetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://roommate-finder-server-steel.vercel.app/roommateData/${params.id}`
          ),
        element: (
          <ProtectedRoute>
            <DetailsRoommate></DetailsRoommate>
          </ProtectedRoute>
        ),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "/findRoommate",
        element: (
          <ProtectedRoute>
            <FindRoommate></FindRoommate>
          </ProtectedRoute>
        ),
      },
      {
        path: "/myListing",
        element: (
          <ProtectedRoute>
            <MyListing></MyListing>
          </ProtectedRoute>
        ),
      },
      {
        path: "/browseListing",
        element: <BrowseListing></BrowseListing>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/updateDetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://roommate-finder-server-steel.vercel.app/roommateData/${params.id}`
          ),
        element: <UpdateDetails></UpdateDetails>,
        hydrateFallbackElement: <Loader></Loader>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
