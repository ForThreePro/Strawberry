const handler = async (m, { conn, args, isAdmin, isOwner }) => {
    // Validación de permisos para el comando
    if (!isAdmin &&!isOwner) throw `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐘 』* 🍓
💖 *ACCESO DENEGADO*
Solo *ADMINS* pueden usar esto 🍓`

    let chat = global.db.data.chats[m.chat]
    if (!chat) global.db.data.chats[m.chat] = {}

    if (/on/i.test(args[0])) {
        chat.modoadmin = true
        await conn.reply(m.chat, `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓
✅ *MODO ADMIN ACTIVADO*

💖 *Estado:* ENCENDIDO
🛡️ *Restricción:* Solo Admins
🍓 *Los comandos están bloqueados*

> *“Solo fresitas con corona pueden usarme”* 🍓`, m)
    } else if (/off/i.test(args[0])) {
        chat.modoadmin = false
        await conn.reply(m.chat, `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐘 』* 🍓
❌ *MODO ADMIN DESACTIVADO*

💖 *Estado:* APAGADO
✅ *Todos pueden usar el bot*
🍓 *Canasta abierta para todos*`, m)
    } else {
        await conn.reply(m.chat, `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐘 』* 🍓
📊 *PANEL MODO ADMIN*

💖 *Uso:*.modoadmin on /.modoadmin off
🍓 *Función:* Restringe comandos a admins
🛡️ *Protege:* Uso indebido del bot

> *“Strawberry cuida el grupo”* 🍓`, m)
    }
}

handler.help = ['modoadmin <on/off>']
handler.tags = ['config']
handler.command = /^(modoadmin|adminmode)$/i

handler.before = async function (m, { conn, isAdmin, isOwner, isROwner, isPrems }) {
    if (m.isBaileys || m.fromMe) return true

    let chat = global.db.data.chats[m.chat]
    if (!chat) return true

    // Si estamos en un grupo
    if (m.isGroup) {
        // Si el modo admin está activo y el que escribe NO es admin/owner/premium
        if (chat.modoadmin &&!isAdmin &&!isOwner &&!isROwner &&!isPrems) {
            // Si el usuario intenta usar un comando (empieza con prefijo), bloqueamos
            if (m.text.startsWith('.') || m.text.startsWith('/') || m.text.startsWith('#')) {
                await conn.reply(m.chat, `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓
🍓 *ACCESO BLOQUEADO*

💖 *Modo Admin:* ACTIVO
❌ *No tienes permiso*
⚠️ *Solo admins pueden usar comandos*

> *“Pídele fresitas al admin”* 🍓`, m)
                return false // Detiene la ejecución de otros plugins
            }
        }
    } else {
        // Chats privados - todos pueden usar
        return true
    }

    return true
}

export default handler