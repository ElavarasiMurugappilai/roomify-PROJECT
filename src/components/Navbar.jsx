import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Roomify
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>

        <Button color="inherit" component={Link} to="/login">Login</Button>
        <Button color="inherit" component={Link} to="/register">Register</Button>
        <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
        <Button color="inherit" component={Link} to="/rooms">Rooms</Button>
        <Button color="inherit" component={Link} to="/mybookings">My Bookings</Button>
        <Button color="inherit" component={Link} to="/admin/requests">Admin Panel</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar

