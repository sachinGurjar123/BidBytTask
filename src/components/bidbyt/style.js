import styled from 'styled-components';
export const Div = styled.div`
  // display: flex;
  position: relative;
  margin-top: 10px;
  margin-left: 3px;
  // overflow-x: scroll;
  // width: 350px;
  // border: 1px solid red;
`;
export const Status = styled.p`
  background-color: red;
  padding: 6px 10px;
  text-align: center;
  color: white;
  border-radius: 15px;
  position: absolute;
  top: 8px;
  font-size: small;
  // letter-spacing: 1px;
  margin-left: 6px;
`;
export const Status2 = styled.p`
  background-color: white;
  padding: 4px 15px 0px 15px;
  text-align: center;
  border-radius: 30px;
  position: relative;
  bottom: 130px;
  float: right;
  height: 50px;
  font-size: 14px;
  letter-spacing: 0.5px;
  font-weight: bolder;
  font-family: 'Poppins', sans-serif;
  box-shadow: 1px 2px 2px rgb(217 217 217 / 33%), 2px 4px 4px rgb(217 217 217 / 33%),
    3px 6px 6px rgb(212 212 212 / 33%);
  margin-right: 27px;
`;
export const Heart = styled.div`
    background-color: white;
    padding: 7px 7px 7px 7px;
    text-align: center;
    border-radius: 50%;
    position: absolute;
    top: 5px;
   right:5px
    // height: 10px;
    box-shadow: 0px 1px 7px px #e7e0e0;
  `;
