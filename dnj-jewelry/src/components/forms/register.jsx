import axios from "axios"
import { useState } from "react"

export const Register = (props) => {

    const [email, setEmail ] = useState("")
    const [password, setPassword ] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <>
            <div>
                <form>
                    <div>
                        <div>
                            <label htmlFor= "email"> Email </label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} 
                            type="email" placeholder="yourock@example.com" id="Email" required />
                        </div>
                        <div>
                            <label htmlFor="password"> Password </label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)}
                            type="email" placeholder="*******" id="password" required />
                        </div>
                        <div>
                            <button onClick={async () => await handleSubmit()} type="submit"> Create Account </button>
                        </div>
                    </div>
                </form>
                <button onClick={() => props.onFormSwitch('login')}> Already have an account? Log in here! </button>
            </div>
        </>
    )
}