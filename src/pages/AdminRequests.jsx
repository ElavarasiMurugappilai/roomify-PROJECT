import React, { useEffect, useState } from 'react'
import API from '../utils/api'
import { Container, Typography, Card, CardContent, Grid, Button } from '@mui/material'

const AdminRequests = () => {
  const [requests, setRequests] = useState([])

  const fetchRequests = async () => {
    try {
      const { data } = await API.get('/requests')
      setRequests(data)
    } catch (error) {
      console.error('Error fetching requests:', error)
    }
  }

  const handleUpdate = async (id, status) => {
    try {
      await API.patch(`/requests/${id}/status`, { status })
      alert(`Request ${status}`)
      fetchRequests()
    } catch (error) {
      console.error('Error updating request:', error)
    }
  }

  useEffect(() => {
    fetchRequests()
  }, [])

  return (
    <Container>
      <Typography variant="h4" gutterBottom>All Room Booking Requests</Typography>
      <Grid container spacing={2}>
        {requests.map((req) => (
          <Grid item xs={12} sm={6} md={4} key={req._id}>
            <Card>
              <CardContent>
                <Typography><strong>Room:</strong> {req.roomName}</Typography>
                <Typography><strong>User:</strong> {req.userEmail}</Typography>
                <Typography><strong>Date:</strong> {req.date}</Typography>
                <Typography><strong>Time:</strong> {req.time}</Typography>
                <Typography><strong>Purpose:</strong> {req.purpose}</Typography>
                <Typography><strong>Status:</strong> {req.status}</Typography>

                {req.status === 'Pending' && (
                  <>
                    <Button color="success" onClick={() => handleUpdate(req._id, 'Accepted')}>Accept</Button>
                    <Button color="error" onClick={() => handleUpdate(req._id, 'Rejected')}>Reject</Button>
                  </>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default AdminRequests
