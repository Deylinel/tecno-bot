import fetch from 'node-fetch'

export async function before(m, { conn }) {
let name = '🌐𝑻𝑬𝑪𝑵𝑶-𝑩𝑶𝑻 - 𝑪𝒉𝒂𝒏𝒏𝒆𝒍⚙️'
let imagenes = ["https://i.ibb.co/JnfXprw/file.jpg",
"https://i.ibb.co/ZhxvPyg/file.jpg",
"https://i.ibb.co/hXJ2gVc/file.jpg",
"https://i.ibb.co/C6gf61w/file.jpg",
"https://i.ibb.co/nfsL4X2/file.jpg",
"https://i.ibb.co/0Yxny1D/file.jpg"]


let icono = imagenes[Math.floor(Math.random() * imagenes.length)]


global.rcanal = {
 contextInfo: {
             isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363317263885467@newsletter",
      serverMessageId: 100,
      newsletterName: name,
   }, 
   externalAdReply: {
    showAdAttribution: true, 
    title: botname, 
    body: textbot, 
    mediaUrl: null, 
    description: null, 
    previewType: "PHOTO", 
    thumbnailUrl: icono, 
    sourceUrl: canal, 
    mediaType: 1, 
    renderLargerThumbnail: false }, 
    }, 
    }

 global.fake = {
    contextInfo: {
            isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363317263885467@newsletter",
      serverMessageId: 100,
      newsletterName: name,
    },
    },
  }
}