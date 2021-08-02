import { Button } from "bootstrap";
import { useState } from "react";
import ListProblem from "./components/ListProblem.jsx";
import ProblemStyle from "./components/options/ProblemStyle.jsx";
import OptionMenu from "./components/options/OptionMenu.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const { default: Nav } = require("./components/Nav.jsx");
const {
  default: ProblemSet,
} = require("./components/problemDisplays/ProblemSet.jsx");

function App() {
  const [problemOptions, setProblemOptions] = useState({});
  const [problemList, setProblemList] = useState([]);
  const retrieveOptions = (options) => {
    setProblemOptions(options);
    setProblemList([...problemList, options]);
  };

  const [visible, setVisible] = useState({
    display: "block",
  });

  return (
    <Router>
      <div>
        <Nav classname="NavBar" />
        <OptionMenu
          retrieveOptions={retrieveOptions}
          visible={visible}
          setVisible={setVisible}
        />
      </div>

      <Switch>
        <Route
          path="/problems"
          render={(props) => (
            <ListProblem
              {...props}
              problemList={problemList}
              setVisible={setVisible}
            />
          )}
        />
        <Route path="/problems/test" exact component={ProblemSet} />
      </Switch>
    </Router>
  );
}
/*
<Route path="/" exact component={ListProblem} />
<ProblemSet options={problemOptions} />
*/
export default App;
