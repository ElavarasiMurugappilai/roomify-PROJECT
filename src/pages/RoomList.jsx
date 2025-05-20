import { useEffect, useState } from 'react'
import { Grid, Card, CardContent, Typography, Button } from '@mui/material'

const RoomList = () => {
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    setRooms([
      { id: 1, name: 'Seminar Hall', location: 'Block A', capacity: 100 },
      { id: 2, name: 'Lab 204', location: 'Block B', capacity: 30 }
    ])
  }, [])

  return (
    <Grid container spacing={2} p={3}>
      {rooms.map((room) => (
        <Grid item xs={12} sm={6} md={4} key={room.id}>
          <Card>
            <CardContent>
              <Typography variant="h6">{room.name}</Typography>
              <Typography>Location: {room.location}</Typography>
              <Typography>Capacity: {room.capacity}</Typography>
              <Button variant="contained">Book Now</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default RoomList
