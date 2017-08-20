let colorMap = {};

let randomColor = function () {
	let unit = () => Math.ceil(Math.random() * 100 + 155);
	return `rgb(${unit()}, ${unit()}, ${unit()})`;
};

module.exports = function (language) {
	if (!language) {
		return '#ffffff';
	}

	return colorMap[language] = colorMap[language] || randomColor();
};
