var superagent = require('superagent');

function loader(path) {
	return () => superagent.get(path).then(value => {
		console.log(`Downloaded ${value.length} chars from ${path}`);
		return value.body;
	});
};

module.exports.loadData = loader(require('../../data/libraries.json'));
module.exports.loadSample = loader(require('../../data/single.json'));
