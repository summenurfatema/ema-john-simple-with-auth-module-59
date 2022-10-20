import React, { createContext } from 'react';
const AuthContext = createContext()

export const UserContext = ({ children }) => {
    const authInfo = {}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;