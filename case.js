/** Scripr ZursXyumi                       Recode By Xunow
**/

require('./config')

const { exec, spawn, execSync } = require("child_process")
const { performance } = require("perf_hooks");
const { TelegraPH } = require("./lib/TelegraPH")
const { remini, jarak, ssweb, tiktok, PlayStore, BukaLapak, pinterest, stickersearch, lirik } = require("./lib/scraper")
const { smsg, bytesToSize, checkBandwidth, formatSize, getBuffer, isUrl, jsonformat, nganuin, pickRandom, getRandom, runtime, shorturl, formatp, color, getGroupAdmins, generateProfilePicture } = require("./lib/myfunc");
const { downloadContentFromMessage, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, InteractiveMessage, getContentType } = require('@whiskeysockets/baileys')
const { addExif } = require('./lib/exif')
const fsx = require('fs-extra')
const util = require('util')
const speed = require('performance-now')
const process = require('process');
const checkDiskSpace = require('check-disk-space').default;
const { modul } = require('./module')
const { cmdadd } = require('./lib/hit')
const { cmdaddtd } = require('./lib/hittd')
const { antiSpam } = require('./lib/antispam')
const { adduang, adduangUser, checkuangUser, confirmuang } = require('./lib/atm.js')
const { baileys, keyeddb, axios, ffmpeg, boom, translate, PhoneNumber, chalk, CheckDiskSpace, cheerio, child, crypto, figlet, FileType, FluentFfmpeg, FormData, fs, g4f, HumanReadable, jimp, lodash, lolcatjs, MimeTypes, moment, mongoose, fetch, NodeOsUtils, webpmux, ocr, os, path, hooks, pino, steno, SyntaxError, yargs } = modul
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/list')
const { getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('./lib/register.js')

const db_respon_list = JSON.parse(fs.readFileSync('./lib/store/list.json'))
const premium = JSON.parse(fs.readFileSync('./db/user/premium.json'))
const banned = JSON.parse(fs.readFileSync('./db/user/banned.json'))
const terdaftar = JSON.parse(fs.readFileSync('./db/user/user.json'))
const limit = JSON.parse(fs.readFileSync('./db/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./db/user/uang.json'))
const ceemde = JSON.parse(fs.readFileSync('./db/totalcmd.json'))
const ceemdetd = JSON.parse(fs.readFileSync('./db/todaycmd.json'))
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);

const tictactoe = [];
const kuis = []
const kuismath = {}
const _family100 = {}
const tebakgambar = {}
const tebakgame ={}
const tebakkata = {}
const tebakbendera = {}
const siapaaku = {}
const tebakkalimat = {}
const caklontong = {}
const susunkata = {}
const tekateki = {}
const tebakkabupaten = {}
const tebakkimia = {}
const tebaklirik = {}
const tebaktebakan = {}


module.exports = xunow = async (xunow, m, chatUpdate, store) => {
try {
const { type, quotedMsg, mentioned, now, fromMe } = m
const body = (m.mtype === 'conversation' ? m.message.conversation : m.mtype === 'imageMessage' ? m.message.imageMessage.caption : m.mtype === 'videoMessage' ? m.message.videoMessage.caption : m.mtype === 'extendedTextMessage' ? m.message.extendedTextMessage.text : m.mtype === 'buttonsResponseMessage' ? m.message.buttonsResponseMessage.selectedButtonId : m.mtype === 'listResponseMessage' ? m.message.listResponseMessage.singleSelectReply.selectedRowId : m.mtype === 'InteractiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson)?.id : m.mtype === 'templateButtonReplyMessage' ? m.message.templateButtonReplyMessage.selectedId : m.mtype === 'messageContextInfo' ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.message.InteractiveResponseMessage.NativeFlowResponseMessage || m.text : '');
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const iniFrom = m.key.remoteJid
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1);
const full_args = body.replace(command, '').slice(1).trim();
const text = q = args.join(" ");
const fatkuns = m && (m.quoted || m);
const quoted = (fatkuns?.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns?.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns?.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted || m;

const pushname = m.pushName || "No Name";
const botNumber = await xunow.decodeJid(xunow.user.id);
const sender = m.key.fromMe ? (xunow.user.id.split(':')[0] + '@s.whatsapp.net' || xunow.user.id) : (m.key.participant || m.key.remoteJid);
const senderNumber = sender.split('@')[0];
const isBot = botNumber.includes(senderNumber);
const itsMeYumi = m.sender == botNumber ? true : false
const xunowIsCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const itsMe = (m && m.sender && m.sender == botNumber) || false;
const isUser = terdaftar.includes(sender)
const Belomdaftar = checkRegisteredUser(m.sender)
const isPremium = premium.includes(m.sender)
const isBan = banned.includes(m.sender)

const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime);
const isImage = (type == 'imageMessage')
const isVideo = (type == 'videoMessage')
const isAudio = (type == 'audioMessage')
const isSticker = (type == 'stickerMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''

const groupMetadata = m.isGroup ? await xunow.groupMetadata(m.chat).catch(e => {}) : {};
const groupName = m.isGroup ? groupMetadata?.subject || '' : '';
const participants = m.isGroup ? await groupMetadata?.participants || [] : [];
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) || [] : [];
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
const groupOwner = m.isGroup ? groupMetadata?.owner || '' : '';
const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false;

// ===============< time >=============== //
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam 🏙️'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang 🌆'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore 🌇'
}
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang 🌤️'
}
if(time2 < "10:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌄'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Subuh 🌆'
}
if(time2 < "03:00:00"){
var ucapanWaktu = 'Selamat Tengah Malam 🌃'
}

let ngetik = ['composing']
if (m.message && m.isGroup) {
//xunow.sendPresenceUpdate(ngetik, iniFrom)
//xunow.readMessages([m.key])
//xunow.sendPresenceUpdate('available', iniFrom)
console.log(color(`\n< ======================== >\n`, 'cyan'))
console.log(color(`Group Chat:`, 'green'))
console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
} else {
//xunow.sendPresenceUpdate(ngetik, iniFrom)
//xunow.readMessages([m.key])
//xunow.sendPresenceUpdate('available', iniFrom)
console.log(color(`\n< ======================= >\n`, 'cyan'))
console.log(color(`Private Chat:`, 'green'))
console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
}

/** user maybe **/
if (isCmd && !isUser) {
terdaftar.push(sender)
console.log('Menyiapkan database untuk anda')
fs.writeFileSync('./db/user/user.json', JSON.stringify(terdaftar, null, 2))
}

/** antispam **/
if (isCmd && antiSpam.isFiltered(from) && !m.isGroup) {
console.log(color('[ SPAM ]', 'red'), color(wib, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
return m.reply('「 ❗ 」 Sabar Dong Kak 5 Detik/Command')
}

if (isCmd && antiSpam.isFiltered(from) && m.isGroup) {
console.log(color('[ SPAM ]', 'red'), color(wib, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
return m.reply('「 ❗ 」 Sabar Dong Kak 5 Detik/Command')
}

if (isCmd && !xunowIsCreator) antiSpam.addFilter(from)

/** totalFitur **/
const totalFitur = () =>{
var mytext = fs.readFileSync("./case.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length;
return numUpper
}

// ===============< database >=============== //
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.pc)) user.pc = -1
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
pc: -1,
}

let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('isBanned' in chat)) chat.isBanned = false
if (!('antilink' in chats)) chats.antilink = false
if (!('antilinkv2' in chats)) chats.antilinkv2 = false
} else global.db.data.chats[m.chat] = {
isBanned: false,
antilink: false,
antilinkv2: false
}

let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
if (!('templateImage' in setting)) setting.templateImage = false
if (!('templateVideo' in setting)) setting.templateVideo = false
if (!('templateGif' in setting)) setting.templateGif = false
if (!('templateMsg' in setting)) setting.templateMsg = true
if (!('templateDocument' in setting)) setting.templateDocument = false
if (!('templateButtons' in setting)) setting.templateButtons = false
if (!('autoread' in setting)) setting.autoread = false
if (!("public" in settings)) settings.public = true
} else global.db.data.settings[botNumber] = {
templateImage: false,
templateVideo: false,
templateGif: false,
templateMsg: true,
templateDocument: false,
templateButtons: false,
autoread: false,
public: true
}
} catch (err) {
}

