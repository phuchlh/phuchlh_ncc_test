import React from "react";

function Footer() {
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: "#ffffff",
        color: "white",
        padding: "20px 0",
        position: "absolute",
        left: "0",
        bottom: "0",
        zIndex: "-1",
      }}
    >
      <div className="container" style={{ color: "#000000" }}>
        <p>Copyright © 2021</p>
      </div>
    </footer>
  );
}

export default Footer;
