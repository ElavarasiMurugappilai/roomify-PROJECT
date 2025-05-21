import { useEffect, useState } from 'react'
import { Grid, Card, CardContent, Typography, Button, Modal, TextField, Box } from '@mui/material'

const RoomList = () => {
  const [rooms, setRooms] = useState([])
  const [open, setOpen] = useState(false)
  const [selectedRoom, setSelectedRoom] = useState(null)
  const [formData, setFormData] = useState({ date: '', time: '', purpose: '' })

  useEffect(() => {
    setRooms([
      { id: 1, name: 'Seminar Hall', location: 'Block A', capacity: 100 },
      { id: 2, name: 'Lab 204', location: 'Block B', capacity: 30 }
    ])
  }, [])

  const handleOpen = (room) => {
    setSelectedRoom(room)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setFormData({ date: '', time: '', purpose: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    const user = JSON.parse(localStorage.getItem('profile'))
    const request = {
      roomId: selectedRoom.id,
      roomName: selectedRoom.name,
      userEmail: user?.email || 'unknown',
      date: formData.date,
      time: formData.time,
      purpose: formData.purpose,
      status: 'Pending'
    }

    console.log('Request:', request)

    // TODO: Send this request to backend API
    alert('Room request submitted successfully!')
    handleClose()
  }

  return (
    <>
      <Grid container spacing={2} p={3}>
        {rooms.map((room) => (
          <Grid item xs={12} sm={6} md={4} key={room.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{room.name}</Typography>
                <Typography>Location: {room.location}</Typography>
                <Typography>Capacity: {room.capacity}</Typography>
                <Button variant="contained" onClick={() => handleOpen(room)}>Book Now</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Modal open={open} onClose={handleClose}>
        <Box sx={{
          p: 4, m: 'auto', mt: 10, maxWidth: 400, bgcolor: 'white', borderRadius: 2
        }}>
          <Typography variant="h6" gutterBottom>Booking Request: {selectedRoom?.name}</Typography>
          <TextField name="date" type="date" label="Date" fullWidth margin="normal" onChange={handleChange} InputLabelProps={{ shrink: true }} />
          <TextField name="time" type="time" label="Time" fullWidth margin="normal" onChange={handleChange} InputLabelProps={{ shrink: true }} />
          <TextField name="purpose" label="Purpose of Booking" fullWidth multiline rows={3} margin="normal" onChange={handleChange} />
          <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
            Submit Request
          </Button>
        </Box>
      </Modal>
    </>
  )
}

export default RoomList
