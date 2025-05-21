import { useNavigate } from 'react-router-dom'
import { Button, Container, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

const Home = () => {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const user = localStorage.getItem('profile')
    setIsLoggedIn(!!user)
  }, [])

  const handleBookNow = () => {
    if (isLoggedIn) {
      navigate('/rooms')
    } else {
      navigate('/register')
    }
  }

  return (
    <Container maxWidth="md" style={{ textAlign: 'center', padding: '2rem' }}>
      <Typography variant="h3" gutterBottom>Welcome to Roomify!</Typography>
      <Typography variant="h6" gutterBottom>
        Book your halls or seminar rooms instantly.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleBookNow}>
        Book Hall Now
      </Button>
    </Container>
  )
}

export default Home
