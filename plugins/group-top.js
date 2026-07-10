import util from 'util'
import path from 'path'
let user = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata, command, conn, text, usedPrefix}) {
if (!text) return m.reply(`⛈️ *RAYO PREM TOP* 🌙\n\n⚡ *Ejemplo:*.top gente mas activa`) // Cambiado
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b = ps.getRandom()
let c = ps.getRandom()
let d = ps.getRandom()
let e = ps.getRandom()
let f = ps.getRandom()
let g = ps.getRandom()
let h = ps.getRandom()
let i = ps.getRandom()
let j = ps.getRandom()
let k = Math.floor(Math.random() * 70);
let x = `${pickRandom(['⛈️','🌩️','⚡','🌙','🔥','💀','😎','🤙','👑','💥'])}` // Cambiado emojis
let vn = `https://hansxd.nasihosting.com/sound/sound${k}.mp3`
let top = `⛈️ *RAYO PREM* ➔ TOP 10 ${text.toUpperCase()} 🌙\n\n` // Cambiado
top += `⚡ *1.* ${user(a)}\n`
top += `⚡ *2.* ${user(b)}\n`
top += `⚡ *3.* ${user(c)}\n`
top += `⚡ *4.* ${user(d)}\n`
top += `⚡ *5.* ${user(e)}\n`
top += `⚡ *6.* ${user(f)}\n`
top += `⚡ *7.* ${user(g)}\n`
top += `⚡ *8.* ${user(h)}\n`
top += `⚡ *9.* ${user(i)}\n`
top += `⚡ *10.* ${user(j)}\n\n`
top += `🌙 *Team Nightwish*` // Cambiado
m.reply(top, null, { mentions: [a, b, c, d, e, f, g, h, i, j]})
}
handler.help = handler.command = ['top']
handler.tags = ['fun']
handler.group = true
export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}