const express = require('express');

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');
// const { sendBasicEmail } = require('./services/email-service');
const jobs = require('./utils/job');

const startServer = () => {
    const app = express();
        
    app.use('/api', apiRoutes);

    app.listen(PORT, () => {
        console.log(`server running at port ${PORT}`);
        jobs();
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