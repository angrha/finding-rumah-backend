const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const houseSchema = new Schema({
  houseName: {
    type: String,
    required:[true, 'house name required']
  },
  address: {
    type: String,
    required:[true, 'address required']
  },
  price: {
    type: Number,
    required:[true, 'set your price']
  },
  typeHouse: {
    type: String
  },
  largeHouse: {
    type: String
  },
  image: {
    type: String,
    required:[true, 'image required']
  },
  contact: {
    type: String,
    required:[true, 'contact required']
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

const House = mongoose.model('House', houseSchema);

module.exports = House