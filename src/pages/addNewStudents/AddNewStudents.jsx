import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import '../addNewStudents/AddNewStudent.scss';
const AddNewStudents = () => {
  const [documents, setDocuments] = useState([]);
  const URL = "http://localhost:8000";


  const [state, setState] = useState({
    fullName: "",
    age: "",
    rollNum: "",
    email: ""
  });


  //-----Handle Submit------// 
  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = { ...state };
    console.log(formData);


    axios.post(`${URL}/createUser`, formData)
      .then((res) => {

        toast.success('🦄 A new user has been successfully added.', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

      })
      .catch(err => {
        console.error(err)
        toast.error(`${(err)}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
  }

  const handleChange = (e) => {
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));
  }




  return (
    <div className="container">
      <div className="row">
        <div className="col mb-4 mt-5">
          <div className='addNewStudents '>
            <div className="card" style={{ width: "25rem", borderRadius: "15px" }}>
              <div className="card-title  text-center mt-5">
                <h3 className='fw-bold'>Add New Student</h3>
              </div>
              <div className="card-body fs-5" >
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control" name="fullName" placeholder="Full Name" onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input type="number" className="form-control" name="age" placeholder="Age" onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Roll Number</label>
                    <input type="number" className="form-control" name="rollNum" placeholder="Roll Number" onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input type="email" className="form-control" name="email" placeholder="Email" onChange={handleChange} />
                  </div>
                  <div className='text-center mb-3'>
                    <button type="submit" className="btn btn-outline-success fs-5 fw-bold  w-50">Add</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}
export default AddNewStudents