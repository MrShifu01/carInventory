const express = require('express')
const { getCars, getOldCars, addCar, updateCar, deleteCar, updateMany } = require('./controllers/carsController.js')
const router = express.Router()
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
router.use(bodyParser.json())

router.route('/').get(getCars)
router.route('/old').get(getOldCars)
router.route('/').post((req, res) => {
    const {model, make, regNumber, owner} = req.body
    const carData = {
        model: model,
        make: make,
        regNumber: regNumber,
        owner: owner,
        image: '/images/cars.jpg'
    }
    addCar(carData, req, res)
})
router.route('/:id').patch((req, res) => {
    const { id } = req.params;
    const { model, make, regNumber, owner } = req.body;
  
    const updatedCarData = {
      _id: id,
      model: model,
      make: make,
      regNumber: regNumber,
      owner: owner,
      image: '/images/cars.jpg'
    };
  
    updateCar(updatedCarData, req, res);
  });

router.route('/:id').delete((req, res) => {
  const { id } = req.params;
  deleteCar(id, req, res)
})

router.route('/').patch((req, res) => {
  const requestBody  = req.body
  updateMany(requestBody, req, res)
})

module.exports = router