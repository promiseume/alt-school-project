import React from 'react'
import './pageError.css'
import {useNavigate} from "react-router-dom";

export default function PageError() {
    const navigate = useNavigate();
  return (
    <div className='pageError'>
        <div className={'error-container'}>
        <h1>Opps! Sorry</h1>
        <h3>This page you are looking for does not exist or might have been removed</h3>
            <div className={'error-btn'}>
        <button onClick={() => navigate(-1)}>Go back</button>
            <button onClick={() => navigate('/')}>Go Home</button>
            </div>
        </div>
    </div>
  )
}
