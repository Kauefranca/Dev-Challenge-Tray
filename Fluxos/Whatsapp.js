// Import de bibliotecas
const axios = require('axios');
const {
    default: makeWASocket,
    DisconnectReason,
    makeInMemoryStore,
    useMultiFileAuthState,
} = require('@whiskeysockets/baileys');
const P = require('pino');

// Função para armazenar sessão do Whatsapp em um arquivo;
const store = makeInMemoryStore({ logger: P().child({ level: 'debug', stream: 'store' }) });

store.readFromFile('./session/sessionStore.json')
setInterval(() => {
    console.log('Saving credentials to file...');
    store.writeToFile('./session/sessionStore.json')
}, 30 * 1000);

exports.sendMessageWP = async (msgObject) => {
    console.log("Iniciando conexão");
    const { state, saveCreds } = await useMultiFileAuthState('./session/sessionAuth');

	sock = makeWASocket({
		logger: P({ level: 'silent' }),
		printQRInTerminal: true,
		auth: state,
        browser: [ 'tray-challenge', 'Google Chrome', '10.0.0' ]
	});

    store.bind(sock.ev);

    sock.ev.on('creds.update', saveCreds);

    sock.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update;
        if(connection === 'close') {
            const shouldReconnect = lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut;
            console.log('Conexão encerrada pelo motivo: ', lastDisconnect.error, ', reconectando? ', shouldReconnect ? 'sim' : 'não')
            if (shouldReconnect) return process.exit();
        } else if (connection === 'open') {
            console.log("Conectado!");
            for (let obj of msgObject) {
                // Método que envia mensagens baseado no arquivo JSON;
                await sock.sendMessage(obj.Cart.phone.replace('+', '') + "@s.whatsapp.net",
                {
                    image: await fetchBuffer(obj.Cart.product_image.http),
                    caption: `Oi, Mayara! Sentimos sua falta 😭\n\nPor isso te preparamos um presentre exclusivo. ✨\n\n*Frete grátis* para o item ${(obj.Cart.product_name)}! 😉\n
Já ta lá no seu carrinho!\n\nO que você tá esperando? Vem aproveitar! 🛒\n${obj.Cart.product_url.https}`
                    });
                };
                return process.exit();
        }
    });
}

// Função para transformar link de imagem em buffer para ser enviado por mensagem;
const fetchBuffer = async (url) => {
    return await axios({
        method: 'get',
        url: url,
        headers: {
			'DNT': 1,
			'Upgrade-Insecure-Request': 1
		},
        responseType: 'arraybuffer'
    })
    .then((res) => res.data)
    .catch((err) => err.data)
}