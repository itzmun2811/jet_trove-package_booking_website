import React, { useEffect, useState } from 'react';

const FeaturedPackage = () => {

    const [packages,setPackages]=useState([]);
     
    
    useEffect(()=>{
      fetch("featuredData.json")
      .then(res=> res.json())
      .then(data=>{
        console.log(data)
        setPackages(data)
      })
     },[])
    return (
           <div className='w-11/12 mx-auto'>

        {
            packages.map(singlePackage=>(
                   <div className="card card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{singlePackage.tourName}</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
            ))
        }

                
            </div>
        
    );
};

export default FeaturedPackage;