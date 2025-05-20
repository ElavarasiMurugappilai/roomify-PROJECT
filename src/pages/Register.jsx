import { useState } from 'react'
import { Container, TextField, Button, Typography } from '@mui/material'

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleRegister = () => {
    alert(`Registered with ${form.email}`)
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h4">Register</Typography>
      <TextField label="Name" name="name" fullWidth margin="normal" onChange={handleChange} />
      <TextField label="Email" name="email" fullWidth margin="normal" onChange={handleChange} />
      <TextField label="Password" name="password" type="password" fullWidth margin="normal" onChange={handleChange} />
      <Button fullWidth variant="contained" onClick={handleRegister}>Register</Button>
    </Container>
  )
}

export default Register
