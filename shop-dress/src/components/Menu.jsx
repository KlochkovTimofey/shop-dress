import React from 'react';
import '../App.css';
import {NavLink} from 'react-router-dom'

function Menu() {
    return(
        <div className="menu">
            <NavLink to="/forkids"><button>For Kids</button></NavLink>
            <NavLink to="/formen"><button>For Men</button></NavLink>
            <NavLink to="/forwomen"><button>For Women</button></NavLink>
        </div>
    )
}

export default Menu;