module.exports.config = {
	name: "fbcover3",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "BLACK", 
	description: "blah blah blha",
	commandCategory: "tạo ảnh", 
	usages: "",
	cooldowns: 5
};

module.exports.handleReply = async ({ api, event, handleReply }) => {
	const { threadID, messageID, senderID, body } = event;
	if (handleReply.content.id != senderID) return;
	const input = body.trim();
	const sendC = (msg, step, content) => api.sendMessage(msg, threadID, (err, info) => {
		global.client.handleReply.splice(global.client.handleReply.indexOf(handleReply), 1);
		api.unsendMessage(handleReply.messageID);
		global.client.handleReply.push({
			step: step,
			name: this.config.name,
			messageID: info.messageID,
			content: content
		})
	}, messageID);
	const send = async (msg) => api.sendMessage(msg, threadID, messageID);

	let content = handleReply.content;
	switch (handleReply.step) {
		case 1:
			content.name = input;
			sendC("Reply tin nhắn này ngày sinh của bạn", 2, content);
			break;
		case 2:
			content.birthday = input;
			sendC("Reply tin nhắn này rela của bạn", 3, content);
			break;
		case 3:
			content.love = input;
			sendC("Reply tin nhắn này nơi  của bạn", 4, content);
			break;
		case 4:
			content.location = input;
			sendC("Reply tin nhắn này thành phố của bạn", 5, content);
			break;
		case 5:
			content.home = input;
			sendC("Reply tin nhắn này follow bạn muốn chọn", 6, content);
			break;
		case 6:
	                content.sub = input;
			sendC("Reply tin nhắn này giới tính bạn muốn chọn", 7, content);
			break;
		case 7:
			content.gender = input;
			const axios = require("axios");
			const fs = require("fs");
			send("Thông tin đã được ghi nhận, vui lòng đợi trong giây lát!");
			global.client.handleReply.splice(global.client.handleReply.indexOf(handleReply), 1);
			api.unsendMessage(handleReply.messageID);
			let c = content;
			let res = await axios.get(encodeURI(`https://api.phamvandien.xyz/fbcover/v3?name=${c.name}&birthday=${c.birthday}&love=${c.love}&location=${c.location}&hometown=${c.home}&follow=${c.sub}&gender=${c.gender}&uid=${event.senderID}`), { responseType: "arraybuffer" })
				.catch(e => { return send("Lỗi không xác định, liên hệ admin để fix") });
			if (res.status != 200) return send("Đã có lỗi xảy ra, vui lòng thử lại sau!");
			let path = __dirname + `/cache/fbcoverv1__${senderID}.png`;
			fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
			send({
				body: 'Ảnh của bạn đây',
				attachment: fs.createReadStream(path)
			}).then(fs.unlinkSync(path));
			break;
		default:
			break;
	}
}

module.exports.run = ({ api, event, args }) => {
	const { threadID, messageID, senderID } = event;
	return api.sendMessage("Reply tin nhắn này tên của bạn", event.threadID, (err,info) => {
		global.client.handleReply.push({
			step: 1,
			name: this.config.name,
			messageID: info.messageID,
			content: {
				id: senderID,
				name: "",
				subname: "",
				number: "",
				email: "",
				address: "",
				color: ""
			}
		})
	}, event.messageID);
}