const mongoose = require('mongoose');

const bookingRequestSchema = new mongoose.Schema({
  roomId: String,
  roomName: String,
  userEmail: String,
  date: String,
  time: String,
  purpose: String,
  status: {
    type: String,
    default: 'Pending',
    enum: ['Pending', 'Accepted', 'Rejected']
  }
}, { timestamps: true });

module.exports = mongoose.model('BookingRequest', bookingRequestSchema);
