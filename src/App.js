import React from "react";
import "./App.css";
import Sidebar from "./layout/components/Sidebar/Sidebar";
import Logo from "./layout/components/Center/Logo";
import Description from "./layout/components/Description/description";
import Footer from "./layout/components/Footer/Footer";
import Card from "./layout/components/Card/card";

import cssimage from "./images/css-icon-1.png";
import htmlimage from "./images/html-icon-1.png";
import urlimage from "./images/url-icon-1.png";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div
        className="content"
        style={{
          marginLeft: "150px",
          maxWidth: "1400px",
          marginRight: "auto",
          marginLeft: "auto",
          position: "relative",
        }}
      >
        <Logo />
        <Description />
        <div className="card-container">
          <Card img={cssimage} />
          <Card img={htmlimage} />
          <Card img={urlimage} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
