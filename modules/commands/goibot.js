module.exports.config={
	name:"goibot",
	version:"1.0.3",
	hasPermssion:2,
	credits:"Ryo",
	description:"Gọi Bot No Replyy",
	commandCategory:"Other",
	usages:"",
	cooldowns:2,
	denpendencies:{}},
	module.exports.handleEvent=async({event:e,api:o,Users:t,Threads:a})=>{var{threadID:n,messageID:s,body:i,senderID:d}=e;const r=global.data.threadData.get(n)||{};if(void 0!==r.goibot&&0==r.goibot)return;if(d==global.data.botID)return;let g=await t.getNameUser(e.senderID),c=(await a.getData(e.threadID)).threadInfo;var h=e.threadID,l=["𝐠𝐢̀𝐢𝐢𝐢𝐢 𝐨̉ :𝟑","𝐤𝐞̂𝐮 𝐠𝐢̀ 𝐛𝐨𝐭 𝐧𝐠𝐡𝐞 𝐧𝐨̀ :𝟑"," 𝐜𝐡𝐮̉ 𝐜𝐮̉𝐚 𝐭𝐨̛́ 𝐜𝐡𝐮̛𝐚 𝐛𝐨̂̀ 𝐯𝐚̀ 𝐜𝐮𝐭𝐢 𝐥𝐚̆́𝐦 :𝟑","𝐤𝐢𝐞̂̉𝐦 𝐬𝐨𝐚́𝐭 𝐧𝐠𝐨̂𝐧 𝐧𝐠𝐮̛̃ 𝐧𝐨́ 𝐬𝐞̃ 𝐠𝐢𝐮́𝐩 𝐛𝐚̣𝐧 𝐭𝐫𝐮̛𝐨̛̉𝐧𝐠 𝐭𝐡𝐚̀𝐧𝐡 𝐡𝐨̛𝐧 🐧","𝐮̛𝐨̛́𝐜 𝐦𝐨̛ 𝐜𝐮̉𝐚 𝐛𝐨𝐭 𝐥𝐚̀ 𝐭𝐫𝐨̛̉ 𝐭𝐡𝐚̀𝐧𝐡 𝐬𝐢𝐮 𝐧𝐡𝐚̂𝐧 :𝟑","𝐛𝐢𝐜 𝐜𝐮𝐭𝐞 𝐫𝐮̀𝐢 :<","𝐚𝐧𝐡 𝐡𝐞̂́𝐭 𝐭𝐡𝐮̛𝐨̛𝐧𝐠 𝐛𝐨𝐭 𝐫𝐨̂̀𝐢 🙁","𝐧𝐡𝐚̆𝐦 𝐧𝐡𝐚̆𝐦 𝐛𝐨𝐭 𝐧𝐞̀ :𝟑𝟑","𝐭𝐮𝐢 𝐥𝐚̀ 𝐛𝐨𝐭 𝐜𝐮̉𝐚 𝐁𝐋𝐀𝐂𝐊 𝐨̉ :𝟑𝟑𝟑","𝐚̆𝐧 𝐜𝐡𝐮̛𝐚 𝐛𝐛𝐢 :𝟑?","𝐭𝐨̉ 𝐭𝐢̀𝐧𝐡 𝐜𝐫 𝐤𝐢̀𝐚 𝐥𝐞̣ 𝐥𝐞̂𝐧𝐧𝐧 🐧","𝐡𝐚̃𝐲 𝐲𝐞̂𝐮 𝐭𝐡𝐚̣̂𝐭 𝐥𝐨̀𝐧𝐠 𝐦𝐨̣̂𝐭 𝐜𝐨̂ 𝐠𝐚́𝐢 𝐧𝐡𝐞́ 𝐛𝐛𝐢 :𝟑","𝐜𝐡𝐮̉ 𝐜𝐮̉𝐚 𝐛𝐨𝐭 𝐜𝐨́ 𝐛𝐢𝐞̣̂𝐭 𝐝𝐚𝐧𝐡 𝐥𝐚̀ 𝐁𝐋𝐀𝐂𝐊","𝐧𝐞̂́𝐮 𝐥𝐨̂̃𝐢 𝐡𝐚𝐲 !𝐜𝐚𝐥𝐥 𝐧𝐡𝐨́ 𝐛𝐛𝐢 :𝟑","𝐧𝐡𝐨̛́ 𝐧𝐢𝐜 𝐡𝐨𝐧𝐠𝐠 :(?","𝐟𝐢𝐥𝐞 𝐛𝐨𝐭 𝐠𝐢𝐚́ 𝐜𝐡𝐢̉ 𝟐𝟎𝟎𝐤 :𝟑","𝐛𝐛𝐢 𝐚̀... 𝐁𝐎𝐓 𝐘𝐄̂𝐔 𝐂𝐀̣̂𝐔 𝐌𝐎𝐀𝐇𝐇𝐇𝐇𝐇","𝐭𝐮𝐢 𝐥𝐚̀ 𝐜𝐮̣𝐜 𝐳𝐚̀𝐧𝐠 𝐜𝐮̣𝐚 𝐛𝐨𝐱 𝐦𝐚̀ 𝐩𝐡𝐚̉𝐢 𝐡𝐮𝐦𝐦𝐦 :<<< ","𝐠𝐞́𝐜 𝐠𝐨̂ 𝐠𝐢𝐚̉𝐢 𝐜𝐮̛́𝐮 𝐭𝐡𝐞̂́ 𝐠𝐢𝐨̛́𝐢 𝐜𝐮̀𝐧𝐠 𝐛𝐨𝐭 𝐧𝐚̀𝐨 𝐛𝐛𝐢𝐢 :𝟑𝟑","𝐱𝐨𝐚́ 𝐛𝐨̉ 𝐭𝐚̀ 𝐝𝐚̂𝐦 𝐭𝐫𝐞̂𝐧 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐢𝐢𝐢 𝐜𝐡𝐮́𝐧𝐠 𝐭𝐚 𝐜𝐨̀𝐧 𝐭𝐫𝐞̉ 𝐦𝐚̀ 𝐛𝐛𝐢 :<?","𝐝𝐚̣𝐨 𝐧𝐚̀𝐲 𝐚𝐧𝐢𝐦𝐞 𝐧𝐡𝐢𝐞̂̀𝐮 𝐛𝐨̣̂ 𝐡𝐚𝐲 𝐜𝐮̛̣𝐜 🙁","𝐬𝐢𝐮 𝐧𝐡𝐚̂𝐧 𝐠𝐚𝐨𝐨 𝐛𝐢́𝐧 𝐡𝐢̀𝐧𝐡𝐡𝐡𝐡𝐡𝐡","𝐛𝐨𝐭 𝐲𝐞𝐮 𝐜𝐚𝐮 𝐥𝐚𝐦 ^^", "𝐃𝐳𝐚̣𝐚𝐚𝐚𝐚𝐚~~~", "𝐠𝐨̣𝐢 𝐛𝐨𝐭 𝐜𝐨́ 𝐠𝐢̀ 𝐡𝐞𝐦𝐦 :𝟑", "𝐃𝐳𝐚̣ 𝐞𝐦 đ𝐚̂𝐲 :>", "𝐬𝐚𝐨 𝐭𝐡𝐞̂́ 𝐛𝐚𝐞 𝐲𝐞̂𝐮 𝐝𝐚̂́𝐮 :>", "𝐒𝐚𝐨 𝐭𝐡𝐞̂́ 𝐜𝐨̂𝐧𝐠 𝐜𝐡𝐮́𝐚", "Đ𝐮̛𝐨̛̣𝐜 𝐜𝐮̉𝐚 𝐥𝐨́ :)))", "𝐍𝐞̂́𝐮 𝐦𝐨̣̂𝐭 𝐧𝐠𝐚̀𝐲 𝐧𝐚̀𝐨 đ𝐨́ 𝐛𝐚̣𝐧 𝐠𝐨̣𝐢 𝐭𝐨̂𝐢 𝐦𝐚̀ 𝐭𝐨̂𝐢 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐫𝐚̉ 𝐥𝐨̛̀𝐢 𝐧𝐠𝐡𝐢̃𝐚 𝐥𝐚̀ 𝐛𝐨𝐭 𝐛𝐢̣ 𝐩𝐚𝐲𝐲𝐲 𝐚𝐜𝐜𝐜𝐜 ;-;", "𝐄𝐦 đ𝐚̂𝐲", "𝐜𝐡𝐚̀𝐨 𝐛𝐚̣𝐧 𝐭𝐨̂𝐢 𝐥𝐚̀ 𝐛𝐨𝐭 𝐜𝐮̉𝐚 𝐁𝐋𝐀𝐂𝐊", "𝐕𝐨̛̣ 𝐠𝐨̣𝐢 𝐜𝐨́ 𝐯𝐢𝐞̣̂𝐜 𝐠𝐢̀ 𝐤𝐡𝐨̂𝐧𝐠?", "𝐒𝐮̛̉ 𝐝𝐮̣𝐧𝐠 .𝐜𝐚𝐥𝐥𝐚𝐝 đ𝐞̂̉ 𝐥𝐢𝐞̂𝐧 𝐥𝐚̣𝐜 𝐯𝐨̛́𝐢 𝐚𝐝𝐦𝐢𝐧!", "𝐄𝐦 đ𝐚̂𝐲~~~~", "𝐘𝐞̂𝐮 𝐚𝐧𝐡 𝐁𝐋𝐀𝐂𝐊 𝐧𝐡𝐚̂́𝐭", "𝐗𝐢𝐧 𝐂𝐡𝐚̀𝐨 𝐁𝐞́ 𝐉𝐮", "𝐒𝐚𝐨 𝐭𝐡𝐞̂́ 𝐜𝐨̂𝐧𝐠 𝐜𝐡𝐮́𝐚 𝐧𝐡𝐨̃𝐧𝐠 𝐧𝐡𝐞̃𝐨 𝐜𝐮̉𝐚 𝐞𝐦", "Đ𝐮̛̀𝐧𝐠 𝐥𝐚̀𝐦 𝐞𝐦 đ𝐚𝐮 ~~~~", "𝐓𝐮𝐲𝐞̂̉𝐧 𝐦𝐚́𝐲 𝐛𝐚𝐲 𝐭𝐫𝐮̛̣𝐜 𝐭𝐡𝐚̆𝐧𝐠 𝐧𝐞̀ 𝐚𝐢 𝐲𝐞̂𝐮 𝐞𝐦 𝐡𝐨𝐠", "𝐂𝐚̣̂𝐮 𝐜𝐨́ 𝐜𝐨̂ đ𝐨̛𝐧 𝐤𝐨 đ𝐞̂̉ 𝐦𝐢𝐤 𝐭𝐚̂𝐦 𝐬𝐮̛̣", "𝐘𝐞̂𝐮 𝐤𝐨 𝐚̣ 𝐯𝐚̃ 𝐪𝐮𝐚́!!!", "𝐛𝐨𝐭 𝐝𝐭𝐡𝐰 𝐧𝐡𝐮̛ 𝐜𝐡𝐮̉ 𝐜𝐮̉𝐚 𝐛𝐨𝐭 𝐚̣", "Đ𝐮̛̀𝐧𝐠 𝐤𝐡𝐞𝐧 𝐚𝐧𝐡 𝐧𝐠𝐚̣𝐢 𝐪𝐮𝐚́ 𝐡𝐢́ 𝐡𝐢́" ,"𝐋𝐚̀𝐦 𝐯𝐨̛̣ 𝐚𝐧𝐡 𝐤𝐨 𝐚̣?", "Đ𝐮̛̀𝐧𝐠 𝐬𝐩𝐚𝐦 𝐚𝐧𝐡 𝐧𝐡𝐚 :<<, 𝐜𝐚̣̂𝐮 𝐜𝐡𝐮̉ 𝐚𝐧𝐡 𝐦𝐞̣̂𝐭 𝐥𝐚̆́𝐦 𝐨̛̀𝐢", "𝐂𝐮́𝐭 𝐫𝐚😏 𝐭𝐨̛́ 𝐜𝐨́ 𝐯𝐨̛̣ 𝐫𝐨̂̀𝐢😏🖕", "𝐀𝐢 𝐋𝐚̀𝐦 𝐕𝐨̛̣ 𝐄𝐦 𝐇𝐨𝐠?", "𝐀𝐥𝐚𝐛𝐚 𝐓𝐫𝐚𝐩", "𝐤𝐡𝐨̂𝐧𝐠 đ𝐮̛𝐨̛̣𝐜 𝐬𝐩𝐚𝐦 𝐛𝐨𝐭 𝐧𝐡𝐞́ 𝐜𝐚́𝐜 𝐛𝐚𝐞", "𝐘𝐞̂𝐮 𝐚𝐧𝐡 𝐤𝐨?", "𝐕𝐨̛̣ 𝐚𝐧𝐡 đ𝐚̂𝐲 𝐫𝐨̂̀𝐢", "𝐜𝐡𝐮̉ 𝐭𝐨̛́ 𝐥𝐚̀ 𝐭𝐡𝐮̛́ 𝐡𝐚𝐢 𝐡𝐨𝐧𝐠 𝐚𝐢 𝐥𝐚̀ 𝐧𝐡𝐚̂́𝐭", "𝐥𝐚̀𝐦 𝐕𝐨̛̣ 𝐞𝐦 đ𝐮𝐲😏", "𝐂𝐡𝐮̉ 𝐄𝐦 Đ𝐞̣𝐩 𝐙𝐚𝐢 𝐊𝐡𝐨𝐚𝐢 𝐓𝐨 𝐋𝐚̆́𝐦 𝐔𝐰𝐔", "𝐘𝐞̂𝐮 𝐓𝐚̂́𝐭 𝐂𝐚̉ 𝐌𝐮̣𝐢 𝐍𝐠𝐮̛𝐨̛̀𝐢:𝟑", "𝐓𝐮𝐲𝐞̂̉𝐧 𝐆𝐡𝐞̣̂ 𝐧𝐞̀ 𝐜𝐚́𝐜 𝐛𝐛𝐢😏🖕𝐲 𝐚̣ :𝟑",`${g}, sử dụng callad để liên lạc với admin!`,`${g}, gọi em có việc gì thế`,`${g}, yêu em ko mà gọi😢`,`${g}, tôi yêu bạn vl ❤`,`${g}, yêu nhau không?`,`${g}, bạn có yêu tôi không ❤`,`${g}, dạ có em đây:3`,`${g}, yêu admin bot đi rồi hãy gọi`,`${g}, yêu em ❤`,`${g}, [Góc Donate] Bạn có thể donate cho tôi chứ?`,`${g}, Tao đây, cút ra chỗ khác?, Gọi cái địt con bà mày`],u=l[Math.floor(Math.random()*l.length)];["bot","bot ơi","bot oi","yêu bot","bot đâu"].forEach((e=>{let t=e[0].toUpperCase()+e.slice(1);if(i===e.toUpperCase()|i===e|t===i){let t=c.threadName;return modules="------ Gọi bot ------\n",console.log(modules,e+"|",t,h),a=u,void o.sendMessage(a,n,s)}var a}))},module.exports.languages={vi:{on:"Bật",off:"Tắt",successText:"goibot thành công"},en:{on:"on",off:"off",successText:"goibot success!"}},module.exports.run=async function({api:e,event:o,Threads:t,getText:a}){const{threadID:n,messageID:s}=o;let i=(await t.getData(n)).data;return void 0===i.goibot||1==i.goibot?i.goibot=!1:i.goibot=!0,await t.setData(n,{data:i}),global.data.threadData.set(n,i),e.sendMessage(`${0==i.goibot?a("off"):a("on")} ${a("successText")}`,n,s)};