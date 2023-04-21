import React from "react";

function AboutUs () {
    return (
        <div class="aboutUs">
            <h1>About Us Page</h1>
            <p>Info about us</p>
            <p>resize the browser window to make sure its responsive</p>
           
            <h2 class="craft">Our Values</h2>
            <div class="row"> 
                <div class="column">
                    <div class="card">
                        <img src="" alt=""></img>
                        <div class="container">
                        <h2>info</h2>
                        <p class="title">example</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>jane@example.com</p>
                        <p><button class="button">if you want to show more info</button></p>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="card">
                    <img src="" alt="" style="width:100%"></img>
                    <div class="container">
                    <h2>info</h2>
                    <p class="title">example</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>mike@example.com</p>
                    <p><button class="button">if you want to show more info</button></p>
                </div>
              </div>
            </div>
            <div class="column">
    <div class="card">
      <img src="" alt="" style="width:100%"></img>
      <div class="container">
        <h2>info</h2>
        <p class="title">example</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

        </div>
       </div>    

    )


}
export default AboutUs
    