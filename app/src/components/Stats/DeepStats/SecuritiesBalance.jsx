import React from "react";
import { Card, Typography } from "@mui/material";

const SecuritiesBalance = ({ selectedAccount, account }) => {
  return (
    <div>
      <Card
        variant="outlined"
        style={{
          width: 450,
        }}
        className={`flex flex-col p-8 gap-6`}
      >
        <Typography variant="h6" color="#5bacfd">
          Securities balance
        </Typography>
        <div className="flex gap-16">
          <div>
            <Typography variant="p" color="grey">
              Euro Balance
            </Typography>
            <Typography variant="h5" color="black" fontWeight={500}>
              {account[selectedAccount].securitiesBalance["EUR"].toLocaleString(
                "en-US",
                {
                  style: "currency",
                  currency: "EUR",
                }
              )}
            </Typography>
          </div>
          <div>
            <Typography variant="p" color="grey">
              US Dollar Balance
            </Typography>
            <Typography variant="h5" color="black" fontWeight={500}>
              {account[selectedAccount].securitiesBalance["USD"].toLocaleString(
                "en-US",
                {
                  style: "currency",
                  currency: "USD",
                }
              )}
            </Typography>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SecuritiesBalance;
