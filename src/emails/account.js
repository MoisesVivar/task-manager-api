const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from: 'moises.vivarmontoya@outlook.com',
        subject: 'Welcome to the app!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'moises.vivarmontoya@outlook.com',
        subject: 'Goodbye!',
        text: `Good bye my friend ${name}. Let me know how to help you with anything.`
    })
}

//sendWelcomeEmail('moises.vivarmontoya@outlook.com','Moisés Vivar')
module.exports = {
    sendWelcomeEmail
}