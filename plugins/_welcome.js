import { WAMessageStubType } from '@whiskeysockets/baileys';
import fetch from 'node-fetch';

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return true;

  // Obtener imagen de perfil o usar imagen por defecto
  const defaultImg = 'https://i.ibb.co/V3Hsgcy/file.jpg';
  const pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(() => defaultImg);
  const img = await (await fetch(pp)).buffer();

  // Variables globales (asegúrate de definirlas en tu entorno)
  const botname = "TechBot"; // Nombre del bot
  const canal = "https://t.me/TechChannel"; // Enlace del canal o información del bot
  const estilo = "dark-mode"; // Estilo visual (puedes personalizarlo)
  const textbot = "🤖 *Asistente tecnológico activado*";

  // Función para enviar mensajes con estilo
  async function sendStyledMessage(chatId, title, body, img) {
    const message = `
╭━━━━━━━━━━━━━━━━━━━━━━━╮
┃        ${title}
┣━━━━━━━━━━━━━━━━━━━━━━━┫
${body}
╰━━━━━━━━━━━━━━━━━━━━━━━╯
`;
    await conn.sendMessage(chatId, { image: img, caption: message });
  }

  // Mensajes de bienvenida
  if (chat.bienvenida && m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_ADD) {
    const bienvenida = `
┌──────── ✦ ✧ ✦ ────────┐
│ 🌟 ¡Hola, @${m.messageStubParameters[0].split`@`[0]}!
│ 🛸 Bienvenido a *${groupMetadata.subject}*
│ 📜 Por favor, revisa las reglas y
│ disfruta de la experiencia 🚀.
└────────────────────────┘
🔗 Más info: ${canal}`;
    await sendStyledMessage(m.chat, `🔵 ${botname} | Bienvenido`, bienvenida, img);
  }

  // Mensajes de despedida
  if (chat.bienvenida && m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_REMOVE) {
    const despedida = `
┌──────── ✦ ✧ ✦ ────────┐
│ 👋 Adiós, @${m.messageStubParameters[0].split`@`[0]}.
│ 🌌 ¡Que encuentres nuevos horizontes!
└────────────────────────┘`;
    await sendStyledMessage(m.chat, `🔴 ${botname} | Hasta luego`, despedida, img);
  }

  // Mensajes de expulsión
  if (chat.bienvenida && m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_LEAVE) {
    const expulsion = `
┌──────── ✦ ✧ ✦ ────────┐
│ 🚪 Usuario @${m.messageStubParameters[0].split`@`[0]} ha sido expulsado.
│ 🛠️ Mantenemos el grupo seguro.
└────────────────────────┘`;
    await sendStyledMessage(m.chat, `⚠️ ${botname} | Expulsión`, expulsion, img);
  }
}