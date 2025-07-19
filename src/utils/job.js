const cron = require('node-cron');

const NotificationService = require('../services/email-service');

const notificationService = new NotificationService();

const setupJobs = () => {
    cron.schedule('*/5 * * * *', async () => {
        const response = await notificationService.fetchPendingEmails();
        
        response.forEach( (email) => {
            notificationService.sendBasicEmail(
                "support@admin.com",
                email.recepientEmail,
                email.subject,
                email.content
            );
        });

    });
}

module.exports = setupJobs;