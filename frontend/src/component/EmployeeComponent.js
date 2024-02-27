import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateEmployee, saveEmployee, getEmployee } from "../service/EmployeeService";

const EmployeeComponent = () => {
    const [firtname, setFirtname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();
    const { id } = useParams();

    const SaveOrUpdateEmployee = (e) => {
        console.log(e);
        e.preventDefault();

        const employee = { firtname, lastname, email };

        console.log(employee);
        
        if (id) {
            updateEmployee(employee, id).then((response) => {
                navigate('/employees')
            }).catch(error => {
                console.log(error)
            })

        } else {
            saveEmployee(employee).then((response) => {
                console.log(response.data)
                navigate('/employees')
            }).catch(error => {
                console.log(error)
            })
        };
        
    }

    useEffect(() => {
        

        if (id) {
            getEmployee(id).then((response) => {
                
                setFirtname(response.data.firtname)
                setLastname(response.data.lastname)
                setEmail(response.data.email)
            }).catch(error => {
                console.log(error)
            })
        }
    }, [id])

    function goback() {
        navigate('/employees')
    }

    const pageTitle = () => {

        if (id) {
            return <h2 className="text-center">Update Employee</h2>
        } else {
            return <h2 className="text-center">Add Employee</h2>
        }
    }

    return (
        <div>
            <br /><br />
            
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        
                        {
                            pageTitle()
                        }
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label"> First Name :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter first name"
                                        name="firstName"
                                        className="form-control"
                                        value={firtname}
                                        onChange={(e) => setFirtname(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Last Name :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter last name"
                                        name="lastname"
                                        className="form-control"
                                        value={lastname}
                                        onChange={(e) => setLastname(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Email Id :</label>
                                    <input
                                        type="email"
                                        placeholder="Enter email Id"
                                        name="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <button className="btn btn-success" onClick={(e)=>SaveOrUpdateEmployee(e)} >Sumbit </button>
                                <button className="btn btn-success" onClick={goback} style = {{marginLeft:"10px"}}>Goback </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default EmployeeComponent