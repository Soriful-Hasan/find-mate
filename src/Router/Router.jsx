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
import DashBoard from "../Layout/DashBoard/DashBoard";
import DashboardMain from "../Page/DashBoard/DashboardMain";
import UpdateProfile from "../Page/DashBoard/UpdateProfile";
import ContactUs from "../Page/ContactUs/ContactUs";
import AboutUs from "../Page/AboutUs/AboutUs";

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
        path: "contact",
        Component: ContactUs,
      },
      {
        path: "about",
        Component: AboutUs,
      },
      {
        path: "/roommateDetails/:id",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_url}/roommateData/${params.id}`),
        element: (
          <ProtectedRoute>
            <DetailsRoommate></DetailsRoommate>
          </ProtectedRoute>
        ),
        hydrateFallbackElement: <Loader></Loader>,
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
    ],
  },
  {
    path: "/dashBoard",
    element: (
      <ProtectedRoute>
        <DashBoard></DashBoard>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "dashBoardMain",
        Component: DashboardMain,
      },

      {
        path: "findRoommate",
        element: (
          <ProtectedRoute>
            <FindRoommate></FindRoommate>
          </ProtectedRoute>
        ),
      },
      {
        path: "myListing",
        element: (
          <ProtectedRoute>
            <MyListing></MyListing>
          </ProtectedRoute>
        ),
      },
      {
        path: "updateDetails/:id",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_url}/roommateData/${params.id}`),
        element: <UpdateDetails></UpdateDetails>,
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "updateProfile",
        Component: UpdateProfile,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
