import React, { useEffect, useMemo, useState } from "react";

function UseMemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // const doubleNumber = slowFunction(number);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  //   const themeStyle = {
  //     backgroundColor: dark ? "black" : "white",
  //     color: dark ? "white" : "black",
  //   };

  const themeStyle = useMemo(() => {
    // with this a new reference of themeStyle obj will be created only when dark is changed
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  // only doing this would console log theme changed everytime as themeStyle is declared everytime it rerenders and in obj and arr comparisons are made by reference so to get rid ofd this useMemo in themeStyle obj
  useEffect(() => {
    console.log("theme changed");
  }, [themeStyle]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value), 10)}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyle}>{doubleNumber}</div>
    </>
  );
}

function slowFunction(num) {
  console.log("calling slow function");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}

export default UseMemo;
