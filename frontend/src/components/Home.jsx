import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const Home = () => {
  const [input, setInput] = useState([]);
  const [employee, setEmployee] = useState({});
  const [readOnlyStatus, setReadOnlyStatus] = useState(true);
  const userToken = sessionStorage.getItem('userToken');
  const userId = sessionStorage.getItem('userId');

  const fetchDataEmployee = (id) => {
    axios
      .get(`http://localhost:5000/viewEmployee/${id}`)
      .then((response) => {
        if (response.data.message === 'Employee Found') {
          const employeeData = response.data.data;
          setEmployee((prevEmployee) => ({
            ...prevEmployee,
            id: employeeData._id,
            name: employeeData.name,
            designation: employeeData.designation,
            department: employeeData.department,
            salary: employeeData.salary,
            email: employeeData.email,
            phone: employeeData.phone,
            ecName: employeeData.ecName,
            ecRelationship: employeeData.ecRelationship,
            ecTelephone: employeeData.ecTelephone,
            ecMobile: employeeData.ecMobile,
          }));
        }
      })
      .catch((error) => {
        console.error(error.response.data);
      });
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/viewAllEmployee/${userToken}`);
      setInput(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    if (userToken) {
      fetchData();
    } else {
      alert('Unauthorized user');
    }
  }, [userToken]);

  const deleteClicked = (id) => {
    if (userId === '64b77fde422fab7f886af6b8') {
      axios
        .delete(`http://localhost:5000/deleteEmployee/${id}`)
        .then((response) => {
          if (response.data.message === 'Employee deleted successfully') {
            alert(response.data.message);
            fetchData();
          }
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    } else {
      alert('Updation and Deletion of all details are of admin privileges only');
      window.location.reload();
    }
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value
    }));
  };

  const updateClicked = (id) => {
    if (userId === '64b77fde422fab7f886af6b8') {
      setReadOnlyStatus(false);
      fetchDataEmployee(id);
    } else {
      alert('Updation and Deletion of all details are of admin privileges only');
      window.location.reload();
    }
  };

  const submitClicked = () => {
    axios
      .put(`http://localhost:5000/updateEmployee/${employee.id}`, employee)
      .then((response) => {
        if (response.data.message === 'Details updated successfully') {
          alert(response.data.message);
          window.location.reload();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Navbar />

      <div className="container mt-5">
        <div className="row row-gap-4">
          {input.map((val, i) => (
            <div
              className="col col-12 col-sm-4 col-lg-4 col-xl-4 col-xxl-4 col-md-4"
              key={i}
            >
              <div className="card text-center">
                <div className="card-header">Employee Id: {val._id}</div>
                <div className="card-body">
                  <h5 className="card-title">Name: {val.name}</h5>
                  <p className="card-text">Designation: {val.designation}</p>
                  <p className="card-text">Department: {val.department}</p>
                </div>
                <div className="card-footer text-body-secondary">
                  <button
                    type="button"
                    className="btn btn-warning btn-sm ms-2"
                    data-bs-toggle="modal"
                    data-bs-target="#viewModal"
                    onClick={() => updateClicked(val._id)}
                  >
                    Update
                  </button>

                  <button
                    type="button"
                    className="btn btn-danger btn-sm ms-2"
                    onClick={() => deleteClicked(val._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="modal fade"
        id="viewModal"
        tabIndex="-1"
        aria-labelledby="exampleViewModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleViewModal">
                View Details
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 ms-auto">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Name:
                    </label>
                    <input
                      type="text"
                      name="name"
                      onChange={inputHandler}
                      className="form-control"
                      defaultValue={employee.name}
                      id="recipient-name"
                      autoComplete="off"
                      readOnly={readOnlyStatus}
                    />
                  </div>
                  <div className="col-md-6 ms-auto">
                    <label htmlFor="recipient-designation" className="col-form-label">
                      Designation:
                    </label>
                    <input
                      type="text"
                      name="designation"
                      onChange={inputHandler}
                      defaultValue={employee.designation}
                      className="form-control"
                      id="recipient-designation"
                      autoComplete="off"
                      readOnly={readOnlyStatus}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 ms-auto">
                    <label htmlFor="recipient-department" className="col-form-label">
                      Department:
                    </label>
                    <input
                      name="department"
                      onChange={inputHandler}
                      defaultValue={employee.department}
                      type="text"
                      className="form-control"
                      id="recipient-department"
                      autoComplete="off"
                      readOnly={readOnlyStatus}
                    />
                  </div>
                  <div className="col-md-6 ms-auto">
                    <label htmlFor="recipient-salary" className="col-form-label">
                      Salary:
                    </label>
                    <input
                      name="salary"
                      onChange={inputHandler}
                      defaultValue={employee.salary}
                      type="text"
                      className="form-control"
                      id="recipient-salary"
                      autoComplete="off"
                      readOnly={readOnlyStatus}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 ms-auto">
                    <label htmlFor="recipient-email" className="col-form-label">
                      Email:
                    </label>
                    <input
                      name="email"
                      onChange={inputHandler}
                      defaultValue={employee.email}
                      type="email"
                      className="form-control"
                      id="recipient-email"
                      autoComplete="off"
                      readOnly={readOnlyStatus}
                    />
                  </div>
                  <div className="col-md-6 ms-auto">
                    <label htmlFor="recipient-mobile" className="col-form-label">
                      Phone no:
                    </label>
                    <input
                      name="phone"
                      defaultValue={employee.phone}
                      onChange={inputHandler}
                      type="text"
                      className="form-control"
                      id="recipient-mobile"
                      autoComplete="off"
                      readOnly={readOnlyStatus}
                    />
                  </div>
                </div>

                <div className="row">
                  <label htmlFor="recipient-eContact" className="col-form-label">
                    Emergency Contact
                  </label>
                  <div className="col-md-6 ms-auto ">
                    <input
                      type="text"
                      name="ecName"
                      onChange={inputHandler}
                      className="form-control"
                      defaultValue={employee.ecName}
                      id="recipient-eName"
                      autoComplete="off"
                      placeholder='Name'
                      readOnly={readOnlyStatus}
                    />
                  </div>
                  
                  <div className="col-md-6 ms-auto">
                    <input
                      name="ecRelationship"
                      onChange={inputHandler}
                      type="text"
                      className="form-control"
                      defaultValue={employee.ecRelationship}
                      id="recipient-eRelation"
                      autoComplete="off"
                      placeholder='Relationship'
                      readOnly={readOnlyStatus}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6 ms-auto">
                    <input
                      type="text"
                      name="ecTelephone"
                      onChange={inputHandler}
                      className="form-control"
                      defaultValue={employee.ecTelephone}
                      id="recipient-etno"
                      autoComplete="off"
                      placeholder='Telephone'
                      readOnly={readOnlyStatus}
                    />
                  </div>
                  <div className="col-md-6 ms-auto">
                    <input
                      type="text"
                      name="ecMobile"
                      onChange={inputHandler}
                      className="form-control"
                      defaultValue={employee.ecMobile}
                      placeholder='Mobile'
                      id="recipient-emb"
                      autoComplete="off"
                      readOnly={readOnlyStatus}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-center">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={submitClicked}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;