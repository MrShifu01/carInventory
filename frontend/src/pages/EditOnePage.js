import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const EditOnePage = () => {
  const [updateData, setUpdateData] = useState({});
  const id = useSelector((state) => state.editId.id);

  useEffect(() => {
    const fetchCar = async () => {
      const { data } = await axios.get(`/api/cars`);
      for (let i = 0; i < data.length; i++) {
        if (id === data[i]._id) {
          setUpdateData(data[i])
          break
        }
      }
    };

    fetchCar();
  }, [id]);

  console.log(updateData)

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.patch(`/api/cars/${id}`, updateData);
    window.location.href = '/';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
    <h1>Update a Car's information</h1>
      <form type="submit" onSubmit={handleUpdate}>
        <div className="form-group">
          <label>Model</label>
          <input
            type="text"
            className="form-control my-3"
            name="model"
            onChange={handleChange}
            value={updateData.model || ''}
            placeholder={updateData.model || ''}
          />
        </div>

        <div className="form-group">
          <label>Make</label>
          <input
            type="text"
            className="form-control my-3"
            name="make"
            onChange={handleChange}
            value={updateData.make || ''}
            placeholder={updateData.make || ''}
          />
        </div>

        <div className="form-group">
          <label>Registration Number</label>
          <input
            type="text"
            className="form-control my-3"
            name="regNumber"
            onChange={handleChange}
            value={updateData.regNumber || ''}
            placeholder={updateData.regNumber || ''}
          />
        </div>

        <div className="form-group">
          <label>Owner</label>
          <input
            type="text"
            className="form-control my-3"
            name="owner"
            onChange={handleChange}
            value={updateData.owner || ''}
            placeholder={updateData.owner || ''}
          />
        </div>

        <hr />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default EditOnePage;
