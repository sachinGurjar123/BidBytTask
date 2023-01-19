import React from "react";
import { TopBoxDiv } from "./style";

const FooterTopBox = () => {
  return (
    <div style={{ padding: "10px" }}>
      <TopBoxDiv>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaV5uw0K6ikAju64USQornxzn7UD4WGCVL9onPYhpPd5oaZWsq1P7r70HaWdBRA0bTYEc&usqp=CAU"
          alt=""
          style={{ height: "80px" }}
        />
        <h4>What s your craving?</h4>
        <p>
          <strong>
            Can t find your favorite chef or restaurant?
            <a style={{ color: "#2fb59d" }} href="">
              Add it to your Wishlist
            </a>
          </strong>
          <br />
          <strong>and stand a chance to get your order for free.</strong>
        </p>
      </TopBoxDiv>
    </div>
  );
};
export default FooterTopBox;
