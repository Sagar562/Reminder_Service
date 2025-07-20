const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const { createChannel } = require('./utils/messageQueue');
const apiRoutes = require('./routes/index');
const jobs = require('./utils/job');

const startServer = async () => {
    const app = express();
        
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded( {extended: true} ));

    const channel = await createChannel();
    
    app.use('/api', apiRoutes);

    app.listen(PORT, () => {
        console.log(`server running at port ${PORT}`);
        jobs();
        
    });
}

startServer();