import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Login from './pages/login.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './pages/Dashboard.jsx'
import RoomList from './pages/RoomList.jsx'
import MyBookings from './pages/MyBookings.jsx'
import ToastMessage from './components/ToastMessage.jsx'

const App = () => {
  return (
    <Router>
      <Navbar />
      <ToastMessage />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/rooms" element={<RoomList />} />
        <Route path="/mybookings" element={<MyBookings />} />
      </Routes>
    </Router>
  )
}

export default App
