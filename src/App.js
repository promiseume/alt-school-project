import React,{useState} from 'react';
import LandingPage from './Pages/LandingPage/landingPage'
import ErrorPage from './Pages/404Page/pageError'
import  {AuthProvider} from "./Context/UserContext";
import {Routes, Route, Navigate} from "react-router-dom";
import Login from './Pages/Login/Login'


function App() {
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage fullName={fullName}/>}/>
          <Route path={"/login"} element={<Login fullName={fullName} setFullName={setFullName}password={password} setPassword={setPassword} />}/>
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
