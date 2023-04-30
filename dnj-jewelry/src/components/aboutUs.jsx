import React from "react";
import Dad from './assets/images/Jeweler.png'

function AboutUs () {
    return (
        <div class="AboutUs">
            <h1 className="headingh1">About Us !</h1>
            <img className="aboutUsPic" src={Dad} alt="Picture of Master Jeweler Behind Jewelry Display Ready to Help Customers walking through the door."/>
            <p>Info about us</p>
            <p>resize the browser window to make sure its responsive</p>
           
            <h2 className="craft">Our Values</h2>
            <div className="row"> 
                <div className="column">
                    <div className="card">
                        <img src="/pictures/earing.png" alt="earing"></img>
                        <div className="container">
                        <h2>info</h2>
                        <p className="title">example</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>jane@example.com</p>
                        <p><button className="button">if you want to show more info</button></p>
                    </div>
                </div>
            </div>

            <div className="column">
                <div className="card">
                    <img src="/pictures/earing.png" alt="earing"></img>
                    <div className="container">
                    <h2>info</h2>
                    <p className="title">example</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>mike@example.com</p>
                    <p><button className="button">if you want to show more info</button></p>
                </div>
              </div>
            </div>
            <div className="column">
    <div className="card">
      <img src="/pictures/earing.png" alt="earing"></img>
      <div className="container">
        <h2>info</h2>
        <p className="title">example</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

        </div>
       </div>    

    )


}

export default AboutUs