import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SearchBar from './components/SearchBar';
import EmployeeTable from './components/EmployeeTable';
import DayDetails from './components/DayDetails';

const App = () => {
    const [data, setData] = useState({
        searchTerm: "",
        selectedEmployee: null,
        employeeData: ""
    });
    const { searchTerm, selectedEmployee, employeeData  } = data;

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
                <Col md={5}>
                    <h1>Emp|Locker</h1>
                </Col>
                <Col md={7}>
                    <SearchBar
                        // searchTerm={}
                        handleInputChange={handleInputChange}
                    />
                </Col>
            </Row>
            <Row>
                    <EmployeeTable />
            </Row>
            <Row>
                <Col>
                    {/* {selectedDay ? (
                        <DayDetails 
                        day={moment(selectedDay.valid_date, "YYYY-MM-DD").format("dddd, MMMM Do, YYYY ")}
                        icon={selectedDay.weather.icon}
                        description={selectedDay.weather.description}
                        temp={selectedDay.temp}
                        high={selectedDay.max_temp}
                        low={selectedDay.low_temp}
                        precip={selectedDay.pop}
                        />
                    ): (
                        <h3>Click on a day above to view details.</h3>
                    )} */}
                </Col>
            </Row>

        </Container>
    );
}

export default App;
