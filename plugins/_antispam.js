const userSpamData = {}

let handler = async (m, { conn, args, isOwner }) => {
  if (!isOwner) return global.dfail('owner', m, conn)
  let bot = global.db.data.settings[conn.user.jid] || {}

  if (/on/i.test(args[0])) {
    bot.antiSpam = true
    await conn.reply(m.chat, `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓
✅ *ANTI-SPAM ACTIVADO*

💖 *Estado:* ENCENDIDO
🛡️ *Filtro:* Stickers + Emojis
🍓 *Strawberry vigila el flood*`, m)
  } else if (/off/i.test(args[0])) {
    bot.antiSpam = false
    await conn.reply(m.chat, `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓
❌ *ANTI-SPAM DESACTIVADO*

💖 *Estado:* APAGADO
✅ *Se permiten stickers y emojis*
🍓`, m)
  } else {
    await conn.reply(m.chat, `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓
📊 *PANEL ANTI-SPAM*

💖 *Uso:*.antispam on /.antispam off
🍓 *Función:* Anti flood de stickers/emojis
🛡️ *Límite:* 4 avisos | 6 expulsión

> *“Mantén el grupo dulce y limpio”* 🍓`, m)
  }
}

handler.help = ['antispam on/off']
handler.tags = ['config']
handler.command = /^(antispam)$/i

handler.before = async function (m, { conn, isAdmin, isBotAdmin, isOwner, isROwner, isPrems }) {
  const chat = global.db.data.chats[m.chat]
  const bot = global.db.data.settings[conn.user.jid] || {}

  if (!bot.antiSpam || m.fromMe) return

  const sender = m.sender
  const currentTime = Date.now()
  const timeWindow = 6000
  const warnLimit = 4
  const kickLimit = 6

  const isEmojiOnly = m.text? /^(?:\p{Emoji_Presentation}|\p{Emoji}\uFE0F|\p{Emoji_Modifier_Base}|\p{Emoji_Modifier}|\p{Emoji_Component})+$/u.test(m.text.trim()) : false
  const isSticker = m.mtype === 'stickerMessage'

  if (!isSticker &&!isEmojiOnly) return

  if (!userSpamData[sender] || (currentTime - userSpamData[sender].startTime > timeWindow)) {
    userSpamData[sender] = {
      startTime: currentTime,
      messageCount: 1
    }
  } else {
    userSpamData[sender].messageCount++
  }

  const count = userSpamData[sender].messageCount

  if (isOwner || isROwner) {
    if (count === warnLimit) {
      await conn.reply(m.chat, `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐘 』* 🍓
👑 *AVISO AL OWNER*

💖 *Bájale al spam creador*
🍓 *Estás saturando el chat*`, m)
    }
    return
  }

  if (m.isGroup && (isAdmin || isPrems ||!isBotAdmin)) return

  if (count === warnLimit) {
    await conn.reply(m.chat, `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐘 』* 🍓
💖 *¡ALERTA DE SPAM!*

🍓 *Usuario:* @${sender.split('@')[0]}
📊 *Progreso:* ${count}/${kickLimit}
⚠️ *Advertencia:* Bájale al flood

> *“Si sigues te expulso fresita”* 🍓`, m, { mentions: [sender] })
  }
  else if (count >= kickLimit) {
    await conn.reply(m.chat, `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓
🛡️ *EXPULSIÓN EJECUTADA*

🚮 *Usuario:* @${sender.split('@')[0]}
📌 *Causa:* Spam de stickers/emojis
💖 *El grupo se queda dulce*

> *“Strawberry protege la canasta”* 🍓`, m, { mentions: [sender] })
    if (m.isGroup) {
      await conn.groupParticipantsUpdate(m.chat, [sender], 'remove')
    }
    delete userSpamData[sender]
  }
}

export default handler