import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Div, Status } from "./style";

const RecommendedComponent = ({ src = "N/A", name = "N/A", title = "N/A" }) => (
  <>
    <Div>
      <Card
        sx={{
          // width: "505px",
          fontSize: "16px",
          fontWeight: "bold",
          boxShadow: "0px 1px 6px 1px #e7e0e0",
          marginRight: "20px",
          borderRadius: "20px",
        }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="140px"
          image={src}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="p"
            sx={{
              marginBottom: "20px",
              fontWeight: "normal",
              fontSize: "18px",
            }}
            height="20px"
            component="div"
          >
            {name}
          </Typography>
        </CardContent>
      </Card>

      <Status>
        <strong>{title}</strong>
      </Status>
    </Div>
  </>
);

export default RecommendedComponent;
