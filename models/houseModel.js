const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const houseSchema = new Schema({
  house_name: {
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
  type_house: {
    type: String,
    required:[true, 'specification house required']
  },
  large_house: {
    type: String,
    required:[true, 'specification house required']
  }
})

const House = mongoose.model('House', houseSchema);

module.exports = House