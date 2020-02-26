import styled from 'styled-components';
import { Form } from 'reactstrap';

export const FormWrapper = styled(Form)`
    padding: 1rem;
    margin: 0 auto;
    input.form-control {
        width: 350px;
    }
    button {
        background: black;
    }
`