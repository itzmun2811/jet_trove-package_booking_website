import React, { Children, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';




const AuthProvider = ({children}) => {
    const[user,setUser] =useState(null);
    const[loading,setLoading] =useState(true);
 
  const googleProvider=new GoogleAuthProvider();

    const createNewUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn= ()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)

    }

    const logOut=()=>{
        signOut(auth)
    }
   
    useEffect(()=>{
     const unSubscribe =onAuthStateChanged(auth,(currentUser)=>{
    if(currentUser){

          console.log('user is here',currentUser)
        setUser(currentUser);
        setLoading(false)
      
    }
    else{
        setUser(null)
    }
    setLoading(false)

     })
     return ()=>{
        unSubscribe()
     }
    },[])

const userInfo={createNewUser,
    signInUser,googleSignIn,logOut,loading,setLoading,
    user,setUser}


    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;