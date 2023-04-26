
export const Login = (props) => {

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
                        <input value={email} onChange={(e) => setEmail(e.target.value)} 
                        type="email" placeholder="youremail@email.com" id="user_email" required />
                    </div>
                    <div>
                        <label htmlFor="user_password"> Password </label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" 
                          placeholder="***" id="user_password" required />
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