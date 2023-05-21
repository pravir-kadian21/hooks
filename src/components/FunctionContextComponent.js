import React from "react";
import { useTheme, useUpdate } from "./ThemeContext";

function FunctionContextComponent() {
  const darkTheme = useTheme();
  const onToggle = useUpdate();

  const themeStyles = {
    backgroundColor: darkTheme ? "black" : "white",
    color: darkTheme ? "white" : "black",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <>
      <button onClick={onToggle}>Toggle Theme</button>
      <div style={themeStyles}>Functional Theme</div>
    </>
  );
}

export default FunctionContextComponent;
