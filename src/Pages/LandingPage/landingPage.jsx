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
       <section className="cover-container landing-page mx-auto">
           <div id={'container'}>
     <Nav/>
               <div className={'hero-header'}>
       <h1>{localStorage.getItem(fullName) === null && !token ? 'Welcome to EliteAuth' : `Welcome ${localStorage.getItem('fullName')}`}</h1>
                   <p>Here in this project,Set up fake userAuthContext using the context API to always carry out a fake authentication </p>
                  <a href={'https://github.com/promiseume/alt-school-project'}><button>See Code</button></a>
               </div>
           </div>
      </section>
  )
}
