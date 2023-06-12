import React from "react";
import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch } from "react-redux";
import { editId } from "../slices/editIdSlice";
import axios from "axios";

const Car = ({ car }) => {
  const dispatch = useDispatch();

  // Using redux to save the current car button ID
  const handleUpdate = () => {
    dispatch(editId(car._id));
  };

  // Handling the delete button of a car
  const handleDelete = async () => {
    await axios.delete(`/api/cars/${car._id}`)
    window.location.href = '/';
  };

  // Building out the bootstrap card component
  return (
    <Card key={car._id} className="my-3 p-3 rounded">
      <Card.Img src={car.image} variant="top" />
      <Card.Body>
        <Card.Title as="div" className="cartitle">
          <strong>{car.make}</strong>
        </Card.Title>

        <Card.Text as="h3">{car.model}</Card.Text>
        <Card.Text as="h4">{car.regNumber}</Card.Text>
        <Card.Text as="h5">{car.owner}</Card.Text>
        <div className="car-buttons">
          <Button onClick={handleDelete}>Delete</Button>
          <LinkContainer to="/editone">
            <Button onClick={handleUpdate}>Update</Button>
          </LinkContainer>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Car;
