const { default: Nav } = require("./components/Nav.jsx");
const { default: ProblemSet } = require("./components/ProblemSet.jsx");

function App() {
    return (
        <div>
            <Nav classname="NavBar"/>
            <ProblemSet problemList={["1+2", "2+2", "2+1"]}/>
        </div>
    )
}

export default App;