import axios from 'axios'; // Asegúrate de importar axios
import FormData from 'form-data'; // Asegúrate de importar FormData

let handler = async (m, { conn, botname, fake }) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';

  await m.react('🕒');

  // Verifica si es una imagen
  if (!mime.startsWith('image/')) {
    return m.reply('¡Responde a una *IMAGEN*! 🔥');
  }

  // Descargar la imagen
  let media = await q.download();
  let formData = new FormData();
  formData.append('image', media, { filename: 'file' });

  try {
    // Subir la imagen a imgbb
    let api = await axios.post('https://api.imgbb.com/1/upload?key=10604ee79e478b08aba6de5005e6c798', formData, {
      headers: {
        ...formData.getHeaders(),
      },
    });

    await m.react('✅');

    // Verificar si la respuesta de la API tiene datos
    if (api.data && api.data.data) {
      let txt = '【 I B B - U P L O A D E R 】\n\n';
      txt += `🚀 *🧊 TÍTULO:* ${q.filename || 'x'}\n`;
      txt += `⚡ *🔑 ID:* ${api.data.data.id}\n`;
      txt += `🌐 *🔗 ENLACE:* ${api.data.data.url}\n`;
      txt += `📲 *🔴 DIRECTO:* ${api.data.data.url_viewer}\n`;
      txt += `🖥️ *🧬 MIME:* ${mime}\n`;
      txt += `💾 *📝 ARCHIVO:* ${q.filename || 'x.jpg'}\n`;
      txt += `🔧 *💡 EXTENSIÓN:* ${api.data.data.image.extension}\n`;
      txt += `🛠️ *❌ ELIMINAR:* ${api.data.data.delete_url}\n\n`;
      txt += `*➤ By: ${botname}*`;

      // Enviar el archivo y el texto con los datos
      await conn.sendFile(m.chat, api.data.data.url, 'ibb.jpg', txt, m, null, fake);
    } else {
      await m.reply('Ocurrió un error al subir la imagen. Intenta de nuevo más tarde.');
    }
  } catch (error) {
    console.error('Error en la subida:', error);
    await m.reply('Hubo un error al procesar la solicitud. Intenta de nuevo más tarde.');
  }
}

handler.tags = ['convertir'];
handler.help = ['toibb'];
handler.command = /^(tourl|toibb)$/i;
handler.register = true;

export default handler;