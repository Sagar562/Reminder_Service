const express = require('express');
const bodyParser = require('body-parser');

const { PORT, REMINDER_BINDING_KEY } = require('./config/serverConfig');
const { createChannel, subscribeMessage } = require('./utils/messageQueue');
const apiRoutes = require('./routes/index');
const jobs = require('./utils/job');
const { NotificationService } = require('./services/index');
const notificationService = new NotificationService();


const startServer = async () => {
    const app = express();
        
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded( {extended: true} ));

    const channel = await createChannel();
    subscribeMessage(channel, notificationService.subscribeEvents.bind(notificationService), REMINDER_BINDING_KEY);

    
    app.use('/api', apiRoutes);

    app.listen(PORT, () => {
        console.log(`server running at port ${PORT}`);
        jobs();
        
    });
}

startServer();