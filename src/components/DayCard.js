import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { CardWrapper } from '../styles'

const DayCard = props => {
    return (
            <Col>
                <CardWrapper isSelected={props.isSelected} onClick={props.selectDay} >
                    <Card>
                        <CardHeader>{props.day}</CardHeader>
                        <CardBody>
                            <h3>{props.temp}°</h3>
                            <img src={`${process.env.PUBLIC_URL}/icons/${props.icon}.png`} alt={props.description}/>
                            <p><strong>High: </strong>{props.high}°</p>
                            <p><strong>Low: </strong>{props.low}°</p>
                            <p><strong>Precip: </strong>{props.precip}%</p>
                        </CardBody>
                    </Card>
                </CardWrapper>
            </Col>
    )
};

export default DayCard;