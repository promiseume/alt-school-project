import React from 'react'
import './nav.css'
import {useAuth} from "../../Context/UserContext";
import { Link } from "react-router-dom";

export default function Nav() {
    const {token, onLogout} = useAuth()
    return (
        <div className="d-flex w-100 mx-auto p-3 flex-column" id={'nav-content'}>
        <header className="mb-auto">
            <div>
                <h3 className="float-md-left mb-0" id={'brand'}>EliteAuth</h3>
                <nav id={'nav-nav'} className="nav nav-masthead align-items-center justify-content-center float-md-right">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    {!token ? <Link to={'/login'}>Login</Link>  : <p onClick={()=> onLogout()}>Logout</p>}
                </nav>
            </div>
        </header>
        </div>
    )
}
