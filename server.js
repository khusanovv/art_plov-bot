import { Markup, Telegraf } from 'telegraf';


const bot = new Telegraf('6625099196:AAFm_KHMCQUyP0M-Bytt7YUNHdbDaS1Fmvk');

let bot_langue = false;
let user_name = false;

bot.start( ctx => {
ctx.reply(
`Assalomu aleykum! Botimizga xush kelibsiz!                              
Keling, avvaliga xizmat ko’rsatish tilini tanlab olaylik.`, Markup.keyboard(
        [
            ['O’zbekcha', 'Русский'],
        ]
    ).resize())
})

bot.on('message',(ctx) =>{
if (ctx.message.text ==`O’zbekcha`) {
        bot_langue = false

}
else if (ctx.message.text ==`Русский`) {
    bot_langue = true

}
})


bot.launch();

