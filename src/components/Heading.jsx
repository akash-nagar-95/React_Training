// import React from 'react';

import ChildHeading from "./ChildHeading";

const Heading = () => {
  const message = "Hello from parent...";
  const user = {
    name : "Akash",
    age : "22"
  };
    return (
        <div style={{ background: "#282c34", padding: "10px", color: "white" }}>
          <h1>This is the content from the h1 tag and Header.jsx file</h1>
          <ChildHeading msg = {message} userData = {user} />
        </div>
      );
}

export default Heading;