import "./App.css";
import React from "react";

import ContentContainer from "./components/content/ContentContainer";
import HeaderContainer from "./components/header/HeaderContainer.js";

function App() {
  const [filter, setFilter] = React.useState("all");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <div
        style={{ padding: "1rem 2rem 1rem 2rem", backgroundColor: "#7DDA58" }}
      >
        <HeaderContainer filter={filter} setFilter={setFilter} />
      </div>
      <div
        style={{
          padding: "0.51rem 2rem 0rem 2rem",
          // backgroundColor: "#FFDE59",
          flexGrow: 1,
        }}
      >
        <ContentContainer filter={filter} />
      </div>
    </div>
  );
}

export default App;
