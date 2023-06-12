import React from 'react'
import { Button, Form, Alert } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import axios from 'axios'

const EditMultiplePage = () => {
  // State variables
  const [byModel, setByModel] = useState(false)
  const [byMake, setByMake] = useState(false)
  const [byOwner, setByOwner] = useState(false)
  const [modelSet, setModelSet] = useState({})
  const [makeSet, setMakeSet] = useState({})
  const [ownerSet, setOwnerSet] = useState({})
  const [data, setData] = useState({})
  const [allCars, setAllCars] = useState([])
  const [alert, setAlert] = useState(false)

  // Fetch all car data on page load
  useEffect(() => {
    const fetchCars = async () => {
      const { data } = await axios.get('/api/cars')
      setAllCars(data)
    }
      fetchCars()
  }, [])


// Setting state depending on which attribute is chosen as a filter
  useEffect(() => {
    if (byModel) {
      const modelSet = new Set(allCars.map((model) => model.model))
      setModelSet(modelSet)
    } else if (byMake) {
      const makeSet = new Set(allCars.map((make) => make.make))
      setMakeSet(makeSet)
    } else if (byOwner) {
      const ownerSet = new Set(allCars.map((owner) => owner.owner))
      setOwnerSet(ownerSet)
    }

  }, [byMake, byModel, byOwner, allCars])
  

  const handleUpdateMany = async (e) => {
    e.preventDefault();
  
    // Input validation
    if (
      (byModel && !data.model) ||
      (byMake && !data.make) ||
      (byOwner && !data.owner)
    ) {
      setAlert(true);
      return;
    }
  
    const isValid = /^[0-9]+$/.test(data.model) &&
      /^[a-zA-Z0-9 ]+$/.test(data.make) &&
      /^[a-zA-Z0-9 ]+$/.test(data.owner);
  
    if (!isValid) {
      setAlert(true);
      return;
    }
  
    let filter = {};
  
    if (byModel) {
      filter = { model: data.model };
    } else if (byMake) {
      filter = { make: data.make };
    } else if (byOwner) {
      filter = { owner: data.owner };
    }
  
    const requestBody = {
      filter,
      data,
    };
  
    // Sending the filter attribute and the new data through to the backend
    try {
      await axios.patch('/api/cars/', requestBody);
      // Handle success
    } catch (error) {
      // Handle error
    }
  
    window.location.href = '/';
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
    {/* Alert for wrong input */}
      {alert && (
        <Alert variant="danger" onClose={() => setAlert(false)} dismissible>
          Please fill in all fields with only alphanumeric characters. Note... Model must only be numeric 
        </Alert>
      )}

      <h1>Update a bunch of cars</h1>
      <h3>Filter cars by...</h3>
      
      <Button 
      className='mx-3'
      onClick={() => {
        setByModel(prev => !prev)
        setByMake(false)
        setByOwner(false)
      }}
      >
        Model
      </Button>
      
      <Button 
      className='mx-3'
      onClick={() => {
        setByMake(prev => !prev)
        setByModel(false)
        setByOwner(false)
      }}
      >
        Make
      </Button>
      
      <Button 
      className='mx-3'
      onClick={() => {
        setByOwner(prev => !prev)
        setByMake(false)
        setByModel(false)
      }}
      >
        Owner
      </Button> 

      <hr/>

      {byModel && 
            <form 
            className='update-many-form'
            typeof='submit'
            onSubmit={handleUpdateMany}
            >
              <div className='update-many-input'>
                Specify the model
                <Form.Select
                  className='mx-3'
                  name='model'
                  onChange={handleChange}
                  value={data.model || ""}
                >
                  <option value="">Select a model</option>
                  {Array.from(modelSet).map((model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
                </Form.Select>
              </div>

              <div className='update-many-input'>
                Update Make:
                <input
                className='mx-3'
                type='text'
                name='make'
                onChange={handleChange}
                value={data.make || ""}
                />
              </div>

              <div className='update-many-input'>
                Update Owner:
                <input
                className='mx-3'
                type='text'
                name='owner'
                onChange={handleChange}
                value={data.owner || ""}
                />
              </div>


            <div><Button type="submit" className="btn btn-primary">Update</Button></div>
            </form>
      }

      {byMake && 
        <form 
            className='update-many-form'
            typeof='submit'
            onSubmit={handleUpdateMany}
            >
              <div className='update-many-input'>
                Specify the make
                <Form.Select
                  className='mx-3'
                  name='make'
                  onChange={handleChange}
                  value={data.make || ""}
                >
                  <option value="">Select a make</option>
                  {Array.from(makeSet).map((make) => (
                    <option key={make} value={make}>
                      {make}
                    </option>
                  ))}
                </Form.Select>
              </div>

              <div className='update-many-input'>
                Update Model:
                <input
                className='mx-3'
                type='text'
                name='model'
                onChange={handleChange}
                value={data.model || ""}
                />
              </div>

              <div className='update-many-input'>
                Update Owner:
                <input
                className='mx-3'
                type='text'
                name='owner'
                onChange={handleChange}
                value={data.owner || ""}
                />
              </div>


            <div><Button type="submit" className="btn btn-primary">Update</Button></div>
            </form>
      }

      {byOwner && 
        <form 
            className='update-many-form'
            typeof='submit'
            onSubmit={handleUpdateMany}
            >
              <div className='update-many-input'>
                Specify the Owner
                <Form.Select
                  className='mx-3'
                  name='owner'
                  onChange={handleChange}
                  value={data.owner || ""}
                >
                  <option value="">Select a owner</option>
                  {Array.from(ownerSet).map((owner) => (
                    <option key={owner} value={owner}>
                      {owner}
                    </option>
                  ))}
                </Form.Select>
              </div>

              <div className='update-many-input'>
                Update Model:
                <input
                className='mx-3'
                type='text'
                name='model'
                onChange={handleChange}
                value={data.model || ""}
                />
              </div>

              <div className='update-many-input'>
                Update Make:
                <input
                className='mx-3'
                type='text'
                name='make'
                onChange={handleChange}
                value={data.make || ""}
                />
              </div>


            <div><Button type="submit" className="btn btn-primary">Update</Button></div>
            </form>
      }

    </>

  )
}

export default EditMultiplePage