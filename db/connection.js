const mongoose = require('mongoose');
const {TUNR_URI} = process.env
const config = {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	useFindAndModify: false,
};
mongoose.connect(TUNR_URI, config);

const db = mongoose.connection;

db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', TUNR_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

module.exports = mongoose;