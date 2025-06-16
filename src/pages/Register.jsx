import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';


const Register = () => {
    const {createNewUser,googleSignIn,setLoading} = use(AuthContext);
    const navigate =useNavigate();
    const location =useLocation();

 const handleSubmit = (e)=>{
     e.preventDefault();
     const form =e.target;
        const name=form.name.value;
      const photo=form.photo.value;
      const email=form.email.value;
      const password=form.password.value;
     
//      const correctPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
     

//       if(!correctPassword.test(password)){
//         Swal.fire({
//   icon: "error",
//   title: "Oops...",
//   text: "Password should have 1 Uppercase,1 lowercase, 1 special character and length must be 8 or more"
  
// });
    
//       return;
//       }

     const profile={
     displayName:name,
     photoURL:photo
     }
     createNewUser(email,password)
     .then(result=>{
       console.log(result.user)
       toast.success('registered successfully')
      
    updateProfile(auth.currentUser,profile)
            .then(result=>
                console.log(result))
         
            .catch((error)=>{
                
             console.log(error);
            })
            
            navigate(location?.state || '/')
   })
          
      .catch((error)=>{
        console.log(error);
        Swal.fire({
  icon: "error",
  title: "Oops...",
  text: (error.message)
  
}).then(()=>{
    navigate(location?.state );
})
setLoading(false);

      
   
            })
        }

   const handleGoogleSignUp =()=>{
    googleSignIn()
    .then(result=>{
        console.log(result.user)
    })
    .catch(error=>{
        console.log(error)
    })
    }
    return (
 <div className="hero w-11/12 mx-auto ">

  <form onSubmit={handleSubmit}>
<div className="card bg-base-100 lg:mt-12 lg:mb-12 shadow-2xl p-8">
      <div className="card-body">
         <h1 className="text-5xl text-teal-700 font-bold">Register now!</h1>
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="Name" />
          <label className="label">Photo</label>
          <input type="text" name='photo' className="input" placeholder="Photo URL" />
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn btn-info mt-4">Register</button>
        </fieldset>
       
        <p className='text-center my-2 font-semibold'>Or</p>
                <div className='flex items-center justify-center'>
                <button onClick={handleGoogleSignUp} className="btn bg-white text-black ">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                 Register with Google
               </button>
                </div>
   <p className='border-t mt-3 pt-3'>Got an account already <Link to="/Login" className='text-blue-400 font-bold m-1 border-b text-[19px]'>Login </Link>Now</p>


      </div>
    </div>

  </form>
    
  </div>

    );
};

export default Register;