import "./ColorList.css";
import Nav from "../Nav/Nav";
import Color from "../Color/Color";
import { Link } from "react-router-dom";

const ColorList = (props) => {
  const colorPicked = (color) => {
    console.log(color);
    props.setClickedColor(color);
  };
  return (
    <div className="ColorList">
      <Nav />
      <p>Please Select a color.</p>
      <div>
        {props.colors.map((color) => (
          <Link to={`/colors/${color.name}`} onClick={() => colorPicked(color)}>
            {color.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ColorList;
