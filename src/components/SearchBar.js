import React, { useState, useEffect } from 'react';
import EmployeeTable from "./EmployeeTable"
import { Label,Button, Row, Container } from 'reactstrap';
import { FormWrapper } from '../styles';
import API from '../utils/API';



const SearchBar = () => {
    const [employeeData, setEmployeeData] = useState({
        employees: [],
        buttonClick: ""
    });
    useEffect(() => {
        searchAPI();
    }, [])
    const searchAPI = () => API.search().then(res => setEmployeeData({ ...employeeData, employees: res.data.data }));
    const { employees, buttonClick } = employeeData;
    if (buttonClick === "salary") {
        const salarySort = () => employees.sort((a, b) => a.employee_salary - b.employee_salary);
        salarySort();
    } else if (buttonClick === "age") {
        const ageSort = () => employees.sort((a, b) => a.employee_age - b.employee_age);
        ageSort();
    } else if (buttonClick === "id"){
       const idSort = () => employees.sort((a, b) => a.id - b.id);
       idSort();
    } 
    return (
        <Container>
            <Row>
                <FormWrapper inline>
                    <Label><strong>Sort By: </strong></Label>
                    <Button onClick={() => setEmployeeData({ ...employeeData, buttonClick: "id" })}>Id</Button>
                    <Button onClick={() => setEmployeeData({ ...employeeData, buttonClick: "age" })}>Age</Button>
                    <Button onClick={() => setEmployeeData({ ...employeeData, buttonClick: "salary" })}>Salary</Button>
                    {/* <Button onClick={() => setEmployeeData({ ...employeeData, buttonClick: "under"})}>Search</Button> */}
                </FormWrapper>
            </Row>
            <Row>
                <EmployeeTable employees={employees} />
            </Row>
        </Container>
    )
};

export default SearchBar;