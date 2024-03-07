/*
WHATSAPP BOT BY Janith sadanuwan 
WHATSAPP - 94767438882
SUPPORT GROUP - https://t.me/QueenNilu
YOUTUBE - http://youtube.com/janithsadanuwan
*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// PUT YOUR SESSION ID HERE  ##Required 

global.SESSION_ID = 'QUEENNILU;;;omdhhYgR#01c3nuDGEaP_yE5jG12LaBF7HHQMCOvyeKLEoWbAg0Q' // PUT your session ID BY scan QR 

// databse URL  ##Required 
global.POSTGRESQL_URL = 'postgres://piu:LqEpLEsdCas4sqDsdW9GAra9fwEM2Hom@dpg-cnkdat5jm4es73bqk0r0-a.frankfurt-postgres.render.com/piush'

 

// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '94756260023'

global.OWNER_NAME = 'MR.TERA'

global.TIMEZONE = 'Asia/Colombo' 

global.INBOX_BLOCK_MESSAGE = '' // Inboc Block Message

global.INBOX_BLOCK = 'false' // TO Inbox Block On put true

global.READ_MESSAGE = "false" 

global.OPENAI_API_KEY = "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" 

/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = 'DARK TERA'

global.FOOTER = 'Queen Nilu 2023'

global.BOT_OFFLINE = true    //  Always Onlne -  | false offline -True

global.STICKER_NAME = '@TEHERAN 🗿' //sticker

global.LANG = 'EN' // Language (EN-  TO english  ,  SI- TO sinhala )

global.PREFIX = '.' // Bot Prefix

global.CAPTION = 'UPLOADED' // Caption

global.ALIVELOGO = 'https://telegra.ph/file/1e63f0ee90304a12767c7.jpg' // Set Alive Logo link 

global.ALIVE_MESSAGE = '' // Set Alive Message

global.MAX_SIZE = '500' // Bot Uloading Max size 

global.ANTI_BAD = false // Antibad (on = True , Off = False )

global.ANTI_BAD_ACTION = false

global.ANTI_LINK = false //Anti Link (on = True , Off = False )

global.ANTI_BOTS = false

global.ONLY_GROUP = 'false' // Only group mode

global.GROUP_LINK = 'https://chat.whatsapp.com/IRdyJY5P4sF5BhtP5PIdHH' // ur group link


/* 18 + Download Settings */

global.SEX_DL = 'true' // 18 + video dl

/* AUTO REPLY SETTINGS */

global.AUTO_STICKER = false

global.AUTO_REPLY = false

global.VOICE_REPLY = false


/* V card */

global.ytname = "YT: janithsadanuwan" //ur yt chanel name
global.socialm = "GitHub: janithsadanuwan" //ur github or insta name
global.location = "Srilanka, colombo" //ur location
