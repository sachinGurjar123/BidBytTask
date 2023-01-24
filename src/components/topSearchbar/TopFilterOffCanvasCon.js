import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const FilterOffCanContant = () => {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 250 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}>
          <MenuItem value="">Bengaluru</MenuItem>
          <MenuItem value={10}>Mumbai</MenuItem>
          <MenuItem value={20}>delhi</MenuItem>
          <MenuItem value={30}>GuruGram</MenuItem>
          <MenuItem value={30}>Goa</MenuItem>
        </Select>
      </FormControl>
      <p>Price Range</p>
      <p>
        <span>
          <span>
            <AttachMoneyIcon sx={{ color: 'red', fontSize: '30px', fontWeight: 'bold' }} />
          </span>
          <span style={{ marginLeft: '30px' }}>
            <AttachMoneyIcon sx={{ color: 'gray', fontSize: '30px', fontWeight: 'bold' }} />
            <AttachMoneyIcon sx={{ color: 'gray', fontSize: '30px', fontWeight: 'bold' }} />
          </span>
          <span style={{ marginLeft: '30px' }}>
            <AttachMoneyIcon sx={{ color: 'gray', fontSize: '30px', fontWeight: 'bold' }} />
            <AttachMoneyIcon sx={{ color: 'gray', fontSize: '30px', fontWeight: 'bold' }} />
            <AttachMoneyIcon sx={{ color: 'gray', fontSize: '30px', fontWeight: 'bold' }} />
          </span>
        </span>
      </p>
      <p>Tags</p>
      
    </div>
  );
};
export default FilterOffCanContant;
