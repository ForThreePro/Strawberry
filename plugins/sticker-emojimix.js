let handler = async (m, { conn, text, usedPrefix, command }) => {
    let [emoji1, emoji2] = text.split(/[&+\s]+/)
    if (!emoji1 || !emoji2) return conn.reply(m.chat, `🍓 *BOT STRAWBERRY* ➔ Uso correcto: ${usedPrefix + command} emoji1+emoji2\n> Ejemplo: ${usedPrefix + command} 😃+🍓`, m)

    let url = `https://api.evogb.org/tools/emojimix?emoji1=${encodeURIComponent(emoji1)}&emoji2=${encodeURIComponent(emoji2)}&key=sasuke`

    try {
        await conn.sendMessage(m.chat, { sticker: { url: url } }, { quoted: m })
        await conn.react(m.chat, '💖', m.key) // React extra
    } catch (e) {
        conn.reply(m.chat, `🍓 *BOT STRAWBERRY ERROR* ➔ Falló al mezclar los emojis.\n\`\`${e.message}\`\``, m)
    }
}

handler.help = ['emojimix <emoji1>+<emoji2>']
handler.tags = ['fun']
handler.command = ['emojimix', 'mix']

export default handler