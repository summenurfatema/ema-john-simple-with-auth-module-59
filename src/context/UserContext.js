import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config'


export const AuthContext = createContext()
const auth = getAuth(app)

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null)

    //----------------signup--------------//
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //------------------sign in--------------//
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //------------------sign out---------------//
    const logOut = () => {
        return signOut(auth)
    }
    // -----------------subscribe--------------//

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser)
        })
        return () => unsubscribe()
    }, [])
    const authInfo = { user, createUser, signIn, logOut }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;