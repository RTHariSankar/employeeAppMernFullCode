import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {

  const navigate = useNavigate();
  const [input, setInput] = useState([]);
  const userId = sessionStorage.getItem('userId');
  var readyStatus = (userId==='64b77fde422fab7f886af6b8'?false:true)

  const addEmployeeClicked = () => {
    if (userId !== '64b77fde422fab7f886af6b8') {
      alert('Only admin can add employee details');
    } 
  };
  useEffect(() => {
    console.log(readyStatus);
  }, [readyStatus]);

  const inputHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const goToDashboard = () => {
    navigate('/home');
  };

  const loginPage = () => {
    sessionStorage.clear()
    navigate('/');
  };

  const handleFormSubmit = () => {
    axios
      .post('http://localhost:5000/addEmployee', input)
      .then((response) => {
        if (response.data.message === 'Employee added successfully') {
          alert(response.data.message);
          navigate('/home');
        }
      })
      .catch((error) => {
        console.error(error.response.data);
      });
  }

  const saveClicked = () => {
    let count = Object.keys(input).length;
    if ( count === 10) {
      handleFormSubmit();
    } else {
      alert('Please fill in all the fields');
    }
  };

  return (
    <div className="container-fluid mt-2">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <h3 className="navbar-brand" onClick={goToDashboard}>
            Dashboard
          </h3>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  className="nav-link active"
                  aria-current="page"
                  data-bs-toggle="modal"
                  data-bs-target="#employeeModel"
                  onClick={addEmployeeClicked}
                >
                  Add Employee
                </button>

                {/* Modal */}
                <div
                  className="modal fade"
                  id="employeeModel"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" 
                        id="exampleemployeeModel">
                          Employee Details
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
                              <label
                                htmlFor="recipient-name"
                                className="col-form-label"
                              >
                                Name:
                              </label>
                              <input
                                type="text"
                                name='name'
                                onChange={inputHandler}
                                className="form-control"
                                id="recipient-name"
                                readOnly = {readyStatus}
                              />
                            </div>
                            <div className="col-md-6 ms-auto">
                              <label
                                htmlFor="recipient-designation"
                                className="col-form-label"
                              >
                                Designation:
                              </label>
                              <input
                                type="text"
                                name='designation'
                                onChange={inputHandler}
                                className="form-control"
                                id="recipient-designation"
                                readOnly = {readyStatus}

                              />
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-6 ms-auto">
                              <label
                                htmlFor="recipient-department"
                                className="col-form-label"
                              >
                                Department:
                              </label>
                              <input
                                name='department'
                                onChange={inputHandler}
                                type="text"
                                className="form-control"
                                id="recipient-department"
                                readOnly = {readyStatus}

                              />
                            </div>
                            <div className="col-md-6 ms-auto">
                              <label
                                htmlFor="recipient-salary"
                                className="col-form-label"
                              >
                                Salary:
                              </label>
                              <input
                              name='salary'
                              onChange={inputHandler}
                                type="text"
                                className="form-control"
                                id="recipient-salary"
                                readOnly = {readyStatus}

                              />
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-6 ms-auto">
                              <label
                                htmlFor="recipient-email"
                                className="col-form-label"
                              >
                                Email:
                              </label>
                              <input
                              name='email'
                              onChange={inputHandler}
                                type="email"
                                className="form-control"
                                id="recipient-email"
                                readOnly = {readyStatus}

                              />
                            </div>
                            <div className="col-md-6 ms-auto">
                              <label
                                htmlFor="recipient-mobile"
                                className="col-form-label"
                              >
                                Phone no:
                              </label>
                              <input
                              name='phone'
                              onChange={inputHandler}
                                type="text"
                                className="form-control"
                                id="recipient-mobile"
                                readOnly = {readyStatus}

                              />
                            </div>
                          </div>

                          <div className="row">
                            <label
                              htmlFor="recipient-eName"
                              className="col-form-label"
                            >
                              Emergency Contact:
                            </label>
                            <div className="col-md-6 ms-auto">
                              <input
                                type="text"
                                name='ecName'
                                onChange={inputHandler}
                                className="form-control"
                                placeholder="Name"
                                id="recipient-eName"
                                readOnly = {readyStatus}

                              />
                            </div>
                            <div className="col-md-6 ms-auto">
                              <input
                              name='ecRelationship'
                              onChange={inputHandler}
                                type="text"
                                className="form-control"
                                placeholder="Relationship"
                                id="recipient-eRelation"
                                readOnly = {readyStatus}

                              />
                            </div>
                          </div>
                          <div className="row mt-3">
                            <div className="col-md-6 ms-auto">
                              <input
                                type="text"
                                name='ecTelephone'
                                onChange={inputHandler}
                                className="form-control"
                                placeholder="Telephone no."
                                id="recipient-etno"
                                readOnly = {readyStatus}

                              />
                            </div>
                            <div className="col-md-6 ms-auto">
                              <input
                                type="text"
                                name='ecMobile'
                                onChange={inputHandler}
                                className="form-control"
                                placeholder="Mobile"
                                id="recipient-emb"
                                readOnly = {readyStatus}

                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer justify-content-center">
                        <button
                          type="button"
                          className="btn btn-danger"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary"
                        onClick={saveClicked}>
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                </li>
            </ul>
            <button className="btn btn-outline-danger" onClick={loginPage}>
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;