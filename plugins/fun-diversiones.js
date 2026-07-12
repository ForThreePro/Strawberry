let handler = async (m, { conn, command, text }) => {
  let who = m.mentionedJid && m.mentionedJid[0]? m.mentionedJid[0]
          : m.quoted? m.quoted.sender
          : m.sender;

  let name = await conn.getName(who);
  let userTarget = m.mentionedJid && m.mentionedJid[0]? `@${who.split('@')[0]}` : name;
  let porcentaje = Math.floor(Math.random() * 500) + 1;

  let respuestas = {
    // BASE
    'gay': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES 🏳️‍🌈* *${porcentaje}%* *GAY*\n> *“Strawberry lo detectó con su aroma dulce”* 🍓`,
    'lesbiana': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES 🏳️‍🌈* *${porcentaje}%* *LESBIANA*\n> *“Strawberry confirma con un besito”* 🍓`,
    'pajero': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES 😏💦* *${porcentaje}%* *PAJERO*\n> *“Strawberry se sonroja”* 🍓`,
    'pajera': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES 😏💦* *${porcentaje}%* *PAJERA*\n> *“Strawberry tapa sus ojitos”* 🍓`,
    'puto': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *PUTO*\n🔥 *INFO A SU PRIVADO* 🔥🥵\n> *“Strawberry se pone roja”* 🍓`,
    'puta': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *PUTA*\n🔥 *INFO A SU PRIVADO* 🔥🥵\n> *“Strawberry se esconde”* 🍓`,
    'manco': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *MANCO* 💩\n> *“Strawberry le enseña a usar las manitos”* 🍓`,
    'manca': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *MANCA* 💩\n> *“Strawberry le da clases gratis”* 🍓`,
    'rata': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *RATA* 🐁 *COME QUESO* 🧀\n> *“Strawberry guarda sus fresas”* 🍓`,
    'prostituto': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *PROSTITUTO* 🫦👅\n❓ *¿QUIÉN QUIERE SUS SERVICIOS?*\n> *“Strawberry cobra en fresas”* 🍓`,
    'prostituta': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *PROSTITUTA* 🫦👅\n❓ *¿QUIÉN QUIERE SUS SERVICIOS?*\n> *“Strawberry vende su canasta”* 🍓`,

    // TUS 5 + 3 NUEVOS
    'burro': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *BURRO* 🫏\n🤡 *NI EL JEFE LO ENTIENDE*\n> *“Strawberry le presta su cerebro”* 🍓`,
    'burra': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *BURRA* 🫏\n🤡 *REPROBÓ HASTA EN EDUC. FÍSICA*\n> *“Strawberry le da tutoría”* 🍓`,
    'kbro': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *KBRO* 😈\n🔥 *NO RESPETA NI A SU ABUELA* 🔥\n> *“Strawberry se aleja corriendo”* 🍓`,
    'chivo': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *CHIVO* 🐐\n💨 *HUELE A CERVEZA Y DISCOTECA*\n> *“Strawberry le regala desodorante”* 🍓`,
    'kchera': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *KCHERA* 😈💃\n🔥 *ROMPE CORAZONES* 🔥\n> *“Strawberry cobra en helado”* 🍓`,
    'cornudo': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *CORNUOO* 🦌\n🔥 *LE PUSIERON LOS CUERNOS* 🔥\n> *“Strawberry le regala gorrito”* 🍓`,
    'kchudo': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *KCHUDO* 😈\n🔥 *NO PERDONA NI UNA* 🔥\n> *“Strawberry le tapa los ojos”* 🍓`,
    'sarnoso': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *SARNOSO* 🤢\n⚠️ *NI SE LE ACERQUEN* ⚠️\n> *“Strawberry le da jabón”* 🍓`,

    // +30 PERÚ
    'choro': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *CHORO* 🏃‍♂️💨\n⚠️ *CUIDEN SUS CELULARES* ⚠️\n> *“Strawberry llamó a serenazgo”* 🍓`,
    'cachero': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *CACHERO* 😈\n🔥 *NI EN DISCOTECA LO PARAN* 🔥\n> *“Strawberry prefiere su cama”* 🍓`,
    'cauchera': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *CAUCHERA* 😈💃\n🔥 *REINA DEL HUARIQUE* 🔥\n> *“Strawberry cobra en chicha”* 🍓`,
    'cabezón': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *CABEZÓN* 🤯\n🧠 *PIENSA CON LA OTRA CABEZA*\n> *“Strawberry le compra casco”* 🍓`,
    'jinetero': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *JINETERO* 🏍️\n💨 *PILOTO DE MOTOTAXI*\n> *“Strawberry se sube con casco”* 🍓`,
    'sangre': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *SANGRE* 🩸\n💸 *VIVE DE PRESTAMO*\n> *“Strawberry no fía”* 🍓`,
    'tragón': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *TRAGÓN* 🍻\n🍺 *SE TOMA HASTA EL AGUA DEL FLORERO*\n> *“Strawberry esconde la cerveza”* 🍓`,
    'fresa': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *FRESA* 🍓\n💅 *HABLA COMO GRINGO*\n> *“Strawberry prefiere lo nacional”* 🍓`,
    'pipero': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *PIPERO* 🌿\n😵‍💫 *VIVE EN OTRA DIMENSIÓN*\n> *“Strawberry le quita la pipa”* 🍓`,
    'muerto': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *MUERTO* 💀\n😴 *DUERME EN TODA REUNIÓN*\n> *“Strawberry le echa agüita”* 🍓`,
    'bamba': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *BAMBA* 📱\n⚠️ *CELULAR DURA 2 DIAS*\n> *“Strawberry no da garantía”* 🍓`,
    'yapa': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *YAPA* 🥭\n😏 *SIEMPRE PIDE DE MÁS*\n> *“Strawberry le da solo 1 fresa”* 🍓`,
    'caña': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *CAÑA* 🥃\n🍺 *CON 2 YA ESTÁ TIRADO*\n> *“Strawberry le sirve agüita”* 🍓`,
    'pata': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *PATA* 🤝\n😎 *EL ALMA DE LA JODA*\n> *“Strawberry invita las fresas”* 🍓`,
    'floro': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *FLORO* 💬\n💋 *ENAMORA CON PURA MENTIRA*\n> *“Strawberry no se traga el cuento”* 🍓`,
    'gil': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *GIL* 🤡\n😵 *SE CAE SOLO*\n> *“Strawberry le pone cojines”* 🍓`,
    'gilasa': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *GILASA* 🤡\n😵 *CREE TODO*\n> *“Strawberry le explica con dibujos”* 🍓`,
    'lenteja': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *LENTEJA* 🐢\n🐌 *DEMORA 1 HORA EN RESPONDER*\n> *“Strawberry ya se durmió esperando”* 🍓`,
    'chibolo': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *CHIBOLO* 👶\n🎮 *VIVE EN FREE FIRE*\n> *“Strawberry le presta su tablet”* 🍓`,
    'chibola': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *CHIBOLA* 👧\n💄 *SUBE 20 HISTORIAS AL DÍA*\n> *“Strawberry le roba el filtro”* 🍓`,
    'viejo': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *VIEJO* 👴\n😮‍💨 *SE QUEJA DE TODO*\n> *“Strawberry le da su pastillita”* 🍓`,
    'vieja': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *VIEJA* 👵\n🗣️ *CHISME NIVEL DIOS*\n> *“Strawberry le tapa la boca”* 🍓`,
    'grasa': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *GRASA* 💪\n🏋️ *SOLO VA AL GYM A TOMAR FOTOS*\n> *“Strawberry le enseña a cargar”* 🍓`,
    'graso': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *GRASO* 💪\n😎 *PIENSA QUE ESTÁ BUENAZO*\n> *“Strawberry le baja los humos”* 🍓`,
    'pituco': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *PITUCO* 💎\n💳 *PAGA CON YAPE DE SU MAMÁ*\n> *“Strawberry prefiere propina en fresas”* 🍓`,
    'pituca': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *PITUCA* 💎\n💅 *TOMA CAFÉ DE 30 SOLES*\n> *“Strawberry toma agüita nomás”* 🍓`,
    'sapa': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *SAPA* 🐸\n👀 *VE TODO Y CUENTA TODO*\n> *“Strawberry le tapa los ojitos”* 🍓`,
    'sapo': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *SAPO* 🐸\n👀 *EL INFORMATIVO DEL GRUPO*\n> *“Strawberry le quita el micro”* 🍓`,
    'trome': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *TROME* 👑\n🔥 *EL CRACK DEL BARRIO* 🔥\n> *“Strawberry le pide foto”* 🍓`,
    'reina': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *REINA* 👑\n💅 *MANDA EN EL GRUPO*\n> *“Strawberry le hace reverencia”* 🍓`,
    'king': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *KING* 👑\n😎 *EL JEFE DE LA JODA*\n> *“Strawberry le sirve la corona”* 🍓`,
    'zombie': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *ZOMBIE* 🧟\n😴 *VIVE CON SUEÑO*\n> *“Strawberry le da café”* 🍓`,
    'tóxica': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *TÓXICA* ☠️\n💔 *REVISA CELULAR*\n> *“Strawberry cambia su clave”* 🍓`,
    'tóxico': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *TÓXICO* ☠️\n💔 *CELOSO NIVEL DIOS*\n> *“Strawberry se esconde”* 🍓`,
    'simp': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *SIMP* 🥺\n💌 *MANDA 50 AUDIOS*\n> *“Strawberry silencia notis”* 🍓`,
    'vago': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *VAGO* 🛌\n😴 *TRABAJA 2 HORAS AL AÑO*\n> *“Strawberry le da chambita”* 🍓`,
    'vaga': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *VAGA* 🛌\n📺 *MARATON DE NETFLIX*\n> *“Strawberry le apaga la tele”* 🍓`,
    'loquito': `🍓 *『 𝐁𝐎𝐓 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐘 』* 🍓\n📊 *SCANNER STRAWBERRY*\n\n💖 *${userTarget}* *ES* *${porcentaje}%* *LOQUITO* 🤪\n🌀 *HABLA SOLO*\n> *“Strawberry le da su pastillita”* 🍓`
  }

  let respuestaFinal = respuestas[command.toLowerCase()];

  if (respuestaFinal) {
    await conn.sendMessage(m.chat, {
      text: respuestaFinal,
      mentions: [who]
    }, { quoted: m });
  }
}

