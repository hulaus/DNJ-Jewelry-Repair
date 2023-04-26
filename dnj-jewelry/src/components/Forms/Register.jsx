
export const Register = (props) => {

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
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text"
                            placeholder="youremail@email.com" required />
                        </div>
                        <div>
                            <label htmlFor="password"> Password </label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="text"
                            placeholder="***" id="user_password" required />
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