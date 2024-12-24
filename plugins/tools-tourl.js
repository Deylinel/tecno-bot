import fs from 'fs'
import FormData from 'form-data'
import axios from 'axios'
import fetch from 'node-fetch'

let handler = async (m, { conn, botname, fake }) => {

  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''

  // Reacción inicial mientras procesamos la imagen
  await m.react('🕒')

  // Verifica si es una imagen
  if (!mime.startsWith('image/')) {
    return m.reply('Responde a una *Imagen.*')
  }

  // Descarga la imagen
  let media = await q.download()
  let formData = new FormData()
  formData.append('image', media, { filename: 'file' })

  try {
    // Subir la imagen a imgBB
    let api = await axios.post('https://api.imgbb.com/1/upload?key=10604ee79e478b08aba6de5005e6c798', formData, {
      headers: {
        ...formData.getHeaders()
      }
    })

    // Verifica si la respuesta es exitosa
    if (api.data && api.data.data) {
      // Preparar el mensaje con la información de la imagen
      let txt = '`I B B  -  U P L O A D E R`\n\n'
      txt += `*❄️ TÍTULO* : ${q.filename || 'x'}\n`
      txt += `*❄️ ID* : ${api.data.data.id}\n`
      txt += `*❄️ ENLACE* : ${api.data.data.url}\n`
      txt += `*❄️ DIRECTO* : ${api.data.data.url_viewer}\n`
      txt += `*❄️ MIME* : ${mime}\n`
      txt += `*❄️ FILE* : ${q.filename || 'x.jpg'}\n`
      txt += `*❄️ EXTENSION* : ${api.data.data.image.extension}\n`
      txt += `*❄️ DELETE* : ${api.data.data.delete_url}\n\n`
      txt += `*➤ By: ${botname}*`

      // Enviar el archivo y los detalles
      await conn.sendFile(m.chat, api.data.data.url, 'ibb.jpg', txt, m, null, fake)
    } else {
      await m.reply('Hubo un problema al procesar la imagen. Intenta de nuevo más tarde.')
    }
  } catch (error) {
    console.error('Error al subir la imagen:', error)
    await m.reply('Ocurrió un error al intentar subir la imagen. Intenta nuevamente.')
  }

  // Reacción final una vez procesada la imagen
  await m.react('✅')
}

handler.tags = ['convertir']
handler.help = ['toibb']
handler.command = /^(tourl|toibb)$/i
handler.register = true 

export default handler