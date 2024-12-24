let handler = async (m, { conn, usedPrefix, isOwner }) => {
let txt_owner = "> *〘 🤖 𝙃𝙊𝙇𝘼, 𝙀𝙎𝙏𝙀 𝙀𝙎 𝙀𝙇 𝙉𝙐́𝙈𝙀𝙍𝙊 𝘿𝙀 𝙈𝙄 𝘾𝙍𝙀𝘼𝘿𝙊𝙍 🚀〙*\n\n *💡 𝘾𝙊𝙉𝙏𝘼𝘾𝙏𝘼 𝙋𝘼𝙍𝘼:*\n⮞ Reportar fallos del bot.\n⮞ Agregar el bot a tu grupo.\n\n*🌐 𝘾𝙍𝙀𝘼𝘿𝙊𝙍:* *Deyin* \n📩 *Enlace Directo:* Wa.me/50488198573"
await conn.sendFile(m.chat, "https://i.ibb.co/0yVdjzV/file.jpg", 'thumbnail.jpg', txt_owner, m, null, rcanal)
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler