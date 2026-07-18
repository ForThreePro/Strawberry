let handler = async (m, { conn }) => {
    try {
        let link = await conn.groupInviteCode(m.chat)
        let text = `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓
💖 *LINK DEL GRUPO*

🍓 https://chat.whatsapp.com/${link}

> *“Comparte la canasta de fresas”* 🍓`
        m.reply(text)
    } catch {
        m.reply(`🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓
❌ *ERROR*

🍓 *No pude obtener el link*
💖 *¿Soy administrador del grupo?*`)
    }
}

handler.help = ['link']
handler.tags = ['grupos']
handler.command = ['link', 'linkgroup']
handler.group = true
handler.botAdmin = true

export default handler