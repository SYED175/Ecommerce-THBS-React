import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ErrorPage from "./pages/ErrorPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AdminPage from "./pages/AdminPage";
import Providers from "./providers/Providers";

function App() {
  return (
    <Providers>
      <Layout />
    </Providers>
  );
}

export default App;
