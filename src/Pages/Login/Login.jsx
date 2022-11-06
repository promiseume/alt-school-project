import React, { useEffect} from "react";
import  {useAuth} from "../../Context/UserContext";
import './login.css'
import {AiOutlineArrowLeft} from "react-icons/ai";
import {useNavigate} from "react-router-dom";

const AddUserForm = ({fullName,setFullName,password,setPassword}) => {
    const {token, onLogin} = useAuth();
    const navigate = useNavigate();

    const handleName =(e)=>{
        setFullName(e.target.value)
        localStorage.setItem('fullName', fullName);
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
        localStorage.setItem('password', password);
    }

    useEffect(()=> {
        localStorage.setItem('fullName', fullName);
        localStorage.setItem('password', password);
    }, [token])
    return (
        <>
        <div className={'login-container'}>
        <div className={'forms-container'}>
            <div className='form-header'>
        <AiOutlineArrowLeft onClick={()=> navigate(-1)} style={{fontSize:'20px'}}/>
            <h2>Sign up</h2>
            </div>
            <form className="login-form">
                <div className={'input-div'}>
                    <label className="form-label">Full name</label>
                    <input className="form-control input" value={fullName} onChange={(e) => handleName(e)}/>
                </div>
                <div className={'input-div mt-3'}>
                    <label className="form-label">Password</label>
                    <input className="form-control input" value={password} onChange={(e) => handlePassword(e)}/>
                </div>
                <button disabled={!fullName && !password} type="submit" onClick={(e) => onLogin(e)}>Submit</button>
            </form>
        </div>
        </div>
        </>
);
}
export default AddUserForm;
