import { useState } from 'react'
import { Container, TextField, Button, Typography } from '@mui/material'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    alert(`Logged in with ${email}`)
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h4">Login</Typography>
      <TextField label="Email" fullWidth margin="normal" onChange={(e) => setEmail(e.target.value)} />
      <TextField label="Password" fullWidth type="password" margin="normal" onChange={(e) => setPassword(e.target.value)} />
      <Button fullWidth variant="contained" color="primary" onClick={handleLogin}>Login</Button>
    </Container>
  )
}

export default Login
