import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ProductDetails from "../pages/ProductDetails";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import AdminPage from "../pages/adminPage";
import ProtectedRoute from "../components/ProtectedRoute";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "product/:id",
      element: <ProductDetails />,
    },
    {
      path: "/admin",
      element: (
        <ProtectedRoute>
          <AdminPage />,
        </ProtectedRoute>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
