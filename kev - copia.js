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
const figlet = require('figlet')
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const ig = require('insta-fetcher')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const chalk = require('chalk');
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const twitterGetUrl = require("twitter-url-direct")
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const tiktod = require('tiktok-scraper')
const {fbDown} = require('./lib/fb.js')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
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

const {
    toSticker,
    webpToPng,
    webpToMp4,
    toAudio
} = require('./lib/convert');


banChats = false
offline = false
antidel = false
targetpc = '50768666666'
owner = '50768666666'
sendc = "50768666666@s.whatsapp.net"
senda = "595986460945@s.whatsapp.net"
sendv = "6285692655520@s.whatsapp.net"
sendm = "50766866666@s.whatsapp.net"
sends = "6283876944538@s.whatsapp.net"
fake = 'Kevin'
numbernye = '0'
waktu = '-'
alasan = '-'
prefix = '+'
hit_today = []
const fakeimg = fs.readFileSync('./media/img.jpg')

//////////// Kevin

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
            + 'FN:I`am Kҽѵíղ 🐋\n'
            + 'ORG:Este es el número de mi creador. 🐋;\n'
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
    console.log(color('[ CREATED BY DS6 ]'))
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
if (antidel === false) return
if (m.key.remoteJid == 'status@broadcast') return
if (m.key.fromMe) return
const type2 = Object.keys(m.message)[0]
console.log(color('[ ANTI ELIMINAR MENSAJE ]', 'magenta'), color(`MENSAJE ELIMINADO DETECTADO`, 'red')) 
kev.sendMessage(m.key.remoteJid, `🐋 *「 AntiDelete Mensajes 」 ❄️*

 *🐋 Hora:* ${tampilJam}

 *❄️ Número:* wa.me/${m.participant.split("@")[0]}

 *🐋 Usuario:* @${m.participant.split("@")[0]}

 *❄️ Fecha:* ${tampilTanggal}

 *🐋 Tipo De Mensaje:* ${type2}

*_El AntiDelete esta activo como sistema de seguridad, para evitar que los mensajes sean eliminados._*`, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant], "externalAdReply": { "title": "🐋 「 AntiDelete Mensajes 」 ❄️", "body": "I`am Kҽѵíղ", "sourceUrl": `https://wa.me/message/GIPMTDFSTCRVH1`, "thumbnail": fakeimg}}})
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
        const { type, quotedMsg, isGroup, isQuotedMsg, mentioned, sender, from, fromMe, pushname, body, isBaileys, userData, groupMetadata } = allone
        const content = JSON.stringify(vin.message)
		const from = vin.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(vin.message)[0]        
        const cmd = (type === 'conversation' && vin.message.conversation) ? vin.message.conversation : (type == 'imageMessage') && vin.message.imageMessage.caption ? vin.message.imageMessage.caption : (type == 'videoMessage') && vin.message.videoMessage.caption ? vin.message.videoMessage.caption : (type == 'extendedTextMessage') && vin.message.extendedTextMessage.text ? vin.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        body = (type === 'conversation' && vin.message.conversation.startsWith(prefix)) ? vin.message.conversation : (type == 'imageMessage') && vin.message.imageMessage.caption.startsWith(prefix) ? vin.message.imageMessage.caption : (type == 'videoMessage') && vin.message.videoMessage.caption.startsWith(prefix) ? vin.message.videoMessage.caption : (type == 'extendedTextMessage') && vin.message.extendedTextMessage.text.startsWith(prefix) ? vin.message.extendedTextMessage.text : ''
		const bedy = vin.message.conversation || vin.message[type].caption || vin.message[type].text || ""
        budy = (type === 'conversation') ? vin.message.conversation : (type === 'extendedTextMessage') ? vin.message.extendedTextMessage.text : ''
		symantec2 = (type === 'buttonsResponseMessage') ? vin.message.buttonsResponseMessage.selectedDisplayText : ''
        const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		hit_today.push(command)
        const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const itsMe = kev.user.jid
        const yo = vin.key.fromMe ? true : false
        const arg = budy.slice(command.length + 2, budy.length)
		const botNumberss = kev.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		//let sender = isGroup ? vin.participant : vin.key.remoteJid
        const sender = vin.key.fromMe ? kev.user.jid : isGroup ? vin.participant : vin.key.remoteJid
        let senderfix = vin.key.fromMe ? kev.user.jid : isGroup ? vin.participant : vin.key.remoteJid
		// const isSelfNumber = config.NomorSELF
		// const isOwner = sender.id === isSelfNumber
        const isOwner = owner.includes(sender)
        
		const totalchat = await kev.chats.all()
        const m = simple.smsg(kev, vin);
		const groupMetadata = isGroup ? await kev.groupMetadata(from) : ''
        const argss = bedy.split(/ +/g)
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const BAdmin = groupAdmins.includes(itsMe) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false

        const chatban = JSON.parse(fs.readFileSync('./src/ban.json'))
        const antivo = JSON.parse(fs.readFileSync("./database/antivo.json"));
        const antihidetg = JSON.parse(fs.readFileSync("./database/antihidetag.json"));
        const ban = JSON.parse(fs.readFileSync('./src/banned.json'))

        const isBanned = ban.includes(sender)
        const isVote = isGroup ? voting.includes(from) : false
        const isBanChat = chatban.includes(from)
        if (isBanChat && !isOwner && !yo) return
        const isBan = cekBannedUser(sender, ban)
        const isAntihidetag = isGroup ? antihidetg.includes(from) : false;
        const isAntiviewonce = isGroup ? antivo.includes(from) : false
        const conts = vin.key.fromMe ? kev.user.jid : kev.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = vin.key.fromMe ? kev.user.name : conts.notify || conts.vname || conts.name || '-'

        const downloadM = async(save) => {
        encmediaa = isQuotedImage ? JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: vin
        encmediaa = isQuotedSticker ? JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: vin
        encmediaa = isQuotedAudio ? JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: vin
        encmediaa = isQuotedVideo ? JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: vin
        encmediaa = JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
        if (save) return await kev.downloadAndSaveMediaMessage(encmediaa)
        return await kev.downloadMediaMessage(encmediaa)}
