import { useState } from 'react'
import { Container, TextField, Button, Typography, Link } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    const dummyUser = JSON.parse(localStorage.getItem('profile'))
    if (dummyUser && dummyUser.email === email && dummyUser.password === password) {
      alert('Login successful')
      navigate('/') 

    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Login</Typography>
      <TextField label="Email" fullWidth margin="normal" onChange={(e) => setEmail(e.target.value)} />
      <TextField label="Password" fullWidth type="password" margin="normal" onChange={(e) => setPassword(e.target.value)} />
      <Button fullWidth variant="contained" color="primary" onClick={handleLogin}>Login</Button>
      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        New user? <Link href="/register">Create an account</Link>
      </Typography>
    </Container>
  )
}

export default Login
