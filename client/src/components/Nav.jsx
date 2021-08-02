import { Link } from "react-router-dom";

function Nav({ classname }) {
  return (
    <div className={classname}>
      <Link to="/">
        <h1>Math 4 Tangerines</h1>
      </Link>
      <Link to="/problems">Problems</Link>
    </div>
  );
}

export default Nav;
