const express = require('express');
const router = express.Router();
const { createRequest, getAllRequests } = require('../controllers/requestController');

router.post('/', createRequest);           // For users to submit a request
router.get('/', getAllRequests);           // For admin to view all requests
router.patch('/:id/status', updateRequestStatus); // For admin to update status
router.patch('/:id/status', updateRequestStatus)



module.exports = router;
