/* maap kalau ada bug nya :))
  kalau eror chat saja !.
  contact me : wa.me/+6282115946480
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	riykey: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': '335287f0116',//apikey lu
}

// Owner
global.owner = ['6282115946480','6282115946480','+6282115946480']
global.ownernomer = '6282115946480'
global.premium = ['6282115946480']
global.ownername = 'kiki vz'
global.botname = 'vraabot'
global.footer = 'vraabot asisten anda'
global.email = 'vraakeren@gmail.com'
global.ig = 'https://youtube.com/channel/UCjjuhOD-Mt2XrKFptMVDysQ'
global.region = 'indonesia'// 

// Keperluan buttons
global.myweb = 'https://youtube.com/channel/UCjjuhOD-Mt2XrKFptMVDysQ'
global.sc = 'https://github.com/kikivz/vraabot-MD'
global.grupowner ='https://chat.whatsapp.com/JOxS05d1WWO529F40SEVEa'
// Wm
global.packname = 'vraabot'
global.author = 'cerated by kiki vz'

// Thumb & Image random
global.thumb = fs.readFileSync('./language/kiki.jpg')// jangan di ubah nanti eror.

/*
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
*/

// Lainnya
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'

// Mess wait & Premium
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
    endGLimit: 'Limit Harian Game Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitharian = "15"
global.limitgame = "15"
global.limitawal = {
    premium: "Infinity",
    free: 15
}

// Logs update
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
