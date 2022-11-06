import React, {createContext, useState,useEffect} from 'react';
import {fakeAuth} from "./Auth"
import {useNavigate} from 'react-router-dom';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token') );
  const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault()
      const token = await fakeAuth();
      setToken(token);
        localStorage.setItem('token', token);
        navigate('/')
    };
    const handleLogout = () => {
      setToken(null);
      localStorage.setItem('token', null);
      localStorage.setItem('fullName', null);
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