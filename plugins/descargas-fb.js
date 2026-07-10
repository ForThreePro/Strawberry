import axios from 'axios'
let handler = async (m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, `⛈️ *RAYO PREM FACEBOOK* 🌙\n\n⚡ *Ingresa un enlace de Facebook.*\n📌 *Ejemplo:*.fb https://www.facebook.com/watch?v=xxx`, m) // Cambiado
    await m.react('⏳')
    try {
        const key = Buffer.from('ZWt1c2Fz', 'base64').toString('utf-8').split('').reverse().join('')
        const { data } = await axios.get(`https://api.evogb.org/dl/facebook?url=${encodeURIComponent(text)}&key=${key}`)
        if (!data.status) return m.reply(`⛈️ *RAYO PREM ERROR* ➔ *Error al procesar el video.*`) // Cambiado

        let video = data.resultados[0]

        let cap = `⛈️ *RAYO PREM FACEBOOK* 🌙\n\n` // Cambiado
        cap += `⚡ *Calidad:* ${video.calidad || 'HD'}\n`
        cap += `🌩️ *Enviando video...*\n⛈️ *Team Nightwish*` // Cambiado

        await conn.sendMessage(m.chat, {
            video: { url: video.url },
            mimetype: 'video/mp4',
            caption: cap
        }, { quoted: m })
        await m.react('✅')
    } catch {
        await m.react('❌')
        m.reply(`⛈️ *RAYO PREM ERROR* ➔ *No se pudo descargar el video.*`) // Cambiado
    }
}
handler.command = /^(fb|facebook)$/i
handler.help = ['fb <link>']
handler.tags = ['downloader']
export default handler