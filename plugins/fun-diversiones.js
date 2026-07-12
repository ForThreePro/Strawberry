let handler = async (m, { conn, command, text }) => {
  let who = m.mentionedJid && m.mentionedJid[0]? m.mentionedJid[0]
          : m.quoted? m.quoted.sender
          : m.sender;

  let name = await conn.getName(who);
  let userTarget = m.mentionedJid && m.mentionedJid[0]? `@${who.split('@')[0]}` : name;
  let porcentaje = Math.floor(Math.random() * 500) + 1;

  let respuestas = {
    'gay': `⛈️ *RAYO PREM SCANNER* 🌙\n\n⚡ *${userTarget}* *ES 🏳️‍🌈* *${porcentaje}%* *GAY*\n🌩️ *Team Nightwish*`,
    'lesbiana': `⛈️ *RAYO PREM SCANNER* 🌙\n\n⚡ *${userTarget}* *ES 🏳️‍🌈* *${porcentaje}%* *LESBIANA*\n🌩️ *Team Nightwish*`,
    'pajero': `⛈️ *RAYO PREM SCANNER* 🌙\n\n⚡ *${userTarget}* *ES 😏💦* *${porcentaje}%* *PAJERO*\n🌩️ *Team Nightwish*`,
    'pajera': `⛈️ *RAYO PREM SCANNER* 🌙\n\n⚡ *${userTarget}* *ES 😏💦* *${porcentaje}%* *PAJERA*\n🌩️ *Team Nightwish*`,
    'puto': `⛈️ *RAYO PREM SCANNER* 🌙\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *PUTO*\n🔥 *MÁS INFORMACIÓN A SU PRIVADO* 🔥🥵\n🌩️ *Team Nightwish*`,
    'puta': `⛈️ *RAYO PREM SCANNER* 🌙\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *PUTA*\n🔥 *MÁS INFORMACIÓN A SU PRIVADO* 🔥🥵\n🌩️ *Team Nightwish*`,
    'manco': `⛈️ *RAYO PREM SCANNER* 🌙\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *MANCO* 💩\n🌩️ *Team Nightwish*`,
    'manca': `⛈️ *RAYO PREM SCANNER* 🌙\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *MANCA* 💩\n🌩️ *Team Nightwish*`,
    'rata': `⛈️ *RAYO PREM SCANNER* 🌙\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *RATA* 🐁 *COME QUESO* 🧀\n🌩️ *Team Nightwish*`,
    'prostituto': `⛈️ *RAYO PREM SCANNER* 🌙\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *PROSTITUTO* 🫦👅\n❓ *¿QUIÉN QUIERE DE SUS SERVICIOS?*\n🌩️ *Team Nightwish*`,
    'prostituta': `⛈️ *RAYO PREM SCANNER* 🌙\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *PROSTITUTA* 🫦👅\n❓ *¿QUIÉN QUIERE DE SUS SERVICIOS?*\n🌩️ *Team Nightwish*`,

    // === PICANTES PERÚ TEAM NIGHTWISH ===
    'choro': `⛈️ *RAYO PREM SCANNER* 🌙\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *CHORO* 🏃‍♂️💨\n⚠️ *GUARDEN SUS IPHONES* ⚠️\n🌩️ *Team Nightwish*`,
    'cachero': `⛈️ *RAYO PREM SCANNER* 🌙\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *CACHERO* 😈\n🔥 *NI EN DISCOTECA LO PARAN* 🔥\n🌩️ *Team Nightwish*`,
    'cauchera': `⛈️ *RAYO PREM SCANNER* 🌙\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *CAUCHERA* 😈💃\n🔥 *REINA DEL HUARIQUE* 🔥\n🌩️ *Team Nightwish*`,
    'cabezón': `⛈️ *RAYO PREM SCANNER* 🌙\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *CABEZÓN* 🤯\n🧠 *PIENSA CON LA OTRA CABEZA*\n🌩️ *Team Nightwish*`,
    'jinetero': `⛈️ *RAYO PREM SCANNER* 🌙\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *JINETERO* 🏍️\n💨 *PILOTO DE MOTOTAXI*\n🌩️ *Team Nightwish*`,
    'sangre': `⛈️ *RAYO PREM SCANNER* 🌙\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *SANGRE* 🩸\n💸 *VIVE DE PRESTAMO*\n🌩️ *Team Nightwish*`,
    'tragón': `⛈️ *RAYO PREM SCANNER* 🌙\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *TRAGÓN* 🍻\n🍺 *SE TOMA HASTA EL AGUA DEL FLORERO*\n🌩️ *Team Nightwish*`,
    'fresa': `⛈️ *RAYO PREM SCANNER* 🌙\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *FRESA* 🍓\n💅 *HABLA COMO GRINGO*\n🌩️ *Team Nightwish*`,
    'pipero': `⛈️ *RAYO PREM SCANNER* 🌙\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *PIPERO* 🌿\n😵‍💫 *VIVE EN OTRA DIMENSIÓN*\n🌩️ *Team Nightwish*`,
    'muerto': `⛈️ *RAYO PREM SCANNER* 🌙\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *MUERTO* 💀\n😴 *DUERME EN TODA REUNIÓN*\n🌩️ *Team Nightwish*`
  }

  let respuestaFinal = respuestas[command.toLowerCase()];

  if (respuestaFinal) {
    await conn.sendMessage(m.chat, {
      text: respuestaFinal,
      mentions: [who]
    }, { quoted: m });
  }
}

handler.help = ['gay', 'lesbiana', 'pajero', 'pajera', 'puto', 'puta', 'choro', 'cachero', 'cauchera', 'cabezón', 'jinetero', 'sangre', 'tragón', 'fresa', 'pipero', 'muerto', 'manco', 'manca', 'rata', 'prostituta', 'prostituto'].map((v) => v + " *@user*")
handler.tags = ['fun']
handler.command = /^(gay|lesbiana|pajero|pajera|puto|puta|choro|cachero|cauchera|cabezón|jinetero|sangre|tragón|fresa|pipero|muerto|manco|manca|rata|prostituta|prostituto)$/i

export default handler