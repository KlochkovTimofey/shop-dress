import React from 'react';
import '../App.css';
import logo1 from '../components/img/logo1.png' 
import {NavLink} from 'react-router-dom'

function Header() {
    return(
       <div className="header">
           <NavLink to="/">
               HOME
           </NavLink>
           <img src={logo1} />
           <NavLink to="/signup">
               Sign Up
           </NavLink>
       </div> 
    )
}

export default Header;