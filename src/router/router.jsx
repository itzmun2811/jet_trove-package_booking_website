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
import BookNow from "../PrivatePage/BookNow";
import ErrorPage from "../pages/ErrorPage";
import UpdatePackage from "../PrivatePage/UpdatePackage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



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
    element:<PrivateRoute><MyBookings></MyBookings></PrivateRoute>
    },
    {
      path:"/addPackage",
      element: <PrivateRoute><AddPackage></AddPackage></PrivateRoute>

    },
    {
      path:"/managePackage",
      element:<PrivateRoute><ManagePackage></ManagePackage></PrivateRoute>

    },
    {
      path:"/updatePackage/:id",
      element:<PrivateRoute><UpdatePackage></UpdatePackage></PrivateRoute>

    },
    {
      path:"/packageDetails/:id",
      element:<PrivateRoute><PackageDetails></PackageDetails></PrivateRoute>
    },
    {
      path:"/bookNow/:id",
      element:<PrivateRoute><BookNow></BookNow></PrivateRoute>
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
  },{
    path:'*',
    element:<ErrorPage></ErrorPage>
  }
]);