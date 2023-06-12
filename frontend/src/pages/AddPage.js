import { useState } from 'react'
import axios from 'axios'
import { Alert } from 'react-bootstrap'

const AddPage = () => {
  // State variables
  const [alert, setAlert] = useState(false)
  const [carData, setCarData] = useState({
    model: 0,
    make: "",
    regNumber: "",
    owner: ""
  })

  const handleAdd = async (e, carData) => {
    e.preventDefault();
  
    // Input validation
    const isValid = /^[a-zA-Z0-9 ]+$/.test(carData.make) &&
      /^[a-zA-Z0-9 ]+$/.test(carData.owner) && 
      /^[a-zA-Z0-9 ]+$/.test(carData.regNumber) && 
      /^[0-9]+$/.test(carData.model);
  
    if (
      carData.model === 0 ||
      carData.make === "" ||
      carData.regNumber === "" ||
      carData.owner === "" ||
      !isValid
    ) {
      setAlert(true);
    } else {
      // Capitalize the make and the owner
      const capitalizedMake = carData.make.charAt(0).toUpperCase() + carData.make.slice(1);
      const capitalizedOwner = carData.owner.charAt(0).toUpperCase() + carData.owner.slice(1);
      
      const updatedCarData = {
        ...carData,
        make: capitalizedMake,
        owner: capitalizedOwner
      };
  
      await axios.post('/api/cars', updatedCarData);
      window.location.href = '/';
    }
  };
  

  return (
    <>
    <h1>Add a New Car</h1>
    {/* Alert for wrong input */}
    {alert && (
      <Alert variant="danger" onClose={() => setAlert(false)} dismissible>
        Please fill in all fields with only alphanumeric characters. Note... Model must only be numeric
      </Alert>
    )}
{/* Input form for a new car */}
    <form
    type="submit"
    onSubmit={(e) => handleAdd(e, carData)}
    >
      <div className="form-group">
        <label>Model</label>
        <input 
        type="text" 
        className="form-control my-3"
        onChange={(e) => setCarData({...carData, model: Number(e.target.value)})}
        value={carData.model}
        placeholder="Car Year"/>
      </div>

      <div className="form-group">
        <label>Make</label>
        <input 
        type="text" 
        className="form-control my-3" 
        onChange={(e) => setCarData({...carData, make: e.target.value})}
        value={carData.make}
        placeholder="Car Brand"/>
      </div>

      <div className="form-group">
        <label>Registration Number</label>
        <input 
        type="text" 
        className="form-control my-3" 
        onChange={(e) => setCarData({...carData, regNumber: e.target.value})}
        value={carData.regNumber}
        placeholder="Car Reg. Number"/>
      </div>

      <div className="form-group">
        <label>Owner</label>
        <input 
        type="text" 
        className="form-control my-3" 
        onChange={(e) => setCarData({...carData, owner: e.target.value})}
        value={carData.owner}
        placeholder="Car Owner"/>
      </div>

      <hr/>

        <button
        type="submit"
        className="btn btn-primary"
        >Submit</button>

    </form>
    </>
  )
}

export default AddPage