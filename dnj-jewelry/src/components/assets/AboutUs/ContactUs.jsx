import React from "react";

function Contactus(){
    return(
        <>
    <h2 className="ContactUsHeader" style={{textAlign:'center'}}>Get In Touch With Us!</h2>
        <div className="ContactUsContainer">
          <div className="ContactUsForm">
            <form>
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" id="name" name="name" required />
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" class="form-control" id="email" name="email" required />
              </div>
              <div class="form-group">
                <label for="phone">Phone Number:</label>
                <input type="tel" class="form-control" id="phone" name="phone" required />
              </div>
              <div class="form-group">
                <label for="message">Message:</label>
                <textarea class="form-control" id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
          <div className="ContactUsInfo">
            <h4>Business Address:</h4>
            <p>3021 Business Ln.</p>
            <p>Las Vegas, NV 89103</p>
            <h4>Phone Number:</h4>
            <p>(702) 506-5591</p>
            <h4>Email:</h4>
            <p>dnjjewelryco@gmail.com</p>
            <h4>Store Hours:</h4>
            <p>Monday-Saturday: 10am-6pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        </>
    )
}
export default Contactus