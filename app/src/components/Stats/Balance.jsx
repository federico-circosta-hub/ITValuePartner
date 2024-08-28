import React from "react";
import { Card, Typography } from "@mui/material";
import { format } from "date-fns";
import { grey, orange } from "@mui/material/colors";

const Balance = ({
  account,
  accountNumber,
  selectedAccount,
  setSelectedAccount,
}) => {
  return (
    <Card
      variant="outlined"
      onClick={() => setSelectedAccount(accountNumber)}
      style={{
        border: `2px solid ${
          selectedAccount === accountNumber ? orange[500] : grey[500]
        }`,
      }}
      className={`flex flex-col p-8 w-1/3 gap-6 hover:cursor-pointer ${
        selectedAccount === accountNumber && "shadow-xl"
      }`}
    >
      <Typography
        variant="h6"
        color={selectedAccount === accountNumber ? orange[500] : grey[500]}
      >
        ACCOUNT {accountNumber}
      </Typography>
      <div>
        <Typography variant="p" color="grey">
          Euro Balance
        </Typography>
        <Typography variant="h5" color="black" fontWeight={500}>
          {account.balance["EUR"].toLocaleString("en-US", {
            style: "currency",
            currency: "EUR",
          })}
        </Typography>
      </div>
      <div>
        <Typography variant="p" color="grey">
          US Dollar Balance
        </Typography>
        <div className="flex justify-between items-end">
          <Typography variant="h5" color="black" fontWeight={500}>
            {account.balance["USD"].toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </Typography>
          <Typography variant="p" color="black" fontSize={20}>
            {format(new Date(account.updatedAt), "d/MM/y")}
          </Typography>
        </div>
      </div>
    </Card>
  );
};

export default Balance;
