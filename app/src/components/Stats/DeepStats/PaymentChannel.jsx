import React, { useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Card, Switch, Typography } from "@mui/material";

const PaymentChannel = ({ account, selectedAccount }) => {
  const [divisa, setDivisa] = useState(false); //true => USD; false => EUR

  const dataForPieChart = () => {
    const data = Object.entries(account[selectedAccount].paymentChannel).map(
      ([k, v], i) => ({
        id: i,
        label: `${k} (${v[divisa ? "USD" : "EUR"].toLocaleString("en-US", {
          style: "currency",
          currency: divisa ? "USD" : "EUR",
        })})`,
        value: v[divisa ? "USD" : "EUR"],
      })
    );
    return data;
  };

  return (
    <Card
      variant="outlined"
      style={{
        width: 700,
      }}
      className={`flex flex-col justify-start p-8 gap-6`}
    >
      <Typography variant="h6" color="#5bacfd">
        Payment channel volume
      </Typography>

      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <Typography>EUR</Typography>
          <Switch onChange={() => setDivisa(!divisa)} value={divisa} />
          <Typography>USD</Typography>
        </div>
        <PieChart
          margin={0}
          series={[
            {
              data: dataForPieChart(),
            },
          ]}
          width={700}
          height={150}
        />
      </div>
    </Card>
  );
};

export default PaymentChannel;
