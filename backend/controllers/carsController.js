const Car = require('../models/carModel.js')
const asyncHandler = require('../middleware/asyncHandler.js')

// function  Fetch all cars
// route     GET /api/cars
const getCars = asyncHandler(async (req, res) => {
    const cars = await Car.find()
    res.json(cars)
})

// function  Fetch cars older than 5 years
// route     GET /api/cars/old
const getOldCars = asyncHandler(async (req, res) => {
    const cars = await Car.find({model: {$lt: 2019}})
    res.json(cars)
})

// function  Add new car
// route     POST /api/cars
const addCar = asyncHandler(async (carData, req, res) => {
    const newCar = await Car.create(carData)
    res.status(201).json(newCar)
})

// function  Update one car
// route     PATCH /api/cars/:id
const updateCar = asyncHandler(async (updatedCarData, req, res) => {
    const updatedCar = await Car.findByIdAndUpdate(updatedCarData._id, {$set: updatedCarData}, {new: true})
    res.status(201).json(updatedCar)
  });

// function  Delete one car
// route     DELETE /api/cars/:id
  const deleteCar = asyncHandler(async (id, req, res) => {
    const deletedCar = await Car.deleteOne({_id:id})
    res.status(201).json(deletedCar)
  })

// function  Update many cars
// route     PATCH /api/cars
const updateMany = asyncHandler(async (requestBody, req, res) => {
  console.log(requestBody)
  const updatedCars = await Car.updateMany(requestBody.filter, requestBody.data)
  console.log(updatedCars)
  res.status(201).json(updatedCars)
});


module.exports =  { getCars, getOldCars, addCar, updateCar, deleteCar, updateMany }