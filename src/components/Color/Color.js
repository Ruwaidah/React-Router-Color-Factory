import { Link, Navigate } from "react-router-dom";
import "./Color.css";
const Color = (props) => {
  const colorToUpperCase = props.clickedColor.name.toUpperCase();
  if (!props.clickedColor)
    return (
      <>
        <Navigate to="/colors" />
      </>
    );
  return (
    <div
      className="Color"
      style={{
        background: `linear-gradient(${props.clickedColor.color} 70%, black)`,
      }}
    >
      <p>THIS IS {colorToUpperCase}</p>
      <p>ISN'T IT BEAUTIFUL?</p>
      <Link to="/colors">GO BACK</Link>
    </div>
  );
};

export default Color;
