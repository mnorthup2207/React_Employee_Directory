import React from 'react';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import { FormWrapper } from '../styles';

const SearchBar = props => {
    return (
        <FormWrapper inline>
            <FormGroup>
                <Label for="searchTerm" hidden>Search Locations</Label>
                <Input 
                    type="text" 
                    name="searchTerm" 
                    id="searchTerm" 
                    placeholder="Denver, CO OR Statue of Liberty OR 80111" 
                    onChange={props.handleInputChange}
                    value={props.searchTerm}    
                />
                <Button>Search</Button>
            </FormGroup>
        </FormWrapper>
    )
};

export default SearchBar;