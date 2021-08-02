import { useState } from "react";
import ListProblem from "./components/ListProblem.jsx";
import ProblemStyle from "./components/menuComponents/ProblemStyle.jsx";
import OptionMenu from "./components/OptionMenu.jsx";

const { default: Nav } = require("./components/Nav.jsx");
const { default: ProblemSet } = require("./components/ProblemSet.jsx");

function App() {
  const [problemOptions, setProblemOptions] = useState({});
  const [problemList, setProblemList] = useState([]);
  const retrieveOptions = (options) => {
    setProblemOptions(options);
  };
  return (
    <div>
      <Nav classname="NavBar" />
      <OptionMenu retrieveOptions={retrieveOptions} />
      <ProblemSet options={problemOptions} />
    </div>
  );
}

export default App;
