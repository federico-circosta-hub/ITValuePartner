import ImportComponent from "./components/ImportComponent/ImportComponent";
import NavBar from "./components/NavBar/NavBar";
import StatsContainer from "./components/Stats/StatsContainer";
import { AccountStatsProvider } from "./model/AccountStatsContext";

function App() {
  return (
    <AccountStatsProvider>
      <div className="flex flex-col justify-between w-full h-full">
        <NavBar />
        <ImportComponent />
        <StatsContainer />
      </div>
    </AccountStatsProvider>
  );
}

export default App;
