import TelegramBot from "node-telegram-bot-api"

const API = "nsandausdnu"

const bot = new TelegramBot(API, {polling:true})

console.log(bot);
console.log(API);