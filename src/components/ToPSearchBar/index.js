import React from 'react';
import { ManDiv } from './style';
import TopComponent from './TopOffCanvas';
import TopSearchInput from './TopSearchInput';

const TopBar = () => {
  return (
    <ManDiv>
      <TopComponent />
      <TopSearchInput />
    </ManDiv>
  );
};

export default TopBar;
