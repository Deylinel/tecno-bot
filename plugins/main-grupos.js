import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {
let img = await (await fetch(`https://files.catbox.moe/ge77oy.jpg`)).buffer()
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let txt = `*⟦Hᴏʟᴀ⟧, te invito a unirte a los grupos oficiales de Tecno-bot para convivir con la comunidad 🚀*

*✧* ${No tengo grupo}

*──≛≛≛≛≛≛≛≛≛≛≛≛≛≛≛≛≛≛≛≛≛≛≛≛≛≛≛≛≛≛≛≛≛≛≛*

➠ Si el enlace está caído, accede aquí 👉 

📡 Canal:
*✧* ${https://whatsapp.com/channel/0029VawF8fBBvvsktcInIz3m}

> 💻 ${textbot}`
await conn.sendFile(m.chat, img, "Thumbnail.jpg", txt, m, null, rcanal)
}
handler.help = ['grupos']
handler.tags = ['main']
handler.command = /^(grupos)$/i
export default handler