import { Typography } from "@mui/material";
import React from "react";

const SingleNavBarButton = ({ title }) => {
  return (
    <div>
      <Typography style={{ fontWeight: 500 }} variant="h7" color="black">
        {title}
      </Typography>
    </div>
  );
};

export default SingleNavBarButton;
