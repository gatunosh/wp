const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const webApp = express();

const WA = require('./helper-function/whatsapp-send-message');

webApp.use(bodyParser.urlencoded({
    extended: true
}));

webApp.use(express.json());

const PORT = process.env.PORT;

webApp.get('/', (req, res) => {
    res.send('Hello World!');
})

webApp.post('/whatsapp', async(req, res) => {
    // console.log(req.body);

    let message = req.body.Body;
    let senderID = req.body.From;

    console.log(message);

    await WA.sendMessage('Hola!! He recibido tu mensaje! Te estoy respondiendo', senderID);

});

webApp.listen(PORT, () => {
    console.log(`Server is up and running at ${PORT}`);
})
