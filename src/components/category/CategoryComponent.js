import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText } from 'reactstrap';
import { Div } from './style';
const CategoryComponent = ({ src = 'N/A', name = 'N/A' }) => (
  <Div>
    <Card style={{ border: '0px solid', textAlign: 'center' }} inverse>
      <CardImg
        alt="Card image cap"
        src={src}
        style={{
          height: 110
          // width: "100%",
        }}
      />
      <CardImgOverlay>
        <CardText
          style={{
            color: 'black',
            position: 'absolute',
            bottom: '0px',
            fontSize: '13px'
          }}>
          <strong>{name}</strong>
        </CardText>
      </CardImgOverlay>
    </Card>
  </Div>
);
export default CategoryComponent;