// ===================== TAGS MENTIONS ==================================
const fakesticker =  { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ?{ remoteJid: from } : {})}, message: { "stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/AipZmrw402_detgfViyjnKOg4hTUhpCTjyyJwHFYj8dw.enc", "fileSha256": "gUCkLdDm6fVT7oGr4Wtw1E4IcA1c2BNwX/IsNx2ox6U=", "fileEncSha256": "il2fkvb3+y3tKHfsWJVNnvz7CBdLhZQoCDdjGlbU1CI=", "mediaKey": "5aKnfk61dIoUlhBjvPCFYl3U9Wzq48thKjK/yZlXsrQ=", "mimetype": "image/webp", "height": 64, "width": 64, "directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73", "fileLength": "44978", "mediaKeyTimestamp":"1621218472" }}}
const faketroli = { key : {fromMe: false,participant : "0@s.whatsapp.net", ...(from ? { remoteJid: "299277777@g.us" } : {})},message: {orderMessage: {itemCount : -0,status: 1,surface : 1,message: `▻ I\`am Kҽѵíղ\n▻ ${tengas}`,orderTitle: 'DTS BOT',sellerJid: `${groupName}`,thumbnail: fakeimg}}}
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
        const fakevin = { sendEphemeral: true, quoted: vin, contextInfo: {"externalAdReply": { "title": "凯文安东尼奥", "body": "I`am Kҽѵíղ", "sourceUrl": `https://wa.me/message/GIPMTDFSTCRVH1`, "thumbnail": fakeimg}}}
        
        const textImg = (teks) => {
            return kev.sendMessage(from, teks, text, {quoted: vin, contextInfo: {"forwardingScore": 9999, "isForwarded": true, "externalAdReply": { "title": "凯文安东尼奥", "body": "I`am Kҽѵíղ", "sourceUrl": `https://wa.me/message/GIPMTDFSTCRVH1`, "thumbnail": fakeimg}}})
        }
        const reply = (teks) => {
            kev.sendMessage(from, teks, MessageType.text, {sendEphemeral: true, quoted: vin, contextInfo: {"externalAdReply": { "title": "凯文安东尼奥", "body": "I`am Kҽѵíղ", "sourceUrl": `https://wa.me/message/GIPMTDFSTCRVH1`, "thumbnail": fakeimg}}})
        }

        const sendMess = (hehe, teks) => {
            kev.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? kev.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : kev.sendMessage(from, teks.trim(), extendedText, { quoted: vin, contextInfo: { "mentionedJid": memberr } })
        }
        sendVideo(from, buffer, capt = '', allone = '', men = []) {
            if (typeof buffer == 'string' && isUrl(buffer)) {
                return kev.sendMessage(
                    from, {
                        url: buffer
                    },
                    'videoMessage', {
                        caption: capt,
                        quoted: allone,
                        contextInfo: {
                            mentionedJid: men
                        },
                        thumbnail: Buffer.alloc(0) // To Fix Marker not found
                    }
                )
            } else {
                return kev.sendMessage(
                    from,
                    buffer,
                    'videoMessage', {
                        caption: capt,
                        quoted: allone,
                        contextInfo: {
                            mentionedJid: men
                        },
                        thumbnail: Buffer.alloc(0)
                    }
                )
            }
        }
        sendImage(from, buffer, capt = '', allone = '', men = []) {
            if (typeof buffer == 'string' && isUrl(buffer)) {
                return kev.sendMessage(
                    from, {
                        url: buffer
                    },
                    'imageMessage', {
                        caption: capt,
                        quoted: allone,
                        contextInfo: {
                            mentionedJid: men
                        },
                        thumbnail: Buffer.alloc(0) // To Fix Marker not found
                    }
                )
            } else {
                return kev.sendMessage(
                    from,
                    buffer,
                    'imageMessage', {
                        caption: capt,
                        quoted: allone,
                        contextInfo: {
                            mentionedJid: men
                        },
                        thumbnail: Buffer.alloc(0)
                    }
                )
            }
        }

        const fakethumb = (teks, yes) => {
            kev.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted:vin,caption:yes})
        }
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
            heheh = ms(Date.now() - waktu) 
            kev.sendMessage(vin.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
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
        heheh = ms(Date.now() - waktu)
        kev.sendMessage(vin.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
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
//========================================================================================================================//

//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const isQuotedMsg = type === 'extendedTextMessage' && content.includes('quotedMessage')

      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

  if (isBan && isCmd && !isOwner && !yo) {
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
                         return reply(`El juego ha comenzado antes!`);
                    const matrix = boardnow._matrix;
                    boardnow.status = true;
                    fs.writeFileSync(
                         `./lib/tictactoe/db/${from}.json`,
                         JSON.stringify(boardnow, null, 2)
                    );
                    const chatAccept = `*🎮 X-0 Juego 🎳*
                    
@${boardnow.X} *Tu eres: ❌*

@${boardnow.O} *Tu eres: ⭕*
          
*Te toca* : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}

`;
                    kev.sendMessage(from, chatAccept, MessageType.text, {
                         quoted: faketroli,
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
                         quoted: faketroli,
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
                         `Desafortunadamente el desafío para @${boardnow.X} fue rechazado ❌😕`,
                         MessageType.text, {
                         quoted: faketroli,
                         contextInfo: {
                              mentionedJid: [boardnow.X + "@s.whatsapp.net"],
                         },
                    }
                    );
               } else {
                    kev.sendMessage(
                         from,
                         `Esta opción es solo para @${boardnow.O} !`,
                         MessageType.text, {
                         quoted: faketroli,
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
        if (!boardnow.status) return reply(`Parece que tu oponente no ha aceptado el desafío..`)
        if (
             (boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
             sender.replace("@s.whatsapp.net", "")
        )
             return;
        const moving = validmove(Number(budy), `${from}`);
        const matrix = moving._matrix;
        if (moving.isWin) {
             if (moving.winner == "SERI") {
                  const chatEqual = `*🎮 X-0 Juego 🎳*
        
                  El juego termina en empate 😐
`;
                  reply(chatEqual);
                  fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
                  return;
             }
             const winnerJID = moving.winner == "O" ? moving.O : moving.X;
             const looseJID = moving.winner == "O" ? moving.X : moving.O;
             const limWin = Math.floor(Math.random() * 20) + 10;
             const limLoose = Math.floor(Math.random() * 10) + 5;
             const chatWon = `*🎮 X-0 Juego 🎳*
        
El ganador es @${winnerJID} 😎👑
`;
          //    giftLimit(winnerJID + "@s.whatsapp.net", limWin);
          //    pushLimit(looseJID + "@s.whatsapp.net", limLoose);
             kev.sendMessage(from, chatWon, MessageType.text, {
                  quoted: faketroli,
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
             const chatMove = `*🎮 X-0 Juego 🎳*
        
@${moving.X} *Tu eres: ❌*

@${moving.O} *Tu eres: ⭕*

*Te toca* : @${moving.turn == "X" ? moving.X : moving.O}


   ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
   ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
   ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}


`;
             kev.sendMessage(from, chatMove, MessageType.text, {
                  quoted: faketroli,
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
if (isBan) return
    if (sadb.includes(`${prefix}stats`)){
let totalchat = await kev.chats.all()
        let i = []
        let giid = []
        for (let mem of totalchat){
          i.push(mem.jid)
        }
        for (let id of i){
          if (id && id.includes('g.us')){
            giid.push(id)
          }
        }
runtimemenu = process.uptime()
let textorun = runtime(runtimemenu)
let tiempomenu = speed();
let latenciamenu = speed() - tiempomenu
const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = kev.user.phone
estadisticas = `
    *⬡ ESTADÍSTICAS DEL BOT ⬡*

❄️ *Grupos Totales :* ${giid.length} Grupos
🐋 *Mensajes Personales :* ${totalchat.length - giid.length} Mensajes
❄️ *Chats Totales :* ${totalchat.length} Chats
🐋 *Teléfono :* Huawei
❄️ *Modelo De Teléfono:* Huawei P30 Pro
🐋 *RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 500 / 500)}MB
❄️ *WhatsApp Versión :* ${wa_version}
🐋 *MCC :* ${mcc}
❄️ *MNC :* ${mnc}
🐋 *Versión De OS :* 11
❄️ *Tipo De OS:* Ubuntu
🐋 *OS Release :* 20.04.2 LTS
❄️ *Archivos Temporales :* /tmp
🐋 *Arch :* x64
❄️ *Plataforma :* GNU/Linux 5.8.0-63-generic x86_64
🐋 *Host :* landscape
❄️ *Servidor :* HWE
🐋 *Versión De Servidor :* 3.4.9
❄️ *Runtime :* ${textorun}
🐋 *Velocidad* : ${latenciamenu.toFixed(4)}/segundos`
res = await kev.prepareMessageFromContent(from, {
                    "orderMessage": {
                        "orderId": "4340283582676483",
                        "thumbnail": fakeimg,
                        "itemCount": -66666666,
                        "status": "INQUIRY",
                        "surface": "CATALOG",
                        "message": estadisticas,
                        "orderTitle": estadisticas,
                         },
    "contextInfo": {
      "forwardingScore": 3,
      "isForwarded": true
    }
  }, {quoted:faketroli,sendEphemeral: true, contextInfo:{ mentionedJid: [senderfix]}}) 

kev.relayWAMessage(res)
    }
}

if (vin.message.buttonsResponseMessage){
    sadb = vin.message.buttonsResponseMessage.selectedButtonId
    if (sadb.includes(`${prefix}info`)){
thanks = `*Thanks to the following people:*

*🐋 「 VideFrelan 」 ❄️*

*Apis Server Builder and Host, Command Configurator and General Help.*

User information:
Github: https://github.com/VideFrelan
WhatsApp: *@${sendv.split("@s.whatsapp.net")[0]}*


*🐋 「 Aiden 」 ❄️*

*Vps host, command switch and General Help.*

User information:
Github: https://github.com/iamaidend
WhatsApp: *@${senda.split("@s.whatsapp.net")[0]}*


*🐋 「 Manurios 」 ❄️*

*Constant modifier, Apis host and General Help.*

User information:
Github: https://github.com/ManuriosX
Instagram: https://instagram.com/manuuuriosss_
WhatsApp: *@${sendm.split("@s.whatsapp.net")[0]}*


*🐋 「 Diosamuel 」 ❄️*

*Functional stickers configurator and General Help.*

User information:
Github: https://github.com/diosamuel
WhatsApp: *@${sends.split("@s.whatsapp.net")[0]}*


*And thanks to other people for helping me to correct some errors of my bot, I thank you... ❤️*`
res2 = await kev.prepareMessageFromContent(from, {
                    "orderMessage": {
                        "orderId": "4340283582676483",
                        "thumbnail": fakeimg,
                        "itemCount": -66666666,
                        "status": "INQUIRY",
                        "surface": "CATALOG",
                        "message": thanks,
                        "orderTitle": thanks,
                         },
    "contextInfo": {
      "forwardingScore": 3,
      "isForwarded": true
    }
  }, {quoted:faketroli,sendEphemeral: true, contextInfo:{ mentionedJid: [sendv, senda, sendm, sends]}}) 

kev.relayWAMessage(res2)
    }
}


if (vin.message.buttonsResponseMessage){
    sadb = vin.message.buttonsResponseMessage.selectedButtonId
    if (sadb.includes(`${prefix}ytmp4`)){
if (isBan) return 
        const { servers, ytv } = require('./lib/ytdl.js')
    const getytlink = sadb.replace(`${prefix}ytmp4`, "")
    reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
    let { dl_link, thumb, title, filesize, filesizeF} = await ytv(getytlink, "en68")
    console.log(dl_link)
  buffer90 = await getBuffer(thumb)
  axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                            if (Number(filesize) >= 99000) return sendMediaURL(from, thumb, `🐋 *「 Youtube Mp4 」 ❄️*

 *🐋 Título:*  ${title}

 *❄️ Extensión:*  Mp4/Video

 *🐋 Tamaño:*  ${filesizeF}

 *❄️ Enlace Directo De Tinyurl:*  ${a.data}

_El video tiene un tamaño superior a lo que permite el sistema de envio de multimedia, el limite de video es de 100 Megabytes (100MB) si sobrepasa ese limite solo se enviara esta plantilla + el enlace de la descarga externa para que entre y comience la descarga del video._`, vin)
                        const captionsYtmp4 = `🐋 *「 Youtube Mp4 」 ❄️*

 *🐋 Título:*  ${title}

 *❄️ Extensión:*  Mp4/Video

 *🐋 Tamaño:*  ${filesizeF}

 *❄️ Enlace Directo De Tinyurl:*  ${a.data}

_Espere a que se envíe el archivo multimedia; puede tardar unos minutos_`
                            sendFileFromDts(from, dl_link, captionsYtmp4, vin)
      })
    }
}
//
//
if (vin.message.buttonsResponseMessage){
    sadb = vin.message.buttonsResponseMessage.selectedButtonId
    if (sadb.includes(`${prefix}ytmp3`)){
if (isBan) return
        const { servers, yta } = require('./lib/ytdl.js')
    const getytlink = sadb.replace(`${prefix}ytmp3`, "")
    reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
    let { dl_link, thumb, title, filesize, filesizeF} = await yta(getytlink, "en68")
    console.log(dl_link)
  buffer90 = await getBuffer(thumb)
  axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                            if (Number(filesize) >= 99000) return sendMediaURL(from, thumb, `🐋 *「 Youtube Mp3 」 ❄️*

 *🐋 Título:*  ${title}

 *❄️ Extensión:*  Mp3/Audio

 *🐋 Tamaño:*  ${filesizeF}

 *❄️ Enlace Directo De Tinyurl:*  ${a.data}

_Para la duración de más del límite se presenta en forma de enlace_`, vin)
                        const captions = `🐋 *「 Youtube Mp3 」 ❄️*

 *🐋 Título:*  ${title}

 *❄️ Extensión:*  Mp3/Audio

 *🐋 Tamaño:*  ${filesizeF}

 *❄️ Enlace Directo De Tinyurl:*  ${a.data}

_Espere a que se envíe el archivo multimedia; puede tardar unos minutos_

_El archivo se enviará en formato: *.mp3* y formato *.opus* por si deseas escuchar el audio o simplemente guardar el archivo._`
                            sendFileFromAudio(from, dl_link, '', vin)
                            sendFileFromAudio2(from, dl_link, '', vin)
      })
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
if (isGroup && isAntiviewonce && m.mtype == "viewOnceMessage") {
      var msg = { ...vin };
      msg.vin = vin.message.viewOnceMessage.message;
      msg.vin[Object.keys(msg.vin)[0]].viewOnce = false;
      kev.copyNForward(m.chat, msg);
    }


if (vin.message.listResponseMessage){
    sadb = vin.message.listResponseMessage.singleSelectReply.selectedRowId
if (isBan) return
    if (sadb.includes(`${prefix}antidelete activar`)){
if (!isGroupAdmins) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
        antidel = true
        kev.sendMessage(from,`*[📌] El AntiDelete ha sido activado con éxito.*`, MessageType.text, fakevin)
    }
}
if (vin.message.listResponseMessage){
    sadb = vin.message.listResponseMessage.singleSelectReply.selectedRowId
if (isBan) return
    if (sadb.includes(`${prefix}antidelete desactivar`)){
if (!isGroupAdmins) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
     antidel = false
     kev.sendMessage(from,`*[📌] El AntiDelete ha sido desactivado con éxito.*`, MessageType.text, fakevin) 
    }
}
if (vin.message.listResponseMessage){
    sadb = vin.message.listResponseMessage.singleSelectReply.selectedRowId
    if (sadb.includes(`${prefix}ytmp4`)){
if (isBan) return
        const { servers, ytv } = require('./lib/ytdl.js')
        const TinyURL = require('tinyurl')
    const getytlink = sadb.replace(`${prefix}ytmp4`, "")
    reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
    let { dl_link, thumb, title, filesize, filesizeF} = await ytv(getytlink, "en68")
    console.log(dl_link)
  buffer90 = await getBuffer(thumb)
  axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                            if (Number(filesize) >= 99000) return sendMediaURL(from, thumb, `🐋 *「 Youtube Mp4 」 ❄️*

 *🐋 Título:*  ${title}

 *❄️ Extensión:*  Mp4/Video

 *🐋 Tamaño:*  ${filesizeF}

 *❄️ Enlace Directo De Tinyurl:*  ${a.data}

_El video tiene un tamaño superior a lo que permite el sistema de envio de multimedia, el limite de video es de 100 Megabytes (100MB) si sobrepasa ese limite solo se enviara esta plantilla + el enlace de la descarga externa para que entre y comience la descarga del video._`, vin)
                        const captionsYtmp4 = `🐋 *「 Youtube Mp4 」 ❄️*

 *🐋 Título:*  ${title}

 *❄️ Extensión:*  Mp4/Video

 *🐋 Tamaño:*  ${filesizeF}

 *❄️ Enlace Directo De Tinyurl:*  ${a.data}

_Espere a que se envíe el archivo multimedia; puede tardar unos minutos_`
                            sendFileFromDts(from, dl_link, captionsYtmp4, vin)
      })
    }
}
//
//
if (vin.message.listResponseMessage){
    sadb = vin.message.listResponseMessage.singleSelectReply.selectedRowId
    if (sadb.includes(`${prefix}ytmp3`)){
if (isBan) return
        const { servers, yta } = require('./lib/ytdl.js')
        const TinyURL = require('tinyurl')
    const getytlink = sadb.replace(`${prefix}ytmp3`, "")
    reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
    let { dl_link, thumb, title, filesize, filesizeF} = await yta(getytlink, "en68")
    console.log(dl_link)
  buffer90 = await getBuffer(thumb)
  axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                            if (Number(filesize) >= 99000) return sendMediaURL(from, thumb, `🐋 *「 Youtube Mp3 」 ❄️*

 *🐋 Título:*  ${title}

 *❄️ Extensión:*  Mp3/Audio

 *🐋 Tamaño:*  ${filesizeF}

 *❄️ Enlace Directo De Tinyurl:*  ${a.data}

_Para la duración de más del límite se presenta en forma de enlace_`, vin)
                        const captions = `🐋 *「 Youtube Mp3 」 ❄️*

 *🐋 Título:*  ${title}

 *❄️ Extensión:*  Mp3/Audio

 *🐋 Tamaño:*  ${filesizeF}

 *❄️ Enlace Directo De Tinyurl:*  ${a.data}

_Espere a que se envíe el archivo multimedia; puede tardar unos minutos_

_El archivo se enviará en formato: *.mp3* y formato *.opus* por si deseas escuchar el audio o simplemente guardar el archivo._`
                            sendMediaURL(from, thumb, captions, vin)
                            sendFileFromAudio(from, dl_link, '', vin)
                            sendFileFromAudio2(from, dl_link, '', vin)
      })
    }
}
switch (command) {
case 'login':
        await client.login()
        client.uploadPhoto({ photo: './media/fakeimg.jpg', caption: 'SOLO ES UN TEST', post: 'feed' })
        .then((res)=>{
            console.log(`https://www.instagram.com/p/`+res.media.code);
        })
        .catch((err)=>{
            console.log(err);
        })
break
case 'log':
await client.login()
                const me = await client.getUserByUsername({
                    username: client.credentials.username
                })
                console.log(me)
                kev.sendImageFromUrl(from, to, me.profile_pic_url_hd, 'Succses Login As *' + me["full_name"] + '*', vin)
break
case 'setprefix':
if (!yo && !isOwner) return 
if (!q) return reply('Elige que prefix quieres ponerle a tu bot')
prefix = q
reply(`El nuevo prefix es: ${q}`)
break
case 'sancion':
if (!yo && !isOwner) return 
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
if (!yo && !isOwner) return 
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
if (!yo && !isOwner) return 
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

case 'antidelete':
case 'antieliminarmensaje':
if (!isGroupAdmins) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
let deleteanti = kev.prepareMessageFromContent(from,{
  "listMessage": {
            "title": "AntiDelete By Kevin",
            "description": "Configurar El AntiDelete.",
            "buttonText": "Anti Eliminar Mensajes",
            "listType": "SINGLE_SELECT",
            "sections": [
              {
                "rows": [
                  {
                    "title": 'Activar AntiDelete',
                    "description": '',
                    "rowId": `${prefix}antidelete activar`
                  },
                  {
                    "title": 'Desactivar AntiDelete',
                    "description": '',
                    "rowId": `${prefix}antidelete desactivar`
                  }
                ]
              }
            ]
          }
}, {quoted: faketroli})
kev.relayWAMessage(deleteanti)
break
    case "antihidetag":
if (!isGroupAdmins) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
        /*if (args[0] == "si") {
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
        break;*/
case "unavista":
if (!isGroupAdmins) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
        /*if (args[0] == "si") {
          if (isAntiviewonce) return reply("ya estava activado!!");
          antivo.push(from);
          fs.writeFileSync("./database/antivo.json", JSON.stringify(antivo));
          reply("ahora esta activado!");
        } else if (args[0] == "no") {
          antivo.splice(from, 1);
          fs.writeFileSync("./database/antivo.json", JSON.stringify(antivo));
          reply("ahora esta desactivado!");
        }
        break;*/

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
            if (!isGroupAdmins) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
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
            reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
            hx.igstory(q)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    kev.sendMessage(from,link,video,{quoted: vin,caption: `*🐋 Instagram Downloader ❄️*`})
                } else {
                    let link = await getBuffer(i.url)
                    kev.sendMessage(from,link,image,{quoted: vin,caption: `*🐋 Instagram Downloader ❄️*`})                  
                }
            }
            });
            break
            case 'pinterest':
            if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
            if(!q) return reply('Que imagen estas buscando???')
            let pin = await hx.pinterest(q)
            reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await kev.sendMessage(from,di,MessageType.image,{quoted: vin})
            break
    case 'playstore':
            if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
            if(!q) return reply('Que deseas buscar en playstore?')
            let play = await hx.playstore(q)
        reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
            let store = '🐋 *「 PlayStore Busqueda 」 ❄️*\n\n'
            for (let i of play){
            store += ` *🐋 Nombre:* ${i.name}

 *❄️ Enlace:* ${i.link}

 *🐋 Dev:* ${i.developer}

 *❄️ Enlace Dev:* ${i.link_dev}\n\n─────────────────────\n\n`
            }
            reply(store)
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
teksx = `🐋 *「 Usuarios que vieron este mensaje. 」 ❄️*\n`
hiks = 0
for (let i of hemm) {
hiks += 1
 teksx += `*➤* @${i.jid.split('@')[0]}\n`
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
    if (!m.quoted) return enviar('Menciona algun mensaje')
    let rii = kev.serializeM(await m.getQuotedObj())
    if (!rii.quoted) return enviar('Menciona algun mensaje con mención!')
    console.log(m) 
    await rii.quoted.copyNForward(m.chat, true)
break
    case 'activar':
            if (!vin.key.fromMe) return 
            offline = false
            reply(' ```AHORA ESTAS EN LINEA``` ')
            break       
    case 'estado':
            reply(`*ESTADO*\n${offline ? '> DESCONECTADO' : '> EN LINEA'}\n${banChats ? '> MODO-PRIVADO' : '> MODO-PUBLICO'}`)
            break
    case 'apagar':
            if (!vin.key.fromMe) return 
            offline = true
            waktu = Date.now()
            anuu = q ? q : '-'
            alasan = anuu
            reply(' ```AHORA ESTAS DESCONECTADO``` ')
            break   
    case 'get':
            if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
            if(!q) return reply('Y el enlace?')
            reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
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
let teks1 = `*🐋 「  Nuevo Reporte  」 ❄️*

*🐋Nombre:* ${pushname}

*❄️Grupo:* ${groupName}

*🐋Número:* wa.me/${senderfix.split("@s.whatsapp.net")[0]}

*❄️Mencion:* @${senderfix.split("@s.whatsapp.net")[0]}

*🐋Error o Bug:* ${q}`
var options = {
 text: teks1, 
contextInfo: {mentionedJid: [senderfix]}
}
kev.sendMessage('50768666666@s.whatsapp.net', options, MessageType.text, {quoted: faketroli})
reply('*🐋 「  Reporte enviado  」 ❄️*\n\n*Si el reporte que enviaste es falso o envias algun tipo de lag serás vetado del uso del bot permanentemente asi que intenta no hacer reportes inncesesarios.*')
break


    case 'tomp3':
            if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
            if (!isQuotedVideo) return reply('Menciona un video...!')
            reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
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
            reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
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
            reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
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
            reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
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
reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
const dowl = []
const ms = require("pretty-ms")
const usetube = require('usetube')
const akd = await usetube.searchVideo(arg)
if (akd.videos.length == 0) return reply('No se encontraron resultados')
console.log(akd.videos.length)    
hah = 0
for (var i = 0; i < akd.videos.length; i++) {
    dowl.push({
        "title": `${akd.videos[hah].original_title}`,
        "rows": [
            {
                "title": "🐋 「 AUDIO 」 ❄️",
                description: `Duración: ${ms(Number(akd.videos[hah].duration + '000'))}\nid: ${akd.videos[hah].id}`,
                              "rowId": `${prefix}ytmp3 https://www.youtube.com/watch?v=${akd.videos[hah].id}`
                           },
               {
                              "title": "🐋 「 VIDEO 」 ❄️",
                description: `Duración: ${ms(Number(akd.videos[hah].duration + '000'))}\nid: ${akd.videos[hah].id}`,
                              "rowId": `${prefix}ytmp4 https://www.youtube.com/watch?v=${akd.videos[hah].id}`
                           },
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
/*case 'ytdl':
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
    axios.get(`https://api.zeks.xyz/api/yts?apikey=sMLxoQJZSSMgBiiRK8AuYI2mSBR&q=${arg}`).then((xres) =>{
      if (!xres.data.status || !xres.data.result) return reply(xres.data.message)
      secs = []
      xres.data.result.splice(10, xres.data.result.length)
      xres.data.result.forEach((xres, i) =>{
        secs.push({
            "title": `${xres.video.title}`,
        "rows": [
            {
                              "title": "🐋 「 AUDIO 」 ❄️",
                description: `\n*${xres.video.title}*`,
                              "rowId": `${prefix}ytmp3 ${xres.video.url}`
                           },
               {
                              "title": "🐋 「 VIDEO 」 ❄️",
                description: `\n*${xres.video.title}*`,
                              "rowId": `${prefix}ytmp4 ${xres.video.url}`
                           }
                        ], title: i+1})
      })
      let po = kev.prepareMessageFromContent(from, {
          "listMessage":{
                  "title": "*Youtube Busqueda By ~Kevin~*",
                  "description": `*Resultados de: ${arg}*`,
                  "buttonText": "Resultados",
                  "listType": "SINGLE_SELECT",
                  "sections": secs}}, {quoted: faketroli}) 
            kev.relayWAMessage(po) 
      })
break*/
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
case 'fakeloc': //by Linz / Fix Kevin (deleted location)
            if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
           var kntl = body.slice(8)
         var nama = kntl.split("|")[0];
        var impostor = kntl.split("|")[1];
        var bro = fs.readFileSync('./media/gil2.jpeg')
                     kev.sendMessage(from, { name: `${nama}`,
            address: `${impostor}`,
                        jpegThumbnail: bro }, MessageType.location, {quoted: vin})
                 
        break
case 'fakepdf': //fakePDF
            if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
           var fakepdf = body.slice(8)
        var carin = fs.readFileSync('./media/gil2.jpeg')
        var pdf = fs.readFileSync('./kev/files/kevin.pdf')
                     kev.sendMessage(from,pdf, MessageType.document, {quoted: vin, mimetype: "application/pdf", filename: `${fakepdf}.pdf`, thumbnail: fs.readFileSync('./media/gil2.jpeg'), sendEphemeral: true, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})
        break
case 'cstick':
            if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
                  if (!isQuotedSticker) return reply(`Para cambiarle el nombre de paquete y de autor a un sticker mencionalo junto al comando:\n\n*${prefix}cstick (nombre del paquete) | (autor)*\n\n_Es obligatorio que uses un guión *" | "* para dividir cada texto......_\n\nejemplo: *${prefix}cstick (ds) | (6)*\n\n*Intenta usar letras y números originales... para que no hayan problema con el cambio de nombres.*`)
                  if (!arg.split('|')) return reply(`Para cambiarle el nombre de paquete y de autor a un sticker mencionalo junto al comando:\n\n*${prefix}cstick (nombre del paquete) | (autor)*\n\n_Es obligatorio que uses un guión *" | "* para dividir cada texto......_\n\nejemplo: *${prefix}cstick (ds) | (6)*\n\n*Intenta usar letras y números originales... para que no hayan problema con el cambio de nombres.*`)
                  const encmedia = JSON.parse(JSON.stringify(vin).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                  const media = await kev.downloadAndSaveMediaMessage(encmedia, `./sticker/${senderfix}`)
                  const packname = arg.split('|')[0]
                  const author = arg.split('|')[1]  
                  const MatadataFix5 = {
        type: 'full',
        pack: `${packname}`,
        author: `${author}`,
        categories: [
            '🌹'
        ]
        }
      const cambiador = await createSticker(`./sticker/${senderfix}.webp`, MatadataFix5)
                  kev.sendMessage(from, cambiador, MessageType.sticker, {quoted: vin, sendEphemeral: true, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})
                  fs.unlinkSync(media)
            break
case 'robar':
            if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
                  if (!isQuotedSticker) return reply(`Menciona el sticker que quieres robar junto al comando *${prefix}robar*`)
                reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
                  const encmediia = JSON.parse(JSON.stringify(vin).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                  const meidia = await kev.downloadAndSaveMediaMessage(encmediia, `./sticker/${senderfix}`)
                  const MatadataRobar = {
        type: 'full',
        pack: 'Keͥ͢vͣıͫ͘͜𝜂',
        author: '',
        categories: [
            '🌹'
        ]
        }
      const robador = await createSticker(`./sticker/${senderfix}.webp`, MatadataRobar)
                  kev.sendMessage(from, robador, MessageType.sticker, {quoted: vin, sendEphemeral: true, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})
                  fs.unlinkSync(meidia)
            break
    case 'subirtexto':
            if (!yo && !isOwner) return
            if (!q) return reply('Que texto deseas subir a tu estado?')
            reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
            kev.sendMessage('status@broadcast', `${q}`, extendedText)
            reply(`Estado subido: *${q}*`)
            break
    case 'subirimagen':
    if (!yo && !isOwner) return
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vin
            cihcih = await kev.downloadMediaMessage(swsw)
            reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
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
            reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
            kev.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Video subido a tu estado con el subtitulo: *${q}*`
            kev.sendMessage(from, bur, text, { quoted: vin })
            } else {
            reply('Menciona un video!')
            }
            break
    case 'publico':
          	if (!vin.key.fromMe && !isOwner) return reply('SELF-BOT')
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	reply(`「 *MODO PUBLICO ACTIVADO* 」`)
          	break
	case 'self':
          	if (!vin.key.fromMe && !isOwner) return reply('SELF-BOT')
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
reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
let ment = args.join(' ')
const resm = await zenmediafire(ment)
result = `  *🐋 「  Mediafire Download  」 ❄️*

🐋 *Nombre:* ${resm[0].nombre}

❄️ *Tamaño:* ${resm[0].size}

🐋 *Enlace:* ${resm[0].link}

_*El archivo se esta enviando, si vez que el archivo no puedes abrirlo desde el mismo WhatsApp, simplemente ve a la carpeta de tu whatsapp luego a documents y alli dentro veras el archivo descargado...*_`
kev.sendMessage(from, fakeimg, MessageType.image, {quoted: vin, caption: result, sendEphemeral: true, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})
sendFileFromUrl(resm[0].link, MessageType.document, {mimetype: resm[0].mime, filename: resm[0].nombre, quoted: vin, sendEphemeral: true, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})
break
/// HERRAMIENTAS
case 'captura': 
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
        anu = await getBuffer(`http://anu-team.herokuapp.com/api/ssweb?url=${arg}`)
            kev.sendMessage(from, anu, MessageType.image, {caption: `Pagina: ${args}`, quoted: vin, sendEphemeral: true, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})
        break
case 'ocr':
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
        if ((isMedia && !vin.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(vin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : vin
            const media = await kev.downloadAndSaveMediaMessage(encmedia)
reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
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
      "productId": "4340283582676483",
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
      "productId": "4340283582676483",
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
case 'fix':
            if (!yo && !isOwner) return 
          kev.updatePresence(from, Presence.composing) 
          if (!yo && !isOwner) return 
           exec("git pull", (err, stdout) => {
           if(err) return reply(err)
           if (stdout) {
           reply(stdout)
           }
         })
          break
case 'reiniciar':
if (!yo && !isOwner) return 
var terminate = require('terminate');
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
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vin
            file = await kev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
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
            ini_buffer = fs.readFileSync(file)
            kev.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !vin.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vin
            file = await kev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
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
            ini_buffer = fs.readFileSync(file)
            kev.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !vin.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vin
            file = await kev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
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
            ini_buffer = fs.readFileSync(file)
            kev.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !vin.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vin
            file = await kev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
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
            ini_buffer = fs.readFileSync(file)
            kev.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
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
case 'menu':
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
var wstatus = await kev.getStatus(sender, MessageType.text)
menux = `Hola @${senderfix.split('@')[0]} 🌈 ${tengas}
💫 Tu Info: *${wstatus.status}*
    
🌏 *Fecha Actual :*  _${tampilTanggal}_
📚 *Lib :*  _Baileys_
💣 *Usos :*  _${hit_today.length}_
⚔️ *Prefix :*  _${prefix}_


    *REPORTAR BUGS*
  🐋 ${prefix}?
  ❄️ ${prefix}bug
  🐋 ${prefix}reporte

    *DESCARGAS*
  🐋 ${prefix}tiktok
  ❄️ ${prefix}twitter
  🐋 ${prefix}facebook
  ❄️ ${prefix}mediafire
  🐋 ${prefix}instagram
  ❄️ ${prefix}ighistoria

    *BUSQUEDA*
  🐋 ${prefix}xnxx
  ❄️ ${prefix}phub
  🐋 ${prefix}imagen
  ❄️ ${prefix}wattpad
  🐋 ${prefix}ytbusqueda
  ❄️ ${prefix}pinterest
  🐋 ${prefix}playstore

    *STALKING*
  🐋 ${prefix}igstalk
  ❄️ ${prefix}tiktokstalk

    *CREADORES*
  🐋 ${prefix}zalgo
  ❄️ ${prefix}emoji
  🐋 ${prefix}texto
  ❄️ ${prefix}toimg
  🐋 ${prefix}tomp4
  ❄️ ${prefix}tourl
  🐋 ${prefix}robar
  ❄️ ${prefix}cstick
  🐋 ${prefix}sticker
  ❄️ ${prefix}sticker2

    *MÚSICA DESCARGA*
  🐋 ${prefix}ytdl
  ❄️ ${prefix}ytmp3
  🐋 ${prefix}ytmp4
  ❄️ ${prefix}youfix
  🐋 ${prefix}playmp4
  ❄️ ${prefix}playmp3

    *EFECTOS AUDIO/VIDEO*
  🐋 ${prefix}bass
  ❄️ ${prefix}lento
  🐋 ${prefix}rapido
  ❄️ ${prefix}reversa
  🐋 ${prefix}volumen
  ❄️ ${prefix}fantasma
  🐋 ${prefix}monstruo
  ❄️ ${prefix}lentocore
  🐋 ${prefix}nightcore
  ❄️ ${prefix}camaralenta
  🐋 ${prefix}camararapida
  ❄️ ${prefix}camarareversa

    *JUEGOS*
  🐋 ${prefix}xo
  ❄️ ${prefix}reiniciarxo
  🐋 ${prefix}cs
  ❄️ ${prefix}dado

    *HERRAMIENTAS*
  🐋 ${prefix}ocr
  ❄️ ${prefix}tomp3
  🐋 ${prefix}get64
  ❄️ ${prefix}gethex
  🐋 ${prefix}perfil
  ❄️ ${prefix}captura
  🐋 ${prefix}leermas
  ❄️ ${prefix}contacto
  🐋 ${prefix}inspeccionar

    *EXTRA*
  🐋 ${prefix}speed
  ❄️ ${prefix}tienda
  🐋 ${prefix}tienda2
  ❄️ ${prefix}fakeloc
  🐋 ${prefix}fakepdf
  ❄️ ${prefix}runtime
  🐋 ${prefix}creador

    *MENCIONES*
  🐋 ${prefix}tag
  ❄️ ${prefix}noti
  🐋 ${prefix}taggif
  ❄️ ${prefix}tagapk
  🐋 ${prefix}hidetag
  ❄️ ${prefix}mencion
  🐋 ${prefix}tagvideo
  ❄️ ${prefix}tagaudio
  🐋 ${prefix}tagimagen
  ❄️ ${prefix}tagcontacto

    *ADMINS*
  🐋 ${prefix}echar
  ❄️ ${prefix}sider
  🐋 ${prefix}fotog
  ❄️ ${prefix}descg
  🐋 ${prefix}online
  ❄️ ${prefix}viewto
  🐋 ${prefix}demote
  ❄️ ${prefix}enlace
  🐋 ${prefix}hablen
  ❄️ ${prefix}nombreg
  🐋 ${prefix}promote
  ❄️ ${prefix}votacion
  🐋 ${prefix}unavista
  ❄️ ${prefix}silencio
  🐋 ${prefix}antidelete
  ❄️ ${prefix}delvotacion
  🐋 ${prefix}antihidetag`
loc = {
            "degreesLatitude": 0,
            "degreesLongitude": 0,
            "jpegThumbnail": fakeimg
            }
            kev.sendMessage(from, 
            {"contentText": `${menux}`,
            "footerText": `Created By Kevin`,
            "buttons": [
            {"buttonId": `${prefix}info`,
            "buttonText": {"displayText": "INFO"
            },"type": "RESPONSE"},
            {"buttonId": `${prefix}stats`,
            "buttonText": {"displayText": "STATS"
            },"type": "RESPONSE"}
            ], "headerType": 6,
            "locationMessage": loc,
            quoted: null
            }, MessageType.buttonsMessage, {contextInfo: {mentionedJid: [senderfix]}})
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
              reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
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
            reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
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
                reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
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
                  reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
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
                  reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
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
                  reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
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
reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
encmediavolumen = isQuotedAudio ? JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vin
mediavolumen = await kev.downloadAndSaveMediaMessage(encmediavolumen)
    ran = getRandom('.mp3')
    exec(`ffmpeg -i ${mediavolumen} -filter:a "volume=${q}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediavolumen)
if (err) return enviar('Error!')
res = fs.readFileSync(ran)
kev.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: true, quoted: vin})
fs.unlinkSync(ran)
    })
break
case 'reversa':
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
if (!isQuotedAudio) return reply('Menciona el audio que quieres poner en reversa')
reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
encmediareversa = isQuotedAudio ? JSON.parse(JSON.stringify(vin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vin
mediareversa = await kev.downloadAndSaveMediaMessage(encmediareversa)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${mediareversa} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediareversa)
if (err) return enviar('Error!')
res = fs.readFileSync(ran)
kev.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: true, quoted: vin})
fs.unlinkSync(ran)
    })
break
        case 'monstruo':
        if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
            if (!isQuotedAudio) return reply('Menciona el audio que quieres volver estilo Monstruo')
                  reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
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
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
                if (!q) return reply(`Para descargar una música solo usa el comando: *${prefix}playmp3* *Nombre de la música que deseas buscar*`)
                try {
                    reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
                    let yut = await yts(q)
                    yta(yut.videos[0].url)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                            if (Number(filesize) >= 99000) return sendMediaURL(from, thumb, `🐋 *「 Youtube Play Mp3 」 ❄️*

 *🐋 Título:*  ${title}

 *❄️ Extensión:*  Mp3/Audio

 *🐋 Tamaño:*  ${filesizeF}

 *❄️ ID:*  ${yut.videos[0].videoId}

 *🐋 Subido:*  ${yut.videos[0].ago}

 *❄️ Visitas:*  ${yut.videos[0].views}

 *🐋 Duración:*  ${yut.videos[0].timestamp}

 *❄️ Enlace:*  ${a.data}

_Para la duración de más del límite se presenta en forma de enlace_`, vin)
                        const captionis = `🐋 *「 Youtube Play Mp3 」 ❄️*

 *🐋 Título:*  ${title}

 *❄️ Extensión:*  Mp3/Audio

 *🐋 Tamaño:*  ${filesizeF}

 *❄️ ID:*  ${yut.videos[0].videoId}

 *🐋 Subido:*  ${yut.videos[0].ago}

 *❄️ Visitas:*  ${yut.videos[0].views}

 *🐋 Duración:*  ${yut.videos[0].timestamp}

 *❄️ Enlace:*  ${yut.videos[0].url}

 *🐋 Enlace Directo De Tinyurl:*  ${a.data}

_Espere a que se envíe el archivo multimedia; puede tardar unos minutos_

_El archivo se enviará en 2 tipos de formato:_

*.MP3 / .OPUS*

_Por si deseas escuchar el audio o simplemente guardar el archivo._`
                            sendMediaURL(from, thumb, captionis, vin)
                            sendFileFromAudio(from, dl_link, '', vin)
                            sendFileFromAudio2(from, dl_link, '', vin)
                        })
                    })
                    .catch((err) => reply(`${err}`))
                } catch (err) {
                    console.log(color('[PlayMp3]', 'red'), err)
                    reply(mess.error.api)
                
            }
                break
case 'playmp4':
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
                if (!q) return reply(`Para descargar un video solo usa el comando: *${prefix}playmp4* *Nombre de el video que deseas buscar*`)
                try {
                    reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
                    let yut = await yts(q)
                    ytv(yut.videos[0].url)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                            if (Number(filesize) >= 99000) return sendMediaURL(from, thumb, `🐋 *「 Youtube Play Mp4 」 ❄️*

 *🐋 Título:*  ${title}

 *❄️ Extensión:*  Mp4/Video

 *🐋 Tamaño:*  ${filesizeF}

 *❄️ ID:*  ${yut.videos[0].videoId}

 *🐋 Subido:*  ${yut.videos[0].ago}

 *❄️ Visitas:*  ${yut.videos[0].views}

 *🐋 Duración:*  ${yut.videos[0].timestamp}

 *❄️ Enlace:*  ${yut.videos[0].url}

 *🐋 Enlace Directo De Tinyurl:*  ${a.data}

_Para la duración de más del límite se presenta en forma de enlace_

_El limite es de 100MB_`, vin)
                        const captionisu = `🐋 *「 Youtube Play Mp4 」 ❄️*
                    
 *🐋 Título:*  ${title}

 *❄️ Extensión:*  Mp4/Video

 *🐋 Tamaño:*  ${filesizeF}

 *❄️ ID:*  ${yut.videos[0].videoId}

 *🐋 Subido:*  ${yut.videos[0].ago}

 *❄️ Visitas:*  ${yut.videos[0].views}

 *🐋 Duración:*  ${yut.videos[0].timestamp}

 *❄️ Enlace:*  ${yut.videos[0].url}

 *🐋 Enlace Directo De Tinyurl:*  ${a.data}`
                            sendFileFromDts(from, dl_link, captionisu, vin)
                        })
                    })
                    .catch((err) => reply(`${err}`))
                } catch (err) {
                    console.log(color('[PlayMp4]', 'red'), err)
                    reply(mess.error.api)
            }
                break    
case 'sticker2':
case 's2':
case 'stiker2':
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
if ((isMedia && !vin.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(vin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : vin
const media = await kev.downloadAndSaveMediaMessage(encmedia, `./sticker/${senderfix}`)                                     
reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
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
reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
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
        pack: 'Keͥ͢vͣıͫ͘͜𝜂',
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
      reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
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
      reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
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
case 'totest':{
                if (allone.isQuotedSticker) {
                    let isAnimated = quotedMsg[quotedMsg.type].isAnimated
                    if (isAnimated) {
                        await reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
                        const media = await quotedMsg.toBuffer()
                        webpToMp4(media)
                            .then((res) => kev.sendVideo(from, res, '', allone))
                            .catch((err) => {
                                console.log(err)
                                kev.reply(from, require('util').format(err), allone)
                            })
                    } else {
                        await reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
                        const kev = await quotedMsg.toBuffer()
                        webpToPng(media)
                            .then((res) => {
                                kev.sendImage(from, res, '', allone)
                            })
                            .catch((err) => {
                                console.log(err)
                                reply(require('util').format(err))
                            })
                    }
                } else {
                    let tmt = `Menciona el sticker junto al comando: ${command}`
                    reply(tmt)
                }
            }
            break            
    case 'toimg':
    if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
            if (!isQuotedSticker) return reply('Menciona el sticker que deseas convertir a imagen')
            const toimg2 = JSON.parse(JSON.stringify(vin).replace('quotedM','m')).message.extendedTextMessage.contextInfo
            const toimg3 = await kev.downloadAndSaveMediaMessage(toimg2)
            reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
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
            reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await kev.sendMessage(from, 'Error En La Busqueda!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '🐋 *「 Youtube Busqueda 」 ❄️*'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += ' *🐋 Título:* ' + video.title + '\n\n'
            ytresult += ' *❄️ Enlace:* ' + video.url + '\n\n'
            ytresult += ' *🐋 Duración:* ' + video.timestamp + '\n\n'
            ytresult += ' *❄️ Subido:* ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += ' *🐋 *SELF BY KEVIN* ❄️'
    		await fakethumb(tbuff,ytresult)
			break
case 'ytmp4':{
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
if (args.length === 0) return reply(`Para descargar un video por medio de un enlace solo usa *${prefix}ytmp4 enlace*`)
                if (!q) return reply('Enlace Del Video??')
                try {
                    reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
                    ytv(q)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                            if (Number(filesize) >= 99000) return sendMediaURL(from, thumb, `🐋 *「 Youtube Link Mp4 」 ❄️*

 *🐋 Título:*  ${title}

 *❄️ Extensión:*  Mp4/Video

 *🐋 Tamaño:*  ${filesizeF}

 *❄️ Enlace Directo De Tinyurl:*  ${a.data}

_Para la duración de más del límite se presenta en forma de enlace_`, vin)
                        const captionsYtmp4 = `🐋 *「 Youtube Link Mp4 」 ❄️*

 *🐋 Título:*  ${title}

 *❄️ Extensión:*  Mp4/Video

 *🐋 Tamaño:*  ${filesizeF}

 *❄️ Enlace Directo De Tinyurl:*  ${a.data}`
                            sendFileFromDts(from, dl_link, captionsYtmp4, vin)
                        })
                    })
                    .catch((err) => reply(`${err}`))
                } catch (err) {
                    console.log(color('[Ytmp4]', 'red'), err)
                    reply(mess.error.api)
                }
            }
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
case 'ytmp3':
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
        if (!q) return reply('Enlace Del Video??')
                try {
                    reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
                    yta(q)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                            if (Number(filesize) >= 99000) return sendMediaURL(from, thumb, `🐋 *「 Youtube Link Mp3 」 ❄️*

*🐋 Título:*  ${title}

*❄️ Extensión:*  Mp3/Audio

*🐋 Tamaño:*  ${filesizeF}

*❄️ Enlace Directo De Tinyurl:*  ${a.data}

_Para la duración de más del límite se presenta en forma de enlace_`, vin)
                        const captions = `🐋 *「 Youtube Link Mp3 」 ❄️*

 *🐋 Título:*  ${title}

 *❄️ Extensión:*  MP3

 *🐋 Tamaño:*  ${filesizeF}

 *❄️ Enlace Directo De Tinyurl:*  ${a.data}

_Espere a que se envíe el archivo multimedia; puede tardar unos minutos_

_El archivo se enviará en formato: *.mp3* y formato *.opus* por si deseas escuchar el audio o simplemente guardar el archivo._`
                            sendMediaURL(from, thumb, captions, fakesticker)
                            sendFileFromAudio(from, dl_link, '', vin)
                            sendFileFromAudio2(from, dl_link, '', vin)
                        })
                    })
                    .catch((err) => reply(`${err}`))
                } catch (err) {
                    console.log(color('[Ytmp3]', 'red'), err)
                    reply('Por alguna razón el server fallo, intentalo nuevamente')
                }
            
                break
    case 'imagen':
    if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
            if (args.length < 1) return reply('Que deseas buscar?!')
            const gimg = args.join('');
            reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            kev.sendMessage(from,{url:images},image,{quoted:vin, caption: '*🐋 Imagen Encontrada ❄️*'})
            });
            break
    case 'tiktok':
    if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
        if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('El enlace debe ser de tiktok.')
        if (!q) return reply('Y el enlace de tiktok?')
        kev.sendMessage(from, `❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*`, MessageType.text, fakevin)
        hx.ttdownloader(`${args[0]}`)
            .then(result => {
            const { wm, nowm, audio } = result
            axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
            .then(async (a) => {
            me = `*🐋 Tiktok Downloader ❄️*`
        kev.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:vin,caption:me})
        })
        })
            .catch(e => console.log(e))
            break
case 'instagram':
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return kev.sendMessage(from, 'El enlace debe ser de instagram.', MessageType.text, fakevin)
        if (!q) return reply('Y el enlace de instagram?')
        kev.sendMessage(from, `❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*`, MessageType.text, fakevin)
      hx.igdl(args[0])
      .then(async(result) => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    kev.sendMessage(from,link,video,{quoted: vin,caption: `*🐋 Instagram Downloader ❄️*`})
                } else {
                    let link = await getBuffer(i.url)
                    kev.sendMessage(from,link,image,{quoted: vin,caption: `*🐋 Instagram Downloader ❄️*`})                  
                }
            }
            });
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
      reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
        let { user, stats } = await tiktod.getUserProfileInfo(args[0])
      upcaption = `*🐋 「 Tiktok Stalk 」 ❄️*

*• 👤 Nombre de usuario:*  ${user.uniqueId}

*• 👤 Nombre:*  ${user.nickname}

*• 👥 Seguidores:*  ${stats.followerCount}

*• 👥 Seguidos:*  ${stats.followingCount}

*• 🦉 ID:*  ${user.id}

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
kev.sendMessage(from, `❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*`, MessageType.text, fakevin)
                    if (args.length == 0) return reply(`Use ${prefix}igstalk "usuario"`)
                    ini_result = await fetchKev(`https://fxc7-api.herokuapp.com/api/stalk/ig?apikey=bcpoAqRL&username=${q}`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.hd_profile_pic_url_info.url)
                    ini_txt = `*🐋 「 Instagram Stalk 」 ❄️*

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
kev.sendMessage(from, `❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*`, MessageType.text, fakevin)
res = await fbDown(filetext).catch(e => {
  reply(mess.ferr)
})
a = res[0]
result = `*🐋 「 Facebook Mp4 」 ❄️*

*• 🐋 Resultado de :* ${arg}

 *❄️ Título :* ${a.judul}

 *🐋 Subido Por :* ${a.source}

 *❄️ Tamaño :* ${a.size}

 *🐋 Calidad :* ${a.quality}

 *❄️ Tipo :* ${a.type}

 *🐋 Nombre De Archivo :* ${a.judul}.${a.type}`
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
            kev.sendMessage(from, `❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*`, MessageType.text, fakevin)
            if (!q) return reply('Enlace Del Video??')
            ten = q
            var res = await twitterGetUrl(`${ten}`)
            .then(g => {
            ren = `${g.download[2].url}`
            sendMediaURL(from,ren,'', vin)
            })
        break
    case 'runtime':
    case 'test':
    if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
    run = process.uptime()
    let teks = runtime(run)
    reply(teks)
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
            reply(`_${pingnya}_`)
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
                    ini_txt = '🐋 *「 Wattpad Busqueda 」 ❄️*\n\n'
                    for (var x of get) {
                        ini_txt += ` *🐋 Título:*  ${x.title}\n\n`
                        ini_txt += ` *❄️ Visitas:*  ${x.reads}\n\n`
                        ini_txt += ` *🐋 Me Gustas:*  ${x.vote}\n\n`
                        ini_txt += ` *❄️ Enlace:*  ${x.url}\n\n`
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
                    ini_txt = '🐋 *「 Xnxx Busqueda 」 ❄️*\n\n'
                    for (var x of get) {
                        ini_txt += ` *🐋 Título:*  ${x.judul}\n\n`
                        ini_txt += ` *❄️ Visitas:*  ${x.viewers}\n\n`
                        ini_txt += ` *🐋 Descripción:*  ${x.info}\n\n`
                        ini_txt += ` *❄️ Enlace:*  ${x.url}\n`
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
                    ini_txt = '🐋 *「 PornHub Busqueda 」 ❄️*\n\n'
                    for (var x of get) {
                        ini_txt += ` *🐋 Título:*  ${x.title}\n\n`
                        ini_txt += ` *❄️ Subido Por:*  ${x.author}\n\n`
                        ini_txt += ` *🐋 Visitas:*  ${x.views}\n\n`
                        ini_txt += ` *❄️ Subido Hace:*  ${x.publish.replace('months','Meses').replace('ago','Atrás').replace('years','Años').replace('year','Año')}\n\n`
                        ini_txt += ` *🐋 Enlace:*  ${x.url}\n`
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
case 'creador':
case 'dueño':
case 'fundador':
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
kev.sendMessage(from, {displayname: "I`am Kҽѵíղ", vcard: vcard2}, MessageType.contact, fakevin)
kev.sendMessage(from, '*Este es el número de mi creador...*', MessageType.text, fakevin)
break

case 'youfix':
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
        if (!q) return reply(`*Que deseas buscar?*`)
        reply('❬❗❭ *_Esᴘᴇʀᴀ ᴇɴ ᴘʀᴏᴄᴇsᴏ.._*')
        var bv = await KevFetch(
          `http://brizas-api.herokuapp.com/sociais/ytplaymp3?apikey=brizaloka&query=${q}`
        );
        var tamnel = await getBuffer(bv.thumb)
        
buttons = [{
                    "buttonId": `${prefix}ytmp4 ${bv.link_share}`,
                    "buttonText": { 
                        "displayText": "VIDEO"
                    },
                    "type": "RESPONSE"},
                    { "buttonId": `${prefix}ytmp3 ${bv.link_share}`,
                    "buttonText": 
                    { "displayText": "AUDIO"
                    }
                    ,"type": "RESPONSE"}
                ]
imageMessage = (await kev.prepareMessage(from, tamnel, 'imageMessage',{ quoted: vin})).message.imageMessage
imageMessage["fileLength"] = 999999999
buttonsMessage = { contentText: `🐋 *「 Youtube Downloader 」 ❄️*\n\n *🐋 Titulo:* ${bv.titulo}\n\n *❄️ Canal:* ${bv.canal.name}\n\n *🐋 Enlace De Canal:* ${bv.canal.link}\n\n *❄️ Duración:* ${bv.duration}\n\n *🐋 Vistas:* ${bv.views}`,
footerText: `*Que deseas descargar ¿VIDEO o AUDIO?*`,
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
const chatMove = `*🎮 X-0 Juego 🎳*

*Actualmente hay un juego activo*\n\n*@${boardnow.X} VS @${boardnow.O}*

@${boardnow.X} *Tu eres: ❌*

@${boardnow.O} *Tu eres: ⭕*

*Te toca* : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}


${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}


`;
kev.sendMessage(from, chatMove, MessageType.text, {
quoted: faketroli,
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
`Etiqueta a quien quieras que sea ser tu oponente!\n\nEjemplo : *${prefix}xo @usuario*`
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
const strChat = `*🎮 Iniciar el juego X-O 🎳*

@${sender.replace(
           "@s.whatsapp.net",
           ""
)} Te desafio en un *X-O*

_[ ${argss[1]} ] Escribe la letra *'S'* o *'N'* para aceptar o rechazar el juego._ 
`;
kev.sendMessage(from, strChat, MessageType.text, {
quoted: faketroli,
contextInfo: {
mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
},
});
break
case 'delttc':
case 'reiniciarxo':
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
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
if (symantec2 == '⋮☰ INFO') {
reply('test')
}
if (budy.startsWith("#")){
const buffone = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(vin).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : vin;
const buf22 = await kev.downloadAndSaveMediaMessage(buffone) 
const bufferito = fs.readFileSync(buf22)
loc = {
            "degreesLatitude": 0,
            "degreesLongitude": 0,
            "jpegThumbnail": bufferito
            }
            kev.sendMessage(from, 
            {"contentText": `Only Test`,
            "footerText": `Created By Kevin`,
            "buttons": [
            {"buttonId": `Test By Kevin`,
            "buttonText": {"displayText": "XD"
            },"type": "RESPONSE"},
            {"buttonId": `Test By Kevin 2`,
            "buttonText": {"displayText": "XD 2"
            },"type": "RESPONSE"}
            ], "headerType": 6,
            "locationMessage": loc,
            quoted: null
            }, MessageType.buttonsMessage, {})
}
if (budy.startsWith("> ")){
if (!yo && !isOwner) return 
                console.log(color('[EVAL]'), color(moment(vin.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
                try {
                                  var konsol = budy.slice(2)
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
if (!yo && !isOwner) return
const util = require("util");
    var konsol = q
        function sendResult(sul) {
    var sat = JSON.stringify(sul, null, 2)
    var bang = util.format(sat)
       return reply(bang)}
    reply(util.format(eval(`;(async () => { ${konsol} })()`)))
}
if (budy.startsWith('x')){
if (!yo && !isOwner) return
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



	
    
