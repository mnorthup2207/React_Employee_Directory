import React from 'react';
import { DetailsWrapper } from '../styles';

const DayDetails = props => {
    return (
        <DetailsWrapper>
            <h2>Weather Info for {props.day}</h2>
            <h3>{props.temp}°</h3>
            <img src={`${process.env.PUBLIC_URL}/icons/${props.icon}.png`} alt={props.description}/>
            <p><strong>High: </strong>{props.high}°</p>
            <p><strong>Low: </strong>{props.low}°</p>
            <p><strong>Precip: </strong>{props.precip}%</p>
        </DetailsWrapper>
    )
};

export default DayDetails;