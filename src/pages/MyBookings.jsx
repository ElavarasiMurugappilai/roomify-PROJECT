import React from 'react'
import { Container, List, ListItem, ListItemText, Typography } from '@mui/material'

const MyBookings = () => {
  const bookings = [
    { id: 1, room: 'Lab 204', date: '2025-05-18', time: '10:00 AM' }
  ]

  return (
    <Container>
      <Typography variant="h4" gutterBottom>My Bookings</Typography>
      <List>
        {bookings.map((booking) => (
          <ListItem key={booking.id}>
            <ListItemText primary={`Room: ${booking.room}`} secondary={`Date: ${booking.date}, Time: ${booking.time}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

export default MyBookings
