import Button from "react-bootstrap/Button";
import { ListGroup } from "react-bootstrap";
import editIcon from "../assets/edit.svg";
import removeIcon from "../assets/x.svg";
import ProblemSet from "./problemDisplays/ProblemSet.jsx";
import { Link, Route, Switch } from "react-router-dom";

function ListProblem({ problemList, setVisible }) {
  return (
    <ListGroup className="ListProblem">
      {problemList.map((problemItem, index) => {
        return (
          <Link
            to={{
              pathname: `/problems/${problemItem.urlName}`,
              state: { problemItem: problemItem },
            }}
          >
            <ListGroup.Item action key={index} className="ListItem">
              {problemItem.name}
              <div className="ItemButtons">
                <Button
                  variant="outline-secondary"
                  onClick={() => setVisible({ display: "block" })}
                >
                  <img src={editIcon} />
                </Button>
                <Button variant="outline-secondary">
                  <img src={removeIcon} />
                </Button>
              </div>
            </ListGroup.Item>
          </Link>
        );
      })}
      <Switch>
        <Route
          path="/problems/:urlName"
          exact
          render={(props) => (
            <ProblemSet {...props} /> //problemItem={problemItem} />
          )}
        />
      </Switch>
    </ListGroup>
  );
}

export default ListProblem;
