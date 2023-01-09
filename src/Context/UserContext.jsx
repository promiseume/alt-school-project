import React, {createContext, useState,useEffect} from 'react';
import {fakeAuth} from "./Auth"
import {useNavigate} from 'react-router-dom';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token') );

    const handleLogin = async (e) => {
        e.preventDefault()
      const token = await fakeAuth();
      setToken(token);
        localStorage.setItem('token', token);
    };
    const handleLogout = () => {
      setToken(null);
      localStorage.setItem('token', "");
      localStorage.setItem('fullName', "");
      localStorage.setItem('password', "");
    };
  // useEffect(()=>{
  //
  //   console.log(token)
  // },[token])

    const value = {
      token,
      onLogin: handleLogin,
      onLogout: handleLogout,
    };
  
    return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    );
  };

export const useAuth = () => {
    return React.useContext(AuthContext);
};
  export default AuthContext;