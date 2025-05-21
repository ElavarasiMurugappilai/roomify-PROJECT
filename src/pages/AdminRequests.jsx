import React, { useEffect, useState } from 'react'
import API from '../utils/api'
import {
  Container, Typography, Card, CardContent,
  Grid, Button, Box, Chip
} from '@mui/material'

const AdminRequests = () => {
  const [requests, setRequests] = useState([])

  const fetchRequests = async () => {
    try {
      const res = await API.get('/requests')
      setRequests(res.data)
    } catch (error) {
      console.error('Error fetching requests:', error)
    }
  }

  const updateStatus = async (id, status) => {
    try {
      await API.patch(`/requests/${id}/status`, { status })
      alert(`Request ${status}`)
      fetchRequests() // refresh after update
    } catch (error) {
      console.error('Status update failed:', error)
    }
  }

  useEffect(() => {
    fetchRequests()
  }, [])

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Admin Panel – Booking Requests
      </Typography>
      <Grid container spacing={3}>
        {requests.map((req) => (
          <Grid item xs={12} sm={6} md={4} key={req._id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{req.roomName}</Typography>
                <Typography><strong>Email:</strong> {req.userEmail}</Typography>
                <Typography><strong>Date:</strong> {req.date}</Typography>
                <Typography><strong>Time:</strong> {req.time}</Typography>
                <Typography><strong>Purpose:</strong> {req.purpose}</Typography>
                <Box mt={1}>
                  <Chip
                    label={req.status}
                    color={req.status === 'Accepted' ? 'success' : req.status === 'Rejected' ? 'error' : 'warning'}
                  />
                </Box>
                {req.status === 'Pending' && (
                  <Box mt={2}>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => updateStatus(req._id, 'Accepted')}
                      sx={{ mr: 1 }}
                    >
                      Accept
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => updateStatus(req._id, 'Rejected')}
                    >
                      Reject
                    </Button>
                  </Box>
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
