const { StatusCodes } = require('http-status-codes');

const { NotificationService } = require('../services/index');

const notificationService = new NotificationService();

const create = async () => {
    try {
        const ticket = await notificationService.createNotificationTicket(req.body);
        return res.status(StatusCodes.CREATED).json({
            message: 'Successfully register an email',
            success: true,
            data: ticket,
            error: {}
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: 'Unable to register an email',
            success: false,
            data: {},
            error: error
        });
    }
}

module.exports = {
    create
}