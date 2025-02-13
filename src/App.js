import React, { Component } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import fire from './config/fire';
import './App.css';


    
class App extends Component {

      constructor(props){
        super(props);
        this.state = {
          user: null,
        }
        this.authListner = this.authListner.bind(this);

      }

      componentDidMount(){
        this.authListner();
      }
      authListner(){
        fire.auth().onAuthStateChanged((user)=>{
          if(user){
            this.setState({user});
          }else{
            this.setState({user:null});
          }
        })
      }

      state={
        username: ""
      }


      recordUserNameHandler = (e) => {

        this.setState({
            username: e.target.value
        })
    
    }



      render(){
        return(
          <div>
            {this.state.user ? (<Home username2={this.state.username}/>) : (<Login recordUser={this.recordUserNameHandler }/>)}

            
            </div>
        );
      }
}







export default App;
