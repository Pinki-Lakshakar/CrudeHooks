import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const AllEmployee = () => {
    let [Employees, setEmployees] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:3000/employees")
            .then(emp => {
                console.log(emp.data);
                setEmployees(emp.data);
            })
            .catch(err => console.log(err));
    }, [Employees]);
    let employeeRendered = Employees.map(emp => (
        <tr key={emp.id}>
            <td>{emp.id}</td>
            <td>{emp.emp_name}</td>
            <td>{emp.emp_email}</td>
            <td>{emp.emp_designation}</td>
            <td>{emp.emp_location}</td>
            <td>{emp.emp_address}</td>
            <td>{emp.emp_course}</td>

            <td>
                <div className="btn-group">
            <button className="btn btn-dark btn-sm"> edit</button>
            <button className="btn btn-danger btn-sm"> remove</button>
            </div>
            </td>
        </tr>
    ));
    return (
        <div>
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>designation </th>
                        <th>location </th>
                        <th>address</th>
                        <th>course </th>
                    </tr>
                </thead>
                <tbody>
    <tr>{employeeRendered}</tr>
                </tbody>

            </table>
        </div>
    );
};

export default AllEmployee;
/*import React from 'react'

const AllEmployee = () => {
    return (
        <div>
            <h1>Employee</h1>
        </div>
    )
}

export default AllEmployee*/

