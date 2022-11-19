const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");

/////////////////////////////////////////////
//========= Check node.js version =========//
/////////////////////////////////////////////

// const nodeVersion = semver.parse(process.version);
// if (nodeVersion.major < 13) {
//     logger(`Your Node.js ${process.version} is not supported, it required Node.js 13 to run bot!`, "error");
//     return process.exit(0);
// };

///////////////////////////////////////////////////////////
//========= Create website for dashboard/uptime =========//
///////////////////////////////////////////////////////////

const dashboard = http.createServer(function (_req, res) {
    res.writeHead(200, "OK", { "Content-Type": "text/plain" });
    res.write("HI! BOT NHƯ LOL ");
    res.end();
});

dashboard.listen(8080);
//logger("Hệ thống BOT BLACK được remake từ Miraiv2 do BLACK duy trì và phát triển", "🛠 VN");
//logger("🛠 Donate momo: 0974052602", "[ DONATE ]");  
      const chalkAnimation = require('chalkercli');
///chalkAnimation.rainbow('[=== 𝐒𝐄𝐓𝐓𝐈𝐍𝐆 𝐁𝐎𝐓 𝐁𝐋𝐀𝐂𝐊 ===]');
///logger("Welcome back to Bot BLACK", "[ 𝐁𝐎𝐓 𝐁𝐋𝐀𝐂𝐊 ]");
//logger("BOT BLACK PROJECT start running...", "[ 𝐁𝐎𝐓 𝐁𝐋𝐀𝐂𝐊 ]");
//logger("BOT BLACK SUCCESSFULLY INITIALIZED", "[ 𝐁𝐎𝐓 𝐁𝐋𝐀𝐂𝐊 ]");

/////////////////////////////////////////////////////////
//========= Create start bot and make it loop =========//
/////////////////////////////////////////////////////////

function startBot(message) {
    (message) ? logger(message, "[ 𝐒𝐓𝐀𝐑𝐓𝐈𝐍𝐆 ]") : "";

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "mirai.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    child.on("close",async (codeExit) => {
      var x = 'codeExit'.replace('codeExit',codeExit);
        if (codeExit == 1) return startBot("Restarting...");
         else if (x.indexOf(2) == 0) {
           await new Promise(resolve => setTimeout(resolve, parseInt(x.replace(2,'')) * 1000));
                 startBot("Open ...");
       }
         else return; 
    });

    child.on("error", function (error) {
        logger("An error occurred: " + JSON.stringify(error), "[ 𝐒𝐓𝐀𝐑𝐓𝐈𝐍𝐆 ]");
    });
};
////////////////////////////////////////////////
//========= Check update from Github =========//
////////////////////////////////////////////////

//axios.get("https://pastebin.com/raw/0jHKXeVf").then((res) => { 
 //   logger("Bắt đầu load source code", "[ Load ]");
///   logger(res['data']['name'], "[ 𝐍𝐀𝐌𝐄 ]");
   /// logger("Version: " + res['data']['version'], "[ 𝐕𝐄𝐑𝐒𝐈𝐎𝐍 ]");
  ///  logger(res['data']['description'], "[ 𝐃𝐄𝐒𝐂𝐑𝐈𝐏𝐓𝐈𝐎𝐍 ]");
   /// logger("Đang khởi tạo các biến...", "[ 𝐁𝐎𝐓 𝐁𝐋𝐀𝐂𝐊 ]");	
//});
async function bank() {
const { readdirSync, readFileSync, writeFileSync, existsSync, copySync } = require('fs-extra');
const { join, resolve } = require('path');
const pathData = join(__dirname + '/modules/commands/banking/banking.json');
const logger = require("./utils/log.js");
const user = require('./modules/commands/banking/banking.json');
const timeIM = 60*60
const laisuat = 2
	if(user[0] == undefined ) return
	while(true) {
	for (let id of user) {
	var userData = user.find(i => i.senderID == id.senderID);
	var money = userData.money;
	userData.money = (parseInt(money + money * laisuat))
	writeFileSync(pathData, JSON.stringify(user, null, 2));
	}
	const chalkAnimation = require('chalkercli');
chalkAnimation.rainbow('[=== 𝐀𝐂𝐓𝐈𝐕𝐄 𝐁𝐎𝐓 𝐁𝐋𝐀𝐂𝐊 ===]');
	await new Promise(resolve => setTimeout(resolve, timeIM*1000))
	}
}
bank()
setTimeout(async function () {
    await new Promise((_0x501201) => setTimeout(_0x501201, 500))
    logger.banner(String.raw `ㅤ ==============================`)
    await new Promise((_0x1a434d) => setTimeout(_0x1a434d, 70))
    logger.banner(String.raw `ㅤㅤㅤ    █▄▄ █░░ ▄▀█ █▀▀ █▄▀   `)
    await new Promise((_0x19929d) => setTimeout(_0x19929d, 70))
    logger.banner(String.raw `ㅤㅤㅤ    █▄█ █▄▄ █▀█ █▄▄ █░█ `)
    await new Promise((_0x48db2a) => setTimeout(_0x48db2a, 70))
    logger.banner(String.raw `
ㅤㅤ• BOT NAME: 𝐁𝐋𝐀𝐂𝐊`)
    await new Promise((_0x43969f) => setTimeout(_0x43969f, 70))
    logger.banner(String.raw `ㅤ • FB: Nguyễn Thanh Mài`)
    await new Promise((_0x19f0e5) => setTimeout(_0x19f0e5, 70))
    logger.banner(String.raw `ㅤ • GITHUB: blackdzcuto`)
    await new Promise((_0x12c48e) => setTimeout(_0x12c48e, 70))
    logger.banner(String.raw `ㅤ ============================== `)
    await new Promise((_0x5bd7b5) => setTimeout(_0x5bd7b5, 1000))
    logger(
        '𝙲𝚘𝚗𝚗𝚎𝚌𝚝 𝚝𝚘 𝚜𝚎𝚟𝚎𝚛..',
        '[ 𝐁𝐋𝐀𝐂𝐊 ]'
    )
    startBot()
}, 70);

/*axios.get("https://raw.githubusercontent.com/d-jukie/miraiv2_fix/main/package.json").then((res) => {
    const local = JSON.parse(readFileSync('./package.json'));
    if (semver['lt'](local.version, res['data']['version'])) {
        if (local.autoUpdate == !![]) {
            logger('A new update is available, start update processing...', '[ UPDATE ]');
            const updateBot = {};
            updateBot.cwd = __dirname
            updateBot.stdio = 'inherit' 
            updateBot.shell = !![];
            const child = spawn('node', ['update.js'], updateBot);
            child.on('exit', function () {
                return process.exit(0);
            })
            child.on('error', function (error) {
                logger('Unable to update:' + JSON.stringify(error), '[ CHECK UPDATE ]');
            });
        } else logger('A new update is available! Open terminal/cmd and type "node update" to update!', '[ UPDATE ]'), 
        startBot();
    } else logger('You are using the latest version!', '[ CHECK UPDATE ]'), startBot();
}).catch(err => logger("Unable to check update.", "[ CHECK UPDATE ]"));*/
// THIZ BOT WAS MADE BY ME(CATALIZCS) AND MY BROTHER SPERMLORD - DO NOT STEAL MY CODE (つ ͡ ° ͜ʖ ͡° )つ ✄ ╰⋃╯