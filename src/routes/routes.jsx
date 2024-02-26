import { createBrowserRouter } from "react-router-dom";
// layouts
import mainLayout from "@/layouts/mainLayout";
import authLayout from "@/layouts/authLayout";
// pages
import Dashboard from "@/pages/Dashboard/Dashboard";
import Orders from "@/pages/Orders/Orders";
import Restaurants from "@/pages/Restaurants/Restaurants";
import Login from "@/pages/Authentication/Login/Login";
import Register from "@/pages/Authentication/Register/Register";
import Products from "@/pages/Products/Products";


let Routes = createBrowserRouter([
  {
    path: "/",
    Component: mainLayout,
    children: [
      {
        index: true,
        path: "/",
        Component: Dashboard,
      },
      {
        index: true,
        path: "orders",
        Component: Orders,
      },
      {
        index: true,
        path: "restaurants",
        Component: Restaurants,
      },
      {
        index: true,
        path: "products",
        Component: Products,
      },
    ],
  },
  {
    path: "auth",
    Component: authLayout,
    children: [
      {
        index: true,
        path: "login",
        Component: Login,
      },
      {
        index: true,
        path: "register",
        Component: Register,
      },
    ],
  },
]);
export default Routes;
