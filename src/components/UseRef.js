import React, { useEffect, useRef, useState } from "react";

function UseRef() {
  const [name, setName] = useState("");
  const renderCount = useRef(1);
  const inputRef = useRef();
  const prevName = useRef("");

  useEffect(() => {
    renderCount.current = renderCount.current + 1; // using state here would lead to infinte loop (refs does not change when state is updated)
  });

  useEffect(() => {
    prevName.current = name; // here we are storing the prev value of our name in prevName
  }, [name]);

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <div>
        My name is {name} it used to be {prevName.current}
      </div>
      <button onClick={focus}>Focus</button>
      <div>I rendered {renderCount.current} times</div>
    </>
  );
}

export default UseRef;
