import React, { createContext } from 'react';
const AuthContext = createContext()

export const UserContext = ({ children }) => {
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;