const mongoose = require('mongoose');

const subscriberSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
  email: String,
  date: { type: Date, default: Date.now },
  is_active : { type: Boolean, default: false },
});

module.exports = mongoose.model('Subscriber', subscriberSchema);