// Accept or Reject Request
exports.updateRequestStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!['Accepted', 'Rejected'].includes(status)) {
    return res.status(400).json({ message: 'Invalid status' });
  }

  try {
    const request = await BookingRequest.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }

    res.json({ message: `Request ${status}`, request });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update request' });
  }
};
