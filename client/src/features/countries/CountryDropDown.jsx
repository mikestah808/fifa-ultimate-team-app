import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function CountryDropDown({ handleCountryChange, countries, selectedCountry }) {
    

    const renderCountries = countries.map((country) => {
        return <MenuItem value={country.id} key={country.id}>{country.name.toUpperCase()}</MenuItem>
    })


  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedCountry.name}
          label="Country"
          onChange={handleCountryChange}
        >
          {renderCountries}
        </Select>
      </FormControl>
    </Box>
  );
}

export default CountryDropDown;