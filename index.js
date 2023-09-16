const whatsapp = require('./Fluxos/Whatsapp');
const { readFileSync, readdirSync } = require('fs');

const carts = JSON.parse(readFileSync('./Carts/1.json'));

;(async () => {
    const folder = readdirSync('./Carts');
    await whatsapp.sendMessageWP(carts);
})();