import React,{useState,useEffect} from "react";
import { getEmployees, deleteEmployee } from "../service/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponent =()=>{
    const [employees,setEmployees]= useState([]);

    const navigate = useNavigate();

    const getAllEmployees = () => {
        getEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    useEffect(() => {
        getAllEmployees();
    }, [])

    const removeEmployee = (employeeId) => {
        deleteEmployee(employeeId).then((response) =>{
         getAllEmployees();
 
        }).catch(error =>{
            console.log(error);
        })
         
     }

    function addNewEmployee() {
        navigate('/add-employee')
    }

    const updateEmp = (id) => {
        navigate(`/edit-employee/${id}`)
    }

    return(
        <div className="container">
            <h2 className="text-center"> List Employees</h2>
            <button className = "btn btn-primary mb-2" onClick={addNewEmployee }>Add Employee</button>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email Id</th>
                    <th> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firtname}</td>
                                <td>{employee.lastname}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button className="btn btn-info" onClick={() => updateEmp(employee.id)} >Update</button>
                                    <button className = "btn btn-danger" onClick = {() => removeEmployee(employee.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>

    )
}

export default ListEmployeeComponent;