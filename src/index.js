const express = require('express');

const { PORT } = require('./config/serverConfig');
const { sendBasicEmail } = require('./services/email-service');

const startServer = () => {
    const app = express();
        
    app.listen(PORT, () => {
        console.log(`server running at port ${PORT}`);

        sendBasicEmail(
            'support@admin.com',
            'sagavyas321@gmail.com',
            'Testing email',
            'Hey man!'
        )
    })
}

startServer();