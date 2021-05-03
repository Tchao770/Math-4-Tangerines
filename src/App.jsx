import { useState } from "react";
import OptionMenu from "./components/OptionMenu.jsx";

const { default: Nav } = require("./components/Nav.jsx");
const { default: ProblemSet } = require("./components/ProblemSet.jsx");

function App() {
    const [problemOptions, setProblemOptions] = useState({}); 
    const retrieveOptions = (options) => {
        setProblemOptions(options);
    }
    return (
        <div>
            <Nav classname="NavBar" />
            <OptionMenu retrieveOptions={retrieveOptions}/>
            <ProblemSet options={problemOptions}/>
        </div>
    )
}

export default App;