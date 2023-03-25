import { useState } from 'react';
import { useNavigate } from '@reach/router';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

function SearchInput(props) {
    const [searchTerm, setSearchTerm] = useState(props.value || "");

    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchTerm) {
            navigate(`/search/${searchTerm}`);
        }
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" }} >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search for a recipe"
                inputProps={{ 'aria-label': 'search for a recipe' }}
                value={searchTerm}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
            <IconButton
                type="button"
                sx={{ p: '10px' }}
                aria-label="search"
                onClick={handleSearch}
            >
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}

export default SearchInput;
