import fs from 'fs'
import FormData from 'form-data'
import axios from 'axios'
import fetch from 'node-fetch'

let handler = async (m, { conn }) => {

  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''

  await m.react('⌛')
  if (!mime.startsWith('image/')) {
    return m.reply('⚠️ *ERROR DE FORMATO*: Este comando requiere que respondas a una imagen. Inténtalo de nuevo.')
  }

  let media = await q.download()
  let formData = new FormData()
  formData.append('image', media, { filename: 'file' })

  let api = await axios.post('https://api.imgbb.com/1/upload?key=10604ee79e478b08aba6de5005e6c798', formData, {
    headers: {
      ...formData.getHeaders()
    }
  })

  await m.react('✅')
  if (api.data.data) {
    let txt = '🛰️ `TECNO-BOT`\n\n'
        txt += `📂 *TÍTULO*: ${q.filename || 'Archivo_Desconocido'}\n`
        txt += `🆔 *ID*: ${api.data.data.id}\n`
        txt += `🔗 *ENLACE*: ${api.data.data.url}\n`
        txt += `🌐 *DIRECTO*: ${api.data.data.url_viewer}\n`
        txt += `📄 *MIME*: ${mime}\n`
        txt += `📁 *ARCHIVO*: ${q.filename || 'archivo.jpg'}\n`
        txt += `🖼️ *EXTENSIÓN*: ${api.data.data.image.extension}\n`
        txt += `🗑️ *ELIMINAR*: ${api.data.data.delete_url}\n\n`
        txt += `🚀 *Servicio ofrecido por*: ${botname}`
    await conn.sendFile(m.chat, api.data.data.url, 'ibb.jpg', txt, m, null, fake)
  } else {
    await m.react('❌')
    m.reply('⚠️ *ERROR*: Algo salió mal al intentar subir la imagen. Por favor, inténtalo nuevamente.')
  }
}
handler.tags = ['convertir']
handler.help = ['toibb']
handler.command = /^(tourl|toibb)$/i
handler.register = true 
export default handler