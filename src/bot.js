const TelegramBot = require('node-telegram-bot-api')
const validator = require('validator')
const ytdl = require('ytdl-core')
const fs = require('fs')
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true })
bot.onText(/\/start/, async (msg, match)=> {
    await bot.sendMessage(msg.chat.id, "Welcome!")
})
bot.on('message', async msg => {
    const text = msg.text.toString()
    if(!validator.isURL(text))
        return await bot.sendMessage('Not URL, please try another')
    ytdl(text).pipe(fs.createWriteStream('someVideo.mp4')).on("close", async () => bot.sendVideo(msg.chat.id, './someVideo.mp4').then(() => fs.unlinkSync('someVideo.mp4')))
})