import "./App.css";
import IndependenceDay from "./components/IndependenceDay";

function App() {
  return (
    <div className="App">
      <h1 style={{ textDecoration: "underline" }}>
        WELCOME CAMPUS TECHNOLOGY TEAMS
      </h1>
      <h2>
        Date - 15 Aug <span style={{ color: "Orange" }}>{"{^.^}"}Happy </span>
        indepen
        <span style={{ color: "darkBlue" }}>d</span>ence{" "}
        <span style={{ color: "green" }}>day</span> - 78
      </h2>
      <IndependenceDay />
    </div>
  );
}

export default App;
