import "./App.scss";
import LeftPanel from "./Components/LeftPanel/LeftPanel";
import RightPanel from "./Components/RightPanel/RightPanel";
import Topbar from "./Components/TopBar/Topbar";

function App() {
  return (
    <div className="App-container">
      <div className="topbar">
        <Topbar />
      </div>
      <div className="bottomSection">
        <div className="leftSection">
          <LeftPanel />
        </div>
        <div className="rightSection">
          <RightPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
