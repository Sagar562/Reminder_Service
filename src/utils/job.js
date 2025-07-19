const cron = require('node-cron');

const NotificationService = require('../services/email-service');
const sender =  require('../config/emailConfig');

const notificationService = new NotificationService();

const setupJobs = () => {
    cron.schedule('*/2 * * * *', async () => {
        const response = await notificationService.fetchPendingEmails();
        
        response.forEach( (email) => {
            sender.sendMail({
                from: "support@admin.com",
                to: email.recepientEmail,
                subject: email.subject,
                text: email.content
            }, async (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(data);
                    await notificationService.updateTicket(email.id, { status: "SUCCESS" });
                }
            });
        });

    });
}

module.exports = setupJobs;