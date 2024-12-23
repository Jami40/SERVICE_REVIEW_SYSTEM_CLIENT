import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Hooks/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
export const AuthContext=createContext()

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const provider=new GoogleAuthProvider();
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    const manageProfile = (name,image) =>{
        setLoading(false)
        return updateProfile(auth.currentUser,{
             displayName:name,photoURL:image
         })
       }
       const signOutUser=()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,currentUser=>{
             setUser(currentUser)
             setLoading(false)
         })
         return ()=>{
             unsubscribe();
         }
 
     },[])
    const AuthInfo={
        user,
        createUser,
        login,
        googleSignIn,
        loading,
        manageProfile,
        signOutUser

    }
    return <AuthContext.Provider value={AuthInfo}>
        {children}

    </AuthContext.Provider>
};

export default AuthProvider;