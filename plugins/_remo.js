import { Blob } from 'node:buffer';
import { FormData } from 'formdata-node';
import fetch from 'node-fetch';

let cooldown = new Set()

let handler = async (m, { conn, usedPrefix, command }) => {
    // Anti spam 10 seg
    if (cooldown.has(m.sender)) return m.reply('🍓 *Nom nom~* Wait 10 sec to use another strawberry')
    cooldown.add(m.sender)
    setTimeout(() => cooldown.delete(m.sender), 10000)

    let q = m.quoted? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';

    if (!mime) throw `🍓 *StrawBerry Bot* ✨\n\n*Nom~* Reply to a photo with *${usedPrefix + command}* and I'll remove the background`;
    if (!/image\/(jpe?g|png)/.test(mime)) {
        throw `🍓 *Format not supported.* Only JPG/PNG. No stickers please`;
    }

    const API_KEY = "FEx4CYmYN1QRQWD1mbZp87jV";

    await m.react('🍓');
    await m.reply('✨ *StrawBerry Bot washing your photo with strawberry juice...*');

    try {
        let img = await q.download();
        if (!img) throw '❌ *Oops* Could not download the image';
        if (img.length > 12 * 1024 * 1024) throw '❌ *This strawberry is too big.* Max 12MB';

        let base64Img = img.toString('base64');
        
        let form = new FormData();
        form.append('image_file_b64', base64Img);
        form.append('size', 'auto');

        let res = await fetch('https://api.remove.bg/v1.0/removebg', {
            method: 'POST',
            headers: {
                'X-Api-Key': API_KEY
            },
            body: form
        });

        if (!res.ok) {
            if (res.status === 402) throw '🍓 *Out of strawberries...* API credits finished';
            let errorText = await res.text();
            throw `❌ Error ${res.status}: ${errorText}`;
        }

        let processedImg = await res.buffer();

        await conn.sendFile(
            m.chat,
            processedImg,
            'strawberry_bot.png',
            '✨ *Background removed successfully* ✨\n\n🍓 *StrawBerry Bot | Sweet & Juicy*\n*Thanks for using me~*',
            m
        );

        await m.react('✅');

    } catch (error) {
        console.error('StrawBerry Bot Error:', error);
        await m.reply(`${error}`);
        await m.react('🥺');
    }
};

handler.help = ['removebg', 'nobg'];
handler.tags = ['tools'];
handler.command = ['removebg', 'nobg', 'rmbg', 'strawbg'];
handler.register = false;

export default handler;