import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Hooks/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
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

    }
    return <AuthContext.Provider value={AuthInfo}>
        {children}

    </AuthContext.Provider>
};

export default AuthProvider;