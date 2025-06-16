import React from 'react';


import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const TopDestination = () => {
    return (
 <div className='lg:w-11/12 mx-auto p-12 pt-8 mt-8 mb-4 '>

 <div className='shadow-lg p-2  rounded-2xl'>
     <h2 className="lg:text-3xl md:text-2xl text-xl font-bold text-center 
     mt-6 pt-8 text-sky-800">Top Destinations</h2>
<p className="text-center text-gray-600 mb-7 w-3/4 mx-auto">
  Ready to chase unforgettable moments? Our top destinations are packed with thrilling experiences, natural wonders, and hidden gems waiting to be discovered.
</p>

   </div>


   


<Swiper
  modules={[Autoplay]}
  spaceBetween={32}
  slidesPerView={1}
  autoplay={{delay:2500}}

  className="lg:w-11/12  mx-auto mt-8 pt-9  pb-5  "
  
> 
 {/* 1 */}
   <SwiperSlide>
    <div  className=' flex flex-col md:flex-row lg:flex-row item-center
     justify-center bg-center bg-cover pb-4 '></div>
<div className="hero text-white md:w-11/12 w-4/5 lg:w-11/12 mx-auto bg-gradient-to-tr from-sky-700 shadow-2xl rounded-2xl to-white-auto p-8">
  <div className="hero-content flex-col lg:flex-row-reverse justify-center items-center">
    <div className='flex-1' >
 <img 
      src="https://i.ibb.co/ccx53wT2/Inani-Beach-Rivers-Cox-s-Bazar-10.jpg"
      className="lg:max-w-4xl md:max-w-3xl w-3/4 p-2 m-2 rounded-lg shadow-2xl"
    />
    </div>
   
    <div className='p-6 lg:flex-1 md:flex-1 '>
      <h1 className="lg:text-4xl md:text-3xl text-xl font-bold">Cox's Bazar</h1>
      <p className="py-6">
       <span className='font-bold text-lg pr-2'>History:</span> 
        Named after Captain Hiram Cox, an officer of the British East India Company
       who tried to rehabilitate refugees here in the late 18th century.</p>
      <p className="py-6">
       <span className='font-bold text-lg pr-2'>Popular For:</span> 
        Home to the world's longest natural sea beach (about 120 km). Popular for sunbathing, surfing, and beach tourism.</p>
      <button className="btn btn-primary">
      <a href="https://en.wikipedia.org/wiki/Cox%27s_Bazar" target="_blank">Learn More
         </a>
         </button>
    </div>
  </div>
</div>


        
            
        




</SwiperSlide>

{/* 2 */}

<SwiperSlide>
    <div  className=' flex flex-col lg:flex-row item-center justify-center bg-center bg-cover pb-4 '></div>
<div className="hero text-white md:w-11/12 w-4/5 lg:w-11/12 mx-auto bg-gradient-to-tr from-sky-700 shadow-2xl rounded-2xl to-white-auto p-8">
  <div className="hero-content flex-col lg:flex-row-reverse justify-center items-center">
    <div className='flex-1' >
 <img 
      src="https://i.ibb.co/F13CMC7/images-5.jpg"
      className="lg:max-w-4xl md:max-w-3xl w-3/4 p-2 m-2 rounded-lg shadow-2xl"
    />
    </div>
   
    <div className='p-6 flex-1'>
      <h1 className="lg:text-4xl md:text-3xl text-xl font-bold"> Bagerhat (Sixty Dome Mosque)</h1>
      <p className="py-6">
       <span className='font-bold text-lg pr-2'>History:</span> 
       Founded in the 15th century by the Muslim saint Khan Jahan Ali, Bagerhat was an important medieval city in Bengal.</p>
      <p className="py-6">
       <span className='font-bold text-lg pr-2'>Popular For:</span> 
Home to the historic Sixty Dome Mosque (Shat Gambuj Masjid), 
a UNESCO World Heritage Site, known for its unique architecture.
</p>
      <button className="btn btn-primary">
      <a href="https://en.wikipedia.org/wiki/Sixty_Dome_Mosque" target="_blank">Learn More
         </a>
         </button>
    </div>
  </div>
</div>


        
            
        




</SwiperSlide>

{/* 3 */}
<SwiperSlide>
    <div  className=' flex flex-col lg:flex-row item-center justify-center bg-center bg-cover pb-4 '></div>
<div className="hero text-white md:w-11/12 w-4/5 lg:w-11/12 mx-auto bg-gradient-to-tr from-sky-700 shadow-2xl rounded-2xl to-white-auto p-8">
  <div className="hero-content flex-col lg:flex-row-reverse justify-center items-center">
    <div className='flex-1' >
 <img 
      src="https://i.ibb.co/xKQcVHyL/st-martin-island-1-1.jpg"
      className="lg:max-w-4xl md:max-w-3xl w-3/4 p-2 m-2 rounded-lg shadow-2xl"
    />
    </div>
   
    <div className='p-6 flex-1'>
      <h1 className="lg:text-4xl md:text-3xl text-xl font-bold">  Saint Martin’s Island</h1>
      <p className="py-6">
       <span className='font-bold text-lg pr-2'>History:</span> 
        The only coral island in Bangladesh, named after the British captain James Martin in the 18th century.</p>
      <p className="py-6">
       <span className='font-bold text-lg pr-2'>Popular For:</span> 
Pristine white sandy beaches, coral reefs, crystal-clear water, and marine life make it a perfect getaway.
</p>
      <button className="btn btn-primary">
      <a href="https://en.wikipedia.org/wiki/Saint_Martin%27s_Island" target="_blank">Learn More
         </a>
         </button>
    </div>
  </div>
</div>


        
            
        




</SwiperSlide>
{/* 4 */}

<SwiperSlide>
    <div  className=' flex flex-col lg:flex-row item-center justify-center bg-center bg-cover pb-4 '></div>
<div className="hero text-white md:w-11/12 w-4/5 lg:w-11/12 mx-auto bg-gradient-to-tr from-sky-700 shadow-2xl rounded-2xl to-white-auto p-8">
  <div className="hero-content flex-col lg:flex-row-reverse justify-center items-center">
    <div className='flex-1' >
 <img 
      src="https://i.ibb.co/h1CMLnkQ/Ratargul-2.jpg"
      className="lg:max-w-4xl md:max-w-3xl w-3/4 p-2 m-2 rounded-lg shadow-2xl"
    />
    </div>
   
    <div className='p-6 flex-1'>
      <h1 className="text-xl lg:text-4xl md:text-3xl font-bold">Ratargul Swamp Forest </h1>
      <p className="py-6">
       <span className='font-bold text-lg pr-2'>History:</span> 
       One of the few freshwater swamp forests in the world, located near Sylhet. Preserved as an ecological zone.
    </p>
      <p className="py-6">
       <span className='font-bold text-lg pr-2'>Popular For:</span> 
Boating through submerged trees during monsoon gives a unique Amazon-like experience.
</p>
      <button className="btn btn-primary">
      <a href="https://en.wikipedia.org/wiki/Ratargul_Swamp_Forest" target="_blank">Learn More
         </a>
         </button>
    </div>
  </div>
</div>


        
            
        




</SwiperSlide>
</Swiper>
</div>



    );
};

export default TopDestination;