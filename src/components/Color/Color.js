import "./Color.css";
const Color = (props) => {
  console.log(props.color);
  return <div className="Color" style={{background: props.color.color}}></div>;
};

export default Color;
