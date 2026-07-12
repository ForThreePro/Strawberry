import fs from 'fs'

let handler = async (m) => {
    const tmpPath = './tmp'
    if (fs.existsSync(tmpPath)) {
        fs.readdirSync(tmpPath).forEach(file => fs.unlinkSync(`${tmpPath}/${file}`))
    }
    m.reply(`🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐘 』* 🍓
🧹 *PURGA DE CACHÉ*

✅ *Estado:* Archivos temporales eliminados
💖 *La canasta de fresas está limpia*`)
}

handler.help = ['cleartmp']
handler.tags = ['main']
handler.command = ['cleartmp']
handler.rowner = true

export default handler