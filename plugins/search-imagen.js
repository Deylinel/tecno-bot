import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
if (!text) return conn.reply(m.chat, `*💛 Uso Correcto: ${usedPrefix + command} Nakano Nino*`, m, rcanal);
conn.reply(m.chat, '💛 *Descargando su imagen...*', m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: textbot,
previewType: 0, thumbnail: icons,
sourceUrl: channel }}})
const res = await googleImage(text);
const image = await res.getRandom();
const link = image;
const messages = [['Imagen 1', textbot, await res.getRandom(),
[[]], [[]], [[]], [[]]], ['Imagen 2', textbot, await res.getRandom(), [[]], [[]], [[]], [[]]], ['Imagen 2', textbot, await res.getRandom(), [[]], [[]], [[]], [[]]], ['Imagen 4', textbot, await res.getRandom(), [[]], [[]], [[]], [[]]]]
await conn.sendCarousel(m.chat, `💛 Resultado de ${text}`, '🔎 Imagen - Descargas', null, messages, m);
};
handler.help = ['imagen <query>'];
handler.tags = ['search', 'tools', 'downloader'];
handler.command = ['image', 'imagen'];
handler.register = true;
export default handler;