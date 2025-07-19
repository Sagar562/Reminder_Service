const { NotificationTicket } = require('../models/index');

class NotificationRepository {
    async getAll() {
        try {
            const tickets = await NotificationTicket.findAll();
            return tickets;
        } catch (error) {
            throw error;
        }
    }

    async createNotificationTicket(data) {
        try {
            const ticket = await NotificationTicket.create(data);
            return ticket;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = NotificationRepository;