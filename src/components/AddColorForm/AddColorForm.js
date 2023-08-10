import { useState } from "react";
import "./AddColorForm.css";
import { useNavigate } from "react-router-dom";

const AddColorForm = (props) => {
  const navigate = useNavigate();
  const [newColor, setNewColor] = useState({
    name: "",
    color: "#000000",
  });
  const handleChange = (e) => {
    setNewColor({
      ...newColor,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setColors([...props.colors, newColor]);
    navigate("/colors");
  };
  return (
    <div className="AddColorForm">
      <form onSubmit={handleSubmit}>
        <input
        className="name-input"
          type="text"
          name="name"
          max="25"
          required
          placeholder="color name"
          value={newColor.name}
          onChange={handleChange}
        />
        <input
          type="color"
          name="color"
          value={newColor.color}
          onChange={handleChange}
        />
        <input type="submit" value="add this color" />
      </form>
    </div>
  );
};

export default AddColorForm;
