

import React from 'react';
import fire from '../config/fire';
import '../../src/App.css';
import mush from './mush.png';
// import User from './User';




class Login extends React.Component {

    login(){

        const email = document.querySelector("#emailAdress").value;


        const password = document.querySelector("#password").value;

        fire.auth().signInWithEmailAndPassword(email, password)
        .then((u)=>{
            console.log("successfully logged in");
        })
        .catch((err)=>{
            console.log("Error: " + err.toString())
        })
    }

    signUp(){
        const email = document.querySelector("#emailAdress").value;


        const password = document.querySelector("#password").value;

        fire.auth().createUserWithEmailAndPassword(email, password)
        .then((u)=>{
            console.log("successfully signed up");
        })
        .catch((err)=>{
            console.log("Error: " + err.toString())
        })
     
    }




    
    render(){
        return(

            <div style={{textAlign: 'center'}}> 

                <h1>Melbourne adventures!</h1>

                <div className="loginContainer">
                    <div>
                        <div>
                            <h3>Email</h3>
                        </div>
                        <input id="emailAdress" placeholder="Enter Email Here..." type="text"/>
                    </div>
                    <div>
                        <div>
                            <h3>Password</h3>
                        </div>
                        <input id="password" placeholder="Enter Password..." type="password"/>

                        <div>
                            <h3>Please select a username for your session</h3>
                            <input onChange={this.props.recordUser} id="username" placeholder=" Enter your name..." type="text"/>

                            <img className="imageToad" src={mush} alt="" ></img> 
                        </div>
                    </div>
                    <button className = "loginbutton" style={{margin:'10px'}} onClick={this.login}>Login</button>
                    <button className = "signupbutton" style={{margin:'10px'}} onClick={this.signUp}>Sign Up</button>
                   
                </div>
            </div>


        )
    }
}

export default Login;