const express = require('express');

const { NotificationController } = require('../../controllers/index');

const router = express.Router();

router.post('/tickets', NotificationController.create);

module.exports = router;