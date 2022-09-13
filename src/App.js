import logo from "./logo.svg";
import "./App.css";
// import Greeting from "./components/pure/greeting";
import GreetingF from "./components/pure/greetingF";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio Greeting.jsx */}
        {/* <Greeting name="Raúl" /> */}

        {/* Componente propio GreetingF.jsx */}
        <GreetingF name="Raúl" />
      </header>
    </div>
  );
}

export default App;