/** ini public dan self **/
if (!db.data.settings[botNumber].public) {
if (!xunowIsCreator) return
}

async function loading() {
var react = [
  "🕐",
  "🕑",
  "🕒",
  "🕓",
  "🕔",
  "🕕",
  "🕖",
  "🕗",
  "🕘",
  "🕙",
  "🕚",
  "🕛",
  "✔️"
];
for (let i = 0; i < react.length; i++) {
await new Promise(resolve => setTimeout(resolve, 10));
await xunow.sendMessage(m.chat, { react: { text: react[i], key: m.key }})
}}

for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`Jangan Tag Dia!!

Dia Sedang AFK ${reason ? 'Dengan Alasan: ' + reason : 'Tanpa Alasan'}
Selama ${clockString(new Date - afkTime)}`.trim())
}

if (global.db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`Kamu berhenti afk ${user.afkReason ? 'setelah: ' + user.afkReason : ''}, Selama ${clockString(new Date - user.afkTime)}`.trim())
user.afkTime = -1
user.afkReason = ''
}

if (isCmd) cmdadd()
const totalhit = JSON.parse(fs.readFileSync('./db/totalcmd.json'))[0].totalcmd
if (isCmd) cmdaddtd()
const totalhittd = JSON.parse(fs.readFileSync('./db/todaycmd.json'))[0].todaycmd

