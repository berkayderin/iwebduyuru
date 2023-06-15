const mongoose = require('mongoose')

const announceSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		required: true
	},
	endDate: {
		type: Date,
		required: true
	}
})

module.exports = mongoose.model('Announce', announceSchema)
