import Car from "../components/Car"
import { Row, Col, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { LinkContainer } from "react-router-bootstrap"

const HomePage = () => {
  // State variables
  const [cars, setCars] = useState([])
  const [oldCars, setOldCars] = useState(false)

  // Fetching all the initial db data and also toggle between old and all cars
  useEffect(() => {
    const fetchCars = async () => {
      const { data } = await axios.get('/api/cars')
      setCars(data)
    }

    const fetchOldCars = async () => {
      const { data } = await axios.get('/api/cars/old')
      setCars(data)
    }

    if(oldCars === false) {
      fetchCars()
    } else {
      fetchOldCars()
    }
    
  }, [oldCars])
  return (
    <>
      
      {/* Variations based on seeing all cars or seeing old cars */}
      {oldCars === false && 
      <><h1>All Cars</h1><Button
      onClick={() => setOldCars(true)}
      >View Old Cars</Button></>}
      {oldCars === true && 
      <><h1>Cars Older than 5 Years</h1><Button
      onClick={() => setOldCars(false)}
      >View All Cars</Button></>}
      {/* Ability to update multiple records at once */}
      <LinkContainer to="/editmany"><Button className="mx-3">Update Multiple Cars</Button></LinkContainer>
        <Row>
          {/* mapping over all cars and assigning them a card each with the Car component */}
          {cars.map((car) => (
            <Col key={car._id} sm={12} md={6} lg={4} xl={3}>
              <Car car={car} id={car._id}/>
            </Col>
          ))}
        </Row>
    </>
  )

}

export default HomePage