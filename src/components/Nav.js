import React from 'react';
import { Link } from 'react-router-dom';



export default function Navbar() {
    return(
        <nav>
           
            <ul>
            <Link to="/Home" >
                <li></li>
            </Link>
            <Link to="/Homepage">
                    <li>Home page</li>
                </Link>
                <Link to="/About">
                    <li>About</li>
                </Link>
                <Link to="/Whatshot">
                    <li>Whats hot</li>
                </Link>
                <Link to="/Tour">
                    <li>Tours</li>
                </Link>
                <Link to="/User">
                    <li>User</li>
                </Link>
            </ul>
        
        <div>
        </div>
        </nav>
    );
}