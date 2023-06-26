import { Register } from './forms/register'
import { Login } from './forms/login'
import { useState } from "react"

function LoginRegister() {
  const [currentForm, setCurrentForm] = useState('login')
    
  const toggleForm = (formName) => {
        setCurrentForm(formName)
    }

    return (
        <div>
          {
            (currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : 
            <Register onFormSwitch={toggleForm} />)
          }
        </div>
    )
}

export default LoginRegister