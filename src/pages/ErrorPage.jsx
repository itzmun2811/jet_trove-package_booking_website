import React from 'react';
import error from "../assets/error.jpg"
import { NavLink } from 'react-router';
import Header from '../components/Header';

const ErrorPage = () => {
    return (
        <div className='mx-auto w-11/12 max-w-6xl shadow-2xl mt-24 p-12 m-12 bg-gradient-to-l from-pink-200 to-white'>
            

            <h1 className='text-3xl font-bold text-pink-600 pt-8 text-center'>404 ERROR !!!</h1>
         <p className="text-lg text-gray-700 mb-8 text-center pt-3">
    Oops, looks like you've wandered off the map. This page can't be found.
  </p>
  <div className='mx-auto '>
    <img className='w-[400px] mx-auto' src={error} alt="" />
  </div> 
  <button className='btn mx-auto w-full btn-secondary'>
    <NavLink to='/'>Return Home</NavLink>
  </button>
  
        </div>
    );
};

export default ErrorPage;