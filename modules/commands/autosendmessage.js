module.exports.config = {
    name: 'autosendmessage',
    version: '10.02',
    hasPermssion: 2,
    credits: 'DC-Nam',
    description: 'Tự động gửi tin nhắn theo giờ đã cài!',
    commandCategory: 'Hệ thống',
    usages: '[]',
    cooldowns: 3
};
const r = a => a[Math.floor(Math.random()*a.length)],
{
    get
} = require('axios'),
config = [
    {
        timer: '12:00:00 AM',
        message: ['Bây giờ là {time}']
    },
    {
        timer: '01:12:00 PM',
        message: ['Bây giờ là {time}']
    }];
module.exports.onLoad = o => {
    if (!!global.autosendmessage_setinterval) clearInterval(global.autosendmessage_setinterval);
    global.autosendmessage_setinterval = setInterval(async function() {
        if (á = config.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) {
            var msg = r(á.message);
            msg = msg.replace(/{time}/g, (require("moment-timezone")).tz("Asia/Ho_Chi_Minh").format("HH:mm:ss (D/MM/YYYY) (dddd)"))
            msg = {
                body: msg, attachment: (await get((await get(`https://api.phamvandien.xyz/images/anime`)).data.url, {
                    responseType: 'stream'
                })).data
            };
            global.data.allThreadID.forEach(i => o.api.sendMessage(msg, i));
        };
    }, 1000);
};
module.exports.run = () => {};
