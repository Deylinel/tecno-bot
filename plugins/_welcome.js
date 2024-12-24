import { WAMessageStubType } from '@whiskeysockets/baileys';
import fetch from 'node-fetch';

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return true;

  const img = imagen1; // Imagen personalizada
  const chat = global.db.data.chats[m.chat];

  if (chat.welcome) {
    const userTag = `@${m.messageStubParameters[0].split`@`[0]}`;
    const groupName = groupMetadata.subject;

    if (m.messageStubType === 27) { // Bienvenida
      const welcomeMessage = `
╭━━━━━━━━━━━━━━━━━━━━━╮
┃   🌐 *TECNO-BOT* 🌐  
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🚀 *ACCESS GRANTED*  
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🤖 *User:* ${userTag}  
┃ 🛸 *Group:* ${groupName}  
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🎉 _Welcome to the Techverse!_  
┃ ✨ _Enjoy the experience._  
╰━━━━━━━━━━━━━━━━━━━━━╯  

      `;
      await conn.sendLuffy(m.chat, packname, textbot, welcomeMessage, img, img, redes, fkontak);
    }

    if (m.messageStubType === 28) { // Despedida
      const goodbyeMessage = `
╭━━━━━━━━━━━━━━━━━━━━━╮
┃   🌐 *TECNO-BOT* 🌐  
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🚪 *USER DEPARTURE*  
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🤖 *User:* ${userTag}  
┃ 🛸 *Group:* ${groupName}  
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🌌 _Goodbye, traveler._  
┃ ✨ _Your journey continues elsewhere._  
╰━━━━━━━━━━━━━━━━━━━━━╯  

      `;
      await conn.sendLuffy(m.chat, packname, textbot, goodbyeMessage, img, img, redes, fkontak);
    }

    if (m.messageStubType === 32) { // Expulsión
      const kickMessage = `
╭━━━━━━━━━━━━━━━━━━━━━╮
┃   🌐 *TECNO-BOT* 🌐  
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ ⛔ *ACCESS REVOKED*  
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🤖 *User:* ${userTag}  
┃ 🛸 *Group:* ${groupName}  
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🔒 _User removed for group integrity._  
┃ ✨ _Security protocol enforced._  
╰━━━━━━━━━━━━━━━━━━━━━╯  

      `;
      await conn.sendLuffy(m.chat, packname, textbot, kickMessage, img, img, redes, fkontak);
    }
  }
}