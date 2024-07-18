import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import UnderConstruction from "./pages/UnderConstruction.tsx";
import AdminPage from "./pages/AdminPage.tsx";
import CartPage from "./pages/CartPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <UnderConstruction />,
      },
      {
        path: "features",
        element: <UnderConstruction />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "admin",
        element: <AdminPage />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
