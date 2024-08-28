import React from "react";
import SecuritiesBalance from "./SecuritiesBalance";
import PaymentChannel from "./PaymentChannel";

const DeepStats = ({ selectedAccount, account }) => {
  if (selectedAccount)
    return (
      <div className="w-11/12 flex gap-4 justify-around bg-orange-50 rounded-xl p-8 m-8">
        <SecuritiesBalance
          account={account}
          selectedAccount={selectedAccount}
        />
        <PaymentChannel account={account} selectedAccount={selectedAccount} />
      </div>
    );
};

export default DeepStats;
