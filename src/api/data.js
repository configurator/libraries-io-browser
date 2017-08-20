var superagent = require('superagent');

function loader(path) {
	return () => superagent.get(path).then(value => value.body);
};

module.exports.loadData = loader(require('../../data/1000.json'));
module.exports.loadSample = loader(require('../../data/single.json'));
