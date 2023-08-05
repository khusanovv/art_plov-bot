import TelegramBot from "node-telegram-bot-api"

const API = ""

const bot = new TelegramBot(API, {polling:true})

console.log(bot)