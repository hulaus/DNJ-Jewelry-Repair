import { useState, useEffect } from "react"

export const Login = (props) => {

    const [userEmail, setUserEmail ] = useState("")
    const [userPassword, setUserPassword ] = useState("")
    
    async function handleSubmit(e) {
        e.preventDefault()
        console.log(email)
        console.log(password)
    }

    return (
        <>
            <div>
                <form>
                    <div>
                        <label htmlFor="user_email">Email</label>
                         
                        
                    </div>
                    <div>
                        <label htmlFor="user_password"> Password </label>
                     
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