import React, { useState, useEffect } from "react";

function UseEffect() {
  const [resoursceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  const makeApiCall = (resoursceType) => {
    fetch(`https://jsonplaceholder.typicode.com/${resoursceType}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => setItems(json));
  };

  useEffect(() => {
    makeApiCall(resoursceType);
    return () => {
      setItems([]);
    };
  }, [resoursceType]);

  return (
    <div className="App">
      <button
        onClick={() => {
          setResourceType("posts");
        }}
      >
        Posts
      </button>
      <button
        onClick={() => {
          setResourceType("users");
        }}
      >
        Users
      </button>
      <button
        onClick={() => {
          setResourceType("comments");
        }}
      >
        Comments
      </button>
      <h1>
        {items.map((item) => {
          return <p>{JSON.stringify(item)}</p>;
        })}
      </h1>
    </div>
  );
}

export default UseEffect;
