import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.css';

export const Header=(props)=>{
    return(
        <div id="container">
        <ul>
             <li>
                   <NavLink to="/home/">home</NavLink>
             </li> 
            <li>
                 <NavLink to="/aboutus/">aboutus</NavLink>
            </li>
            <li>
                <NavLink to="/contactus/sunny kumar singh">contactus</NavLink>
            </li> 
            <li>
                <NavLink to="/gallery/">Gallery</NavLink>
            </li>
        </ul>
           
        </div>
    )
}
