import React from 'react';
import '../styles/afterlogin.css';
import mush from './mush.png';



export default function Navbar(props) {



    
    return(
        <div>
            <h1>User page</h1>

            {/* <h2>Welcome back! {this.email} </h2> */}
            <div className= "imagetoaddiv">
            <img className="imageToad" src={mush} alt="" ></img>
            </div>
            <h2>Welcome {props.username2}</h2>



        </div>
    );
}