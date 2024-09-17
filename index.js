const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// إنشاء عميل جديد
const client = new Client({
    authStrategy: new LocalAuth()
});

// عرض رمز الاستجابة السريعة (QR) في الطرفية
client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

// تسجيل الدخول بنجاح
client.on('ready', () => {
    console.log('Client is ready!');
});

// استقبال الرسائل والرد عليها
client.on('message', message => {
    console.log(`Received message: ${message.body}`);
    if (message.body === 'hello') {
        message.reply('Hello there!');
    }
});

// بدء العميل
client.initialize();