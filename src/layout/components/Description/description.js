import React from "react";

function Description() {
  return (
    <div
      className="description"
      style={{
        padding: "20px",
        margin: "30px",
        height: "auto",
        textAlign: "center",
        background: "#efefef",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <h1 style={{ fontSize: "18px" }}>Lorem ipsum dolor sit amet?</h1>
      <div style={{}}>
        <h5
          style={{
            fontWeight: "normal",
            paddingLeft: "50px",
            paddingRight: "50px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </h5>
      </div>
    </div>
  );
}

export default Description;
