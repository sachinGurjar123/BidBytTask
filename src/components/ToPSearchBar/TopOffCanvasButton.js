import React from 'react';
import styled from 'styled-components';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const TopIconButton = () => {
  const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    margin-bottom: 10px;
  `;
  const Span = styled.span`
    color: black;
    font-weight: bold;
    text-transform: capitalize;
    position: relative;
  `;
  return (
    <Div>
      <LocationOnIcon style={{ color: 'red' }} /> <Span>Bengaluru</Span>
      <ExpandMoreIcon style={{ color: 'red' }} />
    </Div>
  );
};

export default TopIconButton;
