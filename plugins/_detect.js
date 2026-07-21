import chalk from 'chalk'
import { WAMessageStubType } from '@whiskeysockets/baileys'

let handler = m => m

handler.before = async function (m, { conn, groupMetadata }) {
    if (!m.messageStubType ||!m.isGroup) return

    let chat = global.db.data.chats[m.chat]
    if (!chat?.detect) return

    const userJid = m.sender
    const usuario = `@${userJid.split('@')[0]}`
    const group = groupMetadata.subject

    let txt = ''

    switch (m.messageStubType) {
        case 21: // Cambiar nombre
            txt = `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐘 』* 🍓
💖 *REGISTRO DEL GRUPO*

📢 *CAMBIO DE NOMBRE*
👤 *Usuario:* ${usuario}
📝 *Nuevo:* _${m.messageStubParameters[0]}_
🍓 *Grupo:* ${group}

> *“Strawberry renombró la canasta”* 🍓`; break

        case 22: // Cambiar foto
            txt = `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐘 』* 🍓
💖 *REGISTRO DEL GRUPO*

📸 *CAMBIO DE FOTO*
👤 *Usuario:* ${usuario}
🖼️ *Nueva imagen establecida*
🍓 *Grupo:* ${group}

> *“Ahora se ve más fresita”* 🍓`; break

        case 23: // Cambiar link
            txt = `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓
🍓 *ALERTA DE SEGURIDAD*

🔗 *LINK RESETEADO*
👤 *Usuario:* ${usuario}
🍓 *Grupo:* ${group}

> *“El link de fresita cambió”* 🍓`; break

        case 25: // Cambiar ajustes
            txt = `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐘 』* 🍓
🛡️ *AJUSTES MODIFICADOS*

👤 *Usuario:* ${usuario}
⚙️ *Permisos:* ${m.messageStubParameters[0] == 'on'? '*SOLO ADMINS* 🔒' : '*TODOS* 🔓'}
📊 *Edición de info de grupo*

> *“Strawberry ajustó las fresas”* 🍓`; break

        case 26: // Abrir/Cerrar
            txt = `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓
💖 *ESTADO DEL CHAT*

👤 *Usuario:* ${usuario}
🗣️ *Modo:* ${m.messageStubParameters[0] == 'on'? '*SOLO ADMINS* 🔒' : '*TODOS* 🔓'}
📢 *Grupo:* ${m.messageStubParameters[0] == 'on'? 'CERRADO' : 'ABIERTO'}

> *“Solo fresitas pueden hablar”* 🍓`; break

        case 29: // Dar admin
            txt = `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓
👑 *NUEVO ADMIN*

💖 *Ascendido:* @${m.messageStubParameters[0].split('@')[0]}
👤 *Por:* ${usuario}
🍓 *Rango:* Administrador

> *“Que cuide la canasta de fresas”* 🍓`; break

        case 30: // Quitar admin
            txt = `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓
📉 *ADMIN REMOVIDO*

💥 *Caído:* @${m.messageStubParameters[0].split('@')[0]}
👤 *Por:* ${usuario}
🗑️ *Rango removido*

> *“Strawberry quitó la corona”* 🍓`; break

        // ELIMINADOS
        // case WAMessageStubType.GROUP_PARTICIPANT_ADD: // Bienvenida
        // case WAMessageStubType.GROUP_PARTICIPANT_LEAVE: // Despedida
        // case WAMessageStubType.GROUP_PARTICIPANT_REMOVE: // Expulsión
    }

    if (txt) {
        await this.sendMessage(m.chat, {
            text: txt,
            mentions: [userJid,...(m.messageStubParameters?.[0]? [m.messageStubParameters[0]] : [])]
        })
    }
}

export default handler