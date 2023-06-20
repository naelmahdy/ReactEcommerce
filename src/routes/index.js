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
import AddProduct from "../pages/Admin/AddProduct/AddProduct";
import EditProduct from "../pages/Admin/EditProduct/EditProduct";
import AdminLogin from "../pages/Admin/AdminLogin/AdminLogin";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import Shipping from "../components/Shipping/Shipping";


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
      },
      {
        path: "shipping",
        element:
          <ProtectedRoute adminData={() => { return localStorage.getItem('userData') }}>
            <Shipping />
          </ProtectedRoute>
      }
    ],
  },
  {
    path: "admin",
    errorElement: <h1> 404 Not Found Page</h1>,
    element: <AdminLayout />,
    children: [

      {
        path: "", element:
          <ProtectedRoute adminData={() => { return localStorage.getItem('adminData') }}>
            <AdminProducts />
          </ProtectedRoute>
      },

      { path: "login", element: <AdminLogin /> },

      {
        path: "add-product", element:
          <ProtectedRoute adminData={() => { return localStorage.getItem('adminData') }}>
            <AddProduct />
          </ProtectedRoute>
      },
      {
        path: "edit-product/:id", element:
          <ProtectedRoute adminData={() => { return localStorage.getItem('adminData') }}>
            <EditProduct />
          </ProtectedRoute>
      }

    ]
  }

]);
