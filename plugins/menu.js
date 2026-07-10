import { join } from 'path'
import { readFileSync } from 'fs'

let handler = async (m, { conn, usedPrefix }) => {
  let taguser = m.mentionedJid && m.mentionedJid[0]? m.mentionedJid[0] : m.quoted? m.quoted.sender : m.sender

  const img = readFileSync(join(process.cwd(), 'storage', 'img', 'rayo.jpg'))

  let uptime = process.uptime() * 1000
  let h = Math.floor(uptime / 3600000)
  let m2 = Math.floor(uptime / 60000) % 60
  let s = Math.floor(uptime / 1000) % 60

  let menuText = `╭━━━〔 ⛈️ *RAYO PREM BOT* 🌙 〕━━━╮
│
│ 👤 *Usuario:* @${taguser.split('@')[0]}
│ ⚡ *Prefijo:* [ ${usedPrefix} ]
│ ⏰ *Activo:* ${h}h ${m2}m ${s}s
│
╰━━━━━━━━╯\n\n`

  let help = Object.values(global.plugins).filter(p => p.help &&!p.disabled)
  let groups = {}

  for (let plugin of help) {
    let category = plugin.tags? plugin.tags[0] : 'sin categoria'
    if (!groups[category]) groups[category] = []
    if (Array.isArray(plugin.help)) groups[category].push(...plugin.help)
    else groups[category].push(plugin.help)
  }

  let emojis = {
    'downloader': '📥',
    'search': '🔍',
    'config': '⚙️',
    'group': '👥',
    'info': 'ℹ️',
    'sin categoria': '📦'
  }

  for (let category in groups) {
    let emoji = emojis[category] || '⚡'
    menuText += `╭─「 ${emoji} ${category.toUpperCase()} 」─\n`
    for (let cmd of groups[category]) {
      menuText += `│ 🌩️ ${usedPrefix}${cmd}\n`
    }
    menuText += `╰──────────────────\n\n`
  }

  menuText += `╭━━━〔 ⚡ INFO 〕━━━╮
│ 🌙 *Bot:* RAYO PREM
│ ⚡ *Creador:* Team Nightwish
│ ⛈️ *Versión:* 1.0.0
╰━━━━━━━━━━╯

> *El trueno que obedece tus órdenes* ⚡`

  await conn.sendMessage(m.chat, {
    image: img,
    caption: menuText,
    mentions: [taguser]
  }, { quoted: m })
}
handler.command = /^(menu|help|menú)$/i
handler.tags = ['info']
handler.help = ['menu']

export default handler