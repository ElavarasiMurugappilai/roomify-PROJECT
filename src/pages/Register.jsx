import { useState } from 'react'
import { Container, TextField, Button, Typography, Link } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleRegister = () => {
    if (form.password !== form.confirmPassword) {
      alert("Passwords don't match")
      return
    }

    const userData = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      password: form.password
    }

    localStorage.setItem('profile', JSON.stringify(userData))
    alert('Registered successfully')
    navigate('/login')
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Register</Typography>
      <TextField label="Name" name="name" fullWidth margin="normal" onChange={handleChange} />
      <TextField label="Email" name="email" fullWidth margin="normal" onChange={handleChange} />
      <TextField label="Phone Number" name="phone" fullWidth margin="normal" onChange={handleChange} />
      <TextField label="Create Password" name="password" type="password" fullWidth margin="normal" onChange={handleChange} />
      <TextField label="Confirm Password" name="confirmPassword" type="password" fullWidth margin="normal" onChange={handleChange} />
      <Button fullWidth variant="contained" onClick={handleRegister}>Register</Button>
      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        Already have an account? <Link href="/login">Login here</Link>
      </Typography>
    </Container>
  )
}

export default Register
