import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="Nav">
      <h2>Welcome to the color factory.</h2>
      <Link className="add-btn" to="/colors/new">Add a Color</Link>
    </div>
  );
};

export default Nav;
