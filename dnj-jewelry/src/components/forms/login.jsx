import { useState, useEffect } from "react"
import axios from "axios"

export const Login = (props) => {

    const [email, setEmail ] = useState("")
    const [password, setPassword ] = useState("")
    
    async function handleSubmit(e) {
        e.preventDefault()
        console.log(email)
        console.log(password)
    }

    useEffect(() => {
        axios.get("/login", {
            params: {
                email: 'email',
                password: 'password'
            }
        })
        .then(response => {
            if (response.data.success) {
                // Login successful. Render Home
            } else {
            //    setMessage('Error Logging In')
                
            }
        })
       
        .catch(error => {
            console.error(error.message)
        })
                
            
    })

    return (
        <>
            <div>
                <form>
                    <div>
                        <label htmlFor="Email"> User Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} 
                        type="email" placeholder="yourock@example.com" id="Email" required />
                    </div>
                    <div>
                        <label htmlFor="user_password"> Password </label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)}
                        type="email" placeholder="*******" id="password" required />
                    </div>
                    <div>
                        <button onClick={handleSubmit} type="submit" > Log In </button>
                    </div>

                </form>
            </div>
            <button onClick={() => props.onFormSwitch('register')}> Don't have an account? Sign up here!</button>
        </>
    )
}