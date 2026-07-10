import chalk from 'chalk'
import fetch from 'node-fetch'
import { WAMessageStubType } from '@whiskeysockets/baileys'

let handler = m => m

handler.before = async function (m, { conn, groupMetadata }) {
    if (!m.messageStubType ||!m.isGroup) return

    let chat = global.db.data.chats[m.chat]
    if (!chat?.detect) return // AHORA USA chat.detect

    const fkontak = {
        key: {
            participants: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            fromMe: false,
            id: "RayoPrem"
        },
        message: {
            locationMessage: {
                name: "*RAYO PREM BOT*",
                jpegThumbnail: await (await fetch('https://files.evogb.win/91Vvmc.jpg')).buffer(),
                vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;RAYO;;;\nFN:RAYO PREM\nORG: Team Nightwish\nEND:VCARD"
            }
        },
        participant: "0@s.whatsapp.net"
    }

    const userJid = m.sender
    const usuario = `@${userJid.split('@')[0]}`
    const group = groupMetadata.subject

    // Foto del que hizo la acción, si no tiene usa tu link
    let pp = await conn.profilePictureUrl(userJid, 'image').catch(_ => null) || 'https://files.evogb.win/91Vvmc.jpg'

    let txt = ''

    switch (m.messageStubType) {
        case 21: // Cambiar nombre
            txt = `⛈️ *RAYO PREM DETECTOR* 🌙\n\n⚡ ${usuario} *cambió el nombre del grupo*\n\n📝 *Nuevo:* _${m.messageStubParameters[0]}_`; break
        case 22: // Cambiar foto
            txt = `⛈️ *RAYO PREM DETECTOR* 🌙\n\n📸 ${usuario} *cambió la foto del grupo*`; break
        case 23: // Cambiar link
            txt = `⛈️ *RAYO PREM DETECTOR* 🌙\n\n🔗 ${usuario} *restableció el link del grupo*`; break
        case 25: // Cambiar ajustes
            txt = `⛈️ *RAYO PREM DETECTOR* 🌙\n\n⚙️ ${usuario} *cambió la configuración*\n\n🔒 Ahora *${m.messageStubParameters[0] == 'on'? 'solo admins': 'todos'}* pueden editar info`; break
        case 26: // Abrir/Cerrar
            txt = `⛈️ *RAYO PREM DETECTOR* 🌙\n\n🗣️ ${usuario} *${m.messageStubParameters[0] == 'on'? 'cerró': 'abrió'} el grupo*`; break
        case 29: // Dar admin
            txt = `⛈️ *RAYO PREM DETECTOR* 🌙\n\n👑 @${m.messageStubParameters[0].split('@')[0]} *ahora es ADMIN*\n\n⚡ Por: ${usuario}`; break
        case 30: // Quitar admin
            txt = `⛈️ *RAYO PREM DETECTOR* 🌙\n\n📉 @${m.messageStubParameters[0].split('@')[0]} *ya no es ADMIN*\n\n⚡ Por: ${usuario}`; break
        case WAMessageStubType.GROUP_PARTICIPANT_ADD:
            txt = `⛈️ *RAYO PREM DETECTOR* 🌙\n\n🌩️ @${m.messageStubParameters[0].split('@')[0]} *se unió al grupo*`; break
        case WAMessageStubType.GROUP_PARTICIPANT_LEAVE:
            txt = `⛈️ *RAYO PREM DETECTOR* 🌙\n\n💨 @${m.messageStubParameters[0].split('@')[0]} *salió del grupo*`; break
        case WAMessageStubType.GROUP_PARTICIPANT_REMOVE:
            txt = `⛈️ *RAYO PREM DETECTOR* 🌙\n\n🚮 @${m.messageStubParameters[0].split('@')[0]} *fue expulsado*`; break
    }

    if (txt) {
        await this.sendMessage(m.chat, {
            image: { url: pp },
            caption: txt,
            mentions: [userJid,...(m.messageStubParameters?.[0]? [m.messageStubParameters[0]] : [])]
        }, { quoted: fkontak })
    }
}

export default handler