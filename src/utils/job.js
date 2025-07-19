const cron = require('node-cron');

const NotificationService = require('../services/email-service');

const notificationService = new NotificationService();

const setupJobs = () => {
    cron.schedule('*/5 * * * *', async () => {
        const response = await notificationService.fetchPendingEmails();
        console.log(response);
    });
}

module.exports = setupJobs;