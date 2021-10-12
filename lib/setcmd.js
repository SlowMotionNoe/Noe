const fs = require("fs");
stickerdb = JSON.parse(fs.readFileSync('./database/stickerdb.json'))
const addCmd = ( id, cmd, kode, reply) => {
let anu = null;
  Object.keys(stickerdb).forEach(nganu => {
    if (stickerdb[nganu].id === id) return reply('_El sticker ya está en la base de datos._')
  });
  if (anu !== null) {
    return anu;
  }
  const scmd = {
        id: id,
        cmd: cmd,
        sticker: kode
};
  stickerdb.push(scmd);
  fs.writeFileSync("./database/stickerdb.json", JSON.stringify(stickerdb));
  reply('_Sticker agregado a la base de datos._')
};
const getCommandPosition = id => {
stickerdb = JSON.parse(fs.readFileSync('./database/stickerdb.json'))
  let anu = null;
  Object.keys(stickerdb).forEach(nganu => {
    if (stickerdb[nganu].id === id) {
      anu = nganu;
    }
  });
  if (anu !== null) {
    return anu;
  }
};
const getCmd = id => {
stickerdb = JSON.parse(fs.readFileSync('./database/stickerdb.json'))
  let anu = null;
  Object.keys(stickerdb).forEach(nganu => {
    if (stickerdb[nganu].id === id) {
      anu = nganu;
    }
  });
  if (anu !== null) {
    return stickerdb[anu].cmd;
  }
};
const checkSCommand = id => {
  let anuu = false;
  Object.keys(stickerdb).forEach(nganu => {
    if (stickerdb[nganu].id === id) {
      anuu = true;
    }
  });
  return anuu;
};
module.exports.addcmd = addCmd;
module.exports.getcmd = getCmd;
module.exports.getcmdpos = getCommandPosition
