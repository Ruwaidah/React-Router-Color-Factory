import "./ColorList.css";
import Nav from "../Nav/Nav";
import Color from "../Color/Color";
import { Link } from "react-router-dom";

const ColorList = (props) => {
  console.log(props.setClickedColor);
  return (
    <div className="ColorList">
      <Nav />
      <p>Please Select a color.</p>
      {props.colors.map((color) => (
        <Link to={`/colors/${color.name}`} onClick={() => props.setClickedColor(color)}>{color.name}</Link>
      ))}
    </div>
  );
};

export default ColorList;
