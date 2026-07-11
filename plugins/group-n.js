let mutedUsers = new Set();

let handler = async (m, { conn, command, participants }) => {
    let mentionedJid = m.mentionedJid[0]? m.mentionedJid[0] : m.quoted? m.quoted.sender : false;
    if (!mentionedJid) return m.reply(`⛈️ *RAYO PREM MUTE* 🌙\n\n⚡ Etiqueta a una persona o responde a un mensaje.`); // Cambiado

    let isUserAdmin = participants.find(p => p.id === mentionedJid)?.admin;
    if (isUserAdmin) return m.reply(`⛈️ *RAYO PREM ERROR* ➔ No puedes mutear a un administrador.`); // Cambiado
    if (mentionedJid === conn.user.jid) return m.reply(`⛈️ *RAYO PREM ERROR* ➔ No puedo mutearme a mi mismo.`); // Cambiado

    if (command === "mute") {
        mutedUsers.add(mentionedJid);
        conn.reply(m.chat, `🌩️ *RAYO PREM* ➔ Usuario muteado\n⚡ @${mentionedJid.split('@')[0]}\n🌙 *Sus mensajes serán eliminados*`, m, { mentions: [mentionedJid] }); // Cambiado
    } else if (command === "unmute") {
        mutedUsers.delete(mentionedJid);
        conn.reply(m.chat, `⚡ *RAYO PREM* ➔ Usuario desmuteado\n⛈️ @${mentionedJid.split('@')[0]}\n🌙 *Ya puede hablar*`, m, { mentions: [mentionedJid] }); // Cambiado
    }
};

handler.before = async (m, { conn, isAdmin }) => {
    // Si el remitente del mensaje está en la lista de muteados, eliminamos el mensaje
    if (mutedUsers.has(m.sender)) {
        try {
            await conn.sendMessage(m.chat, { delete: m.key });
        } catch (e) {
            console.error(e);
        }
    }
};

handler.help = ['mute', 'unmute'].map(v => v + ' @user');
handler.tags = ['grupos'];
handler.command = /^(mute|unmute)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;