const chalk = require('chalk');
const chalk1 = require('chalkercli');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
				console.log(chalk.bold.hex("#66FFFF").bold('๐ Lแปiiii แปi ๐ ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#FFBBFF").bold('๐ Lแปiiii แปi ๐') + data);
			break;
		default:
const rainbow1 = chalk1.rainbow(`${option} โฃ ${data} `).stop();
rainbow1.render();
				//console.log(chalk.bold.hex("#99FF33").bold(`${option} Ryoโค๏ธ `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#EEEEEE").bold('[ ๐๐๐๐๐ ]') + data);
			break;
		case "error":
		console.log(chalk.bold.hex("#FFFFFF").bold('[ ๐๐๐๐๐ ]') + data);
			break;
		default:
	const rainbow2 = chalk1.rainbow(`${option} โฃ ${data} `).stop();
rainbow2.render();
      //console.log(chalk.bold.hex("#FF0000","#FF6699").bold(`ยป Ryo ยซ  `) + data);
			break;
	}
}

module.exports.banner = (data) => {
	//const rdcl = ['blue', 'yellow', 'green', 'red', 'magenta', 'yellowBright', 'blueBright', 'magentaBright']
	//const color = chalk[rdcl[Math.floor(Math.random() * rdcl.length)]]
	//console.log(color(data));
  const rainbow3 = chalk1.rainbow(` ${data} `).stop();
rainbow3.render();}