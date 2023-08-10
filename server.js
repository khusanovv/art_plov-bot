import { Markup, Telegraf } from 'telegraf';


const bot = new Telegraf('6625099196:AAFm_KHMCQUyP0M-Bytt7YUNHdbDaS1Fmvk');

let bot_langue = false;
let user_name = false;

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

bot.on("location",(ctx) =>{
  console.log(ctx.message.location);
})

bot.on('message', async (ctx) =>{

    if ( ctx.message.text == `O’zbekcha`){
        bot_langue == false
       await ctx.reply(
            `Bolimlardan birini tanlang` || "", {   
                reply_markup: {
                            keyboard: [
                                [{text: "🍴 Menu"}],
                                [{text: "✍ Fikr yozish"},{text: "Mening buyurtmalarim"}],
                                
            
                            ],
                            resize_keyboard: true
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
// bot.on("message",())
bot.launch();

console.log("ashauhauhd");

let ayub = "1234";
console.log(ayub);