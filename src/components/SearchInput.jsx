import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
function SearchInput() {
    return (
        <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" }} >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search for a recipe"
                inputProps={{ 'aria-label': 'search for a recipe' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );

}

export default SearchInput;
