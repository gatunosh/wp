const accountSid = process.env.TWILIO_ID;
const authToken = process.env.TWILIO_TOKEN;

const client = require('twilio')(accountSid, authToken, {
    lazyLoading: true
});

const sendMessage = async(message, senderID) => {
    try {
        await client.messages.create({
            from: 'whatsapp:+14155238886',
            body: message,
            to: senderID
        })
    } catch (error) {
        console.log(`Error at sendMessage -> ${error}`);
    }
}

module.exports = {
    sendMessage
}

// client.messages
//   .create({
//      from: 'whatsapp:+14155238886',
//      body: 'Hola munod! Desde twilio xd',
//      to: 'whatsapp:+593983918969'
//    })
//   .then(message => console.log(message.sid));