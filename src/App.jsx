import OptionMenu from "./components/OptionMenu.jsx";

const { default: Nav } = require("./components/Nav.jsx");
const { default: ProblemSet } = require("./components/ProblemSet.jsx");

const sampleProblems=
[
    "1+1","1+2","1+3",
    "2+1","2+2","2+3"

]

function App() {
    return (
        <div>
            <Nav classname="NavBar" />
            <OptionMenu />
            <ProblemSet problemList={sampleProblems} />
        </div>
    )
}

export default App;