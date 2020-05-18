import React from "react";

function HomePageComponent({ helloWorld, changeName }) {
  return (
    <div>
      <h1>This is homepage</h1>
      <h3>
        Name: <span>{helloWorld}</span>
      </h3>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default HomePageComponent;
