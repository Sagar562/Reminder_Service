const express = require('express');

const { PORT } = require('./config/serverConfig');
// const { sendBasicEmail } = require('./services/email-service');
const cron = require('node-cron');

const startServer = () => {
    const app = express();
        
    app.listen(PORT, () => {
        console.log(`server running at port ${PORT}`);

        // sendBasicEmail(
        //     'support@admin.com',
        //     'sagavyas321@gmail.com',
        //     'Testing email',
        //     'Hey man!'
        // );
        // cron.schedule('* * * * *', () => {
        //     console.log('running a task every minute');
        // });
    });
}

startServer();