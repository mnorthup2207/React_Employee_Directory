import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import moment from 'moment'
import sampleData from './data/sample.json'
import SearchBar from './components/SearchBar';
import DayCard from './components/DayCard';
import DayDetails from './components/DayDetails';

const App = () => {
    const [weatherInfo, setWeatherInfo] = useState({
        searchTerm: "",
        selectedDay: null,
        days: sampleData.data,
        location: "Denver, CO",
        // days: [],
        // location: ""
    });
    const { searchTerm, selectedDay, days, location } = weatherInfo;

    const handleInputChange = e => {
        const { name, value } = e.target;
        setWeatherInfo({
            ...weatherInfo,
            [name]: value
        });
    }

    return (
        <Container>
            <Row>
                <Col md={7}>
                    <h1>Weather Info for {location}</h1>
                </Col>
                <Col md={5}>
                    <SearchBar
                        searchTerm={searchTerm}
                        handleInputChange={handleInputChange}
                    />
                </Col>
            </Row>
            <Row>
                {days.map(day => (
                    <DayCard
                        key={day.ts}
                        day={moment(day.valid_date, "YYYY-MM-DD").format("dddd")}
                        icon={day.weather.icon}
                        description={day.weather.description}
                        temp={day.temp}
                        high={day.max_temp}
                        low={day.low_temp}
                        precip={day.pop}
                        isSelected={day === selectedDay}
                        selectDay={() => setWeatherInfo({...weatherInfo, selectedDay: day})}
                    />
                ))}
            </Row>
            <Row>
                <Col>
                    {selectedDay ? (
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
                    )}
                </Col>
            </Row>

        </Container>
    );
}

export default App;
