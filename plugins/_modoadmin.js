const handler = async (m, { conn, args, isAdmin, isOwner }) => {
    // Validación de permisos para el comando
    if (!isAdmin &&!isOwner) throw "⛈️ *RAYO PREM ERROR* ➔ *Solo los administradores pueden usar este comando.*" // Cambiado

    let chat = global.db.data.chats[m.chat]
    if (!chat) global.db.data.chats[m.chat] = {}

    if (/on/i.test(args[0])) {
        chat.modoadmin = true
        await conn.reply(m.chat, `⛈️ *RAYO PREM MODO ADMIN* 🌙\n\n⚡ *MODO ADMINISTRADOR ACTIVADO*\n\n🌩️ *Ahora solo admins pueden usar los comandos en este grupo.*\n⛈️ *Team Nightwish*`, m) // Cambiado
    } else if (/off/i.test(args[0])) {
        chat.modoadmin = false
        await conn.reply(m.chat, `⛈️ *RAYO PREM MODO ADMIN* 🌙\n\n❌ *MODO ADMINISTRADOR DESACTIVADO*\n\n🌩️ *Todos pueden usar el bot nuevamente.*`, m) // Cambiado
    } else {
        await conn.reply(m.chat, `⛈️ *RAYO PREM MODO ADMIN* 🌙\n\n📌 *Uso:* *.modoadmin on* / *.modoadmin off*\n⚡ *Bloquea el bot para que solo admins lo usen*`, m) // Cambiado
    }
}

handler.help = ['modoadmin <on/off>']
handler.tags = ['config']
handler.command = /^(modoadmin|adminmode)$/i

handler.before = async function (m, { conn, isAdmin, isOwner, isROwner, isPrems }) {
    if (m.isBaileys || m.fromMe) return!0

    let chat = global.db.data.chats[m.chat]
    if (!chat) return!0

    // Si estamos en un grupo
    if (m.isGroup) {
        // Si el modo admin está activo y el que escribe NO es admin/owner/premium
        if (chat.modoadmin &&!isAdmin &&!isOwner &&!isROwner &&!isPrems) {
            // Si el usuario intenta usar un comando (empieza con prefijo), bloqueamos
            if (m.text.startsWith('.') || m.text.startsWith('/') || m.text.startsWith('#')) {
                await conn.reply(m.chat, `⛈️ *RAYO PREM BLOQUEO* 🌙\n\n⚡ *MODO ADMIN ACTIVADO*\n\n❌ *No tienes permiso para usar comandos aquí.*`, m) // Aviso
                return false // Detiene la ejecución de otros plugins
            }
        }
    } else {
        // Chats privados - todos pueden usar
        return!0
    }

    return!0
}

export default handler