import React from 'react';
import styled from 'styled-components';
import { FoodCardItems } from '~/data';
import FoodCardComponent from './FoodCardComponent';
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ItemList = () => (
  <Div>
    {FoodCardItems.map((item, index) => (
      <div key={index}>
        <FoodCardComponent {...item} />
      </div>
    ))}
  </Div>
);
export default ItemList;
