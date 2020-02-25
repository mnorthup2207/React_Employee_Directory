import React from 'react';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import { FormWrapper } from '../styles';

const SearchBar = props => {
    return (
        <FormWrapper inline>
            <FormGroup>
                <Label for="searchTerm" hidden>Search By Employee Number/I.D.</Label>
                <Input 
                    type="text" 
                    name="searchTerm" 
                    id="searchTerm" 
                    placeholder="Search By Employee Number/I.D." 
                    onChange={props.handleInputChange}
                    value={props.searchTerm}    
                />
                <Button>Search</Button>
            </FormGroup>
        </FormWrapper>
    )
};

export default SearchBar;