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
bot.on('contact', async(ctx) =>{
        if (bot_langue == false ) {
            console.log(ctx.message);
            ctx.reply("Iltimos F.I.SH kiriting.")
            user_name = true
        }
        else if(bot_langue == true){
            ctx.reply("Пожалуйста, введите ФИО")
            user_name = true
        }
})
bot.on('message',(ctx) =>{
if (ctx.message.text ==`O’zbekcha`) {
        bot_langue = false
        ctx.reply(
`📞 Ro'yxatdan o'tish uchun telefon raqamingizni kiriting. 

Raqamni +998********* shaklida yuboring.`,
{
    ...Markup.keyboard([
      Markup.button.contactRequest(" ☎️ Send Contact"),
    ]).resize(),
  })
}
else if (ctx.message.text ==`Русский`) {
    bot_langue = true
    ctx.reply(
`Введите свой номер телефона

Отправить номер с помощью кнопки ОТПРАВИТЬ КОНТАКТ`,
    {
      ...Markup.keyboard([
        Markup.button.contactRequest(" ☎️ Send Contact"),
      ]).resize(),
    })
}

})

bot.launch();

