var TelegramBot = require('node-telegram-bot-api'),
    // Be sure to replace YOUR_BOT_TOKEN with your actual bot token on this line.
    telegram = new TelegramBot("766496930:AAE5x_mQn7I0aUf-GqnFQnDyhJNdz6BDnEc", { polling: true });

telegram.on("text", (message) => {
  telegram.sendMessage(message.chat.id, "Hello world");
});
