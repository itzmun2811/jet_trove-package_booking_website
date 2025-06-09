import {
  createBrowserRouter,
} from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../components/Home";
import AllPackages from "../pages/AllPackages";
import About from "../pages/About";
import MyBookings from "../PrivatePage/MyBookings";
import AddPackage from "../PrivatePage/AddPackage";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[{
      index:true,
      path:"/",
      element:<Home></Home>
    },
    {
   path:"/allPackages",
   element:<AllPackages></AllPackages>
    },
    {
    path:"/about",
    element:<About></About>
    },
    {
    path:"/mybookings",
    element:<MyBookings></MyBookings>
    },
    {
      path:"/addPackage",
      element:<AddPackage></AddPackage>

    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/register',
      element:<Register></Register>
    }
  
  
  ]
  },
]);