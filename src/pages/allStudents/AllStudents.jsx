import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

const AllStudents = () => {
    const [documents, setDocuments] = useState([]);
    const URL = "http://localhost:8000";
    const [modal, setModal] = useState({});
    const [deleteUser, setDeleteUser] = useState({});

    const navigate = useNavigate();
    const handleChange = (e) => {
        setModal({
            ...modal, [e.target.name]: e.target.value
        })
    }

    const handleEdit = (user) => {
        console.log(user);
        setModal(user)
    }

    const updateData = () => {
        let updateData = {
            id: modal._id,
            fulName: modal.fullName,
            age: modal.age,
            rollNum: modal.rollNum,
            email: modal.email
        }
        axios.put(`${URL}/updateUser`, updateData).then((res) => {
            // console.log("Message from server", res.data);
            navigate('/allStudents')
            toast.success(res.data, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }).catch((error) => {
            console.log(error)
        })
    }





    useEffect(() => {
        axios
            .get(`${URL}/getUsers`)
            .then((res) => {
                // console.log(res.data)
                setDocuments(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [documents]);



    //--------Handle Delete---------//
    const handleDelete = student => {
        console.log(student)

        const { _id } = student

        axios.delete(`${URL}/deleteUser/${_id}`)
            .then((res) => {
                console.log("User deleted")

                toast.success('🦄  User has been deleted.', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                console.log("message from server", res.data)
                // setDocuments(res.data)
            }).catch((err) => {
                // console.error(err)
                toast.error('🦄'(err), {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }).finally(() => {
                // console.log("finally worked")
            })
    }


    //---------Handle Update----------//

    // const handleUpdate = student => {
    //     console.log(student)

    //     let newData = { id: student._id, fullName: "Muhammad Umar", age: 12, rollNum: 5555 }

    //     axios.put(`${URL}/updateUser`, newData)
    //         .then((res) => {
    //             console.log("message from server", res.data)
    //             toast.success('🦄 User has been succesfully updated ', {
    //                 position: "top-center",
    //                 autoClose: 5000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //             });
    //         })
    //         .catch((err) => {
    //             console.error(err)
    //         })

    // }


    return (
        <div className="container">
            <div className="row">
                <div className="col mt-4 fw-bold">
                    <div className="card">
                        <h3 className='text-center mt-3'>All Student</h3>
                        <div className="table-responsive mt-3">
                            <table className="table text-light">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Full Name</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">RollNo</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {documents.map((student, index) => {
                                        return (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{student.fullName}</td>
                                                <td>{student.age}</td>
                                                <td>{student.rollNum}</td>
                                                <td>{student.email}</td>
                                                <td className=''>
                                                    <button className='btn'><i className="bi bi-trash3 pe-auto text-danger"  data-bs-toggle="modal" data-bs-target="#delete" onClick={() => { setDeleteUser(student) }}></i></button>
                                                    <button className='btn'><i className="bi bi-pencil-square m-3 text-success" data-bs-toggle="modal" data-bs-target="#edit" onClick={() => { handleEdit(student) }}></i></button>
                                                    {/* <button className='btn'><i className="bi bi-eye text-info " onClick={() => { handleUpdate(student) }}></i></button> */}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            { /* {Update Modal} */}
            <div className="modal fade " id="edit" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title" id="staticBackdropLabel">User Details</h2>
                            <button type="button" className="btn-close btn-light" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <label htmlFor="basic-url" className="form-label  mt-4 fw-bold">
                                Full Name
                            </label>
                            <div className="input-group flex-nowrap">
                                <input
                                    type="text"
                                    name='fullName'
                                    value={modal.fullName}
                                    className="form-control inputGroup-sizing-lg inputBorder"
                                    placeholder="Fahad Shoukat"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <label htmlFor="basic-url" className="form-label mt-4 fw-bold">
                                Age
                            </label>
                            <div className="input-group flex-nowrap">
                                <input
                                    type="number"
                                    name='age'
                                    value={modal.age}
                                    className="form-control inputGroup-sizing-lg inputBorder"
                                    placeholder=""
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <label htmlFor="basic-url" className="form-label mt-4 fw-bold">
                                Roll No:
                            </label>
                            <div className="input-group flex-nowrap">
                                <input
                                    type="number"
                                    name='rollNum'
                                    value={modal.rollNum}
                                    className="form-control inputGroup-sizing-lg inputBorder"
                                    placeholder="23"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <label htmlFor="basic-url" className="form-label mt-4 fw-bold">
                                Email
                            </label>
                            <div className="input-group flex-nowrap">
                                <input
                                    type="text"
                                    name='email'
                                    value={modal.email}
                                    className="form-control inputGroup-sizing-lg inputBorder"
                                    placeholder="fahad@1546"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={updateData}>Update</button>
                        </div>
                    </div>
                </div>


            </div>

            {/* Delete Modal */}
            <div className="modal" id="delete" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Delete Student</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to delete this Student?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => handleDelete(deleteUser)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AllStudents