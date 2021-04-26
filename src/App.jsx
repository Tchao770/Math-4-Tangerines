import OptionMenu from "./components/OptionMenu.jsx";

const { default: Nav } = require("./components/Nav.jsx");
const { default: ProblemSet } = require("./components/ProblemSet.jsx");

function App() {
    return (
        <div>
            <Nav classname="NavBar" />
            <OptionMenu />
            <ProblemSet />
        </div>
    )
}

export default App;