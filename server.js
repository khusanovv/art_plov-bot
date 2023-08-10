import { Markup, Telegraf } from 'telegraf';


const bot = new Telegraf('1665840542:AAHAIoi8GXucpLyjlF8bwmTcrWJEd-RmS2g');

let bot_langue = false;
let user_name = false;


let for_idea = false

bot.start( ctx => {
ctx.reply(
`Assalomu aleykum! Botimizga xush kelibsiz!                              
Keling, avvaliga xizmat ko’rsatish tilini tanlab olaylik.`, Markup.keyboard(
        [
            ['O’zbekcha', 'Русский'],
        ]
    ).resize())
})


bot.hears('✍ Fikr yozish', (ctx) => ctx.reply('Hey there'));



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

    if (ctx.message.text == `O’zbekcha`){
        bot_langue == false
        ctx.reply(
            `Iltimos shulardan birini tanlang` || "", {   
                reply_markup: {
                            keyboard: [
                                [{text: "🍴 Menu"}],
                                [{text: "✍ Fikr yozish"},{text: "Mening buyurtmalarim"}],
                                
            
                            ],
                            resize_keyboard: true,
                            remove_keyboard: true,
                            one_time_keyboard: true,
                        },        
            }         )
       
    }
 
    // if(ctx.message.text == `✍ Fikr yozish`){
    //     bot_langue == false
    //     ctx.reply(
    //         `Fikrlaringizni yozib qoldirishingiz mumkin`

    //     )
    //     console.log(reply.text)
    // }   

    if (ctx.message.text == `Русский`){
        bot_langue == false
        ctx.reply(
            `Пожалуйста, выберите один из этих` || "", {   
                reply_markup: {
                            keyboard: [
                                [{text: "🍴 Меню"}],
                                [{text: "✍Напишите мнение"},{text: "Мои заказы"}],
                                
            
                            ],
                            resize_keyboard: true,
                            remove_keyboard: true,
                            one_time_keyboard: true,
                        },        
            }         )
    }
// if (ctx.message.text ==`O’zbekcha`) {
//         bot_langue = false
//         ctx.reply(
// `📞 Ro'yxatdan o'tish uchun telefon raqamingizni kiriting. 

// Raqamni +998********* shaklida yuboring.`,
// {
//     ...Markup.keyboard([
//       Markup.button.contactRequest(" ☎️ Send Contact"),


//     ]).resize(),
//   })
// }
// else if (ctx.message.text ==`Русский`) {
//     bot_langue = true
//     ctx.reply(
// `Введите свой номер телефона

// Отправить номер с помощью кнопки ОТПРАВИТЬ КОНТАКТ`,
//     {
//       ...Markup.keyboard([
//         Markup.button.contactRequest(" ☎️ Send Contact"),
//       ]).resize(),
//     })
// }

})



bot.launch(); 