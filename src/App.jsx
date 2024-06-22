import Navbar from "./Navbar";

import GroupStage from "./GroupStage";
import ThirdPlace from "./ThirdPlace";
import PlayOff from "./PlayOff";
import QuaterFinal from "./QuaterFinal";
import SemiFinal from "./SemiFinal";
import Final from "./Final";
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <GroupStage />
        <ThirdPlace />
        <PlayOff />
        <QuaterFinal />
        <SemiFinal />
        <Final />
      </div>
    </>
  );
}

export default App;
