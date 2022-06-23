//═══════════════════════════════════════════════════════//
//
//                              Whats-Bot-MD_V-3 by darkezio
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════════════════════//

require('./lib/config.js')
const fs = require('fs')
const chalk = require('chalk')
const { ownername, botname, footer, ig, region, myweb, packname, author, sessionName, prefa, sp, mess, APIs, YOUR_API_KEY } = require('./lib/config.js')

//Api Key\\
global.APIKeys = {'https://zenzapis.xyz': YOUR_API_KEY } //credit goes to sanzy yt, if api key expire, buy it and put it here?\\ https://zenzapis.xyz
//customize settings\\
global.owner = ['94761539856'] // Add Your number Eg: ['94761539856', 'YOUR NUMBER']
global.premium = ['94761539856'] // Add Your number Eg: ['94761539856', 'YOUR NUMBER']
global.ownernomer = '94761539856' // Add Your number Eg: ['YOUR NUMBER']
global.sc = 'https://github.com/AiDarkEzio/Whats-Bot-MD_V-3.git' // AiDarkEzio to change your github name



//Don't edit enithing\\
global.APIs = APIs
global.ownername = ownername
global.botname = botname
global.footer = footer
global.ig = ig
global.region = region
global.myweb = myweb
global.packname = packname
global.author = author
global.sessionName = sessionName
global.prefa = prefa 
global.sp = sp
global.mess = mess

global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./Media/gojo.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