/** pp user **/
try {
ppuser = await xunow.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await xunow.resize(ppuser, 300, 300)

/** function jika butuh **/
// isi di sini

/** function total ceemde **/
const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

/** reset every 12 hours **/
let cron = require('node-cron')
cron.schedule('00 00 * * *', () => {
var resetyah = [{"todaycmd":0}]
claimnya = resetyah
console.log('time to reset')
fs.writeFileSync('./db/todaycmd.json', JSON.stringify(claimnya))
exec(`pm2 restart index`)}, { scheduled: true, timezone: "Asia/Jakarta" })
const point = Math.floor(Math.random() * 1) + 0

/** function limit **/
const limitawal = '15'
const uangawal = '0'

const addlimit = (sender) => {
const obj = { id: sender, limit : 0 }
limit.push(obj)
fs.writeFileSync('./db/user/limit.json', JSON.stringify(limit))
}

const addlimitUser = (sender, amount) => {
let position = false
Object.keys(limit).forEach((i) => {
if (limit[i].id === sender) { position = i }
})
if (position !== false) {
limit[position].limit += amount
fs.writeFileSync('./db/user/limit.json', JSON.stringify(limit))
}
}

const checklimitUser = (sender) => {
let position = false
Object.keys(limit).forEach((i) => {
if (limit[i].id === sender) { position = i }
})
if (position !== false) {
return limit[position].limit
}
}
 
const confirmlimit = (sender, amount) => {
if (isPremium) { return false }
let position = false
Object.keys(limit).forEach((i) => {
if (limit[i].id == sender) { position = i }
})
if (position !== false) {
limit[position].limit -= amount
fs.writeFileSync('./db/user/limit.json', JSON.stringify(limit))
}
}

/** checklimit **/
if (Belomdaftar) {
const checklimit = checklimitUser(sender)
try {
if (checklimit === undefined) addlimit(sender)
addlimitUser(sender, point)
} catch (err) {
console.error(err)
}
}

/** checkuang **/
if (Belomdaftar) {
const checkuang = checkuangUser(sender)
try {
if (checkuang === undefined) adduang(sender)
adduangUser(sender, point)
} catch (err) {
console.error(err)
}
}

/** message via button **/
const koinPerlimit = 100
const yaya = koinPerlimit * args[0]
const beli1 = `*[ PEMBAYARAN BERHASIL ]*\n\n➸ Pengirim : ${global.botname}\n➸ Penerima : ${pushname}\n➸ Nominal pembelian : ${q} \n➸ Harga limit : ${koinPerlimit}/limit\n➸ Sisa uang : ${checkuangUser(sender)}\n\nProses berhasil dengan SN\n${createSerial(15)}`
const beli2 = global.wm
const beli3 = [{buttonId: `${prefix}limit`, buttonText: {displayText: 'CEK LIMIT'}, type: 1}]

const prem1 = `Hai kak ${pushname} ${ucapanWaktu}\n\nFitur Ini Khusus Member Premium Silahkan Buy Premium Untuk Menggunakan Fitur Ini`
const prem2 = `Klik tombol di bawah ini untuk membeli premium`
const prem3 = global.wm
const prem4 = [{buttonId: `${prefix}beli`,buttonText: {displayText: `Upgrade Premium`,},type: 1,},]

const daftar1 = `Hai ${pushname} ${ucapanWaktu}\n\nSebelum Menggunakan fitur ku daftar terlebih dahulu ya`
const daftar2 = `Klik tombol di bawah\nJika tidak ada tombol ketik ${prefix}daftar\n*© ${global.botname}*`
const daftar3 = [{buttonId: `${prefix}daftar`,buttonText: {displayText: `daftar `,},type: 1,},]

const belomregis = `${ucapanWaktu} @${sender.split("@")[0]} Kamu belum terdaftar di database cek private message mu untuk mendaftar`
const limitabis = `*[ LIMIT KAMU HABIS ]*\n\nBeli limit di ${prefix}buylimit atau beli premium untuk mendapatkan unlimited limit`

/** function ke dua jika butuh **/
if (m.mtype === "interactiveResponseMessage"){
console.log('Terdektesi interactive response message, harap waspada ygy')   
let msg = m.message[m.mtype]  || m.msg
if (msg.nativeFlowResponseMessage && !m.isBot){ 
let { id } = JSON.parse(msg.nativeFlowResponseMessage.paramsJson) || {}  
if (id) {
let emit_msg = { 
  key : { ...m.key } , // SET RANDOME MESSAGE ID  
  message:{ extendedTextMessage : { text : id } } ,
  pushName : m.pushName,
  messageTimestamp  : m.messageTimestamp || 754785898978
}
return xunow.ev.emit('messages.upsert', { messages: [emit_msg], type: 'notify' })
}
}
}

/** response addlist **/
if (m.isGroup && isAlreadyResponList(iniFrom, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(iniFrom, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
xunow.sendMessage(iniFrom, { text: sendResponList(iniFrom, body.toLowerCase(), db_respon_list) }, { quoted: m })
} else {
xunow.sendMessage(iniFrom, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, { quoted: m })
} 
}

/** respon cmd with media **/
/* if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, { userJid: xunow.user.id, quoted: m.quoted && m.quoted.fakeObj })
messages.key.fromMe = areJidsSameUser(m.sender, xunow.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
  ...chatUpdate,
  messages: [proto.WebMessageInfo.fromObject(messages)],
  type: 'append'
}
xunow.ev.emit('messages.upsert', msg)
} */
// ===============< keamanan >=============== //
if ((m.chat in global.db.data.chats || m.sender in global.db.data.users)) {
let chat = global.db.data.chats[m.chat]
if (chat && chat.isBanned && !xunowIsCreator) return
}

if (db.data.settings[botNumber].autoread) { 
xunow.readMessages([m.key]) 
}

if (db.data.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
xunow.sendMessage(m.chat, { react: { text: '❌️', key: m.key }})
if (!isBotAdmins) return
let gclink = (`https://chat.whatsapp.com/` + await xunow.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink && xunowIsCreator && isAdmins) return
xunow.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}}

if (db.data.chats[m.chat].antilinkv2) {
if (budy.match(`chat.whatsapp.com`)) {
xunow.sendMessage(m.chat, { react: { text: '❌️', key: m.key }})
if (!isBotAdmins) return
let gclink = (`https://chat.whatsapp.com/` + await xunow.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink && xunowIsCreator && isAdmins) return
xunow.sendMessage(m.chat, { delete: m.key })
}}

// ===============< memasuki area case >=============== //
switch(command) {
case 'allmenu':{
xunow.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
const tek = `Hallo @${m.sender.split('@')[0]} ogenki gen desu ka??

> _*Owner Menu*_
┌ ◦ ${prefix}bot
│ ◦ ${prefix}join
│ ◦ ${prefix}leave 
│ ◦ ${prefix}addprem 
│ ◦ ${prefix}delprem
│ ◦ ${prefix}setppbot
│ ◦ $
│ ◦ =>
└ ◦ >

> _*Sticker Menu*_
┌ ◦ ${prefix}sticker
│ ◦ ${prefix}smeme (BUG) 
│ ◦ ${prefix}swm 
│ ◦ ${prefix}colong 
└ ◦ ${prefix}qc

> _*Info Menu*_
┌ ◦ ${prefix}totalfitur 
│ ◦ ${prefix}owner
│ ◦ ${prefix}listpc 
│ ◦ ${prefix}listgc
│ ◦ ${prefix}buyprem
│ ◦ ${prefix}sewabot
└ ◦ ${prefix}donasi

> _*Tools Menu*_
┌ ◦ ${prefix}tts
│ ◦ ${prefix}readvo
│ ◦ ${prefix}tr
│ ◦ ${prefix}jarak
│ ◦ ${prefix}kalkulator
│ ◦ ${prefix}ocr
│ ◦ ${prefix}ssweb
│ ◦ ${prefix}tourl
│ ◦ ${prefix}up
│ ◦ ${prefix}upssa
└ ◦ ${prefix}get

> _*Ai Menu*_
┌ ◦ ${prefix}ai
└ ◦ ${prefix}remini

> _*Main Menu*_
┌ ◦ ${prefix}disk
│ ◦ ${prefix}daftar
└ ◦ ${prefix}ping


> _*Downloader Menu*_
┌ ◦ ${prefix}tiktok
│ ◦ ${prefix}instagram
│ ◦ ${prefix}fasebook
│ ◦ ${prefix}ttslide
└ ◦ ${prefix}lahelu

> _*Search Menu*_
┌ ◦ ${prefix}tiktoks
│ ◦ ${prefix}pinterest
│ ◦ ${prefix}play
└ ◦ ${prefix}meme

> _*Voice Menu*_
┌ ◦ ${prefix}bass
│ ◦ ${prefix}blown
│ ◦ ${prefix}deep
│ ◦ ${prefix}earrape
│ ◦ ${prefix}fast
│ ◦ ${prefix}fat
│ ◦ ${prefix}nightcore
│ ◦ ${prefix}reverse
│ ◦ ${prefix}robot
│ ◦ ${prefix}slow
│ ◦ ${prefix}smooth
│ ◦ ${prefix}tupai
└ ◦ ${prefix}smooth

> _*Group Menu*_
┌ ◦ ${prefix}add
│ ◦ ${prefix}kick
│ ◦ ${prefix}hidetag
│ ◦ ${prefix}group
│ ◦ ${prefix}tagall
│ ◦ ${prefix}setppgc
│ ◦ ${prefix}editsubjek
│ ◦ ${prefix}editdesk
│ ◦ ${prefix}editinfo
│ ◦ ${prefix}antilink
│ ◦ ${prefix}antilinkv2
│ ◦ ${prefix}promote
└ ◦ ${prefix}demote

> _*Photooxy Menu*_
┌ ◦ ${prefix}sweet-candy
│ ◦ ${prefix}illuminated-metallic
│ ◦ ${prefix}carved-wood
│ ◦ ${prefix}night-sky
│ ◦ ${prefix}butterfly
│ ◦ ${prefix}coffee-cup
│ ◦ ${prefix}picture-of-love
│ ◦ ${prefix}flower-typography
│ ◦ ${prefix}harry-potter
│ ◦ ${prefix}under-grass
│ ◦ ${prefix}metallic
│ ◦ ${prefix}naruto
│ ◦ ${prefix}pubg
│ ◦ ${prefix}shadow-sky
└ ◦ ${prefix}flaming

> _*Text Pro Menu*_
┌ ◦ ${prefix}chocolate-cake
│ ◦ ${prefix}3d-orange-juice
│ ◦ ${prefix}neon
│ ◦ ${prefix}blackpink
│ ◦ ${prefix}3d-neon-light
│ ◦ ${prefix}magma
│ ◦ ${prefix}green-horror
│ ◦ ${prefix}3dboxtext
│ ◦ ${prefix}thunder
│ ◦ ${prefix}3dchristmas
│ ◦ ${prefix}logobear
│ ◦ ${prefix}berry
│ ◦ ${prefix}pencil
├ ◦ ${prefix}marvel-studios
│ ◦ ${prefix}ninja-logo
│ ◦ ${prefix}video-game-classic
│ ◦ ${prefix}glitchtiktok
│ ◦ ${prefix}glitch2
└ ◦ ${prefix}porn-hub`
xunow.sendMessage(m.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb },
    fileName: ucapanWaktu,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.media.sig,
            thumbnailUrl: global.thumb,
            title: global.botname,
            body: global.wm,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: global.newsletter,
            serverMessageId: null,
            newsletterName: 'Hai saya menggunakan WhatsApp!'
        }
    }
}, { quoted: m });

}
break
// ===============< owner >=============== //
case 'upsw': {
if (!xunowIsCreator) return m.reply(mess.owner)
if (!quoted) return m.reply(`Balas Image/video/audio/teks Dengan Caption ${prefix + command}`);
let statusJidList = await Object.keys(store.contacts).filter(a => a.includes("s.whatsapp.net"));
let colors = ['#7ACAA7', '#6E257E', '#5796FF', '#7E90A4', '#736769', '#57C9FF', '#25C3DC', '#FF7B6C', '#55C265', '#FF898B', '#8C6991', '#C69FCC', '#B8B226', '#EFB32F', '#AD8774', '#792139', '#C1A03F', '#8FA842', '#A52C71', '#8394CA', '#243640'];
let fonts = [0, 1, 2, 6, 7, 8, 9, 10];

if (mime) {
if (/audio/.test(mime)) {
await xunow.sendMessage('status@broadcast', { audio: await quoted.download(), mimetype: 'audio/mp4', ptt: true, waveform: [100, 0, 100, 0, 100, 0, 100] }, { backgroundColor: colors[Math.floor(Math.random() * colors.length)], statusJidList });
await m.reply(`Up status ke : ${statusJidList.length} Kontak`);
} else {
let type = /image/.test(mime) ? 'image' : /video/.test(mime) ? 'video' : false;
if (!type) m.reply('Type tidak didukung');
await xunow.sendMessage('status@broadcast', { [type]: await quoted.download(), caption: text || '' }, { statusJidList });
await m.reply(`Up status ke : ${statusJidList.length} Kontak`);
}
} else {
if (!text) return m.reply('Mana text?')
await xunow.sendMessage('status@broadcast', { text: text }, { backgroundColor: colors[Math.floor(Math.random() * colors.length)], textArgb: 0xffffffff, font: fonts[Math.floor(Math.random() * colors.length)], statusJidList });
await m.reply(`Up status ke : ${statusJidList.length} Kontak`);
}
}
break
// ===================================== //
case 'bot':
if (!xunowIsCreator) return m.reply(mess.owner)
if (args[0] == "public") {
if (db.data.settings[botNumber].public == true) return m.reply("Sudah Active")
db.data.settings[botNumber].public = true
m.reply("Mode Public Telah Active")
} else if (args[0] == "self") {
if (db.data.settings[botNumber].public == false) return m.reply("Sudah Off")
db.data.settings[botNumber].public = false
m.reply("Mode Self Telah Active")
} else if (args[0] == "banchat") {
if (global.db.data.chats[m.chat].isBanned = true) return m.reply("Sudah Active")
global.db.data.chats[m.chat].isBanned = true
m.reply("berhasil banchat")
} else if (args[0] == "unbanchat") {
if (global.db.data.chats[m.chat].isBanned = false) return m.reply("Sudah Off")
global.db.data.chats[m.chat].isBanned = false
m.reply("berhasil unbanchat")
} else if (args[0] == "autoread") {
if (db.data.settings[botNumber].autoread == true) return m.reply("Sudah Active")
db.data.settings[botNumber].autoread = true
m.reply("Auto Read Telah Active")
} else if (args[0] == "autoread") {
if (db.data.settings[botNumber].autoread == false) return m.reply("Sudah Off")
db.data.settings[botNumber].autoread = false
m.reply("Auto Read Telah Off")
} else {
m.reply(`${prefix}${command} public/self/banchat/unbanchat/Aautoread/autoread`)
}
break
// ===================================== //
case 'join': {
if (!xunowIsCreator) return m.reply(mess.owner)
if (!text) return m.reply('Masukkan Link Group!')
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await xunow.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
// ===================================== //
case 'out': {
if (!xunowIsCreator) return m.reply(mess.owner)
m.reply('Sayonaraaa...')
await xunow.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
// ===================================== //
case 'addprem':
if (!xunowIsCreator) return m.reply(mess.owner)
if (!q) return reply(`Masukan Nomornya contoh: ${prefix + command} 6285183080049`)
if(isNaN(q)) return await m.reply('Harus berupa nomor')
if (q.includes(`+`)) return m.reply('Tidak menggunakan + langsung nomor 62xxx')
prmi = args.join(" ")
premium.push(`${prmi}@s.whatsapp.net`)
fs.writeFileSync('./db/user/premium.json', JSON.stringify(premium))
m.reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${prmi}`)
break
// ===================================== //
case 'delprem': case 'dellprem':
if (!xunowIsCreator) return m.reply(mess.owner)
if (!q) return reply(`Masukan Nomornya contoh: ${prefix + command} 6285183080049`)
if(isNaN(q)) return await m.reply('Harus berupa nomor')
if (q.includes(`+`)) return m.reply('Tidak menggunakan + langsung nomor 62xxx')
prmin = `${q}@s.whatsapp.net`
anul = banned.indexOf(prmin)
premium.splice(anul, 1)
fs.writeFileSync('./db/user/premium.json', JSON.stringify(premium))
m.reply(mess.success)
break
// ===================================== //
case 'setppbot': case 'setbotpp': {
if (!xunowIsCreator) return m.reply(mess.owner)
if (!quoted) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
xunow.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
var medis = await xunow.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/panjang`) {
var { img } = await generateProfilePicture(medis)
await xunow.query({ tag: 'iq', attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture' }, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }] })
fs.unlinkSync(medis)
m.reply(`Success`)
} else {
var memeg = await xunow.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
m.reply(`Success`)
}
}
break
// ===============< sticker >=============== //
case 'sticker': case 'stiker': case 's':{
if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await xunow.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await xunow.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
return m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
// ===================================== //
case 'smeme': {
let respond = `Kirim/m?.reply image/sticker dengan caption ${prefix + command} text1|text2`
if (!/image/.test(mime)) return m?.reply(respond)
if (!text) return m?.reply(respond)
try {
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let dwnld = await xunow.downloadAndSaveMediaMessage(qmsg)
let fatGans = await TelegraPH(dwnld)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
let FaTiH = await xunow.sendImageAsSticker(m?.chat, smeme, m, { packname: global.packname, author: global.auhor })
await fs.unlinkSync(FaTiH)
} catch (e) {
}
}
break
 // ===================================== //
case 'swm': {
let [teks1, teks2] = text.split`|`
if (!teks1) return m.reply(`Kirim/m.reply image/video dengan caption ${prefix + command} teks1|teks2`)
if (!teks2) return m.reply(`Kirim/m.reply image/video dengan caption ${prefix + command} teks1|teks2`)
if (/image/.test(mime)) {
let media = await xunow.downloadMediaMessage(qmsg)
let encmedia = await xunow.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await xunow.downloadMediaMessage(qmsg)
let encmedia = await xunow.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
await fs.unlinkSync(encmedia)
} else {
return m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
// ===================================== //
case 'colong': case 'wm': {
if (!m.quoted) return m.reply('Reply with a sticker!')
xunow.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) return m.reply('Reply with a sticker!')
let img = await m.quoted.download()
if (!img) return m.reply('Failed to download sticker!')
stiker = await addExif(img, packname || '', author || '' )
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
else return m.reply('An error occurred: ' + e)
} finally {
if (stiker) xunow.sendFile(m.chat, stiker, 'wms.webp', '', m, false, { asSticker: true })
else return m.reply('Conversion failed')
}
}
break 
// ===================================== //
case 'qc': {
if (checklimitUser(sender) <= 0) return m.reply(limitabis) 
const { quote } = require('./lib/quote.js')
let text
if (args.length >= 1) {
text = args.slice(0).join(" ")
} else if (m.quoted && m.quoted.text) {
text = m.quoted.text
} else m.reply("Input teks atau m.reply teks yang ingin di jadikan quote!")
if (!text) return m.reply('masukan text')
if (text.length > 30) return m.reply('Maksimal 30 Teks!')
xunow.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
const rest = await quote(text, pushname, ppnyauser)
xunow.sendImageAsSticker(m.chat, rest.result, m, { packname: `${global.packname}`, author: `${global.author}`})
}
break
// ===============< info >=============== //
case 'totalfitur':{
await m.reply(`Total fitur Bot saat ini adalah ${totalFitur()}`)
}
break
// ===================================== //
case 'creator': case 'owner': {
const sentMsg = await xunow.sendContactArray(m.chat, [
  ['6285183080049', 'Xunow', 'Name', 'Number', 't.me/TaringStore', 'Japanese', 'https://github.com/xunowx', 'Open Bot Wa 24Jam😎🔥']
], m)
await xunow.sendTextWithMentions(m.chat, `Hai kak @${m.sender.split('@')[0]} itu adalah nomer ownerku, ga boleh di spam ya ~`, m)
}
break
// ===================================== //
case 'listpc': {
let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let teks = `*[ Private Chat ]*
Total: ${anulistp.length} Chat\n\n`
for (let i of anulistp) {
let nama = store.messages[i].array[0].pushName
teks += `∘ *Nama* : ${nama}
∘ *User* : @${i.split('@')[0]}
∘ *Chat* : https://wa.me/${i.split('@')[0]}\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n`
}
xunow.sendTextWithMentions(m.chat, teks, m)
}
break
// ===================================== //
case 'listgc': {
let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `*[ Group Chat ]*
Total: ${anulistg.length} Group\n\n`
for (let i of anulistg) {
let metadata = await xunow.groupMetadata(i)
teks += `∘ *Name* : ${metadata.subject}
∘ *Owner* : ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}
∘ *Id* : ${metadata.id}
∘ *Made* : ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}
∘ *Member* : ${metadata.participants.length}\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n`
}
xunow.sendTextWithMentions(m.chat, teks, m)
}
break
// ===================================== //
case 'speed': case 'ping': {
const used = process.memoryUsage()
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `Response Speed ${latensi.toFixed(4)} _Second_\n${oldd - neww} _Miliseconds_\n\nRuntime : ${runtime(process.uptime())}`.trim()
m.reply(respon)
}
break
// ===================================== //
case 'runtime': case 'rt':{
m.reply(`Aktif selama ${runtime(process.uptime())}`)
}
break
// ===================================== //
case 'donasi': case 'donate':{
xunow.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/19159af95476d12c66bde.jpg' }, caption: `Hai Kak @${sender.split("@")[0]} Mau ${command}?

Silahkan Hubungin Owner Ku Ya Kak
Atau Juga Bisa Isi Nomor Payment Di Bawah Ya

Payment:
Ovo : 6285183080049

Makasih Yang Udah ${command} Semoga Rezeki Nya Di Limpahkan Sama Allah SWT.`, mentions: [sender]}, { quoted: m })
}
break
// ===================================== //
case 'buyprem': case 'buypremium': case 'sewa': case 'sewabot':{
xunow.sendMessage(iniFrom, { image: { url: 'https://telegra.ph/file/0c62e2a3dff3bbf57f594.png' }, caption: `Hai Kak @${sender.split("@")[0]} Mau ${command} Ya?

Harganya Bisa Pencet Link Di Bawah Ya Kak
https://wa.me/6285183080049

Payment:
Ovo : 6285183080049

*Note :* Tidak ada metode pembayaran lain ya kak`, mentions: [sender]}, { quoted: m })
}
break
// ===============< tools >=============== //
case 'tts':{
if (!text) return m.reply(`Ex: ${prefix + command} hello world`)
xunow.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
const a = await (await axios.post("https://gesserit.co/api/tiktok-tts", { text: text, voice: "id_001" }, { headers: { Referer: "https://gesserit.co/tiktok", "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36" ,responseType: "arraybuffer"}})).data
const b = Buffer.from(a.audioUrl)
xunow.sendMessage(m.chat, { audio: Buffer.from(a.audioUrl.split("base64,")[1],"base64"), mimetype: "audio/mpeg" }, { quoted : m })
}
break
// ===================================== //
case 'rvo': case 'readvo': case 'readviewonce': {
if (!/viewOnce/.test(m.quoted?.mtype)) return m.reply('Reply a viewOnceMessage')
let q = await m.getQuotedObj()
let vtype = Object.keys(q.message)[0]
let mtype = Object.keys(q.message[vtype].message)[0]
delete q.message[vtype].message[mtype].viewOnce
xunow.sendMessage(m.chat, { forward: q }, { quoted: m })
}
break
// ===================================== //
case 'tr':{
let lang, text
if (args.length >= 2) {
lang = args[0] ? args[0] : 'id', text = args.slice(1).join(' ')
} else if (m.quoted && m.quoted.text) {
lang = args[0] ? args[0] : 'id', text = m.quoted.text
} else return m.reply(`Ex: ${prefix + command} id hello i am robot`)
const translate = require('@vitalets/google-translate-api')
xunow.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let res = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null)
if (!res) return m.reply(`Error : Bahasa"${lang}" Tidak Support`)
m.reply(`*Terdeteksi Bahasa:* ${res.from.language.iso}\n*Ke Bahasa:* ${lang}\n\n*Terjemahan:* ${res.text}`.trim())
}
break
// ===================================== //
case 'jarak':{
var [from, to] = text.split`|`
if (!(from && to)) return m.reply(`Ex: ${prefix + command} jakarta|bandung`)
xunow.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
var data = await jarak(from, to)
if (data.img) return xunow.sendMessage(m.chat, { image: data.img, caption: data.desc }, { quoted: m })
else m.reply(data.desc)
}
break
// ===================================== //
case 'kalkulator':{
val = text
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = val
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
xunow.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
try {
let result = (new Function('return ' + val))()
if (!result) return m.reply(result)
m.reply(`*${format}* = _${result}_`)
} catch (e) {
if (e == undefined) return m.reply('Isinya?')
m.reply('Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport')
}
}
break
// ===================================== //
case 'get': {
if (!/^https?:\/\//.test(text)) return m.reply('Awali *URL* dengan http:// atau https://')
let linknyaurl = await shorturl(text)
let _url = new URL(text)
let url = `${_url.origin}${_url.pathname}${_url.search}`;
let res = await fetch(url)
if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
delete res
m.reply(`Content-Length: ${res.headers.get('content-length')}`)
}
if (!/text|json/.test(res.headers.get('content-type'))) return xunow.sendFile(m.chat, url, 'file', `_iyh_`, m)
let txt = await res.buffer()
try {
txt = util.format(JSON.parse(txt + ''))
} catch (e) {
txt = txt + ''
} finally {
m.reply(txt.slice(0, 65536) + '')
}
}
break
// ===================================== //
case 'ocr':{
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) return m.reply('Balas gambar dengan perintah .ocr')
if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`Mime ${mime} tidak didukung!`)
const ocrapi = require("ocr-space-api-wrapper")
let img = await xunow.downloadAndSaveMediaMessage(q)
let url = await TelegraPH(img)
let hasil = await ocrapi.ocrSpace(url)
 await m.reply(hasil.ParsedResults[0].ParsedText)
}
break
// ===================================== //
case 'ss': case 'ssweb':{
if (!/^https?:\/\//.test(text)) return m.reply('Awali *URL* dengan http:// atau https://')
xunow.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let krt = await ssweb(text)
xunow.sendMessage(m.chat,{image: krt.result, caption: global.mess.success },{quoted:m})
}
break
// ===================================== //
case 'up': case 'upload':{
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`Send or reply to images with commands ${prefix + command}`)
xunow.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let img = await q.download()
if (!img) return m.reply('not detected')
let json = await scrap.uploader(img)
if (!json.status) return m.reply(Func.jsonFormat(json))
await m.reply(Func.jsonFormat(json))
}
break
// ===================================== //
case 'tourl':{
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`Send or reply to images with commands ${prefix + command}`)
xunow.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let img = await q.download()
if (!img) return m.reply('not detected')
let iyh = await xunow.downloadAndSaveMediaMessage(q)
let url = await TelegraPH(iyh)
await m.reply(url)
}
break
// ===================================== //
case 'upssa':{
let ah = require ('./lib/ssh-uploader.js')
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) return m.reply(`Send or reply to images/video/sticker/doc with commands ${prefix + command}`)
xunow.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let hy = await q.download()
if (!hy) return m.reply('not detected')
let res = await ah.uploaderSSA(hy)
if (!res.status) return m.reply(Func.jsonFormat(res))
await m.reply(Func.jsonFormat(res))
}
break
// ===============< openai >=============== //
case 'ai':{
if (!text) return m.reply("mau nanya apa sama naw")
let { data } = await axios.get("https://www.putz.my.id/api/ai?type=hercai&q=" + text)
m.reply(data.result)
}
break
// ===================================== //
case 'remini':{
if (!quoted) return m.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply('hanya support gambar')
xunow.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let media = await quoted.download()
const This = await remini(media, "enhance");
xunow.sendFile(m.chat, This, 'remini.jpg', global.mess.success, m);
}
break
// ===============< main >=============== //
case 'disk':{
exec('cd && du -h --max-depth=1', (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
break
// ===================================== //
case 'reg': case 'daftar': {
if (Belomdaftar) return m.reply('Akun kamu sudah terdaftar di database')
if (isBan) return m.reply(mess.banned)
if (!q.includes('~')) return m.reply('Format salah! contoh: .daftar yumi~17')
const namaUser = q.substring(0, q.indexOf('~') - 0)
const umurUser = q.substring(q.lastIndexOf('~') + 1)
const serialUser = createSerial(20)

if (isNaN(umurUser)) return m.reply('Umur harus berupa angka!!')
if (namaUser.length >= 30) return m.reply('Namamu terlalu panjang, Maksimal 30 karakter')
if (umurUser > 40) return m.reply('Umur terlalu tua, Maksimal 40 tahun')
if (umurUser < 12) return m.reply('Umur terlalu muda, Minimal 12 tahun')
mzd = `Kamu telah terdaftar dengan informasi sebagai berikut:\n\n⭔ Nama : ${namaUser}\n⭔ Umur : ${umurUser}\n⭔ Nomor : wa.me/${m.sender.split("@")[0]}\n⭔ SN : ${serialUser}`
veri = m.sender

if (!m.isGroup) { 
addRegisteredUser(m.sender, namaUser, umurUser, serialUser)
adduang(sender)
adduangUser(sender, 1000)
addlimit(sender)
addlimitUser(sender, 20)
xunow.send2ButtDoc(m.chat, '', mzd, global.wm, global.botname, global.media.sig, 'https://telegra.ph/file/137a5210e0723261d0d8b.jpg', 'Instagram', global.media.sig, 'MENU', `${prefix}menu`, m)
} else {
addRegisteredUser(m.sender, namaUser, umurUser, serialUser)
adduang(sender)
adduangUser(sender, 1000)
addlimit(sender)
addlimitUser(sender, 20)
xunow.send2ButtDoc(m.chat, '', mzd, global.wm, global.botname, global.media.sig, 'https://telegra.ph/file/137a5210e0723261d0d8b.jpg', 'Instagram', global.media.sig, 'MENU', `${prefix}menu`, m)        
}
}
break
// ===================================== //
case 'ceksn':
const hy = createSerial(20) 
m.reply(`SN : ${hy}`)
break
// ===============< downloader >=============== //
case 'tiktok': case 'tt': {
if (args.length === 0) return m.reply(`Example: ${prefix + command} linknya`);
xunow.sendMessage(m.chat, { react: { text: '🕒', key: m.key }});
try {
let data = await tiktok(args[0]);
xunow.sendMessage(m.chat, { video: { url: data.nowm }, caption: data.title, fileName: `tiktok.mp4`, mimetype: 'video/mp4' }).then(() => {
xunow.sendMessage(m.chat, { audio: { url: data.audio }, fileName: `tiktok.mp3`, mimetype: 'audio/mp3' });
});
} catch (e) {
m.reply(`Error, jika itu adalah tautan tiktok slide, harap gunakan fitur ${prefix}ttslide`);
}
}
break;
// ===================================== //
case 'instagram': case 'ig':{
if (!text) return m.reply("Mana URL-nya?");
if (m.isGroup) return m.reply(`karena fitur ini bisa menyebabkan spam maka fitur ${command} tidak bisa di gunakan di group`)
const regex = /^(?:https?:\/\/)?(?:www\.)?instagram\.com\/(?:p|tv|reel)\/([^\/?#&]+)/i;
if (regex.test(text)) {
const { data } = await axios.post("https://allvideodownloader.cc/wp-json/aio-dl/video-data/",{url: text});
let urls = data.medias.map(item => item.url);
const totalCount = urls.length;
if (totalCount > 0) {
for (let i = 0; i < totalCount; i++) {
await xunow.sendFile(m.chat, urls[i], 'file', `${i + 1}/${totalCount}`, m);
}
} else {
await m.reply('Maaf, sedang error.');
}
} else {
await m.reply('URL yang diberikan bukan URL Instagram.');
}}
break;
// ===================================== //
case 'fasebook': case 'fb':{
if (!text) return m.reply("Mana URL-nya?");
const facebookRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com\/)/;
if (!facebookRegex.test(text)) {
return m.reply("URL yang Anda berikan bukan URL Facebook.");
}
const { data } = await axios.post("https://allvideodownloader.cc/wp-json/aio-dl/video-data/", { url: text });
await xunow.sendMessage(m.chat, { video: { url: data.medias[0].url }, caption: global.mess.success, fileName: `tiktok.mp4`, mimetype: 'video/mp4' })
}
break;
// ===================================== //
case 'ttslide':{
if (!text) return m.reply("mana urlnya?")
if (m.isGroup) return m.reply("karena fitur ini bisa menyebabkan spam maka fitur ttslide tidak bisa di gunakan di group")
const { data } = await axios.post("https://allvideodownloader.cc/wp-json/aio-dl/video-data/",{url:text});
let urls = data.medias.map(item => item.url);
const totalCount = urls.length;
if (totalCount > 1) {
for (let i = 0; i < totalCount - 1; i++) {
await new Promise(resolve => setTimeout(resolve, i * 3000));
await xunow.sendMessage(m.chat, { image: { url: urls[i] }, caption: `(${i + 1}/${totalCount})` }, { quoted: m });
}} else {
await m.reply('No images found after filtering.');
}}
break;
// ===================================== //
case 'lahelu': case 'meme': {
if (args.length == 0) return m.reply(`Example: ${prefix + command} kucing berantem`)
let res = await nganuin(`https://www.putz.my.id/api/download?type=lahelu&q=${args[0]}`)
let mediaType = res.result.media.includes('video-') ? 'video' : res.result.media.includes('image-') ? 'image' : null;
if (mediaType === 'video') {
xunow.sendMessage(m.chat, { video: { url: res.result.media} , caption: res.result.title }, { quoted: m })
} else if (mediaType === 'image') {
xunow.sendMessage(m.chat, { image: { url: res.result.media}, caption: res.result.title }, { quoted: m })
} else {
m.reply("URL yang diberikan tidak mendukung video atau gambar.")
}}
break;
// ===============< search >=============== //
case 'tiktoks': case 'ttsearch': {
if (args.length == 0) return m.reply(`Example: ${prefix + command} sad vibes malam`)
xunow.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let res = await nganuin(`https://www.putz.my.id/api/download?type=tiktoks&q=${args[0]}`)
xunow.sendMessage(m.chat, { video: { url: res.result.no_watermark }, caption: res.result.title, fileName: `tiktok.mp4`, mimetype: 'video/mp4' }).then(() => {
xunow.sendMessage(m.chat, { audio: { url: res.result.music }, fileName: `tiktok.mp3`, mimetype: 'audio/mp4' })
})
}
break;
// ===================================== //
case 'pin': case 'pinterest':{
if (!text) return m?.reply(`Ex: ${prefix + command} kucing`)
let res = await pinterest(text)
xunow.sendMessage(m?.chat,{image: {url:getRandom(res)}, caption: "Done"},{quoted:m})
}
break;
// ===================================== //
case 'play':{
if (!text) return m.reply('Ex .play Salmonela Jeda')
xunow.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
const yts = require('yt-search')
const ytdl = require('youtubedl-core')
const mp3File = `./tmp/${Date.now()}.mp3`;
const nok = await yts(text)
const lot = nok
ytdl(lot.videos[0].url, { filter: "audioonly" }).pipe(fs.createWriteStream(mp3File)).on("finish", async () => {
const buffer = fs.readFileSync(mp3File)
xunow.sendMessage(m.chat, { audio: buffer, mimetype: "audio/mpeg", }, { quoted: m })
fs.unlinkSync(mp3File)
})
}
break
// ===============< voice >=============== //
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':{
if (!qmsg) return m.reply("m.reply audio nya")
xunow.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
let media = await xunow.downloadAndSaveMediaMessage(qmsg)
let ran = pickRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply(err)
let buff = fs.readFileSync(ran)
xunow.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else m.reply(`m.reply to the audio you want to change with a caption *${prefix + command}*`)
} catch (e) {
console.log(e)
m.reply('error')
}}
break
// ===============< group >=============== //
case 'add':{
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !xunowIsCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!text && !m.quoted) m.reply('masukkan nomor yang ingin di tambahkan')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await xunow.groupParticipantsUpdate(m.chat, [users], 'add').catch(console.log)
}
break
// ===================================== //
case 'kick':{
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !xunowIsCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!text && !m.quoted) m.reply('masukkan nomor yang ingin di kick')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await xunow.groupParticipantsUpdate(m.chat, [users], 'remove').catch(console.log)
}
break
// ===================================== //
case 'promote':{
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !xunowIsCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!text && !m.quoted) m.reply('masukkan nomor yang ingin di promote')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await xunow.groupParticipantsUpdate(m.chat, [users], 'promote').catch(console.log)
}
break
// ===================================== //
case 'demote':{
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !xunowIsCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!text && !m.quoted) m.reply('masukkan nomor yang ingin di demote')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await xunow.groupParticipantsUpdate(m.chat, [users], 'demote').catch(console.log)
}
break
// ===================================== //
case 'group': { 
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !xunowIsCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (args[0] === 'close'){
await xunow.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
await xunow.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
m.reply(`Silahkan Ketik ${prefix + command} open/ ${prefix + command} close`)
}
}
break
// ===================================== //
case 'editinfo': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !xunowIsCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
 if (args[0] === 'open'){
await xunow.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'close'){
await xunow.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
m.reply(`Silahkan Ketik ${prefix + command} open/ ${prefix + command} close`)
}
}
break
// ===================================== //
case 'hidetag': {
if (!m.isGroup && isAdmins) return m.reply('Khusus Group Dan Admin Group')
xunow.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:m})
}
break
// ===================================== //
case 'editsubjek': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !xunowIsCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!text) return m.reply('Text nya ?')
await xunow.groupUpdateSubject(m.chat, text).then((res)).catch((err) => m.reply(jsonformat(err)))
}
break
// ===================================== //
case 'editdesk':{
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !xunowIsCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!text) return m.reply('Text Nya ?')
await xunow.groupUpdateDescription(m.chat, text).then((res)).catch((err) => m.reply(jsonformat(err)))
}
break
// ===================================== //
case 'setppgc': case 'setppgroup': case 'setgcpp': case 'setgrouppp': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !xunowIsCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!quoted) return m.reply(`Where is the picture?`)
if (!/image/.test(mime)) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
var mediz = await xunow.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `/panjang`) {
var { img } = await generateProfilePicture(mediz)
await xunow.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(mediz)
m.reply(`Success`)
} else {
var memeg = await xunow.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
m.reply(`Success`)
}
}
break
// ===================================== //
case 'tagall': {
if (!m.isGroup && !isAdmins) return
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
xunow.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:m })
}
break
// ===================================== //
case 'on': case 'enable':{
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isGroupOwner && !xunowIsCreator) return m.reply(mess.admin)
const data = {
title: "Touch Here",
sections: [{
title: 'Silakan di pilih opsi berikut ini',
rows: [
{title: "Anti link", id: `${prefix}antilink on`},
{title: "Anti link v2", id: `${prefix}antilinkv2 on`},
{title: "Public", id: `${prefix}bot public`},
{title: "Self", id: `${prefix}bot self`},
{title: "Banchat", id: `${prefix}bot banchat`},
{title: "Unbanchat", id: `${prefix}bot unbanchat`},
{title: "Autoread", id: `${prefix}bot autoread`}
]}]
}

