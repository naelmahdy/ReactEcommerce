import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage/Home";
import Homelayout from "../layouts/Homelayout";
import Product from "../pages/product/product";
import Products from "../pages/products/products";
import CartPage from "../pages/CartPage/CartPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AdminLayout from "../layouts/AdminLayout";
import AdminProducts from "../pages/Admin/AdminProducts/AdminProducts";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout />,
    errorElement: <h1> 404 Not Found Page</h1>,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
      {
        path: "about",
        element: <div className="text-center" style={{ margin: '150px auto' }}>"Hello About Page"</div>,
      },
      {
        path: "products/:id",
        element: <Products />,
      },
      {
        path: "product/:id",
        element: <Product />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      }
    ],
  },
  {
    path: "admin",
    errorElement: <h1> 404 Not Found Page</h1>,
    element: <AdminLayout />,
    children: [
      { path: "products", element: <AdminProducts /> },

    ]
  }

]);
