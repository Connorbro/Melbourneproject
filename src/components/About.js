import React from 'react';
import '../styles/about.css'
import facebook from './facebook.png'
import linkedin from './linkedin.png'
import twitter from './twitter.png'

export default function Navbar() {
    return(
  <div>
      <h1>About Us</h1>

      <p>We are the number one tourist website around Australia! We find you the greatest price for tours in Melbourne. </p>

      <p>All of our unique tours are different from different levels of absailing if you are a thril seaker,
       or if you just want something calm. There are plenty of different options to do such as bus tours, or a morning walk tour.</p>

       <p>So as you can see we provide something for everyone, whether you are 16 or 75 we have it all! </p>

       <h2>Contact us</h2>


       <div class="row">
  <div class="column">
    <img src={facebook} alt=""/>
  </div>
  <div class="column">
    <img src={twitter} alt="" />
  </div>
  <div class="column">
    <img src={linkedin} alt="" />
  </div>
</div>

     
  </div>
    );
}

