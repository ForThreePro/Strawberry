let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = {
        'abrir': 'not_announcement',
        'cerrar': 'announcement',
    }[(args[0] || '')]

    if (isClose === undefined) {
        await conn.reply(m.chat, `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓\n\n💖 *CONFIGURAR GRUPO*\n\n🍓 *Elige una opción:*\n*${usedPrefix + command}* abrir\n*${usedPrefix + command}* cerrar`, m)
        return
    }

    await conn.groupSettingUpdate(m.chat, isClose)

    // Aviso de la acción realizada
    let estado = isClose === 'announcement'? 'cerrado 🔒' : 'abierto 🔓'
    let emoji = isClose === 'announcement'? '🚫' : '✅'
    await conn.reply(m.chat, `${emoji} *CANASTA DE FRESAS* ➔ Grupo ${estado}\n🍓 *Acción por:* @${m.sender.split('@')[0]}\n💖 *Bot Strawberry*`, m, {
        mentions: [m.sender]
    })
}

handler.help = ['grupo abrir', 'grupo cerrar']
handler.tags = ['grupos']
handler.command = ['group', 'grupo']
handler.admin = true
handler.botAdmin = true

export default handler