xunow.kirimListWoy(m.chat, 'Hai kak ' + pushname + ' silakan di pilih opsi berikut ini', 'Klik button di bawah ya', global.wm, data, m)
}
break
case 'off': case 'disable':{
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isGroupOwner && !xunowIsCreator) return m.reply(mess.admin)
const data = {
title: "Touch Here",
sections: [{
title: 'Silakan di pilih opsi berikut ini',
rows: [
{title: "Anti link", id: `${prefix}antilink off`},
{title: "Anti link v2", id: `${prefix}antilinkv2 off`},
{title: "Public", id: `${prefix}bot public`},
{title: "Self", id: `${prefix}bot self`},
{title: "Banchat", id: `${prefix}bot banchat`},
{title: "Unbanchat", id: `${prefix}bot unbanchat`},
{title: "Autoread", id: `${prefix}bot autoread`}
]}]
}

xunow.kirimListWoy(m.chat, 'Hai kak ' + pushname + ' silakan di pilih opsi berikut ini', 'Klik button di bawah ya', global.wm, data, m)
}
break
// ===================================== //
case 'antilink': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !xunowIsCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (args[0] === 'on') {
if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya 🕊️`)
db.data.chats[m.chat].antilink = true
m.reply(`Antilink Group WhatsApp Aktif 🕊️`)
} else if (args[0] === 'off') {
if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Nonaktif Sebelumnya 🕊`)
db.data.chats[m.chat].antilink = false
m.reply(`Antilink Group WhatsApp Nonaktif 🕊️`)
} else {
m.reply(`Mode ${command}\n\n\nKetik ${prefix + command} on/off`)
}
}
break
// ===================================== //
case 'antilinkv2':
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !xunowIsCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (args.length < 1) return m.reply(`Example ${prefix + command} on/off`)
if (q == 'on'){
global.db.data.chats[m.chat].antilinkv2 = true
m.reply(`Berhasil Mengaktifkan antilinkv2`)
} else if (q == 'off'){
global.db.data.chats[m.chat].antilinkv2 = false
m.reply(`Berhasil Mematikan antilinkv2`)
}
break
// ===============< photooxy >=============== //
case 'sweet-candy':
case 'illuminated-metallic':
case 'carved-wood':
case 'night-sky':
case 'butterfly':
case 'coffee-cup':
case 'picture-of-love':
case 'flower-typography':
case 'harry-potter':
case 'under-grass':
case 'metallic':
case 'naruto':
case 'shadow-sky':
case 'flaming':{
if (!text) return m.reply(`Ex: ${prefix + command} xunow`)
xunow.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
xunow.sendMessage(m.chat,{image: {url: `https://dsgner.vercel.app/api/photooxy/${command}?text=${text}`}, caption: global.mess.success },{quoted:m})
}
break;
// ===================================== //
case 'pubg':{
let t = text.split('|');
if (t.length < 2) return m.reply(`Ex: ${prefix + command} xunow|Sukaloli`);
let text1 = t[0];
let text2 = t[1];
xunow.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
xunow.sendMessage(m.chat,{image: {url: `https://dsgner.vercel.app/api/textpro/${command}?text=${text1}&text2=${text2}`}, caption: global.mess.success },{quoted:m})
}
break
// ===============< textpro >=============== //
case 'chocolate-cake':
case '3d-orange-juice':
case 'neon':
case 'blackpink':
case '3d-neon-light':
case 'magma':
case 'green-horror':
case '3dboxtext':
case 'thunder':
case '3dchristmas':
case 'logobear':
case 'berry':
case 'pencil':
case 'glitch':{
if (!text) return m.reply(`Ex: ${prefix + command} xunow`)
xunow.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
xunow.sendMessage(m.chat, { image: { url: `https://dsgner.vercel.app/api/textpro/${command}?text=${text}` }, caption: global.mess.success }, { quoted: m })
}
break;
// ===================================== //
case 'marvel-studios':
case 'ninja-logo':
case 'video-game-classic':
case 'glitchtiktok':
case 'glitch2':
case 'porn-hub':{
let t = text.split('|');
if (t.length < 2) return m.reply(`Ex: ${prefix + command} xunow|Sukaloli`);
let text1 = t[0];
let text2 = t[1];
xunow.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
xunow.sendMessage(m.chat,{image: {url: `https://dsgner.vercel.app/api/textpro/${command}?text=${text1}&text2=${text2}`}, caption: global.mess.success },{quoted:m})
}
break;
// ===================================== //
case 'setmenu':
if (!xunowIsCreator) return m.reply(mess.owner)
setbot = global.db.data.settings[botNumber]
if (args[0] === 'templateImage'){
setbot.templateImage = true
setbot.templateVideo = false
setbot.templateGif = false
setbot.templateMsg = false
setbot.templateDocument = false
setbot.templateButtons = false
m.reply(mess.success)
} else if (args[0] === 'templateVideo'){
setbot.templateImage = false
setbot.templateVideo = true
setbot.templateGif = false
setbot.templateMsg = false
setbot.templateDocument = false
setbot.templateButtons = false
m.reply(mess.success)
} else if (args[0] === 'templateGif'){
setbot.templateImage = false
setbot.templateVideo = false
setbot.templateGif = true
setbot.templateMsg = false
setbot.templateDocument = false
setbot.templateButtons = false
m.reply(mess.success)
} else if (args[0] === 'templateMessage'){
setbot.templateImage = false
setbot.templateVideo = false
setbot.templateGif = false
setbot.templateMsg = true
setbot.templateDocument = false
setbot.templateButtons = false
m.reply(mess.success)
} else if (args[0] === 'templateDocument'){
setbot.templateImage = false
setbot.templateVideo = false
setbot.templateGif = false
setbot.templateMsg = false
setbot.templateDocument = true
setbot.templateButtons = false
m.reply(mess.success)
} else if (args[0] === 'templateButtons'){
setbot.templateImage = false
setbot.templateVideo = false
setbot.templateGif = false
setbot.templateMsg = false
setbot.templateDocument = false
templateButtons = true 
m.reply(mess.success)
} else {
if (m.isGroup) {
const data = {
title: "Touch Here",
sections: [{
title: 'CHANGE BOT MENU',
rows: [
{title: "Image Menu", description: "Klik untuk mengubah menu ke Image Menu", id: `${prefix}setmenu templateImage`},
{title: "Gif Menu", description: "Klik untuk mengubah menu ke Gif Menu", id: `${prefix}setmenu templateGif`},
{title: "Video Menu", description: "Klik untuk mengubah menu ke Video Menu", id: `${prefix}setmenu templateVideo`},
{title: "Text Menu", description: "Klik untuk mengubah menu ke Default Menu", id: `${prefix}setmenu templateMessage`},
{title: "Document Menu", description: "Klik untuk mengubah menu ke Document Menu", id: `${prefix}setmenu templateDocument`},
{title: "Button Menu", description: "Klik untuk mengubah menu ke Button Menu", id: `${prefix}setmenu templateButtons`}
]}]
}
xunow.kirimListWoy(m.chat, '*CHANGE MENU*', 'Hai kak ' + pushname + ' silakan di pilih opsi berikut ini', global.wm, data, m)
} else if (!m.isGroup){
let sections = [{
title: 'CHANGE BOT MENU',
rows: [
{title: 'Image Menu', rowId: `${prefix}setmenu templateImage`, description: 'Klik untuk mengubah menu ke Image Menu'},
{title: 'Gif Menu', rowId: `${prefix}setmenu templateGif`, description: 'Klik untuk mengubah menu ke Gif Menu'},
{title: 'Video Menu', rowId: `${prefix}setmenu templateVideo`, description: 'Klik untuk mengubah menu ke Video Menu'},
{title: 'Text Menu', rowId: `${prefix}setmenu templateMessage`, description: 'Klik untuk mengubah menu ke Text Menu'},
{title: 'Document Menu', rowId: `${prefix}setmenu templateDocument`, description: 'Klik untuk mengubah menu ke Document Menu'},
{title: 'Button Menu', rowId: `${prefix}setmenu templateButtons`, description: 'Klik untuk mengubah menu ke Button Menu'}
]},
]
xunow.sendListMsg(m.chat, 'Pilih salah satu mode menu di bawah', global.wm, '*CHANGE MENU*', 'Click Here', sections, m)
}
}
break
// ===================================== //
case 'help': case 'menu': {
if (!Belomdaftar) return m.reply(belomregis) & xunow.kirimBeton(m.sender, daftar1, daftar2, 'Daftar', `${prefix}reg`, m) 
if (isBan) return m.reply(mess.banned)
let user = global.db.data.users[m.sender]
let jumlh = await await Object.keys(store.contacts).filter(a => a.includes('s.whatsapp.net'))
let menulist = `Nyaan @${m.sender.split('@')[0]} ${ucapanWaktu}

● Nama : ${pushname}
● Nomor : ${sender.split('@')[0]}
● Status : ${xunowIsCreator ? 'Developer' : 'User'}
● User : ${user.premium ? 'Premium' : 'Gratisan'}
● Jumlah User : ${jumlh.length} User
● Uang : ${checkuangUser(sender)}
● Limit : ${isPremium ? '♾' : `${checklimitUser(sender)}`}
● Library : Baileys MD
● Language : JavaScript

Indonesia Timur : ${moment().utcOffset('+0900').format('HH:mm')} WIT
Indonesia Tengah : ${moment().utcOffset('+0800').format('HH:mm')} WITA
Indonesia Barat : ${moment().utcOffset('+0700').format('HH:mm')} WIB`
const data = {
title: "Touch Here",
sections: [{
title: 'Main',
rows: [
{title: "「ღ」| Speed", description: "Menampilkan kecepatan respon bot", id: `${prefix}ping`},
{title: "「ღ」| Owner", description: "Menampilkan pemilik dari bot ini", id: `${prefix}owner`},
{title: "「ღ」| Runtime", description: "Menampilkan seberapa lama bot aktif", id: `${prefix}runtime`},
{title: "「ღ」| Total fitur", description: "Seluruh total fitur yang ada di bot ini", id: `${prefix}totalfitur`}
]}, {
title: 'Support kami',
rows: [
{title: "「ღ」| Sewa", description: "Menampilkan list harga sewa bot", id: `${prefix}sewabot`},
{title: "「ღ」| Buy Premium", description: "Menampilkan list harga premium", id: `${prefix}buyprem`},
{title: "「ღ」| Donasi", description: "Support bot agar lebih fast respon", id: `${prefix}donasi`}
]}, {
title: 'Main menu',
rows: [
{title: "「ღ」| All", description: "Menampilkan semua menu di bot", id: `${prefix}allmenu`},
{title: "「ღ」| Kosong:v", description: "Menampilkan menu kosong:v", id: `${prefix}anonymous`}
]}, {
title: 'Tentang script ini',
rows: [
{title: "「ღ」| Kosong:v", description: "Menampilkan menu kosong:v", id: `${prefix}anonymous`}
]}]
}
const setbot = global.db.data.settings[botNumber]
if (setbot.templateImage) {
xunow.sendMessage(m.chat, { caption: menulist, image: global.png, mentions: [sender] }, { quoted: m })
} else if (setbot.templateGif) {
xunow.sendMessage(m.chat, { caption: menulist + '\n\n_ketik .allmenu untuk melihat semua menu bot_', video: global.vid, gifPlayback: true, mentions: [sender] }, { quoted: m })
} else if (setbot.templateVideo) {
xunow.sendMessage(m.chat, { caption: menulist + '\n\n_ketik .allmenu untuk melihat semua menu bot_', video: global.vid, mentions: [sender] }, { quoted: m })
} else if (setbot.templateMsg) {
xunow.kirimListWoy(m.chat, menulist, '\nNote: Jangan di spam ya kak >,<', global.wm, data, m)
} else if (setbot.templateDocument) {
xunow.send2ButtDoc(m.chat, '', menulist, global.wm, global.botname, global.media.sig, 'https://telegra.ph/file/137a5210e0723261d0d8b.jpg', 'Website', 'https://ssateam.my.id', 'Allmenu', `${prefix}allmenu`, m)        
} else if (setbot.templateButtons) {
xunow.kirimBeton(m.chat, menulist, global.wm, 'Allmenu', `${prefix}allmenu`, m)
}
setTimeout( () => {
xunow.sendMessage(m.chat, { react: { text: `🥶`, key: m.key }})
}, 2000)
}
break
// ===============< batas dari area cass >=============== //
default:
if (budy.startsWith('>')) {
if (!xunowIsCreator) return
let kode = budy.trim().split(/ +/)[0];
let teks;
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${text}})()`);
} catch (e) {
teks = e;
} finally {
await m.reply(require('util').format(teks));
}
}

if (budy.startsWith('=>')) {
if (!xunowIsCreator) return
try {
const result = await eval(`(async () => { return ${budy.slice(3)} })()`);
m.reply(require('util').format(result));
} catch (e) {
m.reply(String(e));
}
}

if (budy.startsWith('$')) {
if (!xunowIsCreator) return
m.reply('Executing...')
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`);
if (stdout) return m.reply(stdout);
});
}

if (budy.startsWith('v')) {
if (!xunowIsCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}

if (budy.includes("@"+ xunow.user.id.split('@')[0])) {
const kta = ["❓", "💤", "😦"]
const su = kta[Math.floor(Math.random() * kta.length)]
xunow.sendMessage(m.chat, { react: { text: su, key: m.key }})
}

if (!m.fromMe & !m.isGroup) {
let user = global.db.data.users[m.sender]
if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
let caption = `Hallo @${m.sender.split('@')[0]} ${ucapanWaktu}, Ada apa chat *${xunow.user.name}*, Jika penting silakan tinggalkan pesan nanti *${xunow.user.name}* akan membalas secepat mungkin.`.trim()
m.reply(caption)
user.pc = new Date() * 1
}

/** batas ygy **/
}
} catch (err) {
console.log(err)
xunow.sendMessage(global.owner + '@s.whatsapp.net', { text: 'Hai sayang sepetinya ada yang eror, Harap di perbaiki ya!\n\n' + util.format(err) }, { quoted: m })
}
}

/** realod file **/
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Update ${__filename}`))
  delete require.cache[file]
  require(file)
})
