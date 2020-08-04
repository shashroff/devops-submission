import React, { useState } from 'react';
import { Button, Grid, TextField, withStyles } from '@material-ui/core';
import { IUserInput } from '../../Common/Interfaces'
import './SearchBar.css';

interface ISearchBarProps {
    SetUserInput: (a: IUserInput) => void;
}


function SearchBar(props: ISearchBarProps) {

    const [SearchQuery, setSearchQuery] = useState<string | null>("");
    const handleSearchQueryChange = (s: string | null) => {
        setSearchQuery(s);
    }

    const [HasFocus, setHasFocus] = useState<boolean>(false);

    const handleSubmit = () => {
        console.log(SearchQuery);

        if (SearchQuery?.length !== 0 && SearchQuery !== null && SearchQuery !== "") {
            let UserInput: IUserInput = {
                SearchQuery: SearchQuery.toLowerCase()
            }
            props.SetUserInput(UserInput);
        } else {
            setHasFocus(true);
        }
    }

    const StyledButton = withStyles({
        root: {
          background: 'linear-gradient(45deg, #1e2377 30%, #444da7 90%)',
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: 48,
          padding: '0 30px',
          boxShadow: '0 3px 5px 2px rgba(37, 38, 44, .3)',
        },
        label: {
          textTransform: 'capitalize',
        },
      })(Button);
    
    return <div className="SearchBarContainer">
        <Grid container spacing={1}>
            <Grid item xs={9} sm={9}>
                <TextField
                    required
                    id="outlined-required"
                    label="Search"
                    variant="outlined"
                    error={HasFocus && SearchQuery === ""}
                    onClick={() => setHasFocus(true)}
                    value={SearchQuery}
                    onChange={e => handleSearchQueryChange(e.target.value)}
                    placeholder="Search for a pokemon with their name or number"
                    fullWidth={true}
                />
            </Grid>

            <Grid item xs={3} sm={3}>
                <StyledButton variant="contained" color="primary" onClick={handleSubmit}>
                    Submit
                </StyledButton>
            </Grid>
        </Grid>
    </div>

}

export default SearchBar