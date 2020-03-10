import React, {Component} from 'react';
import fire from '../config/fire';
import '../styles/homepage.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './About';
import Whatshot from './Whatshot';
import Navbar from './Nav';
import '../styles/Nav.css';
import Homepage from './Homepage';
import Tour from './Tour';
import User from './User';
// import Apidisplays from './Apidisplays'





class Home extends Component {

    
    logout(){
        fire.auth().signOut()
    }

    
    render(){
        return(
            <div className="App">
                <button className="logout" onClick={this.logout}>Log Out</button> 
                <Router>
                    <Navbar />
                    <Switch>
                    

                        <Route path="/Homepage" component= {Homepage} exact/>
                        <Route path="/Whatshot" component={Whatshot}/> 
                        <Route path="/about" component={About}/>
                        <Route path="/tour" component={Tour}/>
                        <Route path="/User" component={User}/>

                    </Switch>
                </Router>
                
              

            </div>         
        );
    }
}

export default Home;
