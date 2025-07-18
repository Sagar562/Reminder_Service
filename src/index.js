const express = require('express');

const { PORT } = require('./config/serverConfig');

const startServer = () => {
    const app = express();
        
    app.listen(PORT, () => {
        console.log(`server running at port ${PORT}`);
    })
}

startServer();