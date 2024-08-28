import React, { useState } from "react";
import Balance from "./Balance";
import { useStats } from "../../model/AccountStatsContext";
import DeepStats from "./DeepStats/DeepStats";

const StatsContainer = () => {
  const stats = useStats();
  const [selectedAccount, setSelectedAccount] = useState();
  if (stats.stats)
    return (
      <div className="w-full flex flex-col justify-center gap-8">
        <div className="w-5/6 flex justify-center gap-16">
          <Balance
            account={stats.stats.accounts[1612660]}
            accountNumber={1612660}
            selectedAccount={selectedAccount}
            setSelectedAccount={setSelectedAccount}
          />

          <Balance
            account={stats.stats.accounts[1612661]}
            accountNumber={1612661}
            selectedAccount={selectedAccount}
            setSelectedAccount={setSelectedAccount}
          />
        </div>
        <DeepStats
          account={stats.stats.accounts}
          selectedAccount={selectedAccount}
        />
      </div>
    );
};

export default StatsContainer;
