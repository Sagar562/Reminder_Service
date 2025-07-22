const { NotificationRepository } = require('../repository/index');
const { EMAIL_ID } = require('../config/serverConfig');
const sender = require('../config/emailConfig');

class NotificationService {
    constructor() {
        this.notificationRepository = new NotificationRepository();
    }

    async sendBasicEmail(data) {
        try {
            const response = await sender.sendMail({
                from: EMAIL_ID,
                to: data.recepientEmail,
                subject: data.subject,
                text: data.content
            });
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async fetchPendingEmails(timeStemp) {
        try {
            const response = await this.notificationRepository.get({status: "PENDING"});
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async updateTicket(ticketId, data) {
        try {
            const response = await this.notificationRepository.updateTicket(ticketId, data);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async createNotificationTicket(data) {
        try {
            const ticket = await this.notificationRepository.createNotificationTicket(data);
            return ticket;
        } catch (error) {
            console.log(error);
        }
    }

    async subscribeEvents (payload) {
        let service = payload.service;
        let data = payload.data;

        switch(service) {
            case 'CREATE_TICKET': 
                await this.createNotificationTicket(data);
                break;
            case 'SEND_BASIC_MAIL':
                await this.sendBasicEmail(data);
                break;
            default: 
                console.log('No valid event received');
                break;
        }
    }
}

module.exports = NotificationService;