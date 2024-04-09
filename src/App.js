// styles
import "./App.css";

// components
import { Navbar } from "./components";

// screens
import InventoryManagement from "./screens";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <InventoryManagement />
    </div>
  );
}

export default App;
