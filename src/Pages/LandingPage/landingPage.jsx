import React,{useEffect} from 'react'
import Nav from '../../Component/Nav/nav'
import './landingPage.css'
import {useAuth} from "../../Context/UserContext";

export default function LandingPage({fullName}) {
    const {token} = useAuth();
    useEffect(() =>{
       const names = localStorage.getItem('fullName');
       console.log(names)
    })

  return (
       <section className="landing-page">
           <div id={'container'}>
     <Nav/>
               <div className={'hero-header'}>
       <h1>{localStorage.getItem('fullName') ? `Welcome ${localStorage.getItem('fullName')}`: 'Welcome to EliteAuth'}</h1>
                   <p>Here in this project,Set up fake userAuthContext using the context API to always carry out a fake authentication </p>
                  <a href={'https://github.com/promiseume/alt-school-project'}>See Code</a>
               </div>
           </div>
      </section>
  )
}
