let handler = async (m, { conn, isOwner, isAdmin, isROwner, command }) => {
  if (!m.isGroup) return
  let chat = global.db.data.chats[m.chat]
  let type = command.toLowerCase()

  if (!(isAdmin || isOwner || isROwner)) {
    global.dfail('admin', m, conn)
    return
  }

  switch (type) {
    case 'banchat': case 'banearchat':
      if (chat.isBanned) return m.reply(`🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐘 』* 🍓
💖 *ESTADO DEL GRUPO*

🍓 *Este chat ya se encuentra baneado*
💖 *El bot está inactivo aquí*`)
      chat.isBanned = true
      await conn.reply(m.chat, `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐘 』* 🍓
🚫 *CHAT BANEADO*

🍓 *El bot ha sido desactivado en este grupo*
💖 *No responderé a ningún comando*
🍓 *Desbaneen para reactivarme*`, m)
      break

    case 'unbanchat': case 'desbanearchat':
      if (!chat.isBanned) return m.reply(`🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐘 』* 🍓
✅ *ESTADO DEL GRUPO*

🍓 *Este chat no está baneado*
💖 *El bot está activo*`)
      chat.isBanned = false
      await conn.reply(m.chat, `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐘 』* 🍓
✅ *CHAT DESBANEADO*

🍓 *El bot vuelve a estar activo*
💖 *Todos los comandos disponibles*
🍓 *La canasta de fresas regresó*`, m)
      break

    default:
      return
  }
}

handler.help = ['banchat', 'unbanchat']
handler.tags = ['grupos']
handler.command = /^(banchat|banearchat|unbanchat|desbanearchat)$/i

export default handler