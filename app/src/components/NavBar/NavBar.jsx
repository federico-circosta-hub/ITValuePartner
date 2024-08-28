import { Button, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
import React from "react";
import SingleNavBarButton from "./SingleNavBarButton";

const NavBar = () => {
  return (
    <div className="w-full h-16 flex justify-between items-center bg-white shadow-md p-4">
      <div className="w-full flex justify-start items-center gap-16">
        <Typography variant="h5" color={orange[800]}>
          ITValuePartner
        </Typography>
        <SingleNavBarButton title={"ACCOUNTS AND CARDS"} />
        <SingleNavBarButton title={"LOANS AND MORTGAGES"} />
        <SingleNavBarButton title={"CONSULTING"} />
        <SingleNavBarButton title={"TRADING"} />
      </div>

      <Button
        variant="contained"
        style={{
          background: orange[800],
          borderRadius: 25,
          width: 125,
        }}
      >
        Login
      </Button>
    </div>
  );
};

export default NavBar;
