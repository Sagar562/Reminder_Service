const nodeMailer = require('nodemailer');

const { EMAIL_ID, EMAIL_PASSWORD } = require('../config/serverConfig');

const sender = nodeMailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.EMAIL_PASSWORD
    }
})

module.exports = sender;