import React from 'react';
import banner from "../assets/beach1.jpeg"
import Typewriter from 'typewriter-effect';
import { NavLink } from 'react-router';
const Banner1 = () => {
    return (
        <div
  className="hero min-h-screen w-11/12 mx-auto "
  style={{
    backgroundImage:
      `url(${banner})`,
  }}
>
    
  <div className="hero-overlay"></div>
  <div className=' p-12 mb-2 text-white mx-auto max-w-xl  px-4 flex gap-4'>
  <input type="text" placeholder="Where You Want to GO"
   className="input input-bordered px-12 rounded-2xl shadow-sm
    py-3  border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 font-semibold text-gray-700"
    
   
   
   />
   
 
   <button className='btn bg-gradient-to-l from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-2xl font-bold shadow-md hover:scale-105
   
   '> GO</button>
    </div>
  <div className="hero-content text-neutral-content text-center">
    <div className=" p-12">
 <h1 className='text-2xl font-bold p-4 '>
<Typewriter
 options={{
    loop: true,
    delay: 50,
  }}
  onInit={(typewriter) => {
    typewriter.typeString(
    "From Dreaming to Departing - We've Got You Covered"
    )
    .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2000)
      .deleteAll()
    
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/>
</h1>
      <p className="mb-5">
       Whether you're planning your first trip or 
 your next big adventure, JetTrove is your trusted travel companion. <br />Browse curated packages, connect with expert guides, and book your journey — all in one place
      </p>
       <button className='btn btn-info bg-white text-center'>
   <NavLink to='/allPackages'>Explore Now!!
  </NavLink>

  </button>
    </div>
  </div>
  </div>
    );
};

export default Banner1;