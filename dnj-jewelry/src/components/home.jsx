import { useState } from "react"

function Home() {
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

export default Home