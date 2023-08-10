import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Color from "./components/Color/Color";
import AddColorForm from "./components/AddColorForm/AddColorForm";
import { useState } from "react";
import ColorList from "./components/ColorList/ColorList";

function App() {
  const [colors, setColors] = useState([]);
  const [clickedColor, setClickedColor] = useState(null);
  console.log(clickedColor)
  return (
    <div className="App">
      <Routes>
        <Route
          path="/colors"
          element={
            <ColorList colors={colors} setClickedColor={setClickedColor} />
          }
        />
        <Route path="*" element={<Navigate to="/colors" />} />
        <Route
          exact
          path="/colors/new"
          element={<AddColorForm setColors={setColors} colors={colors} />}
        />
        <Route
          path="/colors/:color"
          element={<Color clickedColor={clickedColor} />}
        />
        <Route path="*" element={<ColorList />} />
      </Routes>
    </div>
  );
}

export default App;
