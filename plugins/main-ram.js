let handler = async (m) => {
    const used = process.memoryUsage()
    m.reply(`🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐘 』* 🍓
📊 *CONSUMO DEL SISTEMA*
💖 *RAM Usada:* ${(used.heapUsed / 1024 / 1024).toFixed(2)} MB
🍓 *Estado:* Canasta de fresas estable`)
}
handler.help = ['ram']
handler.tags = ['main']
handler.command = ['ram']
export default handler