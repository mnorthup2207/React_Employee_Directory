import styled from 'styled-components';
import { Card, Form } from 'reactstrap';

const teal = '#008080'
const gray = "#ccc";
const border = `2px solid ${gray}`;
const tealBorder = `2px solid ${teal}`;

export const CardWrapper = styled.article`
    :hover{
        cursor: pointer;
        .card{
            border-color: ${teal}
        }
    }    
    text-align: center;
    img{
        width: 80px;
    }
    .card{
        border: ${border}; 
    }
    .card-header{
        background-color: ${props => props.isSelected ? teal : gray  };
        color: ${props => props.isSelected ? "white" : "#212529"  };
        font-weight: 700;
    }
    .card-body{
        padding: 1.25rem .5rem
    }
`

export const DetailsWrapper = styled(Card)`
    border: ${tealBorder};
    text-align: center;
    padding: 1rem;
    margin: 1.5rem 0rem;
    img{
        width: 100px;
        margin: 0 auto;
    }
`

export const FormWrapper = styled(Form)`
    input.form-control {
        width: 350px;
    }
    button {
        background: ${teal};
    }
`