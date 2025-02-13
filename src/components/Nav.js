import React from 'react';
import { Link } from 'react-router-dom';



export default function Navbar(props) {
    return(
        <nav>
            <ul>
            <Link to="/Homepage">
                    <li>Home page</li>
                </Link>
                <Link to="/About">
                    <li>About</li>
                </Link>
                <Link to="/Whatshot">
                    <li>Price filter</li>
                </Link>
                
                <Link to="/User">
                    <li>User</li>
                </Link>
                <button className="logout" onClick={props.logout}>Log Out</button>
            </ul>
        <div>
        </div>
        </nav>
    );
}