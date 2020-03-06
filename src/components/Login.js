import React from 'react';
import fire from '../config/fire';
import '../../src/App.css';
import mush from'../../src/mush.png';


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

                <div class="loginContainer">
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
                        <input id="password" placeholder="Enter Password..." type="text"/>

                        <div>
                            <h3>Your avatar</h3>
                            {/* <img class="imageToad" src={mush} ></img> */}
                        </div>
                    </div>
                    <button class = "loginbutton" style={{margin:'10px'}} onClick={this.login}>Login</button>
                    <button class = "signupbutton" style={{margin:'10px'}} onClick={this.signUp}>Sign Up</button>
                </div>
            </div>


        )
    }
}

export default Login;