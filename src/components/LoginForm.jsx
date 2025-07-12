import React, { useState } from 'react'
import '../pages/style/Login.css'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        if (email === 'staff@clinic.com' && password === '123456' ) {
            alert('Login Successful')
            navigate('/calendar')
        } else {
            setError('Invalid Email or Password')
        }
    }

  return (
    <div>
        <div>
            <form className="login-form" onSubmit={handleLogin}>
                <h3 style={{ textAlign: 'center' }}>Login</h3>
                <input type="email"
                 placeholder='Email'
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 required
                />
                <input type="password"
                 placeholder='Password'
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 required
                />
                <button type="submit">Login</button>
                {error && <p className="error-msg">{error}</p>}
            </form>
        </div>
    </div>
  )
}

export default LoginForm