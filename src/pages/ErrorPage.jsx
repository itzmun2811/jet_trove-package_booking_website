import React from 'react';
import error from "../assets/error1.jpg"
import { NavLink } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='mx-auto w-11/12 '>

            <h1 className='text-3xl font-bold text-pink-600'>404 ERROR !!!</h1>
         <p className="text-lg text-gray-700 mb-8">
    Oops, looks like you've wandered off the map. This page can't be found.
  </p>
  <div>
    <img src={error} alt="" />
  </div>
  <NavLink to='/'>Return Your Home</NavLink>
        </div>
    );
};

export default ErrorPage;