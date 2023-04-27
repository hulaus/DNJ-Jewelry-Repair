import {React, useState, useEffect} from "react";

function Customform() {
    const [jewelryType, setJewelryType ] = useState()
    const [ inquiry, setInquiry ] = useState("")

    const handleChange = e => {
        setJewelryType(e.target.value)
    }

    const handleSumbit = e => {
        e.preventDefault();
        console.log(inquiry)
    }

    return(
        <>
        <h1>Custom Jewelry Inquiry Form</h1>
        <hr />
        <p>
        Request Pricing for Your Custom Jewelry Creations
        Please complete the form below to inquire about pricing for our custom jewelry creations. 
        Our team will swiftly provide you with detailed pricing and information. 
        At DnJ Jewelry, we are dedicated to delivering unparalleled quality in materials, design, and craftsmanship. 
        Our skilled artisans use only authentic materials and natural precious stones to create one-of-a-kind works of art that are truly unique and valuable.
        <strong>Please note that we do not offer custom work in non-precious metals such as stainless steel, brass, or copper, nor do we work with lab-made, synthetic, or man-made diamonds. </strong>
        </p>
        <hr />
        <form>
            <label>
                First Name:
                <input type="string" name="First Name" />
            </label>
            <label>
                Last Name:
                <input type="string" name="Last Name" />
            </label>
            <label>
                Phone Number:
                <input type="string" name="Phone Number" />
            </label>
            <label>
                Email Address
                <input type="string" name="Email Address" />
            </label>
            <label>
                Custom Jewelry Type:
                <select name="jewelryType" id="jewelryType" value={jewelryType} defaultValue="ring" onChange={handleChange}>
                    <option value="pendant">Pendant</option>
                    <option value="necklace">Necklace</option>
                    <option value="ring">Ring</option>
                    <option value="bracelet">Bracelet</option>
                    <option value="earrings">Earrings</option>
                </select>
            </label>
            <label>
                Inquiry
                <textarea name="inquiry" id= "inquiry" value={ inquiry} rows={4} cols={40} />
            </label>
            <button name="customInquiry" type="submit" onClick={handleSumbit}> Submit </button>
        </form>
        </>
    )
}

export default Customform