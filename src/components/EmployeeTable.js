import React from 'react';
import { Table, Col } from 'reactstrap';

const EmployeeTable = props => {    
    console.log(props);
    
    return (
        <Col>
            <Table dark>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee Name</th>
                        <th>Employee Age</th>
                        <th>Employee Salary</th>
                    </tr>
                </thead>
                    <tbody>
                        {props.employees.map(employee => (
                        <tr key={employee.id}>
                            <th scope="row">{employee.id}</th>
                            <td>{employee.employee_name}</td>
                            <td>{employee.employee_age}</td>
                            <td>${employee.employee_salary.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</td>
                        </tr>
                        ))}
                </tbody>
            </Table>
        </Col>
    )
};

export default EmployeeTable;