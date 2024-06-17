/**
  Recode By Xunow
**/

const fs = require('fs')
const { color } = require('./lib/myfunc')

/** owner **/
global.owner = ['62×××']
global.nomerowner = '62××××'

/** settings bot **/
global.botname = 'yumi'
global.wm = 'Powered By Xunow'

/** sticker packname **/
global.packname = 'Xunow'
global.author = '© Xunkw'

/** option sosial media **/  
global.media = {
  sig: 'https://www.instagram.com/taringstoreid',
  syt: 'https://www.youtube.com/@xunowz',
  sgh: 'https://github.com/xunowx',
  sch: 'https://whatsapp.com/channel/0029VaiMVUQD38CPM8l6Vo2g',
  sr: 'https://replit.com/@xunowz',
  swa: 'https://wa.me/62xxxx'
}

/** settings thumbail and newsletterJid **/
global.newsletter = '120363293751777503@newsletter120363309450219034@newsletter'
global.thumb = 'https://telegra.ph/file/c64b1a4f5b6c41c3fa766.jpg'
global.png = fs.readFileSync('./yumi.png')
global.vid = fs.readFileSync('./lib/yumi.mp4')

/** database mongo **/
global.urldb = ''; // kosongin aja tapi kalo mau pake database mongo db isi url mongo

/** function, scraper, and tools to make it more practical **/
global.Func = new (require('./lib/functions'))
global.scrap = new (require('./lib/scrape'))

/** message **/
global.mess = {
  success: 'Done desu~',
  admin: '_*Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !*_',
  botAdmin: '_*Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !*_',
  owner: '_*Perintah Ini Hanya Bisa Digunakan Oleh Owner !*_',
  group: '_*Perintah Ini Hanya Bisa Digunakan Di Group Chat !*_',
  private: '_*Perintah Ini Hanya Bisa Digunakan Di Private Chat !*_',
  wait: '_*⏳ Sedang Di Proses !*_',
}

/** realod file **/
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Update'${__filename}'`))
  delete require.cache[file]
  require(file)
})