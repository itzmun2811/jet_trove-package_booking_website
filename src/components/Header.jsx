import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, Links } from 'react-router';

const Header = () => {
  const {user,logOut} =use(AuthContext);

  const links=<>
  <Link to="/">Home</Link>
  <Link className='mx-3' to="/allPackages">All Packages</Link>
  <Link to="/about">About Us</Link>
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
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end">

    {
user ? <>
      <button>{user.email}</button>
      <button onClick={handleLogOut}>logout</button>
      
      </> : <Link to='login'>Login</Link>
    }
    
      

  </div>
</div>


       </>
    );
};

export default Header;