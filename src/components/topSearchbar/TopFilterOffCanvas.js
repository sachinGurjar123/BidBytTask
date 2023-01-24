import React from "react";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TopFilterOffCanvasCon from "./TopFilterOffCanvasCon";
import LoopIcon from "@mui/icons-material/Loop";


import { Div } from "./style";

const TopComponent = () => {
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 300, marginLeft: "20px", marginRight: "10px" }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Filter </h2>
        <Button
          onClick={toggleDrawer(anchor, false)}
          sx={{ fontSize: "25px", color: "red" }}
        >
          X
        </Button>
      </Box>
      <Divider />

      <p>Location</p>
      <TopFilterOffCanvasCon />

      <Div>
        <LoopIcon />
      </Div>
    </Box>
  );

  return (
    <>
      <Div>
        <Button sx={{ padding: "0px" }} onClick={toggleDrawer("right", true)}>
          {
            <TuneRoundedIcon
              sx={{
                color: "gray",
                border: "1px solid #dedcdc",
                borderRadius: "5px",
                height: "40px",
                width: "40px",
              }}
            />
          }
        </Button>
        <SwipeableDrawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          onOpen={toggleDrawer("right", true)}
        >
          {list("right")}
        </SwipeableDrawer>
      </Div>
    </>
  );
};

export default TopComponent;
