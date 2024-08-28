import React, { useContext, useState } from "react";

export const AccountStatsContext = React.createContext();

export const AccountStatsProvider = ({ children }) => {
  const [stats, setStats] = useState();

  const updateStats = (s) => {
    setStats(s);
  };

  return (
    <AccountStatsContext.Provider value={{ stats, updateStats }}>
      {children}
    </AccountStatsContext.Provider>
  );
};

export const useStats = () => {
  return useContext(AccountStatsContext);
};
