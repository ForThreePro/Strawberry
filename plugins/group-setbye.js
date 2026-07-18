const handler = async (m, { conn, text, command, isAdmin, isOwner }) => {
    if (!m.isGroup || (!isAdmin &&!isOwner)) {
        return m.reply(`🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓
❌ *ACCESO DENEGADO*

🍓 *Solo los admins o el dueño*
💖 *pueden configurar la canasta*`);
    }

    let chat = global.db.data.chats[m.chat]
    if (!chat) global.db.data.chats[m.chat] = {}
    chat = global.db.data.chats[m.chat]

    if (command === 'setbye') {
        if (!text) return m.reply(`🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓
💖 *CONFIGURAR DESPEDIDA*

🍓 *Falta el mensaje*

💡 *Ejemplo:*
.setbye 🍓 @user se fue a buscar fresas 💨`);
        chat.customBye = text.trim();
        return m.reply(`🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓
✅ *DESPEDIDA GUARDADA*

📝 *Vista previa:*
\`\`${text.trim()}\`\`

🗑️ *Para borrar:* .delbye`);
    }
    if (command === 'delbye') {
        if (!chat.customBye) return m.reply(`🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓
⚠️ *SIN DESPEDIDA*

🍓 *No tienes una despedida editada*`);
        delete chat.customBye;
        return m.reply(`🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓
✅ *DESPEDIDA ELIMINADA*

🗑️ *Se borró el mensaje personalizado*`);
    }
};
handler.help = ['setbye <Mensaje>', 'delbye'];
handler.tags = ['group'];
handler.command = /^(setbye|delbye)$/i;
handler.admin = true;
handler.group = true;
export default handler;