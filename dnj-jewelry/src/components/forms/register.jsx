//import axios from "axios"
//import { useState } from "react"

export const Register = (props) => {
 //   const saltRounds = 10;
 //   const  
 //   const 

 //   axios.post('/signup', {
  //      email: 'email',
  //      password: hashedPassword
 //   })
    
    
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
                            <input value={email} onChange={(e) => seEmail(e.target.value)} 
                            type="email" placeholder="yourock@example.com" id="Email" required />
                        </div>
                        <div>
                            <label htmlFor="password"> Password </label>
                            <input value={unhashedPassword} onChange={(e) => setPassword(e.target.value)}
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