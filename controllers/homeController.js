const Announce = require('../models/Announce')
const FormatDate = require('../system/utils/FormatDate')

const getIndexPage = async (req, res) => {
	const announces = await Announce.find().lean()
	announces.forEach((announce) => {
		announce.date = FormatDate(announce.date)
		announce.endDate = FormatDate(announce.endDate)
	})

	res.render('index', { announces: announces })
}

module.exports = {
	getIndexPage
}
