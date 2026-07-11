let handler = async (m, { conn }) => {
    try {
        await conn.groupParticipantsUpdate(m.chat, [conn.user.jid], 'promote')
        m.reply(`╭─❒ *『 𝗧𝗘𝗔𝗠 𝗡𝗜𝗚𝗛𝗧𝗪𝗜𝗦𝗛 』* ❒
│ 👑 *AUTOPROMOTE*
│
│ ✅ *Estado:* Admin asignado
│ ⚡ *El trueno toma el control*
╰─────────────────❒`)
    } catch (e) {
        m.reply(`╭─❒ *『 𝗧𝗘𝗔𝗠 𝗡𝗜𝗚𝗛𝗧𝗪𝗜𝗦𝗛 』* ❒
│ ❌ *ERROR AUTOPROMOTE*
│
│ ⚠️ *No pude asignarme admin*
│ 🌙 *Dame permisos primero*
╰─────────────────❒`)
    }
}

handler.help = ['autoadmin']
handler.tags = ['owner']
handler.command = ['autoadmin']
handler.rowner = true

export default handler