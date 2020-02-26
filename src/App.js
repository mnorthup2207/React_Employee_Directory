import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SearchBar from './components/SearchBar';

const App = () => {
    return (
        <Container>
            <Row>
                <Col md={3}>
                    <h1>Emp|Locker</h1>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <SearchBar />
                </Col>
            </Row>
        </Container>
    );
}

export default App;
