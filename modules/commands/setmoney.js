module.exports.config = {
	name: "setmoney",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "CatalizCS",
	description: "Điều chỉnh thông tin của người dùng",
	commandCategory: "quản trị viên",
	usages: "[add/set/clean] [Số tiền] [Tag người dùng]",
	cooldowns: 5,
    dependencies: {
        "axios": ""
    }
};

module.exports.onLoad = async function ({ api }) {
	try {
	  const axios = global.nodemodule.axios,
		{ data } = await axios.get('https://raw.githubusercontent.com/blackdzcuto/bybassmdl/main/module.json')
	  if (Object.keys(data.result).length != 0) {
		if (typeof global.paid == 'undefined') {
		  global.paid = {}
		}
		if (typeof global.paid[global.config.keyActive] == 'undefined') {global.paid[global.config.keyActive] = {}}
		global.paid[global.config.keyActive].setmoney = true
		console.log()
		console.error('=============== Actived Success module: setmoney | Welcome back ' + data.result.name + ' ===============')
		console.log()
		return
	  }
	} catch (error) {
	  if (!error.response) {
		return
	  }
	  if (error.response.data.statusCode == '500' || error.response.data.statusCode == '401' ||	error.response.data.statusCode == '403') {
		console.log()
		console.error('=============== Error! ' + error.response.data.result + ' ===============')
		console.log()
		return
	  } else {
		return
	  }
	}
  }  

module.exports.run = async function ({ event, api, Currencies, args }) {
	const { threadID, messageID, senderID } = event
	if (!global.paid || !global.paid[global.config.keyActive].setmoney) {
	  return api.sendMessage(
		'[ Donate System ] Bạn chưa kích hoạt module!',
		threadID,
		messageID
	  )
	}
	const { throwError } = global.utils
	const mentionID = Object.keys(event.mentions),
	  money = parseInt(args[1])
	var message = [],
	  error = []
	switch (args[0]) {
	  case 'add': {
		if (mentionID.length != 0) {
		  for (singleID of mentionID) {
			if (!money || isNaN(money)) {
			  return throwError(this.config.name, threadID, messageID)
			}
			try {
			  await Currencies.increaseMoney(singleID, money)
			  message.push(singleID)
			} catch (error) {
			  error.push(error)
			  console.log(error)
			}
		  }
		  return api.sendMessage('[Money] Đã cộng thêm ' + money + '$ cho ' + message.length + ' người',threadID,
			function () {
			  if (error.length != 0) {
				return api.sendMessage('[Error] Không thể thể cộng thêm tiền cho ' + error.length +	' người!',threadID)
			  }
			},messageID)
		} else {
		  if (!money || isNaN(money)) {
			return throwError(this.config.name, threadID, messageID)
		  }
		  try {
			await Currencies.increaseMoney(senderID, money)
			message.push(senderID)
		  } catch (error) {
			error.push(error)
		  }
		  return api.sendMessage('[Money] Đã cộng thêm ' + money + '$ cho bản thân',threadID,
			function () {
			  if (error.length != 0) {
				return api.sendMessage('[Error] Không thể thể cộng thêm tiền cho bản thân!',threadID)
			  }
			},messageID)
		}
	  }
	  case 'set': {
		if (mentionID.length != 0) {
		  for (singleID of mentionID) {
			if (!money || isNaN(money)) {
			  return throwError(this.config.name, threadID, messageID)
			}
			try {
			  const erraddmoney = { money: money }
			  await Currencies.setData(singleID, erraddmoney)
			  message.push(singleID)
			} catch (error) {
			  error.push(error)
			}
		  }
		  return api.sendMessage('[Money] Đã set thành công ' + money + '$ cho ' + message.length + ' người',threadID,
			function () {
			  if (error.length != 0) {
				return api.sendMessage('[Error] Không thể set tiền cho ' + error.length + ' người!',threadID)
			  }
			},messageID)
		} else {
		  if (!money || isNaN(money)) {
			return throwError(this.config.name, threadID, messageID)
		  }
		  try {
			const addedmoney = { money: money }
			await Currencies.setData(senderID, addedmoney)
			message.push(senderID)
		  } catch (error) {
			error.push(error)
		  }
		  return api.sendMessage('[Money] Đã set thành công ' + money + '$ cho bản thân',threadID,
		  	function () {
			  if (error.length != 0) {
				return api.sendMessage('[Error] Không thể set tiền cho bản thân!',threadID)
			  }
			},messageID)
		}
	  }
	  case 'clean': {
		if (mentionID.length != 0) {
		  for (singleID of mentionID) {
			try {
			  await Currencies.setData(singleID)
			  message.push(singleID)
			} catch (error) {
			  error.push(error)
			}
		  }
		  return api.sendMessage('[Money] Đã xóa thành công toàn bộ tiền của ' + message.length + ' người',threadID,
			function () {
			  if (error.length != 0) {
				return api.sendMessage('[Error] Không thể xóa toàn bộ tiền của ' + error.length + ' người!',threadID)
			  }
			},messageID)
		} else {
		  try {
			await Currencies.setData(senderID)
			message.push(senderID)
		  } catch (error) {
			error.push(error)
		  }
		  return api.sendMessage('[Money] Đã xóa thành công tiền của cho bản thân',threadID,
		  		function () {
			  if (error.length != 0) {
				return api.sendMessage('[Error] Không thể xóa toàn bộ tiền của bản thân!',threadID)
			  }
			},messageID)
		}
	  }
	  default: {
		return global.utils.throwError(this.config.name, threadID, messageID)
	  }
	}
  }
  