handler.help = ['gay', 'lesbiana', 'pajero', 'pajera', 'puto', 'puta', 'burro', 'burra', 'kbro', 'chivo', 'kchera', 'cornudo', 'kchudo', 'sarnoso', 'choro', 'cachero', 'cauchera', 'cabezón', 'jinetero', 'sangre', 'tragón', 'fresa', 'pipero', 'muerto', 'bamba', 'yapa', 'caña', 'pata', 'floro', 'gil', 'gilasa', 'lenteja', 'chibolo', 'chibola', 'viejo', 'vieja', 'grasa', 'graso', 'pituco', 'pituca', 'sapa', 'sapo', 'trome', 'reina', 'king', 'zombie', 'tóxica', 'tóxico', 'simp', 'vago', 'vaga', 'loquito', 'manco', 'manca', 'rata', 'prostituta', 'prostituto'].map((v) => v + " *@user*")
handler.tags = ['fun']
handler.command = /^(gay|lesbiana|pajero|pajera|puto|puta|burro|burra|kbro|chivo|kchera|cornudo|kchudo|sarnoso|choro|cachero|cauchera|cabezón|jinetero|sangre|tragón|fresa|pipero|muerto|bamba|yapa|caña|pata|floro|gil|gilasa|lenteja|chibolo|chibola|viejo|vieja|grasa|graso|pituco|pituca|sapa|sapo|trome|reina|king|zombie|tóxica|tóxico|simp|vago|vaga|loquito|manco|manca|rata|prostituta|prostituto)$/i

export default handler