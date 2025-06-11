import React from 'react';
import { NavLink } from 'react-router';
import banner from ".././assets/beach1.jpeg"
import img1 from ".././assets/garden.jpg"
import img2 from ".././assets/sajek.jpeg"


const Banner = () => {
    return (
        <div className='w-11/12 mx-auto mb-9'>
             

<div
  className="hero min-h-screen rounded-xl shadow-lg"
  style={{
    backgroundImage:
      `url(${banner})`,
  }}
>
  
  <div className="hero-overlay"></div>

  
  <div className="hero-content text-neutral-content text-center flex justify-center items-center">


   


   <div>
 <div className=' pt-2 px-12 mx-12 max-w-xl'>
  <input type="text" placeholder="Search" className="input input-bordered " />
    </div>
    {/*  */}
<div className='flex items-center justify-center'>
    
 <div className='flex-1'>
 <h1 className='text-2xl font-bold text-white'>From Dreaming to Departing - We've Got You Covered</h1>
   <p className='w-3/4 pt-3 pb-4 text-white'>
Whether you're planning your first trip or 
your next big adventure, JetTrove is your trusted travel companion. <br />Browse curated packages, connect with expert guides, and book your journey — all in one place.



   </p>
   <button className='btn btn-info bg-white'>
  <NavLink to='/allPackages'>Explore Now!!
  </NavLink>

   </button>
    </div>
     <div className='flex-1 w-[400px]'>
        <div className='flex w-[400px]'>
    <img src={img1} alt="" />
    <img src={img2} alt="" />
        </div>
    </div>
   

</div>
   
     </div>
  </div>
</div>



     <div>

     </div>
     
        </div>
    );
};

export default Banner;