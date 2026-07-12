import axios from 'axios'
let handler = async (m, { conn, text }) => {
    if (!text) return m.reply('🍓 *BOT STRAWBERRY YT SEARCH* 🍓\n\n💖 *¿Qué deseas buscar en YouTube?*') 
    await m.react('📺')
    try {
        let { data } = await axios.get(`https://api.delirius.store/search/ytsearch?q=${encodeURIComponent(text)}`)
        if (!data.data || data.data.length === 0) return m.reply(`🍓 *BOT STRAWBERRY ERROR* ➔ *No se encontraron resultados.*`) 

        let res = data.data.slice(0, 5).map((v, i) => 
            `🍓 *${i+1}.* *${v.title}*\n` +
            `⏳ *Duración:* ${v.duration} | 👁️ *Vistas:* ${v.views}\n` +
            `👤 *Canal:* ${v.author.name}\n` +
            `🔗 ${v.url}`
        ).join('\n\n')

        let cap = `🍓 *BOT STRAWBERRY YOUTUBE SEARCH* 🍓\n\n` 
        cap += res
        cap += `\n\n💖 *Usa:* .play <número> o copia el link para descargar\n🍓 *Bot Strawberry*` 

        m.reply(cap)
        await m.react('✅')
    } catch { 
        await m.react('❌')
        m.reply(`🍓 *BOT STRAWBERRY ERROR* ➔ *Error al buscar.*`) 
    }
}
handler.help = ['yts <busqueda>']
handler.tags = ['search']
handler.command = /^(yts|ytsearch)$/i
export default handler