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
import ManagePackage from "../PrivatePage/ManagePackage";
import PackageDetails from "../PrivatePage/PackageDetails";



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
   element:<AllPackages></AllPackages>,
   loader:()=>fetch('http://localhost:3000/addPackage')
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
      path:"/managePackage",
      element:<ManagePackage></ManagePackage>

    },
    {
      path:"/packageDetails/:id",
      element:<PackageDetails></PackageDetails>

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