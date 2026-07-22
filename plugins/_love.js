let handler = async (m, { conn, command }) => {
  let who = m.mentionedJid && m.mentionedJid[0]
     ? m.mentionedJid[0]
          : m.quoted
     ? m.quoted.sender
          : m.sender;

  let yo = m.sender
  let nameYo = await conn.getName(yo);
  let nameUser = await conn.getName(who);
  let porcentaje = Math.floor(Math.random() * 101);

  if(command == 'love'){
    let frase = porcentaje < 30
 ? '🍓 *MEJOR SER COMPIS DULCES*'
      : porcentaje < 60
 ? '😳 *HAY CHISPITAS ENTRE USTEDES*'
      : porcentaje < 85
 ? '💗 *ESTA PAREJA TIENE JALEA*'
      : '🍰 *BODA CON PASTEL DE FRESA*'

    await conn.sendMessage(m.chat, {
      text: `🍓 *STRAWBERRY BOT LOVE SCAN* 🍓\n\n✨ *@${yo.split('@')[0]}* + *@${who.split('@')[0]}*\n📊 *COMPATIBILIDAD: ${porcentaje}%*\n${frase}\n\n🌸 *Escaneado con amor por Strawberry Bot*`,
      mentions: [yo, who]
    }, {quoted: m})
  }
}

handler.help = ['love *@user*']
handler.tags = ['love', 'strawberry']
handler.command = /^(love)$/i

export default handler