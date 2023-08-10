import { Markup, Telegraf } from 'telegraf';


const bot = new Telegraf('6625099196:AAFm_KHMCQUyP0M-Bytt7YUNHdbDaS1Fmvk');

let bot_langue = false;
let user_name = false;


let for_idea = false

bot.start(async ctx => {
await  ctx.reply(
`Assalomu aleykum! Botimizga xush kelibsiz!                              
Keling, avvaliga xizmat ko’rsatish tilini tanlab olaylik.`, 
Markup.keyboard(
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

bot.on('message', async (ctx) =>{

    if ( ctx.message.text == `O’zbekcha`){
        bot_langue == false
        ctx.reply(
            `Iltimos` || "", {   
                reply_markup: {
                            keyboard: [
                                [{text: "🍴 Menu"}],
                                [{text: "✍ Fikr yozish"},{text: "Mening buyurtmalarim"}],
                                
            
                            ],
                            resize_keyboard: true
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

    else if ( ctx.message.text = "🍴 Menu") {
     await ctx.reply(`yetkazib berish manzilini tanlang`,{
        reply_markup: {
          keyboard: [
              [{text: "🗺 Mening manzillarim"}],
              [{text: "📍 Geolokatsiyani yuboring ",request_location:true},{text: "⬅️ Ortga",}],
              
          ],
          resize_keyboard: true
      },           
      })
    }
    
})

bot.launch();