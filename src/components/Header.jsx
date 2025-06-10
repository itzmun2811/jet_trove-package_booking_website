import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, Links, NavLink } from 'react-router';
import logo2 from "../../src/assets/logo2.webp"

const Header = () => {
  const {user,logOut} =use(AuthContext);
  console.log(user?.photoURL)

  const links=<>
  <Link to="/">Home</Link>
  <Link className='mx-3' to="/allPackages">All Packages</Link>
  <Link className='mr-3' to="/about">About Us</Link>
  {user && <Link to='/mybookings'>My Bookings</Link>}
  </>

  const handleLogOut=()=>{
  logOut()
  .then(console.log('no user'))
  .catch(error=>{console.log(error)})
  }
    return (
       <>
<div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      {links}
      </ul>
    </div>
    <div className='flex justify-center items-center'>
      <div className='rounded-full w-16 h-16 shadow-2xl overflow-hidden '>
<img className=' w-full h-full object-cover' src={logo2} alt="" />
      </div>
      
      < h1 className=" text-xl font-bold">Jet_Trove</h1>
    </div>
 
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
{(user) ? 
   
   <>
<div className="dropdown dropdown-start mr-8">
  <div tabIndex={0} role="" className="m-1">
<div className="avatar">
  <div className="w-24 rounded-full">
    <img className="w-[100px]  p-4 rounded-full" src={user?.photoURL} alt="" />
  </div>
</div>


</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 mr-8 shadow-sm">
   <li><NavLink to='/addPackage'>Add Package
    </NavLink>
    </li>
   <li><NavLink to='/managePackage'>Manage Package
    </NavLink></li>

       <li><button onClick={handleLogOut}>Logout</button></li> 
  </ul>
</div>

</> :<>
     <button className='btn'><NavLink to='/login'>Login</NavLink> 
    </button>
   
    </>
    
  
  }
  </div>


      

  


</div>
       </>
    );
};

export default Header;