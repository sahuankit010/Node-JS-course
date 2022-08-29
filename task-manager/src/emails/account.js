const sgMail = require('@sendgrid/mail')

const sendGridAPIKey = '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'

sgMail.setApiKey(sendGridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sahu.ankit010@gmail.com',
        subject: 'Thanks for joining in, we do some cool stuff here!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sahu.ankit010@gmail.com',
        subject: 'Sorry to see you go',
        text: `Goodbye,, ${name}. I hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}