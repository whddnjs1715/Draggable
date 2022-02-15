import "./App.css";
import Navbar from "./components/header/Nav";
import DraggableBox from "./components/body/DragBox";

function App() {
  return (
    <div className="App">
      <Navbar />
      <DraggableBox />
    </div>
  );
}

export default App;
