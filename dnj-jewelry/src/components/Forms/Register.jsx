
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
                            
                        </div>
                        <div>
                            <label htmlFor="password"> Password </label>
                            
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