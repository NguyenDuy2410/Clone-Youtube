import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header/Header";
import Spider from "./component/Spider/Spider";
import MenuBar from "./component/MenuBar/MenuBar";
import Content from "./component/Content/Content";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Menu">
        <MenuBar />
        <Content />
      </div>
    </div>
  );
}

export default App;
