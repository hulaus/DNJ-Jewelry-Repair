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
            <h1>Custom Jewelry Inquiry Form</h1>
            <hr />
            <p>
                Request Pricing for Your Custom Jewelry Creations
                Please complete the form below to inquire about pricing for our custom jewelry creations.
                Our team will swiftly provide you with detailed pricing and information.
                At DnJ Jewelry, we are dedicated to delivering unparalleled quality in materials, design, and craftsmanship.
                Our skilled artisans use only authentic materials and natural precious stones to create one-of-a-kind works of art that are truly unique and valuable.
                <strong> Please note that we do not offer custom work in non-precious metals such as stainless steel, brass, or copper, nor do we work with lab-made, synthetic, or man-made diamonds. </strong>
            </p>
            <hr />
            {/* Was <form onSubmit={handleSumbit}> */}
            <form onSubmit={handleSubmit}>
                <label>
                    Full Name:
                    <input type="string" name="First Name" id="name" value={name} onChange={e => setName(e.target.value)} />
                </label>
                <label>
                    Phone Number:
                    <input type="string" name="Phone Number" id="contactNumber" value={contact} onChange={e => setContact(e.target.value)} />
                </label>
                <label>
                    Email Address
                    <input type="string" name="Email Address" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    Custom Jewelry Type:
                    <select value={jewelryType} onChange={e => setJewelryType(e.target.value)}>
                        {options.map((value) => (
                            <option value={value} key={value}>
                                {value}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Inquiry
                    <textarea name="inquiry" id="inquiry" value={inquiry} rows={4} cols={40} onChange={handleInquiry} />
                </label>
                <button name="customInquiry" type="submit"> Submit </button>
                {/* Added next 2 lines */}
                {" "}
                Submit{" "}
            </form>
        </>
    )
}

export default Customform