import React, { use, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const ManagePackage = () => {

     const {user} =use(AuthContext);
     const[info,setInfo] =useState([]);
     const navigate =useNavigate();
     console.log(user.accessToken)

        useEffect(()=>{
            axios.get(`http://localhost:3000/addPackageByEmail?email=${user.email}`,{
                headers:{
                    authorization:`Bearer ${user.accessToken}`
                }
            })
            .then(result=>{
                console.log(result)
                setInfo(result.data)
            })
            .catch(error=>{
                 console.log(error)
            })

        },[user])

        const handleDelete=(id)=>{
            axios.delete(`http://localhost:3000/addPackage/${id}`)
            .then(result=>{
                console.log(result.data)
                setInfo(prev => prev.filter(item => item._id !== id));
            })
            .then(error=>{
                console.log(error)
            })
        }

        const handleUpdate=(id)=>{
            navigate(`/updatePackage/${id}`)
        }


    return (
        <div className='w-11/12 mx-auto max-w-6xl'>
            
            <h1 className='text-2xl font-bold text-center pt-8 '>Manage Your Packages</h1>
            <p className='text-lg text-gray-500 text-center pb-6'>Keep your tours fresh and exciting! Update your package info, add new destinations,
             or remove ones that are no longer active.</p>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>




        
      <tr>
    
        <th>Tour Name</th>
        <th>Duration</th>
        <th>Price</th>
        <th>Date</th>
        <th>Image</th>
        <th>Action</th>

      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    
        {info.map(data=>(
  <tr className="bg-base-200">
        <th>{data['tour-name']}</th>
        <th>{data.duration}</th>
        <th>{data.price}</th>
        <th>{data.date}</th>
        <td>{data.image}</td>
      
        <td>
       <button className="btn" onClick={()=> handleUpdate(data._id)} >
        <NavLink to='/updatePackage'>Update</NavLink>
    </button>
       <button onClick={()=>handleDelete(data._id)} className="btn">Delete</button>

        </td>

</tr>
        ))
        }
       
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManagePackage;