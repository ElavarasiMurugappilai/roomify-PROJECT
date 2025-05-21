import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import RoomList from './pages/RoomList'
import MyBookings from './pages/MyBookings'
import ToastMessage from './components/ToastMessage'
import AdminRequests from './pages/AdminRequests'

const App = () => {
  return (
    <Router>
      <Navbar />
      <ToastMessage />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/rooms" element={<RoomList />} />
        <Route path="/mybookings" element={<MyBookings />} />
        <Route path="/admin/requests" element={<AdminRequests />} />
      </Routes>
    </Router>
  )
}

export default App
