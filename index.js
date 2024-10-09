import 'dotenv/config';
import { Bot } from '@skyware/bot';

const generateFart = () => {
    const multiplier = Math.floor(Math.random()*10) + 1;
    const bb = "BB".repeat(multiplier)
    const fart = `P${bb}T`
    return fart
}

const bot = new Bot({
  eventEmitterOptions: {
    pollingInterval: 30
  }
});

await bot.login({
    identifier: process.env.BSKY_USERNAME,
    password: process.env.BSKY_PASSWORD,
})

const post = await bot.post({
    text: generateFart()
})

bot.on("reply", async(reply) => {
    await reply.reply({ text: generateFart()})
})

bot.on("mention", async(reply) => {
    await reply.reply({ text: generateFart()})
})

bot.on("quote", async(reply) => {
    await reply.reply({text: generateFart()})
})

console.log(post.uri)