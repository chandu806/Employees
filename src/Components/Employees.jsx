import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"

export const Employees = () => {
  const[employees, setEmployees] = useState([]);
  useEffect(() => {
    fetch(`https://github.com/typicode/json-server`)
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);



  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>age</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr>
            <td>{employee.name}</td>
            <td>{employee.password}</td>
            <td>
              <Link to={`/employees/${employee.id}`}>More Details</Link>
            </td>
          </tr>

        ))}
        <tr>
          <td>chandu</td>
          <td>daanechandu@gmail.com</td>
          <td>7799820552</td>
          <td>21</td>
          <td>34000</td>
        </tr>
      </tbody>
    </table>
  )
}