const House = require('../models/houseModel')

class HouseController {
  //findAll house(clear)
  static findAll(req, res) {
    House.find()
    .populate('owner')
    .then(houses => {
      res.status(200).json({
        message: 'list of all House',
        houses: houses
      })
    })
    .catch( err => res.status(500).send(err))
  }

  //middleware(off)
  //create(clear)
  static addNewHouse(req, res) {
    let house = new House({
      houseName: req.body.name,
      address: req.body.address,
      typeHouse: req.body.type,
      largeHouse: req.body.large,
      price: req.body.price,
      contact: req.body.contact,
      image: req.body.image
    })

    house.save()
    .then(house => {
      res.status(200).json({
        message: 'add new house success',
        house: house
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
  }
  //middleware(off)
  static findUserHouse(req, res) {
    House.findOne({
      _id: req.params.id,
      // owner: req.decoded.id
    })
    // .populate('owner', 'username')
    .then(userHouse => {
      res.status(200).json({
        message : 'your house',
        house : userHouse
      })
    })
    .catch( err => res.status(500).send(err))
  }
  
  static findDetailHouse(req, res) {
    House.findById({
      _id: req.params.id,
    })
    // .populate('owner', 'username')
    .then(userHouse => {
      res.status(200).json({
        message : 'detail house',
        house : userHouse
      })
    })
    .catch( err => res.status(500).send(err))
  }

  //middleware(off)
  static updateHouse(req, res) {
    House.findOne({
      _id : req.params.id,
      // owner : req.decoded.id
    })
    .then(house => {
      house.houseName = req.body.name || house.houseName,
      house.address = req.body.address || house.address,
      house.typeHouse = req.body.type || house.typeHouse,
      house.largeHouse = req.body.large || house.largeHouse,
      house.price = req.body.price || house.price,
      house.image = req.body.image || house.image
      house.contact = req.body.contact || house.contact

      house.save()
      .then(updatedHouse => {
        res.status(200).json({
          message : 'house updated!',
          house   : updatedHouse
        })
      })
      .catch( err => {
        console.log(err)
        res.status(500).send(err)
      })
    })
    .catch( err => {
      console.log(err)
      res.status(500).send(err)
    })
  }

  //middleware off
  static deleteHouse(req, res) {
    House.remove({
      _id : req.params.id,
      // author: req.decoded.id
    })
    .then(() => {
      res.status(200).json({
        message : 'success deleted',
      })
    })
    .catch(err => res.status(500).send(err))
  }
}

module.exports = HouseController