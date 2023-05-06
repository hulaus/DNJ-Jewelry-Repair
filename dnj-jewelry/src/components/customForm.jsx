// import {React, useState, useEffect} from "react";
// ^ was^ useEffect not used!
import React, { useState } from "react";

// Added - npm install axios
import axios from "axios"

// Added  work in progress!
// function fetchData() {
//     axios.get("https://jsonplaceholder.typecode.com/post")
//         .then(response => {
//             console.log(response.data);
//         })
//         .catch(error => {
//           console.error(error);
//         });
// }

// fetchData();

const options = ["Pendant", "Necklace", "Ring", "Bracelet", "Earrings"]

function Customform() {
    const [name, setName] = useState("")
    const [contact, setContact] = useState("")
    const [email, setEmail] = useState("")
    const [jewelryType, setJewelryType] = useState(options[0])
    const [inquiry, setInquiry] = useState("")

    // Was const handleInquiry = e => {
    const handleInquiry = (e) => {
        setInquiry(e.target.value)
    }
    // Commented out
    // const handleSumbit = e => {
    //     e.preventDefault();
    //     console.log(inquiry)
    // }

    // Added
    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post("/submit-form", {
                full_name: name,
                phone_number: contact,
                email_address: email,
                custom_jewelry_type: jewelryType,
                inquiry,
            })
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
    };

    return (
        <>
            <h2 className="ContactUsHeader" style={{textAlign:'center'}}>Custom Jewelry Inquiry Form</h2>
            <hr />
            <p className="ContactUsParagraph">
                Request Pricing for Your Custom Jewelry Creations
                Please complete the form below to inquire about pricing for our custom jewelry creations.
                Our team will swiftly provide you with detailed pricing and information.
                At DnJ Jewelry, we are dedicated to delivering unparalleled quality in materials, design, and craftsmanship.
                Our skilled artisans use only authentic materials and natural precious stones to create one-of-a-kind works of art that are truly unique and valuable.
                <strong> Please note that we do not offer custom work in non-precious metals such as stainless steel, brass, or copper, nor do we work with lab-made, synthetic, or man-made diamonds. </strong>
            </p>
            <hr />
            {/* Was <form onSubmit={handleSumbit}> */}
            <div className="ContactUsContainer">
          <div className="ContactUsForm">
            <form onSubmit={handleSubmit} className="FormInCustom">
                <label for="name">
                    Full Name:
                    <input type="text" className="form-control" name="name" id="name" value={name} onChange={e => setName(e.target.value)} required/>
                </label>
                <label for="phone" >
                    Phone Number:
                    <input type="tel" name="Phone Number" id="contactNumber" value={contact} onChange={e => setContact(e.target.value)} required/>
                </label>
                <label for="email">
                    Email Address
                    <input type="text" className="form-control" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required/>
                </label>
                <label for="jewelryType">
                    Custom Jewelry Type:
                    <select value={jewelryType} onChange={e => setJewelryType(e.target.value)}>
                        {options.map((value) => (
                            <option value={value} key={value}>
                                {value}
                            </option>
                        ))}
                    </select>
                </label>
                <label for="message">
                    <h4>Custom Piece Description</h4>
                    <textarea name="inquiry" id="inquiry" value={inquiry} rows={5} cols={40} onChange={handleInquiry} required/>
                </label>
                <button name="customInquiry" type="submit">  
                {/* Added next 2 lines */}
                {" "}
                Submit{" "}
                </button>
            </form>
         </div>
        <div className="ContactUsInfoCustom">
            <h3>Dont like filling out Forms? </h3>
            <h2> Come In Today
                Or Give us a call! </h2>
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

export default Customform

/* 
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

*/