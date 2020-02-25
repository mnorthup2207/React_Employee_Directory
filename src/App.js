import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SearchBar from './components/SearchBar';
import EmployeeTable from './components/EmployeeTable';
import API from './utils/API';

const App = () => {
    const [data, setData] = useState({
        searchTerm: "",
        selectedEmployee: null,
        employeeData: []
    });
    const { searchTerm, selectedEmployee, employeeData  } = data;

    useEffect(() => {
        API.search().then(res => setData({...data, employeeData: res.data.data}))
    }, [])

    const salarySort = e => {
        e.preventDefault();
        employeeData.sort((a, b) => {return a-b});
    }

    const handleInputChange = e => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    }

    

    return (
        <Container>
            <Row>
                <Col md={3}>
                    <h1>Emp|Locker</h1>
                </Col>
                <Col md={9}>
                    <SearchBar
                        searchTerm={searchTerm}
                        handleInputChange={handleInputChange}
                    />
                </Col>
            </Row>
            <Row>
                    <EmployeeTable employees={employeeData} />
            </Row>
        </Container>
    );
}

export default App;
