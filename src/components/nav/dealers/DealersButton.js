import React from "react";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { Button } from "@mui/material";

export default function DealersButton() {
  return (
    <Button
      style={{
        width: 10,
        display: "flex",
        flexDirection: "column",
        marginTop: "auto",
      }}
    >
      <DirectionsCarIcon />
      <h6> Դիլերներ </h6>
    </Button>
  );
}
