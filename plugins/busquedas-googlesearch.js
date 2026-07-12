import axios from 'axios'

let handler = async (m, { conn, text }) => {
    if (!text) return m.reply(`🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐘 』* 🍓
💖 *GOOGLE SEARCH*

🍓 *¿Qué deseas buscar?*
💖 *Uso:*.google Bot Strawberry`)

    await m.react('🔍')

    try {
        let { data } = await axios.get(`https://api.delirius.store/search/google?query=${encodeURIComponent(text)}`)
        let results = data.data.slice(0, 5)

        if (!results.length) return m.reply(`🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐘 』* 🍓
❌ *SIN RESULTADOS*

💖 *No se encontró nada sobre:* ${text}`)

        let txt = `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓
🔍 *RESULTADOS DE BÚSQUEDA*

💖 *Consulta:* ${text}\n\n`

        txt += results.map((v, i) => {
            return `🍓─── *RESULTADO ${i + 1}* ───🍓
📌 *${v.title}*
📝 ${v.description}
🔗 ${v.url}`
        }).join('\n\n')

        txt += `\n\n> *“Strawberry encontró la info más dulce”* 🍓\n> *© Bot Strawberry*`

        await conn.reply(m.chat, txt, m)
        await m.react('✅')

    } catch (e) {
        console.error(e)
        await m.react('❌')
        m.reply(`🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐘 』* 🍓
💖 *ERROR*

🍓 *Falló la búsqueda*
💖 *Intenta de nuevo*`)
    }
}

handler.help = ['google <busqueda>']
handler.tags = ['search']
handler.command = /^google$/i

export default handler