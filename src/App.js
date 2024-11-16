import "./App.css";
import ContentContainer from "./components/content/ContentContainer";
import HeaderContainer from "./components/header/HeaderContainer.js";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "red",
        height: "100vh",
      }}
    >
      <div
        style={{ padding: "1rem 2rem 1rem 2rem", backgroundColor: "#7DDA58" }}
      >
        <HeaderContainer />
      </div>
      <div
        style={{
          padding: "0.51rem 2rem 0rem 2rem",
          backgroundColor: "#FFDE59",
          flexGrow: 1,
        }}
      >
        <ContentContainer />
      </div>
    </div>
  );
}

export default App;
