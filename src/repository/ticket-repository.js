const { Op } = require('sequelize');
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

    async get(filter) {
        try {
            const tickets = await NotificationTicket.findAll({
                where: {
                    status: filter.status,
                    notificationTime: {
                        [Op.lte]: new Date()
                    }
                }
            });
            return tickets
        } catch (error) {
            throw error;
        }
    }

    async updateTicket(ticketId, data) {
        try {
            const ticket = await NotificationTicket.findByPk(ticketId);
            ticket.status = data.status;
            await ticket.save();
            return ticket;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = NotificationRepository;