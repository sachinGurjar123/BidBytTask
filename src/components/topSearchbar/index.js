import React from "react";
import { Div } from "~/style";
import { ManDiv } from "./style";
import TopComponent from "./TopOffCanvas";
import TopSearchInput from "./TopSearchInput";

const TopBar = () => {
  return (
    <Div>
      <ManDiv>
        <TopComponent />
        <TopSearchInput />
      </ManDiv>
    </Div>
  );
};

export default TopBar;
