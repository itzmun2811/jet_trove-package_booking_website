import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';

const MyBookings = () => {
    const {user} =use(AuthContext)
    const[booking,setBooking]=useState([])

  useEffect(()=>{

     if (!user?.email) return; 
     axios.get(`http://localhost:3000/bookingByEmail?email=${user.email}`)
            .then(result=>{
                console.log(result.data)
                setBooking(result.data)
        
            })
            .catch(error=>{
                 console.log(error)
            })

        },[user,setBooking])
 console.log(booking)
 
    const handleConfirm=(id)=>{
        axios.patch(`http://localhost:3000/booking/${id}`)
        .then(result=>{
            console.log(result.data)
            toast.success('status updated sucessfully')
        })
        .catch(error=>{
            console.log(error)
        })
    }
    

    return (
        <div className='w-11/12 mx-auto mt-6 p-8 pb-6'>
            <h1 className='text-2xl font-bold text-center'>
                My Bookings -{booking.length}
            </h1>

<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
       <tr>
      
        <th>Tour Name</th>
        <th>Guide name</th>
        <th>Guide Contact</th>
        <th>Departure Date</th>
        <th>Departure Location</th>
        <th>Destination</th>
        <th>Special Note</th>
        <th>Action </th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     
        {booking.map((book) => (
  <tr>
    <td>{book['tour-name']}</td>
    <td>{book.guideName}</td>
    <td>{book.contact}</td>
    <td>{book.date}</td>
    <td>{book.location}</td>
    <td>{book.destination}</td>
    <td>{book.note}</td>
    <td>
      {book.status === "pending" ? (
        <button className="btn btn-sm btn-primary " onClick={()=>handleConfirm(book._id)}>Confirm</button>
      ) : (
        <span className="text-green-500 font-semibold">Completed</span>
      )}
    </td>
  </tr>

    
       
      


      ))}
      
     
    </tbody>
  </table>
</div>






      

      
      
     
     
    
    

        </div>
    );
};

export default MyBookings;