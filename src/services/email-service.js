const { NotificationRepository } = require('../repository/index');
const sender = require('../config/emailConfig');

class NotificationService {
    constructor() {
        this.notificationRepository = new NotificationRepository();
    }

    async sendBasicEmail(mailFrom, mailTo, mailSubject, mailBody) {
        try {
            const response = await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody
        });
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

    async testingQueue (data) {
        console.log("Inside service layer", data);
    }
}

module.exports = NotificationService;